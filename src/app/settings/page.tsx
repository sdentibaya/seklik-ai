"use client";

import { useState, useEffect, useTransition } from "react";
import { getSettingsData, saveSchoolProfile, saveUserProfile } from "./actions";
import { Building2, UserCircle, Save, Loader2, Info } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<"school" | "user">("school");
  const [loading, setLoading] = useState(true);
  
  const [isPendingSchool, startTransitionSchool] = useTransition();
  const [isPendingUser, startTransitionUser] = useTransition();

  const [schoolData, setSchoolData] = useState({
    schoolName: "",
    headmasterName: "",
    headmasterNip: ""
  });

  const [userData, setUserData] = useState({
    fullName: "",
    nip: ""
  });

  useEffect(() => {
    async function load() {
      const res = await getSettingsData();
      if (res.success && res.school && res.user) {
        setSchoolData({
          schoolName: res.school.schoolName,
          headmasterName: res.school.headmasterName,
          headmasterNip: res.school.headmasterNip
        });
        setUserData({
          fullName: res.user.fullName,
          nip: res.user.nip || ""
        });
      }
      setLoading(false);
    }
    load();
  }, []);

  const handleSaveSchool = (e: React.FormEvent) => {
    e.preventDefault();
    startTransitionSchool(async () => {
      const res = await saveSchoolProfile(schoolData);
      if (res.success) alert("Profil Sekolah berhasil disimpan!");
      else alert("Gagal menyimpan profil sekolah.");
    });
  };

  const handleSaveUser = (e: React.FormEvent) => {
    e.preventDefault();
    startTransitionUser(async () => {
      const res = await saveUserProfile(userData);
      if (res.success) alert("Profil Guru berhasil disimpan!");
      else alert("Gagal menyimpan profil guru.");
    });
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-3">
        <Loader2 className="w-8 h-8 text-gemini-blue animate-spin" />
        <p className="text-slate-500 font-medium text-sm">Memuat pengaturan...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      {/* Header Panel */}
      <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
        <div>
          <h2 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">Pengaturan Sistem</h2>
          <p className="text-sm text-slate-500 mt-1">
            Kelola profil sekolah dan profil Anda untuk disematkan secara otomatis pada bagian pengesahan dokumen cetak.
          </p>
        </div>
      </div>

      {/* Tabs Selector */}
      <div className="flex border-b border-slate-200 gap-6">
        <button 
          onClick={() => setActiveTab("school")} 
          className={`pb-3 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all border-b-2 flex items-center gap-2 ${activeTab === "school" ? "border-gemini-blue text-gemini-blue" : "border-transparent text-slate-400 hover:text-slate-600"}`}
        >
          <Building2 className="w-4 h-4" /> Profil Sekolah
        </button>
        <button 
          onClick={() => setActiveTab("user")} 
          className={`pb-3 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all border-b-2 flex items-center gap-2 ${activeTab === "user" ? "border-gemini-blue text-gemini-blue" : "border-transparent text-slate-400 hover:text-slate-600"}`}
        >
          <UserCircle className="w-4 h-4" /> Profil Saya (Guru)
        </button>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm">
        {/* TAB 1: SCHOOL PROFILE */}
        {activeTab === "school" && (
          <form onSubmit={handleSaveSchool} className="space-y-6 animate-fadeIn">
            <div className="bg-blue-50/50 p-4 rounded-xl flex gap-3 items-start border border-blue-100">
              <Info className="w-5 h-5 text-gemini-blue shrink-0 mt-0.5" />
              <p className="text-xs text-slate-600 leading-relaxed">
                Data profil sekolah ini akan digunakan untuk kolom "Kepala Sekolah" pada setiap blok tanda tangan/pengesahan di akhir dokumen yang diekspor.
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Nama Sekolah</label>
                <input 
                  type="text" 
                  required
                  value={schoolData.schoolName}
                  onChange={e => setSchoolData({...schoolData, schoolName: e.target.value})}
                  className="w-full p-3 rounded-xl border border-slate-200 focus:border-gemini-blue outline-none text-sm font-medium text-slate-700"
                  placeholder="Misal: SD Negeri 3 Pringgabaya"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Nama Kepala Sekolah</label>
                  <input 
                    type="text" 
                    required
                    value={schoolData.headmasterName}
                    onChange={e => setSchoolData({...schoolData, headmasterName: e.target.value})}
                    className="w-full p-3 rounded-xl border border-slate-200 focus:border-gemini-blue outline-none text-sm font-medium text-slate-700"
                    placeholder="Lengkap dengan gelar"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">NIP Kepala Sekolah</label>
                  <input 
                    type="text" 
                    required
                    value={schoolData.headmasterNip}
                    onChange={e => setSchoolData({...schoolData, headmasterNip: e.target.value})}
                    className="w-full p-3 rounded-xl border border-slate-200 focus:border-gemini-blue outline-none text-sm font-medium text-slate-700"
                    placeholder="NIP / NIY"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-slate-100">
              <button 
                type="submit" 
                disabled={isPendingSchool}
                className="bg-gemini-blue hover:bg-gemini-blue/90 disabled:opacity-50 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-md flex items-center gap-2"
              >
                {isPendingSchool ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                Simpan Profil Sekolah
              </button>
            </div>
          </form>
        )}

        {/* TAB 2: USER PROFILE */}
        {activeTab === "user" && (
          <form onSubmit={handleSaveUser} className="space-y-6 animate-fadeIn">
            <div className="bg-blue-50/50 p-4 rounded-xl flex gap-3 items-start border border-blue-100">
              <Info className="w-5 h-5 text-gemini-blue shrink-0 mt-0.5" />
              <p className="text-xs text-slate-600 leading-relaxed">
                Data profil Anda akan digunakan untuk kolom "Guru Mata Pelajaran" pada blok pengesahan dokumen. Kosongkan NIP jika Anda adalah guru honorer atau non-PNS.
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Nama Lengkap (Beserta Gelar)</label>
                <input 
                  type="text" 
                  required
                  value={userData.fullName}
                  onChange={e => setUserData({...userData, fullName: e.target.value})}
                  className="w-full p-3 rounded-xl border border-slate-200 focus:border-gemini-blue outline-none text-sm font-medium text-slate-700"
                  placeholder="Misal: Budi Santoso, S.Pd."
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">NIP (Nomor Induk Pegawai)</label>
                <input 
                  type="text" 
                  value={userData.nip}
                  onChange={e => setUserData({...userData, nip: e.target.value})}
                  className="w-full p-3 rounded-xl border border-slate-200 focus:border-gemini-blue outline-none text-sm font-medium text-slate-700"
                  placeholder="Kosongkan jika tidak ada"
                />
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-slate-100">
              <button 
                type="submit"
                disabled={isPendingUser}
                className="bg-gemini-blue hover:bg-gemini-blue/90 disabled:opacity-50 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-md flex items-center gap-2"
              >
                {isPendingUser ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                Simpan Profil Saya
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
