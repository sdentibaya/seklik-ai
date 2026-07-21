"use client";

import { useState, useEffect, useTransition } from "react";
import { 
  getBankSoalSetupData, 
  generateSoalAction, 
  savePaketUjianAction,
  saveSoalsAction,
  deleteSoalAction,
  deletePaketUjianAction 
} from "./actions";
import { 
  Sparkles, FileText, CheckSquare, Square, Save, ArrowLeft, Printer, 
  Database, Loader2, AlertTriangle, CheckCircle2, ChevronRight, Layers,
  BookOpen, Compass, Plus, PackageOpen, Target, Trash2, Sliders, RefreshCw
} from "lucide-react";
import SignatureBlock from "@/components/SignatureBlock";

const renderOptions = (options: any, isPrintMode = false) => {
  if (!options) return null;
  
  if (Array.isArray(options)) {
    // Check if it's a simple array of strings
    const isStringArray = options.every(o => typeof o === "string");
    if (isStringArray) {
      if (isPrintMode) {
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
            {options.map((opt: string, optIdx: number) => (
              <div key={optIdx} className="flex items-center gap-2 pl-2">
                <span className="w-4 h-4 rounded border border-slate-400 inline-block shrink-0 mt-0.5 print:border-slate-800"></span>
                <span>{opt}</span>
              </div>
            ))}
          </div>
        );
      }
      return (
        <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 pl-2">
          {options.map((opt: string, oIdx: number) => (
            <div key={oIdx} className="flex gap-1.5">
              <span className="w-4 h-4 rounded-full border flex items-center justify-center text-[9px] bg-slate-50">{String.fromCharCode(65 + oIdx)}</span>
              <span>{opt}</span>
            </div>
          ))}
        </div>
      );
    }
    // If it's an array of objects
    return (
      <div className="space-y-2 text-xs text-slate-600 pl-2">
        {options.map((opt: any, oIdx: number) => {
          if (typeof opt === "object" && opt !== null) {
            return Object.entries(opt).map(([key, val]: any) => (
              <div key={key} className="flex gap-2 items-center flex-wrap">
                <span className="font-semibold bg-slate-50 px-2 py-0.5 rounded border border-slate-200">{key}</span>
                <span className="text-slate-400">➔</span>
                <span>{String(val)}</span>
              </div>
            ));
          }
          return <div key={oIdx}>{String(opt)}</div>;
        })}
      </div>
    );
  } else if (typeof options === "object" && options !== null) {
    // If it's a key-value object (matching pairs)
    return (
      <div className="space-y-2 text-xs text-slate-600 pl-2">
        {Object.entries(options).map(([key, val]: any) => (
          <div key={key} className="flex gap-2 items-center flex-wrap">
            <span className="font-bold bg-slate-100 px-2 py-0.5 rounded border border-slate-200">{key}</span>
            <span className="text-slate-400">➔</span>
            <span>{String(val)}</span>
          </div>
        ))}
      </div>
    );
  }
  return <div className="text-xs text-slate-600">{String(options)}</div>;
};

export default function BankSoalPage() {
  const [loading, setLoading] = useState(true);
  const [isPendingGen, startTransitionGen] = useTransition();
  const [isPendingSavePaket, startTransitionSavePaket] = useTransition();
  const [isPendingDelete, startTransitionDelete] = useTransition();

  const [subjects, setSubjects] = useState<{id: string, name: string}[]>([]);
  const [phases, setPhases] = useState<{id: string, name: string}[]>([]);
  const [allTps, setAllTps] = useState<any[]>([]);
  const [activeSetup, setActiveSetup] = useState<any>(null);

  // Lists in Local State (for Phase 1 mockup)
  const [soalsList, setSoalsList] = useState<any[]>([]);
  const [paketsList, setPaketsList] = useState<any[]>([]);
  const [generateCodes, setGenerateCodes] = useState<string[]>([]);
  const [selectedFilterCode, setSelectedFilterCode] = useState<string>("all");

  // Navigation state
  const [activeTab, setActiveTab] = useState<"generate" | "koleksi">("generate");

  // Form State - Setup
  const [selectedSubjectId, setSelectedSubjectId] = useState("");
  const [selectedPhaseId, setSelectedPhaseId] = useState("");
  const [selectedTpIds, setSelectedTpIds] = useState<string[]>([]);

  // Blueprints
  const [totalTarget, setTotalTarget] = useState(10);
  const [composition, setComposition] = useState({
    pgSingle: 4,
    pgComplex: 2,
    menjodohkan: 2,
    isian: 1,
    uraian: 1,
    benarSalah: 0
  });

  const [difficulty, setDifficulty] = useState({
    mudah: 40,
    sedang: 40,
    sulit: 20
  });

  const [contextType, setContextType] = useState("campuran"); // kontekstual, konseptual, campuran
  const [includeDiscussion, setIncludeDiscussion] = useState(true);

  // Generate Results / Progress / Preview
  const [generatedDrafts, setGeneratedDrafts] = useState<any[]>([]);
  const [currentProgressText, setCurrentProgressText] = useState("");
  const [genProgress, setGenProgress] = useState(0); // 0 to 100
  const [genStatus, setGenStatus] = useState<"idle" | "generating" | "success" | "error">("idle");

  // Checklist Assembler State
  const [selectedSoalIds, setSelectedSoalIds] = useState<string[]>([]);
  const [paketName, setPaketName] = useState("");
  const [showAssembleForm, setShowAssembleForm] = useState(false);
  const [assembledPaper, setAssembledPaper] = useState<any | null>(null);

  const filteredTps = allTps.filter(tp => tp.subjectId === selectedSubjectId && tp.phaseId === selectedPhaseId);

  // Sum calculations
  const currentCompositionTotal = Object.values(composition).reduce((a, b) => a + b, 0);
  const currentDifficultyTotal = Object.values(difficulty).reduce((a, b) => a + b, 0);
  const isBlueprintValid = currentCompositionTotal === totalTarget && currentDifficultyTotal === 100;

  const filteredSoalsList = selectedFilterCode === "all" 
    ? soalsList 
    : soalsList.filter(s => s.generateCode === selectedFilterCode);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const data = await getBankSoalSetupData();
        setSubjects(data.subjects);
        setPhases(data.phases);
        setAllTps(data.tps);
        setSoalsList(data.savedSoals);
        setPaketsList(data.savedPakets);
        setGenerateCodes((data.generateCodes || []).filter(Boolean) as string[]);
        setActiveSetup(data.activeSetup);

        if (data.activeSetup) {
          setSelectedSubjectId(data.activeSetup.subjectId);
          setSelectedPhaseId(data.activeSetup.phaseId);
        } else {
          if (data.subjects && data.subjects.length > 0) setSelectedSubjectId(data.subjects[0].id);
          if (data.phases && data.phases.length > 0) setSelectedPhaseId(data.phases[0].id);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  useEffect(() => {
    if (filteredTps.length > 0) {
      setSelectedTpIds([filteredTps[0].id]);
    } else {
      setSelectedTpIds([]);
    }
  }, [selectedSubjectId, selectedPhaseId, allTps]);

  const handleGenerateBulk = () => {
    if (selectedTpIds.length === 0 || !isBlueprintValid) return;
    setGenStatus("generating");
    setGenProgress(0);
    setGeneratedDrafts([]);
    
    const targetTps = allTps.filter(t => selectedTpIds.includes(t.id));
    const selectedPhase = phases.find(p => p.id === selectedPhaseId);

    // List out types we need to generate based on composition
    const typesToGenerate: string[] = [];
    if (composition.pgSingle > 0) Array(composition.pgSingle).fill(0).forEach(() => typesToGenerate.push("Pilihan Ganda (A-D)"));
    if (composition.pgComplex > 0) Array(composition.pgComplex).fill(0).forEach(() => typesToGenerate.push("Pilihan Ganda Kompleks"));
    if (composition.menjodohkan > 0) Array(composition.menjodohkan).fill(0).forEach(() => typesToGenerate.push("Menjodohkan"));
    if (composition.isian > 0) Array(composition.isian).fill(0).forEach(() => typesToGenerate.push("Isian Singkat"));
    if (composition.uraian > 0) Array(composition.uraian).fill(0).forEach(() => typesToGenerate.push("Uraian/Essay"));
    if (composition.benarSalah > 0) Array(composition.benarSalah).fill(0).forEach(() => typesToGenerate.push("Benar/Salah + Alasan"));

    startTransitionGen(async () => {
      const drafts: any[] = [];
      
      // Simulate sequential step-by-step progress for high-end look
      for (let i = 0; i < typesToGenerate.length; i++) {
        const type = typesToGenerate[i];
        setCurrentProgressText(`Merumuskan Soal ke-${i + 1} (${type})...`);
        
        // Randomize level based on difficulty distribution ratios
        let level = "MOTS (Sedang)";
        const rand = Math.random() * 100;
        if (rand < difficulty.mudah) level = "LOTS (Mudah)";
        else if (rand < difficulty.mudah + difficulty.sedang) level = "MOTS (Sedang)";
        else level = "HOTS (Sulit/Penalaran)";

        const res = await generateSoalAction({
          phaseId: selectedPhaseId,
          tpIds: selectedTpIds,
          cognitiveLevel: level,
          akmType: type
        });

        if (res.success && res.content) {
          drafts.push({
            ...res.content,
            tpText: targetTps.map(t => t.description).join("\n"),
            tpCode: targetTps.map(t => t.code).join(", ")
          });
        }
        
        setGenProgress(Math.round(((i + 1) / typesToGenerate.length) * 100));
      }

      if (drafts.length > 0) {
        setGeneratedDrafts(drafts);
        setGenStatus("success");
      } else {
        setGenStatus("error");
      }
    });
  };

  const handleSaveDraftsToBank = () => {
    if (generatedDrafts.length === 0) return;

    const now = new Date();
    const pad = (n: number) => n.toString().padStart(2, '0');
    const batchId = `GEN-${now.getFullYear()}${pad(now.getMonth()+1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;

    startTransitionSavePaket(async () => {
      const res = await saveSoalsAction(generatedDrafts, batchId);
      if (res.success && res.createdSoals) {
        const savedDBItems = res.createdSoals.map((s: any, idx: number) => {
          const draft = generatedDrafts[idx] || generatedDrafts[0];
          return {
            id: s.id,
            phaseId: s.phaseId,
            tpIds: draft.tpIds,
            cognitiveLevel: s.cognitiveLevel,
            akmType: s.akmType,
            stimulus: s.stimulus,
            pertanyaan: s.pertanyaan,
            options: s.options ? JSON.parse(s.options) : undefined,
            kunciJawaban: s.kunciJawaban,
            rubrikPenilaian: s.rubrikPenilaian,
            generateCode: batchId,
            tpText: draft.tpText,
            tpCode: draft.tpCode
          };
        });

        setSoalsList(prev => [...savedDBItems, ...prev]);
        setGenerateCodes(prev => prev.includes(batchId) ? prev : [batchId, ...prev]);
        setSelectedFilterCode(batchId);
        setGeneratedDrafts([]);
        setGenStatus("idle");
        alert(`Berhasil menyimpan ${savedDBItems.length} soal ke Bank Soal dengan kode ${batchId}!`);
        setActiveTab("koleksi");
      } else {
        alert("Gagal menyimpan draf soal ke database.");
      }
    });
  };

  const handleDeleteSoal = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm("Hapus soal ini dari Bank Soal?")) return;

    startTransitionDelete(async () => {
      const res = await deleteSoalAction(id);
      if (res.success) {
        setSoalsList(prev => prev.filter(x => x.id !== id));
      }
    });
  };

  const handleDeletePaket = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm("Hapus Paket Ujian ini?")) return;

    startTransitionDelete(async () => {
      const res = await deletePaketUjianAction(id);
      if (res.success) {
        setPaketsList(prev => prev.filter(x => x.id !== id));
      }
    });
  };

  const handleToggleCheckSoal = (id: string) => {
    setSelectedSoalIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const handleToggleSelectAll = () => {
    if (selectedSoalIds.length === filteredSoalsList.length && filteredSoalsList.length > 0) {
      setSelectedSoalIds([]);
    } else {
      setSelectedSoalIds(filteredSoalsList.map(s => s.id));
    }
  };

  const handleCreatePaket = () => {
    if (selectedSoalIds.length === 0) {
      alert("Pilih minimal 1 soal untuk dirakit!");
      return;
    }
    setShowAssembleForm(true);
  };

  const handleSavePaket = () => {
    if (!paketName.trim()) {
      alert("Nama paket ujian tidak boleh kosong!");
      return;
    }

    startTransitionSavePaket(async () => {
      const res = await savePaketUjianAction(paketName, selectedSoalIds);
      if (res.success && res.paket) {
        setPaketsList(prev => [res.paket, ...prev]);
        setPaketName("");
        setSelectedSoalIds([]);
        setShowAssembleForm(false);
        alert("Paket Ujian berhasil dirakit!");
      }
    });
  };

  const handlePrintPaket = (paket: any) => {
    const paperSoals = soalsList.filter(s => paket.soalIds.includes(s.id));
    setAssembledPaper({
      name: paket.name,
      soals: paperSoals
    });
  };

  const handleQuickPreset = (type: "akm-fase-a" | "akm-fase-b" | "akm-fase-c") => {
    if (type === "akm-fase-a") {
      setTotalTarget(8);
      setComposition({
        pgSingle: 4,
        pgComplex: 0,
        menjodohkan: 3,
        isian: 1,
        uraian: 0,
        benarSalah: 0
      });
      setDifficulty({ mudah: 50, sedang: 40, sulit: 10 });
    } else if (type === "akm-fase-b") {
      setTotalTarget(10);
      setComposition({
        pgSingle: 4,
        pgComplex: 2,
        menjodohkan: 2,
        isian: 1,
        uraian: 1,
        benarSalah: 0
      });
      setDifficulty({ mudah: 30, sedang: 50, sulit: 20 });
    } else if (type === "akm-fase-c") {
      setTotalTarget(12);
      setComposition({
        pgSingle: 3,
        pgComplex: 3,
        menjodohkan: 2,
        isian: 1,
        uraian: 2,
        benarSalah: 1
      });
      setDifficulty({ mudah: 20, sedang: 50, sulit: 30 });
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-3">
        <Loader2 className="w-8 h-8 text-gemini-blue animate-spin" />
        <p className="text-slate-500 font-medium text-sm">Memuat data Bank Soal...</p>
      </div>
    );
  }

  // --- PRINT PREVIEW / PAPER ASSEMBLER CANVAS VIEW ---
  if (assembledPaper) {
    return (
      <div className="space-y-8 pb-16 animate-fadeIn">
        {/* Action Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm print:hidden">
          <div className="flex items-center gap-4">
            <button onClick={() => setAssembledPaper(null)} className="p-3 rounded-xl border border-slate-100 hover:bg-slate-50 text-slate-500 hover:text-slate-700 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h2 className="font-black text-slate-800 text-lg leading-tight truncate max-w-md">{assembledPaper.name}</h2>
              <p className="text-xs text-slate-400 font-medium mt-1">Total Soal: {assembledPaper.soals.length}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => window.print()} className="flex items-center gap-2 bg-gemini-blue hover:bg-gemini-blue/90 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-md active:scale-98">
              <Printer className="w-4 h-4" /> Cetak Lembar Ujian
            </button>
          </div>
        </div>

        {/* Paper Canvas (A4 Simulation) */}
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm max-w-4xl mx-auto print:rounded-none print:border-none print:shadow-none print:p-0 print:max-w-none text-slate-800">
          
          {/* Header Kop Sekolah */}
          <div className="border-b-4 border-double border-slate-800 pb-4 mb-6 flex items-center justify-between">
            <div className="text-left">
              <h1 className="text-base font-black uppercase">SD NEGERI 3 PRINGGABAYA</h1>
              <p className="text-[10px] text-slate-500 font-medium">NPSN: 50202135 | Alamat: Jl. Sandubaya No.17 Puncangsari</p>
            </div>
            <div className="text-right border-l-2 border-slate-300 pl-4">
              <h2 className="text-xs font-bold uppercase text-slate-700">TES KEMAMPUAN AKADEMIK (TKA)</h2>
              <p className="text-[9px] text-slate-400 font-semibold">{assembledPaper.name}</p>
            </div>
          </div>

          {/* Identitas Peserta */}
          <div className="grid grid-cols-2 gap-4 mb-8 text-xs border-b pb-4">
            <div className="space-y-1.5">
              <div className="flex gap-2">
                <span className="w-24 font-semibold">Nama Siswa</span>
                <span>: ........................................</span>
              </div>
              <div className="flex gap-2">
                <span className="w-24 font-semibold">Nomor Ujian</span>
                <span>: ........................................</span>
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="flex gap-2">
                <span className="w-24 font-semibold">Hari / Tanggal</span>
                <span>: ........................................</span>
              </div>
              <div className="flex gap-2">
                <span className="w-24 font-semibold">Waktu / Durasi</span>
                <span>: ........................................</span>
              </div>
            </div>
          </div>

          {/* Soal List */}
          <div className="space-y-8">
            {assembledPaper.soals.map((soal: any, index: number) => (
              <div key={soal.id} className="space-y-4 break-inside-avoid">
                <div className="flex items-start gap-3">
                  <span className="font-bold text-sm bg-slate-100 border border-slate-300 px-2.5 py-1 rounded-lg print:border-slate-800">{index + 1}</span>
                  <div className="flex-1 space-y-4">
                    {/* Stimulus */}
                    {soal.stimulus && (
                      <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl italic text-xs leading-relaxed text-slate-700 print:bg-transparent print:border-slate-800 print:rounded-none">
                        <strong>Stimulus Bacaan:</strong>
                        <p className="mt-1.5">{soal.stimulus}</p>
                      </div>
                    )}
                    
                    {/* Pertanyaan */}
                    <div>
                      <p className="text-sm font-semibold leading-relaxed text-slate-800">{soal.pertanyaan}</p>
                      <span className="text-[9px] text-gemini-blue font-bold tracking-wider uppercase block mt-1 print:hidden">
                        Level: {soal.cognitiveLevel} • Tipe: {soal.akmType}
                      </span>
                    </div>

                    {/* Options / Answer Space */}
                    {soal.options && renderOptions(soal.options, true)}

                    {/* Essay lines if no options */}
                    {(!soal.options || soal.options.length === 0) && (
                      <div className="space-y-3 pt-2 print:block">
                        <div className="border-b border-dotted border-slate-300 w-full h-2"></div>
                        <div className="border-b border-dotted border-slate-300 w-full h-2"></div>
                        <div className="border-b border-dotted border-slate-300 w-full h-2"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Penutup Lembar Ujian */}
          <div className="mt-16 pt-8 border-t border-dashed border-slate-300 flex justify-between text-xs text-slate-400 italic print:text-slate-600 print:border-slate-800">
            <span>Ujian ini disesuaikan dengan kurikulum AKM tingkat SD Negeri 3 Pringgabaya</span>
            <span>Selamat Mengerjakan! Jujur Itu Hebat.</span>
          </div>

          {/* Signature Block */}
          <SignatureBlock />

        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      {/* Header Panel */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
        <div>
          <span className="text-[10px] bg-blue-50 text-gemini-blue font-black tracking-wider uppercase px-2.5 py-1 rounded-full border border-blue-100 flex items-center gap-1.5 w-fit">
            <Database className="w-3.5 h-3.5" /> Modul Bank Soal & Asesmen AKM
          </span>
          <h2 className="text-xl font-black text-slate-800 tracking-tight mt-2.5">Bank Soal & Rakitan Ujian (TKA)</h2>
          <p className="text-xs text-slate-400 mt-1 font-medium leading-relaxed">
            Rancang paket soal massal terstandarisasi AKM berdasarkan preset cetak biru dan level kognitif siswa.
          </p>
        </div>

        {/* Setup Aktif Display */}
        {activeSetup && (
          <div className="bg-slate-50 border border-slate-200/80 p-3 rounded-2xl flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gemini-blue/10 flex items-center justify-center text-gemini-blue font-bold text-sm">
              SD
            </div>
            <div>
              <p className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider">Setup Aktif</p>
              <p className="text-xs font-bold text-slate-700 leading-tight">PJOK • Fase B</p>
            </div>
          </div>
        )}
      </div>

      {/* Tabs Selector */}
      <div className="flex border-b border-slate-200 gap-6 print:hidden">
        <button 
          onClick={() => setActiveTab("generate")} 
          className={`pb-3 font-bold text-xs uppercase tracking-wider transition-all border-b-2 flex items-center gap-2 ${activeTab === "generate" ? "border-gemini-blue text-gemini-blue" : "border-transparent text-slate-400 hover:text-slate-600"}`}
        >
          <Sparkles className="w-4 h-4" /> 1. Konfigurasi Cetak Biru (Generate Massal)
        </button>
        <button 
          onClick={() => setActiveTab("koleksi")} 
          className={`pb-3 font-bold text-xs uppercase tracking-wider transition-all border-b-2 flex items-center gap-2 ${activeTab === "koleksi" ? "border-gemini-blue text-gemini-blue" : "border-transparent text-slate-400 hover:text-slate-600"}`}
        >
          <CheckSquare className="w-4 h-4" /> 2. Koleksi Bank Soal ({soalsList.length})
        </button>
      </div>

      {/* TAB 1: BLUEPRINT CONFIGURATION FORM */}
      {activeTab === "generate" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1.5 bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6 lg:col-span-1">
            <div className="flex justify-between items-center border-b pb-4">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <Sliders className="w-4 h-4 text-gemini-blue" /> Cetak Biru Soal
              </h3>
              
              {/* Quick Presets */}
              <div className="flex gap-1.5">
                <button onClick={() => handleQuickPreset("akm-fase-a")} className="text-[9px] font-bold bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded-md text-slate-600">Fase A</button>
                <button onClick={() => handleQuickPreset("akm-fase-b")} className="text-[9px] font-bold bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded-md text-slate-600">Fase B</button>
                <button onClick={() => handleQuickPreset("akm-fase-c")} className="text-[9px] font-bold bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded-md text-slate-600">Fase C</button>
              </div>
            </div>
            
            <div className="space-y-5 text-xs text-slate-700">
              {/* Mata Pelajaran Dropdown */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" /> Pilih Mata Pelajaran
                </label>
                <select value={selectedSubjectId} onChange={e => setSelectedSubjectId(e.target.value)} className="w-full p-2.5 rounded-xl border border-slate-200 font-bold bg-white text-slate-700 outline-none cursor-pointer">
                  {(subjects || []).map(s => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>
              </div>

              {/* Fase Dropdown */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" /> Pilih Fase Kelas
                </label>
                <select value={selectedPhaseId} onChange={e => setSelectedPhaseId(e.target.value)} className="w-full p-2.5 rounded-xl border border-slate-200 font-bold bg-white text-slate-700 outline-none cursor-pointer">
                  {(phases || []).map(p => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
              </div>

              {/* TP Dropdown */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" /> Tujuan Pembelajaran (TP)
                  </label>
                  <div className="flex gap-2">
                    <button onClick={() => setSelectedTpIds(filteredTps.map(t => t.id))} className="text-[10px] font-bold text-gemini-blue bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded">Pilih Semua</button>
                    <button onClick={() => setSelectedTpIds([])} className="text-[10px] font-bold text-slate-500 bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded">Kosongkan</button>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-2 max-h-40 overflow-y-auto bg-slate-50/50 p-3 rounded-xl border border-slate-100 custom-scrollbar">
                  {filteredTps.map(tp => {
                    const isChecked = selectedTpIds.includes(tp.id);
                    return (
                      <label key={tp.id} className={`flex items-start gap-2 p-2 rounded-lg cursor-pointer transition-colors text-xs font-semibold ${isChecked ? "bg-blue-50/50 text-slate-800 border border-blue-100" : "text-slate-500 hover:text-slate-700 hover:bg-slate-50 border border-transparent"}`}>
                        <input type="checkbox" checked={isChecked} onChange={() => { setSelectedTpIds(prev => prev.includes(tp.id) ? prev.filter(id => id !== tp.id) : [...prev, tp.id]) }} className="mt-0.5 rounded border-slate-300 text-gemini-blue focus:ring-gemini-blue cursor-pointer" />
                        <div className="flex-1">
                          <span className="font-bold text-gemini-blue">[{tp.code}]</span>
                          <p className="font-normal text-slate-500 mt-0.5 leading-relaxed">{tp.description}</p>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Total Soal Target */}
              <div className="space-y-2 border-t pt-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5" /> Total Target Soal
                </label>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setTotalTarget(p => Math.max(1, p - 1))}
                    className="w-8 h-8 rounded-lg border hover:bg-slate-50 flex items-center justify-center font-bold"
                  >
                    -
                  </button>
                  <span className="text-base font-black w-8 text-center">{totalTarget}</span>
                  <button 
                    onClick={() => setTotalTarget(p => p + 1)}
                    className="w-8 h-8 rounded-lg border hover:bg-slate-50 flex items-center justify-center font-bold"
                  >
                    +
                  </button>
                  <span className="text-[10px] text-slate-400 font-bold uppercase">Butir Soal</span>
                </div>
              </div>

              {/* Komposisi Jenis Soal */}
              <div className="space-y-2 border-t pt-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Komposisi Tipe Soal
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {/* PG Single */}
                  <div className="flex items-center justify-between p-2 rounded-xl border bg-slate-50/50">
                    <span className="text-[10px] font-semibold text-slate-600">PG (A-D)</span>
                    <div className="flex items-center gap-1.5">
                      <button onClick={() => setComposition(p => ({ ...p, pgSingle: Math.max(0, p.pgSingle - 1) }))} className="w-5 h-5 rounded bg-white border flex items-center justify-center font-bold">-</button>
                      <span className="font-bold w-4 text-center">{composition.pgSingle}</span>
                      <button onClick={() => setComposition(p => ({ ...p, pgSingle: p.pgSingle + 1 }))} className="w-5 h-5 rounded bg-white border flex items-center justify-center font-bold">+</button>
                    </div>
                  </div>
                  {/* PG Complex */}
                  <div className="flex items-center justify-between p-2 rounded-xl border bg-slate-50/50">
                    <span className="text-[10px] font-semibold text-slate-600">PG Kompleks</span>
                    <div className="flex items-center gap-1.5">
                      <button onClick={() => setComposition(p => ({ ...p, pgComplex: Math.max(0, p.pgComplex - 1) }))} className="w-5 h-5 rounded bg-white border flex items-center justify-center font-bold">-</button>
                      <span className="font-bold w-4 text-center">{composition.pgComplex}</span>
                      <button onClick={() => setComposition(p => ({ ...p, pgComplex: p.pgComplex + 1 }))} className="w-5 h-5 rounded bg-white border flex items-center justify-center font-bold">+</button>
                    </div>
                  </div>
                  {/* Menjodohkan */}
                  <div className="flex items-center justify-between p-2 rounded-xl border bg-slate-50/50">
                    <span className="text-[10px] font-semibold text-slate-600">Menjodohkan</span>
                    <div className="flex items-center gap-1.5">
                      <button onClick={() => setComposition(p => ({ ...p, menjodohkan: Math.max(0, p.menjodohkan - 1) }))} className="w-5 h-5 rounded bg-white border flex items-center justify-center font-bold">-</button>
                      <span className="font-bold w-4 text-center">{composition.menjodohkan}</span>
                      <button onClick={() => setComposition(p => ({ ...p, menjodohkan: p.menjodohkan + 1 }))} className="w-5 h-5 rounded bg-white border flex items-center justify-center font-bold">+</button>
                    </div>
                  </div>
                  {/* Isian Singkat */}
                  <div className="flex items-center justify-between p-2 rounded-xl border bg-slate-50/50">
                    <span className="text-[10px] font-semibold text-slate-600">Isian Singkat</span>
                    <div className="flex items-center gap-1.5">
                      <button onClick={() => setComposition(p => ({ ...p, isian: Math.max(0, p.isian - 1) }))} className="w-5 h-5 rounded bg-white border flex items-center justify-center font-bold">-</button>
                      <span className="font-bold w-4 text-center">{composition.isian}</span>
                      <button onClick={() => setComposition(p => ({ ...p, isian: p.isian + 1 }))} className="w-5 h-5 rounded bg-white border flex items-center justify-center font-bold">+</button>
                    </div>
                  </div>
                  {/* Uraian */}
                  <div className="flex items-center justify-between p-2 rounded-xl border bg-slate-50/50">
                    <span className="text-[10px] font-semibold text-slate-600">Uraian / Essay</span>
                    <div className="flex items-center gap-1.5">
                      <button onClick={() => setComposition(p => ({ ...p, uraian: Math.max(0, p.uraian - 1) }))} className="w-5 h-5 rounded bg-white border flex items-center justify-center font-bold">-</button>
                      <span className="font-bold w-4 text-center">{composition.uraian}</span>
                      <button onClick={() => setComposition(p => ({ ...p, uraian: p.uraian + 1 }))} className="w-5 h-5 rounded bg-white border flex items-center justify-center font-bold">+</button>
                    </div>
                  </div>
                  {/* Benar / Salah */}
                  <div className="flex items-center justify-between p-2 rounded-xl border bg-slate-50/50">
                    <span className="text-[10px] font-semibold text-slate-600">Benar/Salah</span>
                    <div className="flex items-center gap-1.5">
                      <button onClick={() => setComposition(p => ({ ...p, benarSalah: Math.max(0, p.benarSalah - 1) }))} className="w-5 h-5 rounded bg-white border flex items-center justify-center font-bold">-</button>
                      <span className="font-bold w-4 text-center">{composition.benarSalah}</span>
                      <button onClick={() => setComposition(p => ({ ...p, benarSalah: p.benarSalah + 1 }))} className="w-5 h-5 rounded bg-white border flex items-center justify-center font-bold">+</button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${currentCompositionTotal === totalTarget ? "text-emerald-600" : "text-rose-600"}`}>
                    Komposisi Soal: {currentCompositionTotal} / {totalTarget}
                  </span>
                </div>
              </div>

              {/* Distribusi Kesulitan */}
              <div className="space-y-2 border-t pt-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex justify-between">
                  <span>Rasio Tingkat Kesulitan</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <span className="text-[9px] text-slate-500 font-bold block mb-1">Mudah (%)</span>
                    <input type="number" value={difficulty.mudah} onChange={e => setDifficulty(p => ({ ...p, mudah: parseInt(e.target.value) || 0 }))} className="w-full p-2 border rounded-lg text-center font-semibold bg-white" />
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-500 font-bold block mb-1">Sedang (%)</span>
                    <input type="number" value={difficulty.sedang} onChange={e => setDifficulty(p => ({ ...p, sedang: parseInt(e.target.value) || 0 }))} className="w-full p-2 border rounded-lg text-center font-semibold bg-white" />
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-500 font-bold block mb-1">Sulit (%)</span>
                    <input type="number" value={difficulty.sulit} onChange={e => setDifficulty(p => ({ ...p, sulit: parseInt(e.target.value) || 0 }))} className="w-full p-2 border rounded-lg text-center font-semibold bg-white" />
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-[10px] font-bold uppercase ${currentDifficultyTotal === 100 ? "text-emerald-600" : "text-rose-600"}`}>
                    Total Persen: {currentDifficultyTotal}% / 100%
                  </span>
                </div>
              </div>

              {/* Konteks */}
              <div className="space-y-2 border-t pt-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Konteks Pembahasan
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input type="radio" checked={contextType === "kontekstual"} onChange={() => setContextType("kontekstual")} className="cursor-pointer" />
                    <span>Kontekstual</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input type="radio" checked={contextType === "konceptual"} onChange={() => setContextType("konceptual")} className="cursor-pointer" />
                    <span>Konseptual</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input type="radio" checked={contextType === "campuran"} onChange={() => setContextType("campuran")} className="cursor-pointer" />
                    <span>Campuran</span>
                  </label>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t">
                <input type="checkbox" id="disc" checked={includeDiscussion} onChange={e => setIncludeDiscussion(e.target.checked)} className="cursor-pointer w-4 h-4 text-gemini-blue" />
                <label htmlFor="disc" className="text-[10px] font-bold text-slate-500 uppercase tracking-wide cursor-pointer">Sertakan kunci jawaban & pembahasan</label>
              </div>
            </div>

            <div className="pt-4 border-t">
              <button 
                onClick={handleGenerateBulk} 
                disabled={genStatus === "generating" || selectedTpIds.length === 0 || !isBlueprintValid} 
                className="w-full flex items-center justify-center gap-2 bg-gemini-blue hover:bg-gemini-blue/90 disabled:bg-slate-100 disabled:text-slate-400 text-white font-bold py-3.5 rounded-xl transition-all shadow-md active:scale-98"
              >
                {genStatus === "generating" ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> Merancang Cetak Biru Soal...</>
                ) : (
                  <><Sparkles className="w-5 h-5" /> 1-Click Generate Massal</>
                )}
              </button>
            </div>
          </div>

          {/* GENERATE PREVIEW WINDOW */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Generating Progress Bar */}
            {genStatus === "generating" && (
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-gemini-blue flex items-center justify-center mx-auto border animate-pulse">
                  <RefreshCw className="w-6 h-6 animate-spin" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-extrabold text-sm text-slate-800">Sedang Merakit Soal AKM Massal...</h4>
                  <p className="text-xs text-slate-400 italic font-medium">{currentProgressText}</p>
                </div>
                {/* Progress bar line */}
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-gemini-blue h-2 rounded-full transition-all duration-300" style={{ width: `${genProgress}%` }}></div>
                </div>
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">{genProgress}% Selesai</span>
              </div>
            )}

            {genStatus === "idle" && generatedDrafts.length === 0 && (
              <div className="bg-white border-2 border-dashed border-slate-200 p-12 rounded-3xl text-center space-y-4 text-slate-400 min-h-[350px] flex flex-col justify-center items-center">
                <div className="p-4 rounded-full bg-blue-50/50 text-gemini-blue border border-blue-100">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h4 className="font-extrabold text-slate-700 text-sm">Belum Ada Soal Ter-generate</h4>
                <p className="text-xs max-w-sm mx-auto leading-relaxed">
                  Tentukan spesifikasi cetak biru soal Anda di panel menu kiri, lalu tekan tombol Generate Massal untuk merumuskan paket soal secara dinamis.
                </p>
              </div>
            )}

            {genStatus === "error" && (
              <div className="bg-rose-50 border border-rose-100 p-6 rounded-3xl flex items-center gap-3 text-rose-600 text-xs font-semibold">
                <AlertTriangle className="w-5 h-5 shrink-0" /> Gagal memanggil AI Engine. Pastikan Groq API Key terpasang dengan benar di file .env.
              </div>
            )}

            {/* Generated Draft List Preview */}
            {genStatus === "success" && generatedDrafts.length > 0 && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 bg-emerald-50 border border-emerald-100 p-4 rounded-2xl">
                  <div>
                    <h4 className="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> {generatedDrafts.length} Draf Soal AKM Berhasil Dirumuskan
                    </h4>
                    <p className="text-[10px] text-emerald-600 mt-0.5">Tinjau stimulus dan butir soal di bawah sebelum menyimpan ke Bank Soal.</p>
                  </div>
                  <button 
                    onClick={handleSaveDraftsToBank} 
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all shadow-md flex items-center gap-1.5 self-start sm:self-center"
                  >
                    <Save className="w-4 h-4" /> Simpan Semua ke Bank Soal
                  </button>
                </div>

                <div className="space-y-4">
                  {generatedDrafts.map((soal, index) => (
                    <div key={index} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4 relative">
                      <div className="flex justify-between items-center border-b pb-2.5">
                        <span className="text-xs font-black text-slate-800">Butir Soal #{index + 1}</span>
                        <div className="flex gap-2">
                          <span className="text-[9px] bg-blue-50 border text-gemini-blue font-bold px-2 py-0.5 rounded-full">{soal.cognitiveLevel}</span>
                          <span className="text-[9px] bg-slate-100 border text-slate-600 font-bold px-2 py-0.5 rounded-full">{soal.akmType}</span>
                        </div>
                      </div>

                      {/* Stimulus */}
                      {soal.stimulus && (
                        <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Stimulus:</p>
                          <p className="text-xs text-slate-700 leading-relaxed italic">{soal.stimulus}</p>
                        </div>
                      )}

                      {/* Pertanyaan */}
                      <div className="space-y-1">
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Pertanyaan:</p>
                        <p className="text-xs font-bold text-slate-800 leading-relaxed">{soal.pertanyaan}</p>
                      </div>

                      {/* Options */}
                      {soal.options && renderOptions(soal.options, false)}

                      {/* Kunci Jawaban */}
                      <div className="p-3 bg-blue-50/30 border border-blue-100/50 rounded-xl flex justify-between items-center">
                        <div className="space-y-0.5">
                          <span className="text-[9px] text-gemini-blue font-extrabold uppercase tracking-wider block">Kunci Jawaban & Pembahasan:</span>
                          {typeof soal.kunciJawaban === "object" && soal.kunciJawaban !== null ? (
                            <div className="mt-2">{renderOptions(soal.kunciJawaban, false)}</div>
                          ) : (
                            <p className="text-xs font-bold text-slate-700">{String(soal.kunciJawaban)}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: KOLEKSI & PAKET UJIAN */}
      {activeTab === "koleksi" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Soals List Table */}
          <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b pb-4">
              <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider flex items-center gap-2">
                Daftar Bank Soal
              </h3>
              <div className="flex gap-2 items-center flex-wrap">
                <select 
                  value={selectedFilterCode} 
                  onChange={e => setSelectedFilterCode(e.target.value)}
                  className="p-2 border rounded-xl text-xs font-bold text-slate-600 bg-slate-50 outline-none"
                >
                  <option value="all">Semua Soal (All)</option>
                  {generateCodes.map(code => (
                    <option key={code} value={code}>{code}</option>
                  ))}
                </select>
                {filteredSoalsList.length > 0 && (
                  <button 
                    onClick={handleCreatePaket} 
                    className="bg-gemini-blue hover:bg-gemini-blue/90 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all shadow-md flex items-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" /> Rakit Paket Ujian ({selectedSoalIds.length})
                  </button>
                )}
              </div>
            </div>

            {/* Assemble Form panel */}
            {showAssembleForm && (
              <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-2xl space-y-4 animate-slideDown">
                <div>
                  <h4 className="text-xs font-bold text-slate-700">Tentukan Nama Paket Ujian</h4>
                  <p className="text-[10px] text-slate-400">Gunakan format yang jelas seperti Gelombang/Sesi (Contoh: TKA Matematika - Gel 1 Sesi A)</p>
                </div>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={paketName} 
                    onChange={e => setPaketName(e.target.value)} 
                    placeholder="Nama Paket Ujian..." 
                    className="flex-1 p-2.5 border rounded-xl bg-white text-xs outline-none focus:border-gemini-blue"
                  />
                  <button 
                    onClick={handleSavePaket} 
                    disabled={isPendingSavePaket} 
                    className="bg-gemini-blue hover:bg-gemini-blue/90 text-white font-bold text-xs px-4 rounded-xl transition-all flex items-center gap-1.5"
                  >
                    {isPendingSavePaket ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                    Simpan Paket
                  </button>
                  <button 
                    onClick={() => setShowAssembleForm(false)} 
                    className="border border-slate-300 hover:bg-slate-100 text-slate-500 text-xs px-3 rounded-xl transition-all"
                  >
                    Batal
                  </button>
                </div>
              </div>
            )}

            {filteredSoalsList.length === 0 ? (
              <div className="py-12 text-center text-slate-400 space-y-2 border-2 border-dashed rounded-3xl">
                <FileText className="w-12 h-12 mx-auto opacity-35" />
                <p className="text-xs font-bold text-slate-500">Bank Soal Masih Kosong</p>
                <p className="text-[10px]">Silakan kembali ke Tab "Generate Soal" atau ganti filter Kode Generate.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b-2 text-slate-400 font-extrabold uppercase tracking-wider font-bold">
                      <th className="py-3 pl-2 w-8">
                        <button onClick={handleToggleSelectAll} className="text-slate-400 hover:text-slate-600">
                          {selectedSoalIds.length === filteredSoalsList.length && filteredSoalsList.length > 0 ? <CheckSquare className="w-4 h-4 text-gemini-blue" /> : <Square className="w-4 h-4" />}
                        </button>
                      </th>
                      <th className="py-3">Soal / Stimulus</th>
                      <th className="py-3 w-28">Tipe AKM</th>
                      <th className="py-3 w-24">Kognitif</th>
                      <th className="py-3 w-12 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSoalsList.map((soal) => {
                      const isChecked = selectedSoalIds.includes(soal.id);
                      return (
                        <tr key={soal.id} className={`border-b hover:bg-slate-50/50 cursor-pointer ${isChecked ? "bg-blue-50/10" : ""}`} onClick={() => handleToggleCheckSoal(soal.id)}>
                          <td className="py-4 pl-2" onClick={e => e.stopPropagation()}>
                            <button onClick={() => handleToggleCheckSoal(soal.id)} className="text-slate-400">
                              {isChecked ? <CheckSquare className="w-4 h-4 text-gemini-blue" /> : <Square className="w-4 h-4" />}
                            </button>
                          </td>
                          <td className="py-4 pr-3 max-w-sm">
                            <p className="font-semibold text-slate-700 line-clamp-2">{soal.pertanyaan}</p>
                            {soal.stimulus && (
                              <p className="text-[10px] text-slate-400 truncate mt-1">Stimulus: {soal.stimulus}</p>
                            )}
                          </td>
                          <td className="py-4 text-slate-500 font-medium">{soal.akmType}</td>
                          <td className="py-4 text-slate-500 font-medium">{soal.cognitiveLevel}</td>
                          <td className="py-4 text-right" onClick={e => e.stopPropagation()}>
                            <button 
                              onClick={(e) => handleDeleteSoal(soal.id, e)} 
                              className="p-2 rounded-lg hover:bg-rose-50 text-slate-400 hover:text-rose-600"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Packets List Panel */}
          <div className="lg:col-span-1 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <PackageOpen className="w-4 h-4 text-gemini-blue" /> Paket Ujian Terakit ({paketsList.length})
            </h3>
            
            {paketsList.length === 0 ? (
              <div className="py-8 text-center border-2 border-dashed border-slate-100 rounded-2xl text-slate-400">
                <p className="text-xs font-bold text-slate-500">Belum Ada Paket Ujian</p>
                <p className="text-[9px] mt-1">Pilih soal di tabel sebelah kiri lalu klik "Rakit Paket Ujian".</p>
              </div>
            ) : (
              <div className="space-y-2">
                {paketsList.map((paket) => (
                  <div key={paket.id} className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/10 text-left">
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-extrabold text-slate-700 truncate">{paket.name}</p>
                      <p className="text-[10px] text-slate-400 font-semibold mt-0.5">{paket.soalIds.length} Soal Terpilih</p>
                    </div>
                    <div className="flex items-center gap-1.5 ml-2">
                      <button 
                        onClick={() => handlePrintPaket(paket)} 
                        className="p-2 rounded-lg hover:bg-blue-50 text-slate-400 hover:text-gemini-blue shrink-0"
                        title="Cetak/Preview"
                      >
                        <Printer className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={(e) => handleDeletePaket(paket.id, e)} 
                        className="p-2 rounded-lg hover:bg-rose-50 text-slate-400 hover:text-rose-600 shrink-0"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      )}
    </div>
  );
}
