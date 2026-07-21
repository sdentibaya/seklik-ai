"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2, Mail, Lock, UserPlus, AlertTriangle, User } from "lucide-react";
import { registerUser } from "../actions";

export default function RegisterPage() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");
  
  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const res = await registerUser(formData);
      
      if (res.error) {
        setError(res.error);
      } else {
        router.push("/login?registered=true");
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0f1c] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-[#0a0f1c] to-black p-4 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl opacity-50 mix-blend-screen pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-3xl opacity-50 mix-blend-screen pointer-events-none"></div>

      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl relative z-10">
        <div className="text-center space-y-2 mb-8">
          <div className="w-16 h-16 bg-gradient-to-tr from-indigo-600 to-blue-500 rounded-2xl mx-auto flex items-center justify-center shadow-lg shadow-indigo-500/20 mb-4">
            <UserPlus className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight">Buat Akun Baru</h1>
          <p className="text-sm text-slate-400 font-medium">Daftar untuk mengakses SEKLIK AI</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl flex items-center gap-3 text-rose-400">
            <AlertTriangle className="w-5 h-5 shrink-0" />
            <p className="text-sm font-semibold">{error}</p>
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Nama Lengkap</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="text"
                name="name"
                placeholder="Nama Anda"
                className="w-full bg-white/5 border border-white/10 text-white placeholder:text-slate-500 rounded-2xl py-3.5 pl-12 pr-4 outline-none focus:border-indigo-500 focus:bg-white/10 transition-all text-sm font-medium"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="email"
                name="email"
                placeholder="guru@sekolah.com"
                className="w-full bg-white/5 border border-white/10 text-white placeholder:text-slate-500 rounded-2xl py-3.5 pl-12 pr-4 outline-none focus:border-indigo-500 focus:bg-white/10 transition-all text-sm font-medium"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="password"
                name="password"
                placeholder="Minimal 6 karakter"
                className="w-full bg-white/5 border border-white/10 text-white placeholder:text-slate-500 rounded-2xl py-3.5 pl-12 pr-4 outline-none focus:border-indigo-500 focus:bg-white/10 transition-all text-sm font-medium"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-600 text-white font-bold py-3.5 rounded-2xl shadow-lg shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isPending ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              "Daftar Sekarang"
            )}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-400 font-medium">
          Sudah punya akun?{" "}
          <Link href="/login" className="text-indigo-400 hover:text-indigo-300 font-bold transition-colors">
            Masuk di sini
          </Link>
        </p>
      </div>
    </div>
  );
}
