"use client";

import { useState, useEffect, useTransition } from "react";
import { 
  getModulAjarSetupData, 
  saveModulAjarAction, 
  deleteModulAjarAction, 
  generateModulAjarAction,
  updateModulAjarContentAction,
  ModulAjarParams,
  GeneratedModulAjar
} from "./actions";
import { 
  FileText, 
  Sparkles, 
  Trash2, 
  Printer, 
  Save, 
  ArrowLeft, 
  Loader2,  
  AlertTriangle, 
  RefreshCw, 
  CheckCircle2, 
  Database, 
  Briefcase, 
  Plus, 
  BookOpen, 
  Layers, 
  Filter, 
  ClipboardList,
  Edit,
  ArrowUp,
  ArrowDown,
  X,
  Settings,
  HelpCircle,
  FolderHeart,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import SignatureBlock from "@/components/SignatureBlock";

const formatField = (field: any): string => {
  if (typeof field === "string") return field;
  if (Array.isArray(field)) return field.join("\n");
  if (field && typeof field === "object") {
    return Object.entries(field)
      .map(([key, val]) => `${key}: ${typeof val === "object" ? JSON.stringify(val) : val}`)
      .join("\n");
  }
  return String(field || "");
};

const formatArrayField = (field: any): string[] => {
  const stripPrefix = (str: string) => str.replace(/^(\d+[\.\)]\s*|[a-z][\.\)]\s*|-\s*)/i, "").trim();
  
  if (Array.isArray(field)) {
    return field.map(item => typeof item === "object" ? stripPrefix(JSON.stringify(item)) : stripPrefix(String(item)));
  }
  if (typeof field === "string") {
    return field.split("\n")
      .filter(line => line.trim() !== "")
      .map(line => stripPrefix(line));
  }
  if (field && typeof field === "object") {
    return Object.entries(field).map(([key, val]) => {
      const valStr = typeof val === "object" ? JSON.stringify(val) : val;
      return stripPrefix(`${key}: ${valStr}`);
    });
  }
  return [];
};

const P3_OPTIONS = [
  "Beriman, Bertakwa kepada Tuhan YME, dan Berakhlak Mulia",
  "Berkebinekaan Global",
  "Bergotong Royong",
  "Mandiri",
  "Bernalar Kritis",
  "Kreatif"
];

const MODEL_PEMBELAJARAN = [
  "Problem-Based Learning (PBL)",
  "Project-Based Learning (PjBl)",
  "Discovery Learning",
  "Inquiry Learning",
  "Cooperative Learning",
  "Pembelajaran Kontekstual"
];

export default function ModulAjarPage() {
  const [activeSetup, setActiveSetup] = useState<{
    subjectId: string;
    phaseId: string;
    subjectName: string;
    phaseName: string;
  } | null>(null);

  const [tps, setTps] = useState<{
    id: string;
    code: string;
    element: string;
    description: string;
    order: number;
  }[]>([]);

  const [cpelements, setCpElements] = useState<{ name: string; content: string }[]>([]);
  const [savedModuls, setSavedModuls] = useState<any[]>([]);

  // Form States
  const [selectedTpIds, setSelectedTpIds] = useState<string[]>([]);
  const [selectedP3, setSelectedP3] = useState<string[]>(["Mandiri", "Bernalar Kritis"]);
  const [sarpras, setSarpras] = useState("Buku Panduan Guru, Buku Siswa, Laptop, LCD Proyektor, Kartu Pertanyaan");
  const [targetSiswa, setTargetSiswa] = useState("Peserta didik reguler/tipikal");
  const [selectedModel, setSelectedModel] = useState("Problem-Based Learning (PBL)");
  const [alokasiWaktu, setAlokasiWaktu] = useState("2 JP x 35 Menit");

  const [tahunPelajaran, setTahunPelajaran] = useState("2026/2027");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const tp = localStorage.getItem("tahunPelajaran");
      if (tp) setTahunPelajaran(tp);
    }
  }, []);

  // App states
  const [loading, setLoading] = useState(true);
  const [isPendingGen, startTransitionGen] = useTransition();
  const [isPendingSave, startTransitionSave] = useTransition();
  const [isPendingDelete, startTransitionDelete] = useTransition();

  const [genStatus, setGenStatus] = useState<"idle" | "success" | "error">("idle");
  const [saveStatus, setSaveStatus] = useState<"idle" | "success" | "error">("idle");
  
  // Current viewed Modul Ajar (either newly generated or loaded)
  const [currentModul, setCurrentModul] = useState<{
    id?: string; // If saved, has ID
    title: string;
    tpIds: string[];
    metadata: any;
    content: GeneratedModulAjar;
    isSaved: boolean;
  } | null>(null);

  // Tab state in viewer (screen only)
  const [activeTab, setActiveTab] = useState<"detail" | "kegiatan" | "lampiran">("detail");

  // Edit Mode state for Detail & Lampiran
  const [isEditDetail, setIsEditDetail] = useState(false);
  const [isEditLampiran, setIsEditLampiran] = useState(false);
  const [draftContent, setDraftContent] = useState<any>({});

  const handleToggleEditDetail = () => {
    if (!currentModul) return;
    if (!isEditDetail) {
      setDraftContent(JSON.parse(JSON.stringify(currentModul.content)));
    }
    setIsEditDetail(!isEditDetail);
  };

  const handleToggleEditLampiran = () => {
    if (!currentModul) return;
    if (!isEditLampiran) {
      setDraftContent(JSON.parse(JSON.stringify(currentModul.content)));
    }
    setIsEditLampiran(!isEditLampiran);
  };

  const handleUpdateDraftContent = (tab: "detail" | "lampiran") => {
    if (!currentModul || !currentModul.id) return;
    startTransitionUpdate(async () => {
      const res = await updateModulAjarContentAction(currentModul.id!, JSON.stringify(draftContent));
      if (res.success && res.modulAjar) {
        setCurrentModul({
          ...currentModul,
          content: draftContent
        });
        if (tab === "detail") setIsEditDetail(false);
        if (tab === "lampiran") setIsEditLampiran(false);
      } else {
        alert("Gagal memperbarui dokumen.");
      }
    });
  };

  // Edit Mode state for Kegiatan Pembelajaran
  const [isEditKegiatan, setIsEditKegiatan] = useState(false);
  const [isPendingUpdate, startTransitionUpdate] = useTransition();
  const [draftPendahuluan, setDraftPendahuluan] = useState<string[]>([]);
  const [draftInti, setDraftInti] = useState<string[]>([]);
  const [draftPenutup, setDraftPenutup] = useState<string[]>([]);

  const handleToggleEditKegiatan = () => {
    if (!currentModul) return;
    if (!isEditKegiatan) {
      // Initialize drafts
      setDraftPendahuluan(formatArrayField(currentModul.content.kegiatanPendahuluan));
      setDraftInti(formatArrayField(currentModul.content.kegiatanInti));
      setDraftPenutup(formatArrayField(currentModul.content.kegiatanPenutup));
    }
    setIsEditKegiatan(!isEditKegiatan);
  };

  const handleUpdateModul = () => {
    if (!currentModul || !currentModul.id) return;
    
    // Save drafts back to currentModul state
    const newContent = {
      ...currentModul.content,
      kegiatanPendahuluan: draftPendahuluan.filter(t => t.trim() !== ""),
      kegiatanInti: draftInti.filter(t => t.trim() !== ""),
      kegiatanPenutup: draftPenutup.filter(t => t.trim() !== "")
    };

    startTransitionUpdate(async () => {
      const res = await updateModulAjarContentAction(currentModul.id!, JSON.stringify(newContent));
      if (res.success && res.modulAjar) {
        setCurrentModul({
          ...currentModul,
          content: newContent
        });
        setIsEditKegiatan(false);
      } else {
        alert("Gagal memperbarui kegiatan.");
      }
    });
  };

  const activityDrafts = {
    pendahuluan: { state: draftPendahuluan, set: setDraftPendahuluan },
    inti: { state: draftInti, set: setDraftInti },
    penutup: { state: draftPenutup, set: setDraftPenutup }
  };

  const handleAddActivity = (type: "pendahuluan" | "inti" | "penutup", index: number) => {
    const setter = activityDrafts[type].set;
    const current = activityDrafts[type].state;
    const copy = [...current];
    copy.splice(index + 1, 0, "");
    setter(copy);
  };

  const handleRemoveActivity = (type: "pendahuluan" | "inti" | "penutup", index: number) => {
    const setter = activityDrafts[type].set;
    const current = activityDrafts[type].state;
    const copy = [...current];
    copy.splice(index, 1);
    setter(copy);
  };

  const handleMoveActivity = (type: "pendahuluan" | "inti" | "penutup", index: number, direction: "up" | "down") => {
    const setter = activityDrafts[type].set;
    const current = activityDrafts[type].state;
    if (direction === "up" && index === 0) return;
    if (direction === "down" && index === current.length - 1) return;
    
    const copy = [...current];
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    const temp = copy[index];
    copy[index] = copy[targetIndex];
    copy[targetIndex] = temp;
    setter(copy);
  };

  const handleChangeActivity = (type: "pendahuluan" | "inti" | "penutup", index: number, value: string) => {
    const setter = activityDrafts[type].set;
    const current = activityDrafts[type].state;
    const copy = [...current];
    copy[index] = value;
    setter(copy);
  };

  // Load setup data
  const loadData = async () => {
    setLoading(true);
    try {
      const data = await getModulAjarSetupData();
      if (data.activeSetup) {
        setActiveSetup(data.activeSetup);
        setTps(data.tps);
        setCpElements(data.cpelements);
        setSavedModuls(data.savedModuls);

        // Pre-select first TP if available
        if (data.tps.length > 0) {
          setSelectedTpIds([data.tps[0].id]);
        }
      } else {
        setActiveSetup(null);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleP3Toggle = (val: string) => {
    setSelectedP3(prev =>
      prev.includes(val) ? prev.filter(p => p !== val) : [...prev, val]
    );
  };

  // Generate Modul Ajar with LLM
  const handleGenerate = () => {
    if (!activeSetup || selectedTpIds.length === 0) return;

    setGenStatus("idle");
    const targetTps = tps.filter(t => selectedTpIds.includes(t.id));
    if (targetTps.length === 0) return;

    // Concatenate codes and descriptions
    const tpCodes = targetTps.map(t => t.code).join(", ");
    const tpDescriptions = targetTps.map(t => `[${t.code}] ${t.description}`).join("\n");
    const elements = Array.from(new Set(targetTps.map(t => t.element))).join(", ");

    // Find official element CP content
    const elementCpContents = targetTps.map(targetTp => {
      const matchedCpElement = cpelements.find(
        el => el.name.toLowerCase().includes(targetTp.element.toLowerCase()) || 
              targetTp.element.toLowerCase().includes(el.name.toLowerCase())
      );
      return matchedCpElement?.content || targetTp.description;
    });
    const elementCpContent = Array.from(new Set(elementCpContents)).join("\n\n");

    const params: ModulAjarParams = {
      subjectId: activeSetup.subjectId,
      phaseId: activeSetup.phaseId,
      subjectName: activeSetup.subjectName,
      phaseName: activeSetup.phaseName,
      tpIds: selectedTpIds,
      tpCode: tpCodes,
      tpDescription: tpDescriptions,
      element: elements,
      elementCpContent,
      p3: selectedP3,
      sarpras,
      targetSiswa,
      modelPembelajaran: selectedModel,
      alokasiWaktu,
    };

    startTransitionGen(async () => {
      const res = await generateModulAjarAction(params);
      if (res.success && res.content) {
        setGenStatus("success");
        let shortTpCodes = tpCodes;
        if (shortTpCodes.length > 20) {
           shortTpCodes = shortTpCodes.substring(0, 20) + '...';
        }
        setCurrentModul({
          title: `Modul Ajar ${activeSetup.subjectName} - ${shortTpCodes}`,
          tpIds: selectedTpIds,
          metadata: params,
          content: res.content,
          isSaved: false
        });
      } else {
        setGenStatus("error");
      }
    });
  };

  // Save generated Modul to database
  const handleSaveModul = () => {
    if (!activeSetup || !currentModul || currentModul.isSaved) return;

    setSaveStatus("idle");
    startTransitionSave(async () => {
      const res = await saveModulAjarAction(
        activeSetup.subjectId,
        activeSetup.phaseId,
        currentModul.tpIds,
        currentModul.title,
        JSON.stringify(currentModul.metadata),
        JSON.stringify(currentModul.content)
      );

      if (res.success && res.modul) {
        setSaveStatus("success");
        setCurrentModul(prev => prev ? { ...prev, id: res.modul.id, isSaved: true } : null);
        // Refresh saved list
        setSavedModuls(prev => [res.modul, ...prev]);
        setTimeout(() => setSaveStatus("idle"), 3000);
      } else {
        setSaveStatus("error");
      }
    });
  };

  // Load a saved Modul from history
  const handleLoadSavedModul = (modul: any) => {
    try {
      const metadata = JSON.parse(modul.metadata);
      const content = JSON.parse(modul.content);
      setCurrentModul({
        id: modul.id,
        title: modul.title,
        tpIds: modul.tps ? modul.tps.map((t: any) => t.id) : [],
        metadata,
        content,
        isSaved: true
      });
      setActiveTab("detail");
    } catch (e) {
      console.error("Gagal membaca berkas Modul Ajar:", e);
      alert("Format penyimpanan Modul Ajar tidak valid.");
    }
  };

  // Delete a saved Modul
  const handleDeleteModul = (id: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent loading
    if (!confirm("Apakah Anda yakin ingin menghapus dokumen Modul Ajar ini dari pustaka?")) return;

    startTransitionDelete(async () => {
      const res = await deleteModulAjarAction(id);
      if (res.success) {
        setSavedModuls(prev => prev.filter(m => m.id !== id));
        if (currentModul?.id === id) {
          setCurrentModul(null);
        }
      }
    });
  };

  // Trigger browser print dialog
  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-3">
        <Loader2 className="w-8 h-8 text-gemini-blue animate-spin" />
        <p className="text-slate-500 font-medium text-sm">Memuat modul Modul Ajar...</p>
      </div>
    );
  }

  if (!activeSetup) {
    return (
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center space-y-6 my-12 animate-fadeIn">
        <div className="w-16 h-16 bg-blue-50 text-gemini-blue rounded-2xl flex items-center justify-center mx-auto border border-blue-100">
          <FileText className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-black text-slate-800 tracking-tight">Setup Kelas Belum Aktif</h2>
          <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
            Anda perlu mengonfigurasi Mata Pelajaran dan Fase kelas sasaran terlebih dahulu sebelum dapat menghasilkan Modul Ajar AI.
          </p>
        </div>
        <div className="pt-2">
          <Link
            href="/setup"
            className="inline-flex items-center gap-2 bg-gemini-blue hover:bg-gemini-blue/90 text-white text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md shadow-blue-500/10 active:scale-98"
          >
            Pilih Setup Kelas
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  // --- VIEW MODE: DOKUMEN MODUL AJAR VIEWER ---
  if (currentModul) {
    const { title, content, metadata, isSaved } = currentModul;
    return (
      <div className="space-y-8 pb-16 animate-fadeIn">
        {/* Viewer Control Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-3xl border border-border-gray shadow-sm print:hidden">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCurrentModul(null)}
              className="p-3 rounded-xl border border-slate-100 hover:bg-slate-50 text-slate-500 hover:text-slate-700 transition-colors"
              title="Kembali ke Pembuat"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h2 className="font-black text-slate-800 text-lg leading-tight truncate max-w-xs md:max-w-md">
                {title}
              </h2>
              <p className="text-xs text-slate-400 font-medium mt-1">
                Pratinjau Modul Ajar • Kurikulum Merdeka SD
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {!isSaved && (
              <button
                onClick={handleSaveModul}
                disabled={isPendingSave}
                className="flex items-center gap-2 bg-gemini-blue hover:bg-gemini-blue/90 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-md shadow-blue-500/10 active:scale-98"
              >
                {isPendingSave ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Save className="w-4 h-4" />
                )}
                Simpan ke Pustaka
              </button>
            )}

            <button
              onClick={handlePrint}
              className="flex items-center gap-2 border border-slate-200 hover:border-slate-300 text-slate-600 hover:bg-slate-50 text-xs font-bold px-5 py-2.5 rounded-xl transition-all duration-200"
            >
              <Printer className="w-4 h-4 text-slate-500" />
              Cetak / Save PDF
            </button>
          </div>
        </div>

        {/* Save Status Notification */}
        {saveStatus === "success" && (
          <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-100 text-emerald-800 p-4 rounded-2xl shadow-sm animate-fadeIn print:hidden">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            <p className="text-xs font-semibold">Modul Ajar berhasil disimpan ke perpustakaan Anda!</p>
          </div>
        )}

        {/* Screen Tab Navigation */}
        <div className="flex border-b border-slate-200 print:hidden">
          <button
            onClick={() => setActiveTab("detail")}
            className={`px-5 py-3 text-xs font-bold border-b-2 transition-all ${
              activeTab === "detail"
                ? "border-gemini-blue text-gemini-blue font-black"
                : "border-transparent text-slate-400 hover:text-slate-600"
            }`}
          >
            A. Detail Modul & Informasi
          </button>
          <button
            onClick={() => setActiveTab("kegiatan")}
            className={`px-5 py-3 text-xs font-bold border-b-2 transition-all ${
              activeTab === "kegiatan"
                ? "border-gemini-blue text-gemini-blue font-black"
                : "border-transparent text-slate-400 hover:text-slate-600"
            }`}
          >
            B. Langkah Kegiatan Pembelajaran
          </button>
          <button
            onClick={() => setActiveTab("lampiran")}
            className={`px-5 py-3 text-xs font-bold border-b-2 transition-all ${
              activeTab === "lampiran"
                ? "border-gemini-blue text-gemini-blue font-black"
                : "border-transparent text-slate-400 hover:text-slate-600"
            }`}
          >
            C. Lampiran & Evaluasi Siswa
          </button>
        </div>

        {/* ============================================================== */}
        {/* SCREEN INTERFACE CONTAINER (TABBED FOR COMFY READING) */}
        {/* ============================================================== */}
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-border-gray shadow-sm max-w-4xl mx-auto print:hidden">
          
          {/* Tab 1: Detail & Identitas */}
          {activeTab === "detail" && (
            <div className="space-y-8 animate-fadeIn">
              <div className="border-b pb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="text-center sm:text-left">
                  <h2 className="text-xl font-extrabold text-slate-800 tracking-tight uppercase">
                    Modul Ajar Kurikulum Merdeka
                  </h2>
                  <h3 className="text-sm font-semibold text-gemini-blue mt-1">
                    SDN 3 PRINGGABAYA
                  </h3>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto">
                  {isEditDetail ? (
                    <>
                      <button onClick={() => handleUpdateDraftContent("detail")} disabled={isPendingUpdate} className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg transition-colors shadow-sm">
                        {isPendingUpdate ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />} Simpan
                      </button>
                      <button onClick={handleToggleEditDetail} className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-[10px] font-bold px-3 py-1.5 rounded-lg transition-colors">
                        <X className="w-3.5 h-3.5" /> Batal
                      </button>
                    </>
                  ) : (
                    <button onClick={handleToggleEditDetail} className="flex items-center gap-1.5 bg-blue-50 hover:bg-blue-100 text-gemini-blue text-[10px] font-bold px-3 py-1.5 rounded-lg transition-colors border border-blue-200">
                      <Edit className="w-3.5 h-3.5" /> Edit Detail
                    </button>
                  )}
                </div>
              </div>

              {/* Table Identitas Modul */}
              <div className="space-y-4">
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">
                  I. Identitas Modul
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border p-5 rounded-2xl bg-slate-50/50">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold block uppercase">Nama Penyusun</span>
                    <span className="text-xs font-bold text-slate-700">Guru Kelas</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold block uppercase">Institusi</span>
                    <span className="text-xs font-bold text-slate-700">SDN 3 Pringgabaya</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold block uppercase">Mata Pelajaran</span>
                    <span className="text-xs font-bold text-slate-700">{metadata.subjectName}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold block uppercase">Fase / Kelas / Semester</span>
                    <span className="text-xs font-bold text-slate-700">Fase {metadata.phaseName} / Kelas {metadata.phaseName === "A" ? "1-2" : metadata.phaseName === "B" ? "3-4" : "5-6"}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold block uppercase">Materi Pokok / Elemen</span>
                    <span className="text-xs font-bold text-slate-700">{metadata.element}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold block uppercase">Alokasi Waktu</span>
                    <span className="text-xs font-bold text-slate-700">{metadata.alokasiWaktu}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold block uppercase">Tahun Pelajaran</span>
                    <span className="text-xs font-bold text-slate-700">{tahunPelajaran}</span>
                  </div>
                </div>
              </div>

              {/* Identifikasi Murid (Jika Ada) */}
              {content.identifikasiMurid && (
                <div className="space-y-4 border-t pt-6">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">
                    II. Identifikasi Murid
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border p-5 rounded-2xl bg-slate-50/50">
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold block uppercase">Pengetahuan Awal</span>
                      {isEditDetail ? (
                        <textarea value={draftContent.identifikasiMurid?.pengetahuanAwal || ""} onChange={(e) => setDraftContent({...draftContent, identifikasiMurid: {...draftContent.identifikasiMurid, pengetahuanAwal: e.target.value}})} className="w-full text-xs p-2 border border-slate-300 rounded focus:ring-1 focus:ring-gemini-blue min-h-[60px] mt-1" />
                      ) : (
                        <p className="text-xs text-slate-700 mt-1 leading-relaxed">{content.identifikasiMurid.pengetahuanAwal}</p>
                      )}
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold block uppercase">Minat</span>
                      {isEditDetail ? (
                        <textarea value={draftContent.identifikasiMurid?.minat || ""} onChange={(e) => setDraftContent({...draftContent, identifikasiMurid: {...draftContent.identifikasiMurid, minat: e.target.value}})} className="w-full text-xs p-2 border border-slate-300 rounded focus:ring-1 focus:ring-gemini-blue min-h-[60px] mt-1" />
                      ) : (
                        <p className="text-xs text-slate-700 mt-1 leading-relaxed">{content.identifikasiMurid.minat}</p>
                      )}
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold block uppercase">Kebutuhan Belajar</span>
                      {isEditDetail ? (
                        <textarea value={draftContent.identifikasiMurid?.kebutuhanBelajar || ""} onChange={(e) => setDraftContent({...draftContent, identifikasiMurid: {...draftContent.identifikasiMurid, kebutuhanBelajar: e.target.value}})} className="w-full text-xs p-2 border border-slate-300 rounded focus:ring-1 focus:ring-gemini-blue min-h-[60px] mt-1" />
                      ) : (
                        <p className="text-xs text-slate-700 mt-1 leading-relaxed">{content.identifikasiMurid.kebutuhanBelajar}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Materi Pelajaran (Jika Ada) */}
              {content.materiPelajaran && (
                <div className="space-y-2 border-t pt-6">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">
                    III. Materi Pelajaran
                  </h4>
                  {isEditDetail ? (
                    <textarea value={formatField(draftContent.materiPelajaran) || ""} onChange={(e) => setDraftContent({...draftContent, materiPelajaran: e.target.value})} className="w-full text-xs p-3 border border-slate-300 rounded-xl focus:ring-1 focus:ring-gemini-blue min-h-[80px]" />
                  ) : (
                    <p className="text-xs text-slate-600 leading-relaxed bg-slate-50/20 p-4 rounded-xl border border-slate-100 font-semibold">
                      {content.materiPelajaran}
                    </p>
                  )}
                </div>
              )}

              {/* Kompetensi Awal & P3 */}
              <div className="space-y-6 border-t pt-6">
                <div>
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2.5">
                    IV. Kompetensi Awal
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed bg-slate-50/20 p-4 rounded-xl border border-slate-100">
                    Peserta didik telah memahami gambaran umum mengenai topik {metadata.element} dan siap mengeksplorasi kompetensi pada tingkat lanjut.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2.5">
                    V. Profil Pelajar Pancasila (P3)
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {metadata.p3.map((p: string) => (
                      <span key={p} className="text-[10px] font-bold bg-blue-50 text-gemini-blue border border-blue-100 px-3 py-1.5 rounded-full">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2.5">
                      VI. Sarana & Prasarana
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed border p-4 rounded-xl">
                      {metadata.sarpras}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2.5">
                      VII. Target Peserta Didik & Model
                    </h4>
                    <div className="space-y-2 border p-4 rounded-xl bg-slate-50/20">
                      <p className="text-xs text-slate-600">
                        <span className="font-bold">Target:</span> {metadata.targetSiswa}
                      </p>
                      <p className="text-xs text-slate-600">
                        <span className="font-bold">Model Pembelajaran:</span> {metadata.modelPembelajaran}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Komponen Inti: Tujuan, Pemahaman, Pemantik */}
              <div className="space-y-6 border-t pt-6">
                <div>
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2.5">
                    VIII. Tujuan Pembelajaran (TP)
                  </h4>
                  <div className="flex gap-3 bg-blue-50/30 p-4 rounded-xl border border-blue-100">
                    <span className="text-[10px] font-black bg-gemini-blue text-white px-2 py-0.5 rounded align-middle self-start mt-0.5">
                      {metadata.tpCode}
                    </span>
                    <p className="text-xs font-bold text-slate-700 leading-relaxed">
                      {metadata.tpDescription}
                    </p>
                  </div>
                </div>

                {/* Desain Pembelajaran (Deep Learning Model) */}
                {content.praktikPedagogis && (
                  <div className="space-y-4">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">
                      IX. Desain Pembelajaran (Deep Learning Model)
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border p-5 rounded-2xl bg-emerald-50/10 border-emerald-100">
                      <div className="space-y-1">
                        <span className="text-[10px] text-emerald-600 font-black uppercase tracking-wider block">Pembelajaran Bermakna (Meaningful)</span>
                        {isEditDetail ? (
                          <textarea value={draftContent.praktikPedagogis?.meaningful || ""} onChange={(e) => setDraftContent({...draftContent, praktikPedagogis: {...draftContent.praktikPedagogis, meaningful: e.target.value}})} className="w-full text-xs p-2 border border-emerald-200 rounded focus:ring-1 focus:ring-emerald-500 min-h-[60px]" />
                        ) : (
                          <p className="text-xs text-slate-600 leading-relaxed">{content.praktikPedagogis.meaningful}</p>
                        )}
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] text-blue-600 font-black uppercase tracking-wider block">Pembelajaran Menyenangkan (Joyful)</span>
                        {isEditDetail ? (
                          <textarea value={draftContent.praktikPedagogis?.joyful || ""} onChange={(e) => setDraftContent({...draftContent, praktikPedagogis: {...draftContent.praktikPedagogis, joyful: e.target.value}})} className="w-full text-xs p-2 border border-blue-200 rounded focus:ring-1 focus:ring-blue-500 min-h-[60px]" />
                        ) : (
                          <p className="text-xs text-slate-600 leading-relaxed">{content.praktikPedagogis.joyful}</p>
                        )}
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] text-indigo-600 font-black uppercase tracking-wider block">Pembelajaran Sadar (Mindful)</span>
                        {isEditDetail ? (
                          <textarea value={draftContent.praktikPedagogis?.mindful || ""} onChange={(e) => setDraftContent({...draftContent, praktikPedagogis: {...draftContent.praktikPedagogis, mindful: e.target.value}})} className="w-full text-xs p-2 border border-indigo-200 rounded focus:ring-1 focus:ring-indigo-500 min-h-[60px]" />
                        ) : (
                          <p className="text-xs text-slate-600 leading-relaxed">{content.praktikPedagogis.mindful}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600 pt-2">
                      {content.pemanfaatanDigital && (
                        <div className="p-3 border rounded-xl bg-slate-50/20">
                          <span className="font-bold block text-[9px] text-slate-400 uppercase tracking-wider mb-1">Pemanfaatan Digital</span>
                          {isEditDetail ? (
                            <textarea value={formatField(draftContent.pemanfaatanDigital) || ""} onChange={(e) => setDraftContent({...draftContent, pemanfaatanDigital: e.target.value})} className="w-full text-xs p-2 border border-slate-300 rounded focus:ring-1 focus:ring-gemini-blue min-h-[50px]" />
                          ) : (
                            content.pemanfaatanDigital
                          )}
                        </div>
                      )}
                      {content.mitraPembelajaran && (
                        <div className="p-3 border rounded-xl bg-slate-50/20">
                          <span className="font-bold block text-[9px] text-slate-400 uppercase tracking-wider mb-1">Mitra Pembelajaran</span>
                          {isEditDetail ? (
                            <textarea value={formatField(draftContent.mitraPembelajaran) || ""} onChange={(e) => setDraftContent({...draftContent, mitraPembelajaran: e.target.value})} className="w-full text-xs p-2 border border-slate-300 rounded focus:ring-1 focus:ring-gemini-blue min-h-[50px]" />
                          ) : (
                            content.mitraPembelajaran
                          )}
                        </div>
                      )}
                      {content.lingkunganPembelajaran && (
                        <div className="p-3 border rounded-xl bg-slate-50/20">
                          <span className="font-bold block text-[9px] text-slate-400 uppercase tracking-wider mb-1">Lingkungan Pembelajaran</span>
                          {isEditDetail ? (
                            <textarea value={formatField(draftContent.lingkunganPembelajaran) || ""} onChange={(e) => setDraftContent({...draftContent, lingkunganPembelajaran: e.target.value})} className="w-full text-xs p-2 border border-slate-300 rounded focus:ring-1 focus:ring-gemini-blue min-h-[50px]" />
                          ) : (
                            content.lingkunganPembelajaran
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2.5">
                    X. Pemahaman Bermakna
                  </h4>
                  {isEditDetail ? (
                    <textarea value={formatField(draftContent.pemahamanBermakna) || ""} onChange={(e) => setDraftContent({...draftContent, pemahamanBermakna: e.target.value})} className="w-full text-xs p-3 border border-slate-300 rounded-xl focus:ring-1 focus:ring-gemini-blue min-h-[80px]" />
                  ) : (
                    <p className="text-xs text-slate-600 leading-relaxed border border-slate-100 bg-slate-50/30 p-4 rounded-xl">
                      {formatField(content.pemahamanBermakna)}
                    </p>
                  )}
                </div>

                <div>
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2.5">
                    XI. Pertanyaan Pemantik
                  </h4>
                  {isEditDetail ? (
                    <textarea 
                      value={formatField(draftContent.pertanyaanPemantik) || ""} 
                      onChange={(e) => setDraftContent({...draftContent, pertanyaanPemantik: e.target.value})} 
                      className="w-full text-xs p-3 border border-slate-300 rounded-xl focus:ring-1 focus:ring-gemini-blue min-h-[100px]" 
                      placeholder="Pisahkan dengan baris baru..."
                    />
                  ) : (
                    <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600">
                      {formatArrayField(content.pertanyaanPemantik).map((q, i) => (
                        <li key={i}>{q}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Langkah Kegiatan Pembelajaran */}
          {activeTab === "kegiatan" && (
            <div className="space-y-8 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-3 gap-3">
                <h3 className="text-sm font-black text-slate-800">
                  Langkah-Langkah Kegiatan Pembelajaran ({metadata.alokasiWaktu})
                </h3>
                <div className="flex items-center gap-2 self-start sm:self-auto">
                  {isEditKegiatan ? (
                    <>
                      <button onClick={handleUpdateModul} disabled={isPendingUpdate} className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg transition-colors shadow-sm">
                        {isPendingUpdate ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />} Simpan
                      </button>
                      <button onClick={handleToggleEditKegiatan} className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-[10px] font-bold px-3 py-1.5 rounded-lg transition-colors">
                        <X className="w-3.5 h-3.5" /> Batal
                      </button>
                    </>
                  ) : (
                    <button onClick={handleToggleEditKegiatan} className="flex items-center gap-1.5 bg-blue-50 hover:bg-blue-100 text-gemini-blue text-[10px] font-bold px-3 py-1.5 rounded-lg transition-colors border border-blue-200">
                      <Edit className="w-3.5 h-3.5" /> Edit Kegiatan
                    </button>
                  )}
                </div>
              </div>

              {[
                { 
                  title: "Kegiatan Pendahuluan", 
                  key: "pendahuluan", 
                  state: isEditKegiatan ? draftPendahuluan : formatArrayField(content.kegiatanPendahuluan),
                  badgeClass: "bg-indigo-50 border-indigo-100 text-indigo-600",
                  borderClass: "border-indigo-500"
                },
                { 
                  title: "Kegiatan Inti (Sintaks Model Ajar)", 
                  key: "inti", 
                  state: isEditKegiatan ? draftInti : formatArrayField(content.kegiatanInti),
                  badgeClass: "bg-blue-50 border-blue-100 text-gemini-blue",
                  borderClass: "border-blue-500"
                },
                { 
                  title: "Kegiatan Penutup & Refleksi", 
                  key: "penutup", 
                  state: isEditKegiatan ? draftPenutup : formatArrayField(content.kegiatanPenutup),
                  badgeClass: "bg-rose-50 border-rose-100 text-rose-600",
                  borderClass: "border-rose-500"
                }
              ].map((section) => (
                <div key={section.key} className="space-y-3 pt-2">
                  <div className="flex justify-between items-center">
                    <span className={`text-[10px] font-black border px-3 py-1 rounded-full uppercase tracking-wider ${section.badgeClass}`}>
                      {section.title}
                    </span>
                    {isEditKegiatan && (
                      <button onClick={() => handleAddActivity(section.key as any, -1)} className="flex items-center gap-1 text-[10px] text-gemini-blue hover:text-blue-700 font-bold bg-blue-50 px-2 py-1 rounded">
                        <Plus className="w-3 h-3" /> Tambah Awal
                      </button>
                    )}
                  </div>
                  
                  {isEditKegiatan ? (
                    <div className={`space-y-2 border-l-2 pl-4 py-1 ${section.borderClass}`}>
                      {section.state.map((act, i) => (
                        <div key={i} className="flex gap-2 items-start bg-slate-50 p-2 rounded border border-slate-200">
                          <span className="text-xs font-bold w-5 shrink-0 pt-2 text-slate-400">{i + 1}.</span>
                          <textarea 
                            value={act}
                            onChange={(e) => handleChangeActivity(section.key as any, i, e.target.value)}
                            className="flex-1 text-xs p-2 border border-slate-300 rounded focus:border-gemini-blue focus:ring-1 focus:ring-gemini-blue min-h-[60px]"
                          />
                          <div className="flex flex-col gap-1 shrink-0">
                            <button onClick={() => handleMoveActivity(section.key as any, i, "up")} title="Naik" className="p-1 text-slate-400 hover:text-gemini-blue hover:bg-blue-50 rounded"><ArrowUp className="w-3.5 h-3.5"/></button>
                            <button onClick={() => handleMoveActivity(section.key as any, i, "down")} title="Turun" className="p-1 text-slate-400 hover:text-gemini-blue hover:bg-blue-50 rounded"><ArrowDown className="w-3.5 h-3.5"/></button>
                            <button onClick={() => handleRemoveActivity(section.key as any, i)} title="Hapus" className="p-1 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded"><Trash2 className="w-3.5 h-3.5"/></button>
                            <button onClick={() => handleAddActivity(section.key as any, i)} title="Sisipkan di bawah" className="p-1 text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 rounded mt-1"><Plus className="w-3.5 h-3.5"/></button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className={`border-l-2 pl-4 py-1 space-y-2 text-xs text-slate-600 leading-relaxed ${section.borderClass}`}>
                      {section.state.map((act, i) => (
                        <p key={i} className="flex gap-2 text-justify">
                          <span className="font-bold shrink-0">{i + 1}.</span>
                          <span>{act}</span>
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Tab 3: Lampiran & Evaluasi */}
          {activeTab === "lampiran" && (
            <div className="space-y-8 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end border-b pb-3 mb-2 gap-3">
                <div className="flex items-center gap-2 self-start sm:self-auto">
                  {isEditLampiran ? (
                    <>
                      <button onClick={() => handleUpdateDraftContent("lampiran")} disabled={isPendingUpdate} className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg transition-colors shadow-sm">
                        {isPendingUpdate ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />} Simpan
                      </button>
                      <button onClick={handleToggleEditLampiran} className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-[10px] font-bold px-3 py-1.5 rounded-lg transition-colors">
                        <X className="w-3.5 h-3.5" /> Batal
                      </button>
                    </>
                  ) : (
                    <button onClick={handleToggleEditLampiran} className="flex items-center gap-1.5 bg-blue-50 hover:bg-blue-100 text-gemini-blue text-[10px] font-bold px-3 py-1.5 rounded-lg transition-colors border border-blue-200">
                      <Edit className="w-3.5 h-3.5" /> Edit Lampiran
                    </button>
                  )}
                </div>
              </div>

              {/* Asesmen */}
              <div className="grid grid-cols-1 gap-4 border-b pb-6">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">
                  IX. Rencana Asesmen / Evaluasi
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border p-4 rounded-xl bg-slate-50/20 space-y-1 flex flex-col">
                    <span className="text-[9px] font-bold text-slate-400 uppercase mb-1">Diagnostik Awal</span>
                    {isEditLampiran ? (
                      <textarea value={formatField(draftContent.asesmenDiagnostik) || ""} onChange={(e) => setDraftContent({...draftContent, asesmenDiagnostik: e.target.value})} className="w-full text-xs p-2 border border-slate-300 rounded focus:ring-1 focus:ring-gemini-blue min-h-[60px] flex-1" />
                    ) : (
                      <p className="text-xs text-slate-600 font-medium leading-normal">{formatField(content.asesmenDiagnostik)}</p>
                    )}
                  </div>
                  <div className="border p-4 rounded-xl bg-slate-50/20 space-y-1 flex flex-col">
                    <span className="text-[9px] font-bold text-slate-400 uppercase mb-1">Formatif (Proses)</span>
                    {isEditLampiran ? (
                      <textarea value={formatField(draftContent.asesmenFormatif) || ""} onChange={(e) => setDraftContent({...draftContent, asesmenFormatif: e.target.value})} className="w-full text-xs p-2 border border-slate-300 rounded focus:ring-1 focus:ring-gemini-blue min-h-[60px] flex-1" />
                    ) : (
                      <p className="text-xs text-slate-600 font-medium leading-normal">{formatField(content.asesmenFormatif)}</p>
                    )}
                  </div>
                  <div className="border p-4 rounded-xl bg-slate-50/20 space-y-1 flex flex-col">
                    <span className="text-[9px] font-bold text-slate-400 uppercase mb-1">Sumatif (Akhir)</span>
                    {isEditLampiran ? (
                      <textarea value={formatField(draftContent.asesmenSumatif) || ""} onChange={(e) => setDraftContent({...draftContent, asesmenSumatif: e.target.value})} className="w-full text-xs p-2 border border-slate-300 rounded focus:ring-1 focus:ring-gemini-blue min-h-[60px] flex-1" />
                    ) : (
                      <p className="text-xs text-slate-600 font-medium leading-normal">{formatField(content.asesmenSumatif)}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div className="border p-4 rounded-xl flex flex-col">
                    <span className="text-[9px] font-bold text-emerald-600 uppercase mb-1">Program Pengayaan</span>
                    {isEditLampiran ? (
                      <textarea value={formatField(draftContent.pengayaan) || ""} onChange={(e) => setDraftContent({...draftContent, pengayaan: e.target.value})} className="w-full text-xs p-2 border border-emerald-200 rounded focus:ring-1 focus:ring-emerald-500 min-h-[60px] flex-1" />
                    ) : (
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">{formatField(content.pengayaan)}</p>
                    )}
                  </div>
                  <div className="border p-4 rounded-xl flex flex-col">
                    <span className="text-[9px] font-bold text-rose-600 uppercase mb-1">Program Remedial</span>
                    {isEditLampiran ? (
                      <textarea value={formatField(draftContent.remedial) || ""} onChange={(e) => setDraftContent({...draftContent, remedial: e.target.value})} className="w-full text-xs p-2 border border-rose-200 rounded focus:ring-1 focus:ring-rose-500 min-h-[60px] flex-1" />
                    ) : (
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">{formatField(content.remedial)}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Rubrik Penilaian (Jika Ada) */}
              {content.rubrikPenilaian && (
                <div className="space-y-3 pt-2">
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">
                    Rubrik Penilaian & Sikap
                  </h3>
                  {isEditLampiran ? (
                    <textarea value={draftContent.rubrikPenilaian || ""} onChange={(e) => setDraftContent({...draftContent, rubrikPenilaian: e.target.value})} className="w-full text-xs p-3 border border-slate-300 rounded-xl focus:ring-1 focus:ring-gemini-blue min-h-[150px] font-mono" />
                  ) : (
                    <div 
                      className="overflow-x-auto rounded-xl border border-slate-200 p-4"
                      dangerouslySetInnerHTML={{ __html: content.rubrikPenilaian }}
                    />
                  )}
                </div>
              )}

              {/* LKPD */}
              <div className="space-y-2 border-b pb-6">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <ClipboardList className="w-4 h-4" />
                  X. Lembar Kerja Peserta Didik (LKPD)
                </h3>
                {isEditLampiran ? (
                  <textarea value={formatField(draftContent.lkpd) || ""} onChange={(e) => setDraftContent({...draftContent, lkpd: e.target.value})} className="w-full text-xs p-4 border border-slate-300 rounded-2xl focus:ring-1 focus:ring-gemini-blue min-h-[250px] font-mono bg-slate-50" />
                ) : (
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-xs text-slate-600 whitespace-pre-line leading-relaxed font-mono">
                    {formatField(content.lkpd)}
                  </div>
                )}
              </div>

              {/* Glosarium, Pustaka */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">
                    Bahan Bacaan & Glosarium
                  </h4>
                  <div className="border p-4 rounded-xl space-y-3 bg-slate-50/10 flex flex-col h-full">
                    <div className="flex-1 flex flex-col">
                      <span className="text-[9px] text-slate-400 font-bold block uppercase mb-1">Bahan Bacaan</span>
                      {isEditLampiran ? (
                        <textarea value={formatField(draftContent.bahanBacaan) || ""} onChange={(e) => setDraftContent({...draftContent, bahanBacaan: e.target.value})} className="w-full text-xs p-2 border border-slate-300 rounded focus:ring-1 focus:ring-gemini-blue flex-1 min-h-[80px]" />
                      ) : (
                        <p className="text-xs text-slate-600 leading-relaxed">{formatField(content.bahanBacaan)}</p>
                      )}
                    </div>
                    <div className="flex-1 flex flex-col mt-2">
                      <span className="text-[9px] text-slate-400 font-bold block uppercase mb-1">Glosarium</span>
                      {isEditLampiran ? (
                        <textarea value={formatField(draftContent.glosarium) || ""} onChange={(e) => setDraftContent({...draftContent, glosarium: e.target.value})} className="w-full text-xs p-2 border border-slate-300 rounded focus:ring-1 focus:ring-gemini-blue flex-1 min-h-[80px]" />
                      ) : (
                        <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-line">{formatField(content.glosarium)}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-2 flex flex-col">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">
                    Daftar Pustaka
                  </h4>
                  {isEditLampiran ? (
                    <textarea value={formatField(draftContent.daftarPustaka) || ""} onChange={(e) => setDraftContent({...draftContent, daftarPustaka: e.target.value})} className="w-full text-xs p-4 border border-slate-300 rounded-xl bg-slate-50/10 focus:ring-1 focus:ring-gemini-blue flex-1 min-h-[100px]" />
                  ) : (
                    <p className="text-xs text-slate-600 border p-4 rounded-xl bg-slate-50/10 leading-relaxed italic flex-1">
                      {formatField(content.daftarPustaka)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ============================================================== */}
        {/* PRINT ONLY CONTAINER (STCKED FULL SHEET FORMAT - HIDDEN ON SCREEN) */}
        {/* ============================================================== */}
        <div className="hidden print:block bg-white text-black p-0 max-w-none shadow-none border-none">
          <div className="text-center border-b-2 border-black pb-4 mb-6">
            <h2 className="text-xl font-bold uppercase tracking-tight">
              RENCANA PELAKSANAAN PEMBELAJARAN MENDALAM (RPPM)
            </h2>
            <h3 className="text-sm font-bold uppercase mt-1">
              SDN 3 PRINGGABAYA
            </h3>
            <p className="text-xs mt-1 italic">
              Alamat: Jl. Raya Pringgabaya No. 3, Lombok Timur, Nusa Tenggara Barat
            </p>
          </div>

          <div className="space-y-8">
            <div className="text-sm font-bold uppercase tracking-wider border-b-2 border-black pb-1">INFORMASI UMUM</div>
            
            {/* Section A: Identitas */}
            <div className="space-y-2">
              <strong className="text-xs block">A. Identitas Modul</strong>
              <table className="w-full text-xs text-left border border-black border-collapse">
                <tbody>
                  <tr className="border-b border-black">
                    <th className="p-2 border-r border-black w-1/3">Nama Penyusun</th>
                    <td className="p-2">Guru Kelas</td>
                  </tr>
                  <tr className="border-b border-black">
                    <th className="p-2 border-r border-black">Institusi</th>
                    <td className="p-2">SDN 3 Pringgabaya</td>
                  </tr>
                  <tr className="border-b border-black">
                    <th className="p-2 border-r border-black">Mata Pelajaran</th>
                    <td className="p-2">{metadata.subjectName}</td>
                  </tr>
                  <tr className="border-b border-black">
                    <th className="p-2 border-r border-black">Fase / Kelas / Semester</th>
                    <td className="p-2">Fase {metadata.phaseName} / Kelas {metadata.phaseName === "A" ? "1-2" : metadata.phaseName === "B" ? "3-4" : "5-6"}</td>
                  </tr>
                  <tr className="border-b border-black">
                    <th className="p-2 border-r border-black">Materi / Elemen</th>
                    <td className="p-2">{metadata.element}</td>
                  </tr>
                  <tr className="border-b border-black">
                    <th className="p-2 border-r border-black">Alokasi Waktu</th>
                    <td className="p-2">{metadata.alokasiWaktu}</td>
                  </tr>
                  <tr>
                    <th className="p-2 border-r border-black">Tahun Pelajaran</th>
                    <td className="p-2">{tahunPelajaran}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Section B: Identifikasi Murid */}
            {content.identifikasiMurid && (
              <div className="space-y-2">
                <strong className="text-xs block">B. Identifikasi Murid</strong>
                <table className="w-full text-xs text-left border border-black border-collapse">
                  <thead>
                    <tr className="border-b border-black bg-gray-100">
                      <th className="p-2 border-r border-black w-1/3">Kategori</th>
                      <th className="p-2">Deskripsi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-black">
                      <td className="p-2 border-r border-black font-bold">Pengetahuan Awal</td>
                      <td className="p-2">{content.identifikasiMurid.pengetahuanAwal}</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className="p-2 border-r border-black font-bold">Minat</td>
                      <td className="p-2">{content.identifikasiMurid.minat}</td>
                    </tr>
                    <tr>
                      <td className="p-2 border-r border-black font-bold">Kebutuhan Belajar</td>
                      <td className="p-2">{content.identifikasiMurid.kebutuhanBelajar}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* Section C: Materi Pelajaran */}
            {content.materiPelajaran && (
              <div className="space-y-2">
                <strong className="text-xs block">C. Materi Pelajaran</strong>
                <p className="text-xs leading-relaxed">{content.materiPelajaran}</p>
              </div>
            )}

            {/* Section D: Dimensi P3 */}
            <div className="space-y-2">
              <strong className="text-xs block">D. Dimensi Profil Lulusan / Profil Pelajar Pancasila</strong>
              <table className="w-full text-xs text-left border border-black border-collapse">
                <thead>
                  <tr className="border-b border-black bg-gray-100">
                    <th className="p-2 border-r border-black w-1/3">Dimensi</th>
                    <th className="p-2">Elemen yang Dikembangkan</th>
                  </tr>
                </thead>
                <tbody>
                  {metadata.p3.map((p: string, idx: number) => (
                    <tr key={idx} className={idx < metadata.p3.length - 1 ? "border-b border-black" : ""}>
                      <td className="p-2 border-r border-black font-bold">{p}</td>
                      <td className="p-2">Mengembangkan karakter profil {p} yang terintegrasi dalam materi pembelajaran.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section E: Desain Pembelajaran */}
            <div className="space-y-2">
              <strong className="text-xs block">E. Desain Pembelajaran</strong>
              <table className="w-full text-xs text-left border border-black border-collapse">
                <tbody>
                  <tr className="border-b border-black">
                    <th className="p-2 border-r border-black w-1/3">Capaian Pembelajaran (CP)</th>
                    <td className="p-2">{metadata.elementCpContent}</td>
                  </tr>
                  <tr className="border-b border-black">
                    <th className="p-2 border-r border-black">Tujuan Pembelajaran (TP)</th>
                    <td className="p-2">[{metadata.tpCode}] {metadata.tpDescription}</td>
                  </tr>
                  {content.praktikPedagogis && (
                    <tr className="border-b border-black">
                      <th className="p-2 border-r border-black">Praktik Pedagogis (Deep Learning)</th>
                      <td className="p-2">
                        <strong>Pembelajaran Bermakna (Meaningful):</strong> {content.praktikPedagogis.meaningful} <br/>
                        <strong>Pembelajaran Menyenangkan (Joyful):</strong> {content.praktikPedagogis.joyful} <br/>
                        <strong>Pembelajaran Penuh Kesadaran (Mindful):</strong> {content.praktikPedagogis.mindful}
                      </td>
                    </tr>
                  )}
                  {content.pemanfaatanDigital && (
                    <tr className="border-b border-black">
                      <th className="p-2 border-r border-black">Pemanfaatan Digital</th>
                      <td className="p-2">{content.pemanfaatanDigital}</td>
                    </tr>
                  )}
                  {content.mitraPembelajaran && (
                    <tr className="border-b border-black">
                      <th className="p-2 border-r border-black">Mitra Pembelajaran</th>
                      <td className="p-2">{content.mitraPembelajaran}</td>
                    </tr>
                  )}
                  {content.lingkunganPembelajaran && (
                    <tr>
                      <th className="p-2 border-r border-black">Lingkungan Pembelajaran</th>
                      <td className="p-2">{content.lingkunganPembelajaran}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="page-break" style={{ pageBreakBefore: "always" }} />

            <div className="flex items-center justify-between border-b-2 border-black pb-1 mb-4 print:mb-1">
              <div className="text-sm font-bold uppercase tracking-wider">KEGIATAN PEMBELAJARAN</div>
            </div>

            {/* Kegiatan Pembelajaran */}
            <div className="space-y-6">
              {[
                { title: "A. Kegiatan Pendahuluan (15 menit)", state: formatArrayField(content.kegiatanPendahuluan) },
                { title: "B. Kegiatan Inti (40 menit)", state: formatArrayField(content.kegiatanInti) },
                { title: "C. Kegiatan Penutup (10 menit)", state: formatArrayField(content.kegiatanPenutup) }
              ].map((section, idx) => (
                <div key={idx} className="space-y-3">
                  <strong className="text-xs block mb-1">{idx + 1}. {section.title.replace(/^[A-C]\.\s/, '')}</strong>
                  <ul className="pl-5 text-xs space-y-1.5" style={{ listStyleType: "'➢ '" }}>
                    {section.state.map((act, i) => (
                      <li key={i} className="pl-1 text-justify leading-relaxed">{act}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="page-break" style={{ pageBreakBefore: "always" }} />

            <div className="text-sm font-bold uppercase tracking-wider border-b-2 border-black pb-1">LAMPIRAN & EVALUASI</div>

            {/* Section: Asesmen */}
            <div className="space-y-3">
              <strong className="text-xs block">A. Rencana Asesmen / Evaluasi</strong>
              <table className="w-full text-xs text-left border border-black border-collapse">
                <tbody>
                  <tr className="border-b border-black">
                    <th className="p-2 border-r border-black w-1/3">Asesmen Awal (Diagnostik)</th>
                    <td className="p-2">{formatField(content.asesmenDiagnostik)}</td>
                  </tr>
                  <tr className="border-b border-black">
                    <th className="p-2 border-r border-black">Asesmen Formatif (Proses)</th>
                    <td className="p-2">{formatField(content.asesmenFormatif)}</td>
                  </tr>
                  <tr className="border-b border-black">
                    <th className="p-2 border-r border-black">Asesmen Sumatif (Akhir)</th>
                    <td className="p-2">{formatField(content.asesmenSumatif)}</td>
                  </tr>
                  <tr className="border-b border-black">
                    <th className="p-2 border-r border-black">Program Pengayaan</th>
                    <td className="p-2">{formatField(content.pengayaan)}</td>
                  </tr>
                  <tr>
                    <th className="p-2 border-r border-black">Program Remedial</th>
                    <td className="p-2">{formatField(content.remedial)}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Rubrik Penilaian */}
            {content.rubrikPenilaian && (
              <div className="space-y-2">
                <strong className="text-xs block">B. Rubrik Penilaian</strong>
                <div 
                  className="print-table-wrapper text-xs"
                  dangerouslySetInnerHTML={{ __html: content.rubrikPenilaian }}
                />
              </div>
            )}

            {/* LKPD */}
            <div className="space-y-2">
              <strong className="text-xs block">C. Lembar Kerja Peserta Didik (LKPD)</strong>
              <div className="text-xs border border-black p-4 whitespace-pre-line leading-relaxed font-mono bg-white">
                {formatField(content.lkpd)}
              </div>
            </div>

            {/* Section XII: Bahan Bacaan, Glosarium & Pustaka */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <strong className="text-xs block">D. Glosarium</strong>
                <p className="text-xs leading-relaxed whitespace-pre-line">{formatField(content.glosarium)}</p>
              </div>
              <div className="space-y-2">
                <strong className="text-xs block">E. Daftar Pustaka</strong>
                <p className="text-xs leading-relaxed italic">{formatField(content.daftarPustaka)}</p>
              </div>
            </div>

            {/* Signatures */}
            <SignatureBlock />

          </div>
        </div>
      </div>
    );
  }

  // --- EDIT/FORM MODE (MAIN WORKSPACE WITH LIBRARY) ---
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start max-w-7xl mx-auto pb-12">
      {/* Creation form (Left 2 cols) */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-border-gray shadow-sm space-y-6">
          <div className="border-b pb-4">
            <span className="text-[10px] bg-blue-50 text-gemini-blue font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border border-blue-100">
              Generator Modul Ajar AI (Fase 4)
            </span>
            <h2 className="text-xl font-black text-slate-800 tracking-tight mt-2.5">
              Buat Modul Ajar Baru
            </h2>
            <p className="text-xs text-slate-400 mt-1 font-medium leading-relaxed">
              Pilih Tujuan Pembelajaran dari Promes Anda dan AI akan menyusun rencana pelaksanaan pembelajaran lengkap.
            </p>
          </div>

          {/* Validation: No TPs */}
          {tps.length === 0 ? (
            <div className="flex items-center gap-3 bg-rose-50 border border-rose-100 text-rose-800 p-5 rounded-2xl shadow-sm">
              <AlertTriangle className="w-5 h-5 text-rose-500 shrink-0" />
              <div className="text-xs font-semibold">
                <p>Belum ada Tujuan Pembelajaran yang tersedia.</p>
                <Link href="/tp-atp" className="text-gemini-blue underline font-bold mt-1 inline-block">
                  Silakan buat dan susun ATP terlebih dahulu.
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              {/* TP Selector */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    1. Pilih Tujuan Pembelajaran (TP)
                  </label>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setSelectedTpIds(tps.map(t => t.id))}
                      className="text-[10px] font-bold text-gemini-blue bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded"
                    >
                      Pilih Semua
                    </button>
                    <button 
                      onClick={() => setSelectedTpIds([])}
                      className="text-[10px] font-bold text-slate-500 bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded"
                    >
                      Kosongkan
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-2 max-h-60 overflow-y-auto bg-slate-50/50 p-4 rounded-2xl border border-slate-100 custom-scrollbar">
                  {tps.map((tp) => {
                    const isChecked = selectedTpIds.includes(tp.id);
                    return (
                      <label
                        key={tp.id}
                        className={`flex items-start gap-3 p-2 rounded-xl cursor-pointer transition-colors text-xs font-semibold ${
                          isChecked 
                            ? "bg-blue-50/50 text-slate-800 border border-blue-100" 
                            : "text-slate-500 hover:text-slate-700 hover:bg-slate-50 border border-transparent"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {
                            setSelectedTpIds(prev => 
                              prev.includes(tp.id) ? prev.filter(id => id !== tp.id) : [...prev, tp.id]
                            )
                          }}
                          className="mt-0.5 rounded border-slate-300 text-gemini-blue focus:ring-gemini-blue cursor-pointer"
                        />
                        <div className="flex-1">
                          <span className="font-bold text-gemini-blue">[{tp.code}] {tp.element}</span>
                          <p className="font-normal text-slate-500 mt-0.5 line-clamp-2 leading-relaxed">{tp.description}</p>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Profil Pelajar Pancasila Selection */}
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <ClipboardList className="w-3.5 h-3.5" />
                  2. Profil Pelajar Pancasila (P3)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                  {P3_OPTIONS.map((opt) => {
                    const isChecked = selectedP3.includes(opt);
                    return (
                      <label
                        key={opt}
                        className={`flex items-start gap-2.5 p-2 rounded-lg cursor-pointer transition-colors text-xs font-semibold ${
                          isChecked 
                            ? "text-slate-800" 
                            : "text-slate-500 hover:text-slate-700"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleP3Toggle(opt)}
                          className="mt-0.5 rounded border-slate-300 text-gemini-blue focus:ring-gemini-blue cursor-pointer"
                        />
                        <span>{opt}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Sarpras, Target, Model Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Sarana & Prasarana */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    3. Sarana & Prasarana
                  </label>
                  <input
                    type="text"
                    value={sarpras}
                    onChange={(e) => setSarpras(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:border-slate-300 focus:border-gemini-blue outline-none transition-all"
                  />
                </div>

                {/* Target Peserta Didik */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    4. Target Peserta Didik
                  </label>
                  <input
                    type="text"
                    value={targetSiswa}
                    onChange={(e) => setTargetSiswa(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:border-slate-300 focus:border-gemini-blue outline-none transition-all"
                  />
                </div>

                {/* Model Pembelajaran */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    5. Model Pembelajaran
                  </label>
                  <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 bg-white hover:border-slate-300 focus:border-gemini-blue outline-none transition-all cursor-pointer"
                  >
                    {MODEL_PEMBELAJARAN.map((mod) => (
                      <option key={mod} value={mod}>
                        {mod}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Alokasi Waktu */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    6. Alokasi Waktu
                  </label>
                  <input
                    type="text"
                    value={alokasiWaktu}
                    onChange={(e) => setAlokasiWaktu(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:border-slate-300 focus:border-gemini-blue outline-none transition-all"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t">
                <button
                  onClick={handleGenerate}
                  disabled={isPendingGen}
                  className="w-full flex items-center justify-center gap-2 bg-gemini-blue hover:bg-gemini-blue/90 disabled:bg-slate-100 disabled:text-slate-400 text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-blue-500/10 active:scale-98"
                >
                  {isPendingGen ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Mengekstrak dan men-generate Modul Ajar AI...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      1-Click Buat Modul Ajar
                    </>
                  )}
                </button>
              </div>

              {genStatus === "error" && (
                <div className="flex items-center gap-2 text-rose-600 text-xs font-semibold bg-rose-50 p-3.5 rounded-xl border border-rose-100 animate-fadeIn">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  Gagal membuat Modul Ajar. Periksa koneksi API Key Anda atau coba lagi.
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Library of saved Modul Ajars (Right 1 col) */}
      <div className="lg:col-span-1 space-y-6">
        <div className="bg-white p-6 rounded-3xl border border-border-gray shadow-sm space-y-4">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <FolderHeart className="w-4 h-4 text-slate-400" />
            Pustaka Modul Ajar Saya
          </h3>

          {savedModuls.length === 0 ? (
            <div className="py-8 text-center border-2 border-dashed border-slate-100 rounded-2xl text-slate-400 space-y-2">
              <FileText className="w-10 h-10 mx-auto opacity-55" />
              <div className="space-y-0.5">
                <p className="text-xs font-bold text-slate-500">Belum Ada Dokumen</p>
                <p className="text-[10px] max-w-[180px] mx-auto leading-normal">Modul Ajar yang Anda simpan akan muncul di pustaka ini.</p>
              </div>
            </div>
          ) : (
            <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
              {savedModuls.map((modul) => (
                <div
                  key={modul.id}
                  onClick={() => handleLoadSavedModul(modul)}
                  className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/20 text-left transition-all cursor-pointer group"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-extrabold text-slate-700 truncate group-hover:text-gemini-blue transition-colors">
                      {modul.title}
                    </p>
                    <p className="text-[10px] text-slate-400 font-medium mt-0.5">
                      {new Date(modul.createdAt).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <button
                    onClick={(e) => handleDeleteModul(modul.id, e)}
                    disabled={isPendingDelete}
                    className="p-2 rounded-lg hover:bg-rose-50 text-slate-400 hover:text-rose-600 transition-colors shrink-0"
                    title="Hapus Modul Ajar"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
