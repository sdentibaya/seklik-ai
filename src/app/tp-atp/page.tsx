"use client";

import { useState, useEffect, useTransition } from "react";
import { 
  getActiveClassSetup, 
  getCPForSubjectAndPhase 
} from "@/app/setup/actions";
import { 
  extractTPFromAIAction, 
  getSavedTPs, 
  saveATPAction,
  checkApiKeysConfigured
} from "./actions";
import { 
  Brain, 
  Settings, 
  GripVertical, 
  Save, 
  Trash2, 
  Plus, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  Sparkles, 
  AlertCircle,
  HelpCircle,
  Undo2
} from "lucide-react";
import Link from "next/link";
import { getSubjectCode } from "@/lib/utils";

interface TPItem {
  id: string;
  code: string;
  element: string;
  description: string;
  order: number;
}

interface ActiveSetup {
  userId: string;
  subjectId: string;
  phaseId: string;
  subjectName: string;
  phaseName: string;
  classesInfo: string;
}

export default function TPATPPage() {
  const [activeSetup, setActiveSetup] = useState<ActiveSetup | null>(null);
  const [cpContent, setCpContent] = useState<string>("");
  const [cpElements, setCpElements] = useState<{ name: string; content: string }[]>([]);
  const [tps, setTps] = useState<TPItem[]>([]);
  const [apiKeys, setApiKeys] = useState<{ groq: boolean; mistral: boolean; mimo: boolean }>({ groq: false, mistral: false, mimo: false });

  const [showCPPreview, setShowCPPreview] = useState(false);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [isPending, startTransition] = useTransition();
  const [isSaving, setIsSaving] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "success" | "error">("idle");
  const [loadingStepText, setLoadingStepText] = useState("Menghubungkan ke AI Engine...");

  // Rotate loading texts during AI call to make UI feel alive and responsive
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPending) {
      const texts = [
        "Membaca data Capaian Pembelajaran...",
        "Menganalisis elemen Kurikulum Merdeka...",
        "Merumuskan Tujuan Pembelajaran (TP)...",
        "Menyesuaikan kata kerja operasional (KKO)...",
        "Menyusun daftar TP dalam format JSON...",
        "Menghubungkan ke Groq Cloud (Primary)...",
        "Sinkronisasi hasil ke database sekolah..."
      ];
      let step = 0;
      setLoadingStepText(texts[0]);
      interval = setInterval(() => {
        step = (step + 1) % texts.length;
        setLoadingStepText(texts[step]);
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [isPending]);

  // Load configuration and existing TPs on mount
  useEffect(() => {
    async function loadData() {
      const active = await getActiveClassSetup();
      if (active) {
        setActiveSetup(active);
        
        // Load CP content
        const cp = await getCPForSubjectAndPhase(active.subjectId, active.phaseId);
        if (cp) {
          setCpContent(cp.content);
          setCpElements(cp.elements.map(e => ({ name: e.name, content: e.content })));
        }

        // Load saved TPs
        const saved = await getSavedTPs(active.subjectId, active.phaseId);
        setTps(saved as unknown as TPItem[]);
      }

      // Check API Keys configuration
      const keys = await checkApiKeysConfigured();
      setApiKeys(keys);
    }
    loadData();
  }, []);

  // Trigger AI Extraction Action
  const handleExtractTP = () => {
    if (!activeSetup) return;

    startTransition(async () => {
      try {
        const results = await extractTPFromAIAction(activeSetup.subjectId, activeSetup.phaseId);
        setTps(results as unknown as TPItem[]);
        setIsDirty(true);
      } catch (e) {
        console.error(e);
        alert("Gagal melakukan ekstraksi TP. Silakan periksa koneksi internet atau kunci API Anda.");
      }
    });
  };

  // Reorder TPs using HTML5 Drag and Drop APIs
  const handleDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.setData("text/plain", index.toString());
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault(); // Necessary to allow drop
  };

  const handleDrop = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    const sourceIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);
    if (isNaN(sourceIndex) || sourceIndex === targetIndex) return;

    const reorderedTps = [...tps];
    const [removed] = reorderedTps.splice(sourceIndex, 1);
    reorderedTps.splice(targetIndex, 0, removed);

    // Re-generate code indexes in sequence based on subject
    const prefix = getSubjectCode(activeSetup?.subjectName || "");

    const updated = reorderedTps.map((item, idx) => ({
      ...item,
      code: `TP.${prefix}.${String(idx + 1).padStart(2, "0")}`,
      order: idx
    }));

    setTps(updated);
    setDraggedIndex(null);
    setIsDirty(true);
  };

  const handleDescriptionChange = (id: string, value: string) => {
    setTps(prev => prev.map(item => item.id === id ? { ...item, description: value } : item));
    setIsDirty(true);
  };

  const handleAddTP = () => {
    if (!activeSetup) return;
    
    const prefix = getSubjectCode(activeSetup.subjectName);

    const newIndex = tps.length;
    const newTp: TPItem = {
      id: `new-${Date.now()}`,
      code: `TP.${prefix}.${String(newIndex + 1).padStart(2, "0")}`,
      element: "Umum / Kustom",
      description: "Peserta didik dapat...",
      order: newIndex
    };

    setTps([...tps, newTp]);
    setIsDirty(true);
  };

  const handleDeleteTP = (id: string) => {
    if (!activeSetup) return;

    const filtered = tps.filter(item => item.id !== id);
    const prefix = getSubjectCode(activeSetup.subjectName);

    const updated = filtered.map((item, idx) => ({
      ...item,
      code: `TP.${prefix}.${String(idx + 1).padStart(2, "0")}`,
      order: idx
    }));

    setTps(updated);
    setIsDirty(true);
  };

  const handleSaveATP = async () => {
    if (!activeSetup) return;
    
    setIsSaving(true);
    setSaveStatus("idle");
    try {
      // Save order, codes, and descriptions to database
      await saveATPAction(
        activeSetup.subjectId,
        activeSetup.phaseId,
        tps.map(item => ({
          id: item.id,
          code: item.code,
          element: item.element,
          order: item.order,
          description: item.description
        }))
      );
      
      // Reload saved list to get clean UUIDs for new items
      const saved = await getSavedTPs(activeSetup.subjectId, activeSetup.phaseId);
      setTps(saved as unknown as TPItem[]);
      setIsDirty(false);
      setSaveStatus("success");
      setTimeout(() => setSaveStatus("idle"), 3000);
    } catch (e) {
      console.error(e);
      setSaveStatus("error");
    } finally {
      setIsSaving(false);
    }
  };

  const handleReset = async () => {
    if (!activeSetup) return;
    if (confirm("Apakah Anda yakin ingin membatalkan semua perubahan dan memuat ulang ATP yang tersimpan?")) {
      const saved = await getSavedTPs(activeSetup.subjectId, activeSetup.phaseId);
      setTps(saved as unknown as TPItem[]);
      setIsDirty(false);
    }
  };

  if (!activeSetup) {
    return (
      <div className="max-w-xl mx-auto py-16 text-center space-y-6 bg-white p-8 rounded-3xl border border-border-gray shadow-sm animate-fadeIn mt-10">
        <div className="w-16 h-16 bg-amber-50 border border-amber-100 rounded-2xl flex items-center justify-center text-amber-500 mx-auto shadow-inner">
          <AlertCircle className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-slate-800">Setup Kelas Belum Dikonfigurasi</h2>
          <p className="text-xs leading-relaxed text-slate-400 font-medium max-w-sm mx-auto">
            Sebelum memulai ekstraksi AI untuk Tujuan Pembelajaran (TP), Anda perlu mengonfigurasi Sesi Pembelajaran kelas Anda di halaman Setup Kelas.
          </p>
        </div>
        <div className="pt-2">
          <Link
            href="/setup"
            className="inline-flex items-center gap-2 bg-gemini-blue hover:bg-gemini-blue-hover text-white px-5 py-3 rounded-2xl text-xs font-bold shadow-md transition-all duration-200 active:scale-95"
          >
            <Settings className="w-4 h-4" />
            Buka Setup Kelas
          </Link>
        </div>
      </div>
    );
  }

  const isApiConfigured = apiKeys.groq || apiKeys.mistral || apiKeys.mimo;

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fadeIn">
      {/* Title block */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white p-6 rounded-3xl border border-border-gray shadow-sm">
        <div>
          <span className="text-[10px] bg-blue-50 text-gemini-blue font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border border-blue-100">
            Fase 2: AI Ekstraksi TP & ATP
          </span>
          <h1 className="text-2xl font-black text-slate-800 tracking-tight mt-2.5">
            Ekstraksi Tujuan Pembelajaran (TP) & ATP
          </h1>
          <p className="text-sm text-slate-400 mt-1 font-medium">
            Ubah deskripsi CP menjadi indikator Tujuan Pembelajaran yang konkret dan susun alurnya secara visual.
          </p>
        </div>

        {/* Engine status indicator */}
        <div className="flex items-center gap-2.5">
          {isApiConfigured ? (
            <div className="bg-emerald-50 border border-emerald-100 text-emerald-600 px-3.5 py-2 rounded-xl text-[11px] font-bold flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-4 h-4 text-emerald-500" />
              AI Online: {apiKeys.groq ? "Groq" : apiKeys.mistral ? "Mistral" : "MiMo V2.5"}
            </div>
          ) : (
            <div className="bg-amber-50 border border-amber-100 text-amber-600 px-3.5 py-2 rounded-xl text-[11px] font-bold flex items-center gap-1.5 shadow-sm" title="API keys belum dikonfigurasi di file .env. Menggunakan kecerdasan tiruan simulasi internal.">
              <HelpCircle className="w-4 h-4 text-amber-500" />
              Mode Simulasi (Local Engine)
            </div>
          )}
        </div>
      </div>

      {/* Expandable CP preview card */}
      <div className="bg-white rounded-3xl border border-border-gray shadow-sm overflow-hidden transition-all duration-200">
        <button
          type="button"
          onClick={() => setShowCPPreview(!showCPPreview)}
          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50/50"
        >
          <div className="flex items-center gap-2">
            <Settings className="w-4.5 h-4.5 text-slate-400" />
            <span className="text-xs font-black text-slate-500 uppercase tracking-wider">
              Lihat Capaian Pembelajaran Acuan ({activeSetup.subjectName} - Fase {activeSetup.phaseName})
            </span>
          </div>
          {showCPPreview ? (
            <ChevronUp className="w-4.5 h-4.5 text-slate-400" />
          ) : (
            <ChevronDown className="w-4.5 h-4.5 text-slate-400" />
          )}
        </button>

        {showCPPreview && (
          <div className="p-6 border-t border-slate-50 bg-slate-50/20 space-y-4 animate-fadeIn">
            <div className="bg-white p-4.5 rounded-2xl border border-slate-100">
              <h5 className="text-[11px] font-black text-indigo-500 uppercase tracking-wider mb-1.5 leading-none">
                Capaian Pembelajaran Utama
              </h5>
              <p className="text-xs leading-relaxed text-slate-600 font-medium italic">
                "{cpContent}"
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cpElements.map((el, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 space-y-2">
                  <h6 className="text-[10px] font-black text-slate-700 uppercase tracking-wide">
                    Elemen: {el.name}
                  </h6>
                  <p className="text-[11px] leading-relaxed text-slate-400 font-medium">
                    {el.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main ATP work area */}
      <div className="grid grid-cols-1 gap-6">
        {/* Loading Skeleton */}
        {isPending ? (
          <div className="bg-white p-12 rounded-3xl border border-border-gray shadow-sm flex flex-col items-center justify-center min-h-[350px] text-center space-y-4">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <div className="absolute inset-0 border-4 border-blue-50 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-gemini-blue border-t-transparent rounded-full animate-spin"></div>
              <Brain className="w-6 h-6 text-gemini-blue animate-pulse" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-slate-700">AI Sedang Mengekstrak CP</h3>
              <p className="text-xs text-slate-400 font-medium animate-pulse">{loadingStepText}</p>
            </div>
          </div>
        ) : tps.length === 0 ? (
          /* Empty State (AI call not triggered yet) */
          <div className="bg-white p-12 rounded-3xl border border-border-gray shadow-sm text-center space-y-6 min-h-[350px] flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-blue-50 border border-blue-100 text-gemini-blue rounded-3xl flex items-center justify-center shadow-inner">
              <Brain className="w-8 h-8" />
            </div>
            <div className="space-y-1.5 max-w-sm">
              <h3 className="text-sm font-bold text-slate-700">Tujuan Pembelajaran Belum Diekstrak</h3>
              <p className="text-xs leading-relaxed text-slate-400 font-medium">
                Capaian Pembelajaran (CP) acuan sudah tersedia di database. Klik tombol di bawah untuk mengekstraknya menjadi Tujuan Pembelajaran menggunakan AI Engine.
              </p>
            </div>
            <button
              type="button"
              onClick={handleExtractTP}
              className="inline-flex items-center gap-2 bg-gemini-blue hover:bg-gemini-blue-hover text-white px-6 py-4 rounded-2xl text-xs font-bold shadow-md transition-all duration-200 active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-white" />
              Ekstrak TP Dengan AI
            </button>
          </div>
        ) : (
          /* Drag & Drop Editor Panel */
          <div className="space-y-5">
            {/* Control banner */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-slate-800 text-white p-4 px-6 rounded-2xl shadow-md">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-ping"></span>
                <p className="text-xs font-bold text-slate-200">
                  Mode Penyusunan ATP (Alur Tujuan Pembelajaran) Aktif
                </p>
              </div>
              <p className="text-[10px] text-slate-400 font-medium">
                * Tarik ikon <GripVertical className="inline w-3 h-3 text-slate-400 mx-0.5" /> untuk mengurutkan, edit langsung teks untuk penyesuaian kelas.
              </p>
            </div>

            {/* Draggable List */}
            <div className="space-y-3">
              {tps.map((item, index) => (
                <div
                  key={item.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragOver={(e) => handleDragOver(e, index)}
                  onDrop={(e) => handleDrop(e, index)}
                  className={`bg-white p-4.5 rounded-2xl border transition-all duration-150 flex items-start gap-4 group ${
                    draggedIndex === index 
                      ? "border-gemini-blue bg-blue-50/15 opacity-40 shadow-inner scale-[0.99]" 
                      : "border-border-gray hover:border-slate-300 hover:shadow-md"
                  }`}
                >
                  {/* Drag Handle */}
                  <div className="cursor-grab active:cursor-grabbing p-1.5 -ml-1 text-slate-300 hover:text-slate-500 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center">
                    <GripVertical className="w-4.5 h-4.5" />
                  </div>

                  {/* Code Badge & Element */}
                  <div className="flex flex-col gap-1.5 shrink-0 mt-0.5">
                    <span className="bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md text-center tracking-wider">
                      {item.code}
                    </span>
                    <span className="bg-slate-50 border border-slate-100 text-slate-400 text-[9px] font-bold px-1.5 py-0.5 rounded text-center truncate max-w-[80px]" title={item.element}>
                      {item.element}
                    </span>
                  </div>

                  {/* Editable Description Input */}
                  <div className="flex-1 min-w-0">
                    <textarea
                      value={item.description}
                      onChange={(e) => handleDescriptionChange(item.id, e.target.value)}
                      rows={2}
                      className="w-full border border-transparent hover:border-slate-200 focus:border-gemini-blue focus:bg-white text-xs leading-relaxed text-slate-600 font-semibold p-2.5 rounded-xl outline-none resize-none transition-all duration-200 bg-slate-50/30 focus:shadow-inner"
                      placeholder="Masukkan deskripsi Tujuan Pembelajaran (TP)..."
                    />
                  </div>

                  {/* Delete button */}
                  <button
                    type="button"
                    onClick={() => handleDeleteTP(item.id)}
                    className="p-2 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all duration-200 shrink-0 self-center"
                    title="Hapus TP"
                  >
                    <Trash2 className="w-4.5 h-4.5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Bottom Actions Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleAddTP}
                  className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-4 py-3 rounded-2xl text-xs font-bold shadow-sm transition-all duration-200 flex items-center gap-1.5 active:scale-95"
                >
                  <Plus className="w-4 h-4" />
                  Tambah TP Kustom
                </button>
                <button
                  type="button"
                  onClick={handleExtractTP}
                  className="bg-white hover:bg-slate-50 text-gemini-blue border border-blue-100 px-4 py-3 rounded-2xl text-xs font-bold shadow-sm transition-all duration-200 flex items-center gap-1.5 active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-gemini-blue" />
                  Ekstrak Ulang (AI)
                </button>
              </div>

              <div className="flex items-center gap-3">
                {isDirty && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-slate-400 hover:text-slate-600 px-4 py-2 text-xs font-bold transition-colors flex items-center gap-1"
                  >
                    <Undo2 className="w-4 h-4" />
                    Batalkan Perubahan
                  </button>
                )}
                
                <button
                  type="button"
                  disabled={isSaving}
                  onClick={handleSaveATP}
                  className={`px-6 py-3.5 rounded-2xl font-bold text-xs flex items-center gap-2 shadow-md transition-all duration-200 select-none ${
                    isDirty
                      ? "bg-gemini-blue hover:bg-gemini-blue-hover text-white hover:scale-[1.01] hover:shadow-lg active:scale-95"
                      : "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200/50"
                  }`}
                >
                  {isSaving ? (
                    <div className="w-4.5 h-4.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : saveStatus === "success" ? (
                    <>
                      <Check className="w-4.5 h-4.5" />
                      ATP Tersimpan!
                    </>
                  ) : (
                    <>
                      <Save className="w-4.5 h-4.5" />
                      Simpan Alur (ATP)
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Status alerts */}
            {saveStatus === "success" && (
              <p className="text-center text-xs text-emerald-600 font-bold bg-emerald-50 border border-emerald-100 py-3 px-4 rounded-xl animate-fadeIn">
                Alur Tujuan Pembelajaran (ATP) berhasil disimpan ke database sekolah!
              </p>
            )}
            {saveStatus === "error" && (
              <p className="text-center text-xs text-rose-600 font-bold bg-rose-50 border border-rose-100 py-3 px-4 rounded-xl animate-fadeIn">
                Gagal menyimpan ATP. Silakan periksa koneksi database lokal Anda.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
