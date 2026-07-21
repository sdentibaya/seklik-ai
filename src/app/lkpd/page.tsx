"use client";

import { useState, useEffect, useTransition } from "react";
import { 
  getLkpdSetupDataAction, 
  generateLkpdAction, 
  saveLkpdAction, 
  deleteLkpdAction,
} from "./actions";
import { 
  FileText, Sparkles, Trash2, Printer, Save, ArrowLeft, Loader2, AlertTriangle, 
  BookOpen, Brain, LayoutList, ChevronRight, CheckCircle2, RefreshCw, Layers, Target, FolderHeart
} from "lucide-react";
import SignatureBlock from "@/components/SignatureBlock";
import Link from "next/link";

export default function LkpdPage() {
  const [loading, setLoading] = useState(true);
  const [isPendingGen, startTransitionGen] = useTransition();
  const [isPendingSave, startTransitionSave] = useTransition();
  const [isPendingDelete, startTransitionDelete] = useTransition();

  const [phases, setPhases] = useState<{id: string, name: string}[]>([]);
  const [allTps, setAllTps] = useState<any[]>([]);
  const [savedLkpds, setSavedLkpds] = useState<any[]>([]);

  // Form State
  const [selectedPhaseId, setSelectedPhaseId] = useState("");
  const [selectedTpIds, setSelectedTpIds] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>(["Menjodohkan"]);

  const [genStatus, setGenStatus] = useState<"idle" | "success" | "error">("idle");
  const [saveStatus, setSaveStatus] = useState<"idle" | "success" | "error">("idle");

  const [currentLkpd, setCurrentLkpd] = useState<any | null>(null);

  // Filter TP berdasarkan Fase yang dipilih
  const filteredTps = allTps.filter(tp => tp.phaseId === selectedPhaseId);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const data = await getLkpdSetupDataAction();
        setPhases(data.phases);
        setAllTps(data.tps);
        setSavedLkpds(data.savedLkpds);

        if (data.activeSetup) {
          setSelectedPhaseId(data.activeSetup.phaseId);
        } else if (data.phases.length > 0) {
          setSelectedPhaseId(data.phases[0].id);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // Auto-select TP pertama saat fase berubah
  useEffect(() => {
    if (filteredTps.length > 0) {
      setSelectedTpIds([filteredTps[0].id]);
    } else {
      setSelectedTpIds([]);
    }
  }, [selectedPhaseId, allTps]);

  const handleGenerate = () => {
    if (selectedTpIds.length === 0) return;
    
    setGenStatus("idle");
    const targetTps = allTps.filter(t => selectedTpIds.includes(t.id));
    const selectedPhase = phases.find(p => p.id === selectedPhaseId);

    const tpDescriptions = targetTps.map(t => `[${t.code}] ${t.description}`).join("\n");

    startTransitionGen(async () => {
      const res = await generateLkpdAction({
        tpIds: selectedTpIds,
        tpText: tpDescriptions,
        phaseName: selectedPhase?.name || "",
        types: selectedTypes
      });

      if (res.success && res.content) {
        setGenStatus("success");
        setCurrentLkpd({
          tpIds: selectedTpIds,
          tpText: tpDescriptions,
          types: selectedTypes,
          content: res.content,
          isSaved: false
        });
      } else {
        setGenStatus("error");
      }
    });
  };

  const handleSaveLkpd = () => {
    if (!currentLkpd || currentLkpd.isSaved) return;

    setSaveStatus("idle");
    startTransitionSave(async () => {
      const res = await saveLkpdAction(
        currentLkpd.tpIds,
        currentLkpd.types,
        "Menengah", // default difficulty bypass since it's removed from UI
        JSON.stringify(currentLkpd.content)
      );

      if (res.success && res.lkpd) {
        setSaveStatus("success");
        const newLkpd = { ...res.lkpd, tps: currentLkpd.tpIds.map((id:string) => ({ id, description: "TP" })) };
        setCurrentLkpd((prev: any) => prev ? { ...prev, id: res.lkpd.id, isSaved: true } : null);
        setSavedLkpds((prev: any) => [newLkpd, ...prev]);
        setTimeout(() => setSaveStatus("idle"), 3000);
      } else {
        setSaveStatus("error");
      }
    });
  };

  const handleLoadSavedLkpd = (lkpd: any) => {
    try {
      setCurrentLkpd({
        id: lkpd.id,
        tpIds: lkpd.tps ? lkpd.tps.map((t: any) => t.id) : [],
        tpText: lkpd.tps ? lkpd.tps.map((t: any) => `[${t.code}] ${t.description}`).join("\n") : "",
        types: lkpd.type ? lkpd.type.split(", ") : [],
        content: JSON.parse(lkpd.content),
        isSaved: true
      });
    } catch (e) {
      console.error("Gagal membaca LKPD", e);
    }
  };

  const handleDeleteLkpd = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm("Hapus LKPD ini dari pustaka?")) return;

    startTransitionDelete(async () => {
      const res = await deleteLkpdAction(id);
      if (res.success) {
        setSavedLkpds((prev: any) => prev.filter((l: any) => l.id !== id));
        if (currentLkpd?.id === id) setCurrentLkpd(null);
      }
    });
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-3">
        <Loader2 className="w-8 h-8 text-gemini-blue animate-spin" />
        <p className="text-slate-500 font-medium text-sm">Memuat data LKPD...</p>
      </div>
    );
  }

  // --- VIEW MODE (DOKUMEN A4) ---
  if (currentLkpd) {
    const { content, type } = currentLkpd;
    return (
      <div className="space-y-8 pb-16 animate-fadeIn">
        {/* Action Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-3xl border border-border-gray shadow-sm print:hidden">
          <div className="flex items-center gap-4">
            <button onClick={() => setCurrentLkpd(null)} className="p-3 rounded-xl border border-slate-100 hover:bg-slate-50 text-slate-500 hover:text-slate-700 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h2 className="font-black text-slate-800 text-lg leading-tight truncate max-w-md">LKPD: {content.title}</h2>
              <p className="text-xs text-slate-400 font-medium mt-1">Jenis: {currentLkpd.types?.join(", ")}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {!currentLkpd.isSaved && (
              <button onClick={handleSaveLkpd} disabled={isPendingSave} className="flex items-center gap-2 bg-gemini-blue hover:bg-gemini-blue/90 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-md active:scale-98">
                {isPendingSave ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                Simpan ke Pustaka
              </button>
            )}
            <button onClick={() => window.print()} className="flex items-center gap-2 border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-bold px-5 py-2.5 rounded-xl transition-all">
              <Printer className="w-4 h-4" /> Cetak PDF
            </button>
          </div>
        </div>

        {/* LKPD Canvas (A4 simulation) */}
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-border-gray shadow-sm max-w-4xl mx-auto print:rounded-none print:border-none print:shadow-none print:p-0 print:max-w-none text-slate-800">
          
          <div className="border-b-4 border-double border-slate-800 pb-4 mb-6 flex flex-col items-center text-center">
            <h1 className="text-xl font-black uppercase tracking-wider">Lembar Kerja Peserta Didik (LKPD)</h1>
            <h2 className="text-sm font-bold mt-1 text-slate-600">KURIKULUM MERDEKA</h2>
          </div>

          <div className="space-y-8 text-sm">
            {/* A. IDENTITAS */}
            <div>
              <h3 className="font-bold text-base mb-3">A. IDENTITAS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <span className="w-32">Nama Siswa</span>
                    <span>: ........................................</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="w-32">Satuan Pendidikan</span>
                    <span>: ........................................</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="w-32">Kelas / Fase</span>
                    <span>: ........................................</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <span className="w-32">Mata Pelajaran</span>
                    <span>: ........................................</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="w-32">Semester</span>
                    <span>: ........................................</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="w-32">Tahun Ajaran</span>
                    <span>: ........................................</span>
                  </div>
                </div>
              </div>
            </div>

            {/* B. JUDUL KEGIATAN */}
            <div>
              <h3 className="font-bold text-base mb-1">B. JUDUL KEGIATAN</h3>
              <p className="pl-5 leading-relaxed">{content.title}</p>
            </div>

            {/* C. TUJUAN */}
            <div>
              <h3 className="font-bold text-base mb-1">C. TUJUAN PEMBELAJARAN</h3>
              <ul className="list-disc pl-9 space-y-1">
                {content.goals?.map((goal: string, i: number) => (
                  <li key={i}>{goal}</li>
                ))}
              </ul>
            </div>

            {/* D. PETUNJUK KERJA */}
            <div>
              <h3 className="font-bold text-base mb-1">D. PETUNJUK KERJA</h3>
              <ul className="list-decimal pl-9 space-y-1">
                {content.instructions?.map((inst: string, i: number) => (
                  <li key={i}>{inst}</li>
                ))}
              </ul>
            </div>

            {/* E. ALAT DAN BAHAN */}
            {content.materials && content.materials.length > 0 && (
              <div>
                <h3 className="font-bold text-base mb-1">E. ALAT DAN BAHAN</h3>
                <ul className="list-disc pl-9 space-y-1">
                  {content.materials.map((mat: string, i: number) => (
                    <li key={i}>{mat}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* F. KEGIATAN */}
            <div>
              <h3 className="font-bold text-base mb-3">F. KEGIATAN & TUGAS</h3>
              
              <div className="overflow-x-auto print:overflow-visible">
                <table className="w-full border-collapse border border-slate-800 text-sm">
                  <thead>
                    <tr className="bg-slate-100 print:bg-slate-100">
                      <th className="border border-slate-800 p-2 w-10 text-center">No</th>
                      <th className="border border-slate-800 p-2 w-48">LANGKAH</th>
                      <th className="border border-slate-800 p-2 w-64">INSTRUKSI</th>
                      <th className="border border-slate-800 p-2">PERTANYAAN / TUGAS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {content.activities?.map((act: any, idx: number) => (
                      <tr key={idx}>
                        <td className="border border-slate-800 p-3 text-center align-top font-bold">{idx + 1}</td>
                        <td className="border border-slate-800 p-3 align-top font-semibold">{act.step}</td>
                        <td className="border border-slate-800 p-3 align-top leading-relaxed whitespace-pre-wrap">{act.instruction}</td>
                        <td className="border border-slate-800 p-3 align-top space-y-6">
                          {act.questions?.map((q: any, qIdx: number) => {
                            if (typeof q === "string") {
                              return (
                                <div key={qIdx} className="space-y-4">
                                  <p className="leading-relaxed">{q}</p>
                                  <div className="space-y-3">
                                    <div className="border-b border-dotted border-slate-400 w-full h-2"></div>
                                    <div className="border-b border-dotted border-slate-400 w-full h-2"></div>
                                  </div>
                                </div>
                              );
                            }
                            if (q.options) {
                              return (
                                <div key={qIdx} className="space-y-2">
                                  <p className="font-medium leading-relaxed">{q.question}</p>
                                  <div className="space-y-1.5 pl-2">
                                    {q.options.map((opt: string, optIdx: number) => (
                                      <label key={optIdx} className="flex gap-2 items-start">
                                        <span className="w-4 h-4 rounded-full border border-slate-800 inline-block shrink-0 mt-0.5"></span>
                                        <span className="leading-snug">{opt}</span>
                                      </label>
                                    ))}
                                  </div>
                                </div>
                              );
                            }
                            if (q.leftColumn && q.rightColumn) {
                              return (
                                <div key={qIdx} className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center mb-4">
                                  <div className="border border-slate-800 p-2 rounded text-center">{q.leftColumn}</div>
                                  <div className="text-slate-400">..........</div>
                                  <div className="border border-slate-800 p-2 rounded text-center">{q.rightColumn}</div>
                                </div>
                              );
                            }
                            if (q.question) {
                              return (
                                <div key={qIdx} className="space-y-4">
                                  <p className="font-medium leading-relaxed">{q.question}</p>
                                  <div className="space-y-3">
                                    <div className="border-b border-dotted border-slate-400 w-full h-2"></div>
                                    <div className="border-b border-dotted border-slate-400 w-full h-2"></div>
                                    <div className="border-b border-dotted border-slate-400 w-full h-2"></div>
                                  </div>
                                </div>
                              );
                            }
                            return null;
                          })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* G. RUBRIK PENILAIAN */}
            {content.rubrics && content.rubrics.length > 0 && (
              <div className="break-inside-avoid">
                <h3 className="font-bold text-base mb-1">G. RUBRIK PENILAIAN</h3>
                <ul className="list-decimal pl-9 space-y-1">
                  {content.rubrics.map((rubric: string, i: number) => (
                    <li key={i}>{rubric}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Signatures */}
            <SignatureBlock />

          </div>
        </div>
      </div>
    );
  }

  // --- FORM MODE ---
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start max-w-7xl mx-auto pb-12">
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-border-gray shadow-sm space-y-6">
          <div className="border-b pb-4">
            <span className="text-[10px] bg-blue-50 text-gemini-blue font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border border-blue-100">
              LKPD Merdeka Belajar
            </span>
            <h2 className="text-xl font-black text-slate-800 tracking-tight mt-2.5">Buat Lembar Kerja Berbasis TP</h2>
            <p className="text-xs text-slate-400 mt-1 font-medium leading-relaxed">
              AI akan mendesain LKPD yang selaras dengan Tujuan Pembelajaran dan disesuaikan secara visual/kognitif berdasarkan Fase Anak.
            </p>
          </div>

          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" /> 1. Pilih Fase Kelas
                </label>
                <select value={selectedPhaseId} onChange={e => setSelectedPhaseId(e.target.value)} className="w-full p-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 bg-white hover:border-slate-300 focus:border-gemini-blue outline-none cursor-pointer">
                  {phases.map(p => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5" /> 2. Jenis LKPD
                  </label>
                  <button onClick={() => setSelectedTypes([])} className="text-[10px] font-bold text-slate-500 bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded">Kosongkan</button>
                </div>
                
                <div className="grid grid-cols-1 gap-2 max-h-60 overflow-y-auto bg-slate-50/50 p-4 rounded-2xl border border-slate-100 custom-scrollbar">
                  {[
                    { group: "Visual & Motorik (Fase A)", items: ["Menjodohkan", "Tracing & Mewarnai"] },
                    { group: "Eksplorasi Kosakata (Fase B)", items: ["Teka-Teki Silang (TTS)", "Cari Kata"] },
                    { group: "Analisis & Logika (Fase C)", items: ["Studi Kasus Singkat", "Peta Konsep", "Lembar Observasi"] }
                  ].map((category, idx) => (
                    <div key={idx} className="mb-2 last:mb-0">
                      <div className="text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider">{category.group}</div>
                      <div className="space-y-1.5">
                        {category.items.map(type => {
                          const isChecked = selectedTypes.includes(type);
                          return (
                            <label key={type} className={`flex items-center gap-2 p-2 rounded-xl cursor-pointer transition-colors text-xs font-semibold ${isChecked ? "bg-blue-50/50 text-slate-800 border border-blue-100" : "text-slate-500 hover:text-slate-700 hover:bg-slate-50 border border-transparent"}`}>
                              <input type="checkbox" checked={isChecked} onChange={() => { setSelectedTypes(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]) }} className="rounded border-slate-300 text-gemini-blue focus:ring-gemini-blue cursor-pointer" />
                              <span className="flex-1">{type}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" /> 3. Tujuan Pembelajaran (Terfilter sesuai Fase)
                </label>
                <div className="flex gap-2">
                  <button onClick={() => setSelectedTpIds(filteredTps.map(t => t.id))} className="text-[10px] font-bold text-gemini-blue bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded">Pilih Semua</button>
                  <button onClick={() => setSelectedTpIds([])} className="text-[10px] font-bold text-slate-500 bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded">Kosongkan</button>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-2 max-h-60 overflow-y-auto bg-slate-50/50 p-4 rounded-2xl border border-slate-100 custom-scrollbar">
                {filteredTps.map(tp => {
                  const isChecked = selectedTpIds.includes(tp.id);
                  return (
                    <label key={tp.id} className={`flex items-start gap-3 p-2 rounded-xl cursor-pointer transition-colors text-xs font-semibold ${isChecked ? "bg-blue-50/50 text-slate-800 border border-blue-100" : "text-slate-500 hover:text-slate-700 hover:bg-slate-50 border border-transparent"}`}>
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

            <div className="pt-4 border-t">
              <button onClick={handleGenerate} disabled={isPendingGen || selectedTpIds.length === 0 || selectedTypes.length === 0} className="w-full flex items-center justify-center gap-2 bg-gemini-blue hover:bg-gemini-blue/90 disabled:bg-slate-100 disabled:text-slate-400 text-white font-bold py-3.5 rounded-xl transition-all shadow-md active:scale-98">
                {isPendingGen ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> Menganalisa TP & Merancang LKPD...</>
                ) : (
                  <><Sparkles className="w-5 h-5" /> 1-Click Generate LKPD</>
                )}
              </button>
            </div>

            {genStatus === "error" && (
              <div className="flex items-center gap-2 text-rose-600 text-xs font-semibold bg-rose-50 p-3.5 rounded-xl border border-rose-100 animate-fadeIn">
                <AlertTriangle className="w-4 h-4 shrink-0" /> Gagal membuat LKPD. Periksa koneksi API Key Anda.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Library Panel */}
      <div className="lg:col-span-1 space-y-6">
        <div className="bg-white p-6 rounded-3xl border border-border-gray shadow-sm space-y-4">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <FolderHeart className="w-4 h-4 text-slate-400" /> Pustaka LKPD Saya
          </h3>
          
          {savedLkpds.length === 0 ? (
            <div className="py-8 text-center border-2 border-dashed border-slate-100 rounded-2xl text-slate-400 space-y-2">
              <FileText className="w-10 h-10 mx-auto opacity-55" />
              <p className="text-xs font-bold text-slate-500">Belum Ada LKPD</p>
            </div>
          ) : (
            <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
              {savedLkpds.map((lkpd) => (
                <div key={lkpd.id} onClick={() => handleLoadSavedLkpd(lkpd)} className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/20 text-left cursor-pointer group">
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-extrabold text-slate-700 truncate group-hover:text-gemini-blue">{lkpd.type}</p>
                    <p className="text-[10px] text-slate-400 font-medium mt-0.5">
                      {lkpd.tps && lkpd.tps.length > 0 ? lkpd.tps.map((t:any) => t.code).join(", ") : "TP"} • {lkpd.tps && lkpd.tps.length > 0 ? (lkpd.tps[0].description.substring(0, 30) + "...") : ""}
                    </p>
                  </div>
                  <button onClick={(e) => handleDeleteLkpd(lkpd.id, e)} disabled={isPendingDelete} className="p-2 rounded-lg hover:bg-rose-50 text-slate-400 hover:text-rose-600 shrink-0">
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
