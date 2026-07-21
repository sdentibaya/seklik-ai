import { db } from "@/lib/db";
import { getOptionalUserId } from "@/lib/session";
import { School, User, CheckCircle2, AlertCircle } from "lucide-react";

export default async function Header() {
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

  return (
    <header className="h-20 bg-white border-b border-border-gray shadow-sm flex items-center justify-between px-8 fixed top-0 right-0 left-68 z-10 print:hidden">
      {/* School Info Section */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-dark-blue">
          <School className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-sm font-bold text-slate-800">
            SD Negeri 3 Pringgabaya
          </h2>
          <p className="text-[11px] text-slate-400 font-medium tracking-wide">
            Kec. Pringgabaya, Kab. Lombok Timur
          </p>
        </div>
      </div>

      {/* Active Class Setup Status Badge */}
      <div className="flex items-center gap-4">
        {activeSetup ? (
          <div className="flex items-center gap-3 bg-emerald-50/70 border border-emerald-100 px-4 py-2 rounded-2xl shadow-inner">
            <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
            <div className="text-left">
              <p className="text-[9px] text-emerald-600 font-bold uppercase tracking-wider leading-none">
                Setup Aktif
              </p>
              <p className="text-xs font-semibold text-slate-700 mt-1">
                {subjectName} &bull; Fase {phaseName} ({classesInfo})
              </p>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3 bg-amber-50/70 border border-amber-100 px-4 py-2 rounded-2xl">
            <AlertCircle className="w-4.5 h-4.5 text-amber-500 shrink-0" />
            <div className="text-left">
              <p className="text-[9px] text-amber-600 font-bold uppercase tracking-wider leading-none">
                Status Kelas
              </p>
              <p className="text-xs font-semibold text-slate-500 mt-1">
                Setup Kelas Belum Dikonfigurasi
              </p>
            </div>
          </div>
        )}

        {/* User profile (static simulation for SDN 3 Pringgabaya Internal Teacher) */}
        <div className="h-10 w-px bg-border-gray"></div>
        <div className="flex items-center gap-2.5">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-slate-700">Guru Kelas</p>
            <p className="text-[10px] text-slate-400 font-medium">Internal Staff</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 font-bold text-sm shadow-sm">
            G
          </div>
        </div>
      </div>
    </header>
  );
}
