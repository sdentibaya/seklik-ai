"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Settings, 
  Brain, 
  Calendar, 
  FileText, 
  Lock,
  GraduationCap,
  LayoutList,
  Database
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    {
      name: "Dashboard",
      href: "/",
      icon: LayoutDashboard,
      disabled: false,
      phase: null,
    },
    {
      name: "Setup Kelas",
      href: "/setup",
      icon: Settings,
      disabled: false,
      phase: 1,
    },
    {
      name: "Ekstraksi TP & ATP",
      href: "/tp-atp",
      icon: Brain,
      disabled: false,
      phase: 2,
    },
    {
      name: "Sesi & Promes",
      href: "/promes",
      icon: Calendar,
      disabled: false,
      phase: 3,
    },
    {
      name: "Modul Ajar (Core)",
      href: "/modul-ajar",
      icon: FileText,
      disabled: false,
      phase: 4,
    },
    {
      name: "Generator LKPD",
      href: "/lkpd",
      icon: LayoutList,
      disabled: false,
      phase: 5,
    },
    {
      name: "Bank Soal",
      href: "/bank-soal",
      icon: Database,
      disabled: false,
      phase: 6,
    },
    {
      name: "Pengaturan",
      href: "/settings",
      icon: Settings,
      disabled: false,
      phase: 7,
    }
  ];

  return (
    <aside className="w-68 bg-dark-blue text-white flex flex-col h-screen fixed left-0 top-0 z-20 border-r border-dark-blue-hover/50 shadow-xl print:hidden">
      {/* Header / Brand Logo */}
      <div className="p-6 border-b border-dark-blue-hover flex flex-col items-center justify-center text-center gap-4 mt-2">
        <img src="/logo.png" alt="Seklik AI Logo" className="w-24 h-auto drop-shadow-lg" />
        <div className="space-y-1">
          <h1 className="font-black text-2xl tracking-widest text-white drop-shadow-md">
            SEKLIK AI
          </h1>
          <p className="text-[11px] text-blue-200 font-extrabold tracking-widest uppercase opacity-90">
            SDN 3 Pringgabaya
          </p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href && !item.disabled;

          if (item.disabled) {
            return (
              <div
                key={item.name}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-blue-200/40 cursor-not-allowed group transition-colors duration-200"
                title={`Tersedia di Fase ${item.phase}`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 opacity-50" />
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-blue-950/40 px-2 py-0.5 rounded-md border border-white/5">
                  <Lock className="w-3 h-3" />
                  <span className="text-[9px] font-bold">Fase {item.phase}</span>
                </div>
              </div>
            );
          }

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive
                  ? "bg-gemini-blue text-amber-400 shadow-md shadow-gemini-blue/20"
                  : "text-blue-100/80 hover:bg-dark-blue-hover hover:text-white"
              }`}
            >
              <Icon className={`w-5 h-5 transition-transform duration-200 ${
                isActive ? "scale-110" : "group-hover:scale-105"
              }`} />
              <span className="text-sm font-medium">{item.name}</span>
              {item.phase && !isActive && (
                <span className="ml-auto text-[9px] bg-gemini-blue/20 text-blue-200 border border-gemini-blue/30 px-1.5 py-0.5 rounded font-semibold uppercase">
                  Fase {item.phase}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer / Info */}
      <div className="p-5 border-t border-dark-blue-hover text-center">
        <p className="text-[11px] text-blue-200/50">
          Sistem SaaS Otomasi Administrasi
        </p>
        <p className="text-[9px] text-blue-200/30 mt-0.5">
          Kurikulum Merdeka © 2026
        </p>
      </div>
    </aside>
  );
}
