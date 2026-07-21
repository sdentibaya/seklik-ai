"use client";

import { useState, useEffect, useTransition } from "react";
import { 
  getSubjectsAndPhases, 
  getCPForSubjectAndPhase, 
  saveClassSetup,
  getActiveClassSetup
} from "./actions";
import { 
  BookOpen, 
  Calculator, 
  Sparkles, 
  Save, 
  Compass, 
  FolderOpen, 
  ChevronDown, 
  Check, 
  GraduationCap,
  Info,
  Flag,
  Award,
  Activity,
  Palette
} from "lucide-react";

interface Subject {
  id: string;
  name: string;
  description: string | null;
}

interface Phase {
  id: string;
  name: string;
  description: string | null;
  classes: string;
}

interface CPElement {
  id: string;
  name: string;
  content: string;
}

interface CPData {
  id: string;
  content: string;
  elements: CPElement[];
  subject: Subject;
  phase: Phase;
}

export default function SetupPage() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [phases, setPhases] = useState<Phase[]>([]);
  
  const [selectedSubject, setSelectedSubject] = useState<string>("");
  const [selectedPhase, setSelectedPhase] = useState<string>("");
  const [cpData, setCpData] = useState<CPData | null>(null);
  
  const [activeElementId, setActiveElementId] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "success" | "error">("idle");

  // Load initial data (subjects, phases, and active setup)
  useEffect(() => {
    async function loadData() {
      const { subjects, phases } = await getSubjectsAndPhases();
      setSubjects(subjects);
      setPhases(phases);

      const active = await getActiveClassSetup();
      if (active) {
        setSelectedSubject(active.subjectId);
        setSelectedPhase(active.phaseId);
        
        // Load CP for active setup
        const cp = await getCPForSubjectAndPhase(active.subjectId, active.phaseId);
        if (cp) {
          setCpData(cp as unknown as CPData);
          if (cp.elements.length > 0) {
            setActiveElementId(cp.elements[0].id);
          }
        }
      }
    }
    loadData();
  }, []);

  // Fetch CP data when subject or phase changes
  useEffect(() => {
    if (selectedSubject && selectedPhase) {
      startTransition(async () => {
        const cp = await getCPForSubjectAndPhase(selectedSubject, selectedPhase);
        if (cp) {
          setCpData(cp as unknown as CPData);
          if (cp.elements.length > 0) {
            setActiveElementId(cp.elements[0].id);
          }
        } else {
          setCpData(null);
          setActiveElementId(null);
        }
      });
    } else {
      setCpData(null);
      setActiveElementId(null);
    }
  }, [selectedSubject, selectedPhase]);

  const handleSave = async () => {
    if (!selectedSubject || !selectedPhase) return;
    
    setIsSaving(true);
    setSaveStatus("idle");
    try {
      await saveClassSetup(selectedSubject, selectedPhase);
      setSaveStatus("success");
      setTimeout(() => setSaveStatus("idle"), 3000);
    } catch (e) {
      console.error(e);
      setSaveStatus("error");
    } finally {
      setIsSaving(false);
    }
  };

  const getSubjectIcon = (name: string) => {
    const lowercaseName = name.toLowerCase();
    if (lowercaseName.includes("matematika")) {
      return <Calculator className="w-4 h-4 text-indigo-500" />;
    }
    if (lowercaseName.includes("bahasa indonesia")) {
      return <BookOpen className="w-4 h-4 text-rose-500" />;
    }
    if (lowercaseName.includes("pancasila")) {
      return <Flag className="w-4 h-4 text-amber-500" />;
    }
    if (lowercaseName.includes("agama") || lowercaseName.includes("paibp")) {
      return <Award className="w-4 h-4 text-emerald-500" />;
    }
    if (lowercaseName.includes("jasmani") || lowercaseName.includes("pjok")) {
      return <Activity className="w-4 h-4 text-sky-500" />;
    }
    if (lowercaseName.includes("seni rupa")) {
      return <Palette className="w-4 h-4 text-violet-500" />;
    }
    return <Compass className="w-4 h-4 text-teal-500" />;
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fadeIn">
      {/* Title section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white p-6 rounded-3xl border border-border-gray shadow-sm">
        <div>
          <span className="text-[10px] bg-blue-50 text-gemini-blue font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border border-blue-100">
            Fase 1: Setup & Master Data
          </span>
          <h1 className="text-2xl font-black text-slate-800 tracking-tight mt-2.5">
            Setup Kelas & Sesi Pembelajaran
          </h1>
          <p className="text-sm text-slate-400 mt-1 font-medium">
            Konfigurasikan mata pelajaran dan fase sasaran untuk memuat Capaian Pembelajaran (CP) internal.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Selection panel (Left/Form) */}
        <div className="space-y-6 lg:col-span-1">
          {/* Card: Select Subject */}
          <div className="bg-white p-6 rounded-3xl border border-border-gray shadow-sm space-y-4">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <FolderOpen className="w-4 h-4 text-slate-400" />
              1. Pilih Mata Pelajaran
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {subjects.map((sub) => (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => setSelectedSubject(sub.id)}
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-left transition-all duration-200 ${
                    selectedSubject === sub.id
                      ? "border-gemini-blue bg-blue-50/50 ring-2 ring-blue-100/50 font-bold"
                      : "border-slate-100 hover:border-slate-200 bg-slate-50/30 hover:bg-slate-50/80"
                  }`}
                >
                  <div className={`p-1.5 rounded-lg border ${
                    selectedSubject === sub.id 
                      ? "bg-white border-blue-200" 
                      : "bg-white border-slate-100"
                  } shrink-0`}>
                    {getSubjectIcon(sub.name)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className={`text-xs md:text-sm font-semibold truncate ${selectedSubject === sub.id ? "text-slate-800" : "text-slate-600"}`} title={sub.name}>
                      {sub.name}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Card: Select Phase */}
          <div className="bg-white p-6 rounded-3xl border border-border-gray shadow-sm space-y-4">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-slate-400" />
              2. Pilih Fase Kelas
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {phases.map((ph) => (
                <button
                  key={ph.id}
                  type="button"
                  onClick={() => setSelectedPhase(ph.id)}
                  className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all duration-200 text-center ${
                    selectedPhase === ph.id
                      ? "border-gemini-blue bg-blue-50/50 ring-2 ring-blue-100/50 font-semibold"
                      : "border-slate-100 hover:border-slate-200 bg-slate-50/30 hover:bg-slate-50/80"
                  }`}
                >
                  <span className={`text-lg font-black ${
                    selectedPhase === ph.id ? "text-gemini-blue" : "text-slate-600"
                  }`}>
                    Fase {ph.name}
                  </span>
                  <span className="text-[10px] text-slate-400 font-bold mt-1 uppercase tracking-wider">
                    {ph.classes}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Button: Save setup */}
          <button
            type="button"
            disabled={!selectedSubject || !selectedPhase || isSaving}
            onClick={handleSave}
            className={`w-full py-4 px-6 rounded-2xl flex items-center justify-center gap-2.5 font-bold text-sm tracking-wide shadow-md transition-all duration-200 select-none ${
              !selectedSubject || !selectedPhase
                ? "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200/50"
                : "bg-gemini-blue text-white hover:bg-gemini-blue-hover hover:scale-[1.01] hover:shadow-lg active:scale-95"
            }`}
          >
            {isSaving ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : saveStatus === "success" ? (
              <>
                <Check className="w-5 h-5" />
                Setup Tersimpan!
              </>
            ) : (
              <>
                <Save className="w-5 h-5" />
                Simpan Setup Kelas
              </>
            )}
          </button>

          {saveStatus === "success" && (
            <p className="text-center text-xs text-emerald-600 font-bold bg-emerald-50/70 border border-emerald-100 py-2.5 px-4 rounded-xl animate-fadeIn">
              Status kelas berhasil disinkronkan ke seluruh aplikasi!
            </p>
          )}
        </div>

        {/* CP Display panel (Right/Data Container) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-3xl border border-border-gray shadow-sm min-h-[460px] flex flex-col">
            {isPending ? (
              <div className="flex-1 flex flex-col items-center justify-center text-slate-400 space-y-3">
                <div className="w-8 h-8 border-3 border-gemini-blue border-t-transparent rounded-full animate-spin"></div>
                <p className="text-xs font-bold text-slate-400">Memuat Capaian Pembelajaran...</p>
              </div>
            ) : cpData ? (
              <div className="space-y-6 flex-1 flex flex-col">
                {/* Meta details info */}
                <div className="flex items-center gap-2.5 border-b border-slate-100 pb-5">
                  <div className="w-9 h-9 bg-indigo-50 border border-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center shadow-inner">
                    <Sparkles className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800">
                      Capaian Pembelajaran (CP) Resmi
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">
                      Pusat Data Kemdikbud &bull; {cpData.subject.name} - Fase {cpData.phase.name} ({cpData.phase.classes})
                    </p>
                  </div>
                </div>

                {/* Main CP text block */}
                <div className="bg-slate-50/50 border border-slate-100 p-5 rounded-2xl">
                  <p className="text-xs font-black text-indigo-500 uppercase tracking-widest mb-2 leading-none">
                    Deskripsi Ringkas Fase
                  </p>
                  <p className="text-xs leading-relaxed text-slate-600 font-medium italic">
                    &ldquo;{cpData.content}&rdquo;
                  </p>
                </div>

                {/* Elements CP Details (Tabs/Accordion style) */}
                <div className="space-y-3 flex-1">
                  <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Info className="w-4 h-4 text-slate-400" />
                    Detail Capaian Per Elemen
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-3 items-start">
                    {/* Left: Element tabs list */}
                    <div className="md:col-span-4 flex md:flex-col overflow-x-auto md:overflow-visible gap-1.5 pb-2 md:pb-0">
                      {cpData.elements.map((elem) => (
                        <button
                          key={elem.id}
                          type="button"
                          onClick={() => setActiveElementId(elem.id)}
                          className={`flex-1 md:flex-none text-left px-4 py-3 rounded-xl border text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                            activeElementId === elem.id
                              ? "bg-slate-800 text-white border-slate-800 shadow-sm"
                              : "bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-100"
                          }`}
                        >
                          {elem.name}
                        </button>
                      ))}
                    </div>

                    {/* Right: Active Element Content */}
                    <div className="md:col-span-8 bg-slate-50/50 border border-slate-100 p-6 rounded-2xl min-h-[180px] flex flex-col justify-between">
                      {activeElementId && cpData.elements.find(e => e.id === activeElementId) ? (
                        <div className="space-y-3 animate-fadeIn">
                          <h5 className="text-xs font-black text-slate-700">
                            Elemen: {cpData.elements.find(e => e.id === activeElementId)?.name}
                          </h5>
                          <p className="text-[12px] leading-relaxed text-slate-500 font-medium whitespace-pre-line">
                            {cpData.elements.find(e => e.id === activeElementId)?.content}
                          </p>
                        </div>
                      ) : (
                        <p className="text-xs text-slate-400 italic">Pilih elemen untuk melihat detail capaian.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : selectedSubject && selectedPhase ? (
              <div className="flex-1 flex flex-col items-center justify-center text-slate-400 space-y-3 text-center px-6">
                <Info className="w-10 h-10 text-amber-500" />
                <div>
                  <p className="text-sm font-bold text-slate-700">Capaian Pembelajaran Tidak Ditemukan</p>
                  <p className="text-xs text-slate-400 max-w-sm mt-1">
                    Maaf, mata pelajaran dan fase yang dipilih tidak tersedia. (Catatan: IPAS tidak tersedia di Fase A pada Kurikulum Merdeka).
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-slate-400 space-y-4 text-center px-6">
                <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-3xl flex items-center justify-center shadow-inner text-slate-300">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-700">Pilih Kelas Terlebih Dahulu</p>
                  <p className="text-xs text-slate-400 max-w-xs mt-1">
                    Silakan tentukan Mata Pelajaran dan Fase Kelas di panel kiri untuk memuat Capaian Pembelajaran.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
