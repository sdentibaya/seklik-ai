"use client";

import { useEffect, useState } from "react";
import { getSettingsData } from "@/app/settings/actions";

export default function SignatureBlock() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function load() {
      const res = await getSettingsData();
      if (res.success) {
        setData(res);
      }
    }
    load();
  }, []);

  if (!data) return null;

  const { school, user } = data;
  
  // Format the current date (e.g. 15 Juli 2026)
  const today = new Date();
  const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  const formattedDate = `${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`;

  return (
    <div className="w-full mt-12 pt-8 print:block break-inside-avoid">
      <table className="w-full text-sm text-center border-none">
        <tbody>
          <tr>
            <td className="w-1/2 align-top pb-24">
              Mengetahui,<br />
              Kepala Sekolah,
            </td>
            <td className="w-1/2 align-top pb-24">
              Pringgabaya, {formattedDate}<br />
              Guru Mata Pelajaran,
            </td>
          </tr>
          <tr>
            <td className="w-1/2 align-bottom">
              <u><strong>{school.headmasterName}</strong></u><br />
              NIP. {school.headmasterNip}
            </td>
            <td className="w-1/2 align-bottom">
              <u><strong>{user.fullName}</strong></u><br />
              {user.nip ? `NIP. ${user.nip}` : ""}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
