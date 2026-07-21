export function getSubjectCode(subjectName: string): string {
  // 1. Cek jika ada singkatan dalam kurung, misal "Pendidikan Jasmani, Olahraga dan Kesehatan (PJOK)"
  const bracketMatch = subjectName.match(/\(([^)]+)\)/);
  if (bracketMatch && bracketMatch[1]) {
    return bracketMatch[1].trim().toUpperCase();
  }

  // 2. Bersihkan nama mapel
  const cleanName = subjectName
    .replace(/[^\w\s]/g, "") // Hapus tanda baca
    .trim();

  // Daftar mapel umum
  const lowerName = cleanName.toLowerCase();
  if (lowerName === "matematika") return "MAT";
  if (lowerName === "bahasa indonesia") return "IND";
  if (lowerName === "bahasa inggris") return "ING";
  if (lowerName === "ipas" || lowerName === "ilmu pengetahuan alam dan sosial") return "IPA";
  if (lowerName === "pendidikan pancasila" || lowerName === "pancasila" || lowerName === "ppkn") return "PPN";
  if (lowerName === "seni rupa") return "SRU";
  if (lowerName === "seni musik") return "SMU";
  if (lowerName === "seni tari") return "STA";
  if (lowerName === "seni teater") return "STE";
  if (lowerName === "agama islam" || lowerName.includes("pendidikan agama")) return "AGM";

  // 3. Ambil inisial kata
  const words = cleanName.split(/\s+/).filter(w => {
    const lw = w.toLowerCase();
    return lw !== "dan" && lw !== "atau" && lw !== "untuk" && lw !== "dengan" && lw !== "yang" && lw !== "mata" && lw !== "pelajaran";
  });

  if (words.length >= 2) {
    const initials = words.map(w => w[0]).join("").toUpperCase();
    return initials.slice(0, 4); // Batasi maks 4 huruf, misal "PJOK"
  }

  if (words.length === 1 && words[0]) {
    return words[0].slice(0, 3).toUpperCase();
  }

  return "MPL"; // Fallback mapel
}
