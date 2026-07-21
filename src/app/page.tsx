import Link from "next/link";
import { db } from "@/lib/db";
import { getOptionalUserId } from "@/lib/session";
import { 
  ArrowRight, 
  Settings, 
  Brain, 
  Calendar, 
  FileText, 
  CheckCircle2, 
  AlertCircle,
  GraduationCap,
  ChevronRight
} from "lucide-react";

export default async function DashboardPage() {
  const userId = await getOptionalUserId();
  const activeSetup = userId
    ? await db.classSetup.findUnique({ where: { userId } })
    : null;

  let subjectName = "";
  let phaseName = "";
  let classesInfo = "";

  if (activeSetup) {
    const subject = await db.subject.findUnique({
      where: { id: activeSetup.subjectId },
    });
    const phase = await db.phase.findUnique({
      where: { id: activeSetup.phaseId },
    });
    if (subject && phase) {
      subjectName = subject.name;
      phaseName = phase.name;
      classesInfo = phase.classes;
    }
  }

  const steps = [
    {
      phase: 1,
      title: "Setup & Master Data",
      desc: "Konfigurasi awal mata pelajaran dan penarikan CP resmi Kemdikbud.",
      status: activeSetup ? "completed" : "active",
      href: "/setup",
      icon: Settings,
    },
    {
      phase: 2,
      title: "AI Ekstraksi TP & ATP",
      desc: "Ekstraksi otomatis Tujuan Pembelajaran dari CP dan penyusunan ATP.",
      status: activeSetup ? "active" : "locked",
      href: activeSetup ? "/tp-atp" : "#",
      icon: Brain,
    },
    {
      phase: 3,
      title: "Penjadwalan & OCR (Promes)",
      desc: "Alokasi waktu TP di kalender dan sinkronisasi otomatis kalender akademik.",
      status: activeSetup ? "active" : "locked",
      href: activeSetup ? "/promes" : "#",
      icon: Calendar,
    },
    {
      phase: 4,
      title: "1-Click Modul Ajar",
      desc: "Generasi instan Modul Ajar lengkap dengan Kegiatan & Asesmen berbasis AI.",
      status: activeSetup ? "active" : "locked",
      href: activeSetup ? "/modul-ajar" : "#",
      icon: FileText,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-10 animate-fadeIn">
      {/* Hero Welcome Panel */}
      <div className="bg-gradient-to-r from-dark-blue to-[#002f6c] rounded-3xl p-8 md:p-12 text-white shadow-lg relative overflow-hidden">
        {/* Decorative background gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gemini-blue/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -ml-20 -mb-20"></div>

        <div className="relative z-10 max-w-2xl space-y-6">
          <span className="text-[10px] bg-gemini-blue text-white font-bold tracking-wider uppercase px-3 py-1 rounded-full border border-blue-400/30">
            Administrasi Guru SDN 3 Pringgabaya
          </span>
          <h1 className="text-3xl md:text-4.5xl font-black tracking-tight leading-tight">
            Administrasi Kurikulum Merdeka Jadi Lebih Simpel & Cepat
          </h1>
          <p className="text-sm md:text-base text-blue-100/80 leading-relaxed font-medium">
            SEKLIK AI membantu Anda menyusun TP, menyusun jadwal Promes, dan men-generate Modul Ajar secara otomatis menggunakan kecerdasan buatan terintegrasi.
          </p>

          <div className="pt-2">
            {activeSetup ? (
              <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 px-5 py-3 rounded-2xl">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-xs md:text-sm font-semibold text-emerald-200">
                  Setup Aktif: {subjectName} &bull; Fase {phaseName} ({classesInfo})
                </span>
              </div>
            ) : (
              <Link
                href="/setup"
                className="inline-flex items-center gap-2.5 bg-gemini-blue hover:bg-gemini-blue-hover text-white px-6 py-3.5 rounded-2xl font-bold text-xs md:text-sm tracking-wide shadow-md transition-all duration-200 hover:scale-[1.01] hover:shadow-lg hover:shadow-gemini-blue/10 active:scale-95"
              >
                Mulai Setup Kelas Sekarang
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Main dashboard grid */}
      <div className="space-y-6">
        <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 pl-1">
          <GraduationCap className="w-4.5 h-4.5 text-slate-400" />
          Alur Proses Administrasi Pembelajaran
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.phase}
                className={`p-6 rounded-3xl border text-left transition-all duration-200 flex flex-col justify-between min-h-[180px] bg-white relative overflow-hidden ${
                  step.status === "completed"
                    ? "border-emerald-100 shadow-sm"
                    : step.status === "active"
                    ? "border-gemini-blue bg-blue-50/10 shadow-md shadow-gemini-blue/5"
                    : "border-slate-100 opacity-70"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-2xl border ${
                    step.status === "completed"
                      ? "bg-emerald-50 border-emerald-100 text-emerald-600"
                      : step.status === "active"
                      ? "bg-blue-50 border-blue-100 text-gemini-blue"
                      : "bg-slate-50 border-slate-100 text-slate-400"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                    step.status === "completed"
                      ? "bg-emerald-100 text-emerald-700"
                      : step.status === "active"
                      ? "bg-gemini-blue text-white"
                      : "bg-slate-100 text-slate-400"
                  }`}>
                    {step.status === "completed" ? "Selesai" : step.status === "active" ? "Aktif" : "Terkunci"}
                  </span>
                </div>

                <div className="mt-4 space-y-1">
                  <h3 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                    Fase {step.phase}: {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-[10px] text-slate-300 font-bold uppercase">
                    Langkah {step.phase} dari 4
                  </span>
                  {step.status !== "locked" ? (
                    <Link
                      href={step.href}
                      className="text-xs text-gemini-blue font-bold flex items-center gap-1 hover:underline"
                    >
                      Buka Fitur
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <span className="text-xs text-slate-300 font-semibold flex items-center gap-1">
                      Belum Tersedia
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
