"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { requireUserId } from "@/lib/session";

export interface ModulAjarParams {
  subjectId: string;
  phaseId: string;
  subjectName: string;
  phaseName: string;
  tpIds: string[];
  tpCode: string;
  tpDescription: string;
  element: string;
  elementCpContent: string;
  p3: string[]; // Profil Pelajar Pancasila
  sarpras: string;
  targetSiswa: string;
  modelPembelajaran: string;
  alokasiWaktu: string;
}

export interface GeneratedModulAjar {
  identifikasiMurid?: {
    pengetahuanAwal: string;
    minat: string;
    kebutuhanBelajar: string;
  };
  materiPelajaran?: string;
  praktikPedagogis?: {
    meaningful: string;
    joyful: string;
    mindful: string;
  };
  pemanfaatanDigital?: string;
  mitraPembelajaran?: string;
  lingkunganPembelajaran?: string;
  rubrikPenilaian?: string; // HTML table string
  
  pemahamanBermakna: string;
  pertanyaanPemantik: string[];
  kegiatanPendahuluan: string[];
  kegiatanInti: string[];
  kegiatanPenutup: string[];
  asesmenDiagnostik: string;
  asesmenFormatif: string;
  asesmenSumatif: string;
  pengayaan: string;
  remedial: string;
  lkpd: string; // Lembar Kerja Peserta Didik (HTML or Rich Text Markdown)
  bahanBacaan: string;
  glosarium: string;
  daftarPustaka: string;
}

/**
 * Memuat metadata untuk halaman pembuatan modul ajar.
 */
export async function getModulAjarSetupData() {
  try {
    const userId = await requireUserId();
    const activeSetup = await db.classSetup.findUnique({ where: { userId } });
    if (!activeSetup) {
      return { activeSetup: null, tps: [], cpelements: [], savedModuls: [] };
    }

    const subject = await db.subject.findUnique({ where: { id: activeSetup.subjectId } });
    const phase = await db.phase.findUnique({ where: { id: activeSetup.phaseId } });

    // Ambil daftar TP yang ada
    const tps = await db.tujuanPembelajaran.findMany({
      where: {
        userId,
        subjectId: activeSetup.subjectId,
        phaseId: activeSetup.phaseId,
      },
      orderBy: { order: "asc" },
    });

    // Ambil detail CP per elemen untuk mencocokkan deskripsi CP resmi saat memilih TP
    const cp = await db.capaianPembelajaran.findUnique({
      where: {
        subjectId_phaseId: {
          subjectId: activeSetup.subjectId,
          phaseId: activeSetup.phaseId,
        },
      },
      include: {
        elements: true,
      },
    });

    const cpelements = cp?.elements || [];

    // Ambil daftar modul ajar yang sudah disimpan untuk setup aktif ini
    const savedModuls = await db.modulAjar.findMany({
      where: {
        userId,
        subjectId: activeSetup.subjectId,
        phaseId: activeSetup.phaseId,
      },
      include: { tps: true },
      orderBy: { createdAt: "desc" },
    });

    return {
      activeSetup: {
        subjectId: activeSetup.subjectId,
        phaseId: activeSetup.phaseId,
        subjectName: subject?.name || "",
        phaseName: phase?.name || "",
      },
      tps,
      cpelements: cpelements.map((el) => ({
        name: el.name,
        content: el.content,
      })),
      savedModuls,
    };
  } catch (error) {
    console.error("Error in getModulAjarSetupData:", error);
    throw new Error("Gagal memuat data pengaturan Modul Ajar");
  }
}

/**
 * Menyimpan Modul Ajar ke database
 */
export async function saveModulAjarAction(
  subjectId: string,
  phaseId: string,
  tpIds: string[],
  title: string,
  metadata: string, // stringified JSON
  content: string   // stringified JSON of GeneratedModulAjar
) {
  try {
    const userId = await requireUserId();
    const newModul = await db.modulAjar.create({
      data: {
        userId,
        subjectId,
        phaseId,
        tps: { connect: tpIds.map((id) => ({ id })) },
        title,
        metadata,
        content,
      },
    });
    revalidatePath("/modul-ajar");
    return { success: true, modul: newModul };
  } catch (error) {
    console.error("Error in saveModulAjarAction:", error);
    return { success: false, error: "Gagal menyimpan Modul Ajar ke pustaka" };
  }
}

/**
 * Menghapus Modul Ajar dari database
 */
export async function deleteModulAjarAction(id: string) {
  try {
    const userId = await requireUserId();
    const existing = await db.modulAjar.findFirst({ where: { id, userId } });
    if (!existing) {
      return { success: false, error: "Modul Ajar tidak ditemukan" };
    }
    await db.modulAjar.delete({
      where: { id },
    });
    revalidatePath("/modul-ajar");
    return { success: true };
  } catch (error) {
    console.error("Error in deleteModulAjarAction:", error);
    return { success: false, error: "Gagal menghapus Modul Ajar" };
  }
}

/**
 * Men-generate Modul Ajar menggunakan AI (Groq -> Mistral -> MiMo -> Simulation Fallback)
 */
export async function generateModulAjarAction(params: ModulAjarParams): Promise<{
  success: boolean;
  content?: GeneratedModulAjar;
  isSimulated: boolean;
  error?: string;
}> {
  await requireUserId();
  const prompt = `Buatlah draf dokumen Modul Ajar resmi Kurikulum Merdeka untuk jenjang Sekolah Dasar (SD) berdasarkan data berikut:
- Mata Pelajaran: ${params.subjectName}
- Fase / Kelas: Fase ${params.phaseName} / ${params.phaseName === "A" ? "Kelas 1-2" : params.phaseName === "B" ? "Kelas 3-4" : "Kelas 5-6"}
- Elemen CP: ${params.element}
- Uraian CP Elemen Resmi: ${params.elementCpContent}
- Kode TP: ${params.tpCode}
- Deskripsi Tujuan Pembelajaran (TP): ${params.tpDescription}
- Profil Pelajar Pancasila (P3) yang Dikembangkan: ${params.p3.join(", ") || "Mandiri, Bernalar Kritis"}
- Sarana dan Prasarana: ${params.sarpras || "Buku paket, LCD Proyektor, Alat Tulis"}
- Target Peserta Didik: ${params.targetSiswa || "Peserta didik reguler/tipikal"}
- Model Pembelajaran: ${params.modelPembelajaran || "Problem-Based Learning"}
- Alokasi Waktu: ${params.alokasiWaktu || "2 JP x 35 Menit"}

Dokumen harus disusun secara lengkap dan mendalam dengan Bahasa Indonesia yang baik dan profesional, menerapkan pendekatan pembelajaran mendalam (Deep Learning) mencakup aspek Meaningful, Joyful, dan Mindful.

Anda wajib memberikan respon berupa objek JSON dengan struktur kunci (keys) persis seperti di bawah ini, tanpa teks pembuka/penutup lainnya:
{
  "identifikasiMurid": {
    "pengetahuanAwal": "Analisis singkat kemampuan awal murid terkait materi ini.",
    "minat": "Analisis ketertarikan/minat belajar murid terhadap topik.",
    "kebutuhanBelajar": "Analisis aspek kognitif, motivasi, atau lingkungan belajar murid."
  },
  "materiPelajaran": "Uraikan pokok bahasan materi secara ringkas namun jelas.",
  "praktikPedagogis": {
    "meaningful": "Bagaimana pembelajaran dirancang agar bermakna bagi murid.",
    "joyful": "Bagaimana pembelajaran dirancang agar menyenangkan (permainan/kuis/interaksi).",
    "mindful": "Bagaimana pembelajaran dirancang penuh kesadaran (refleksi/fokus)."
  },
  "pemanfaatanDigital": "Pemanfaatan media digital (LCD proyektor, presentasi visual, video, dll).",
  "mitraPembelajaran": "Mitra belajar (misal orang tua, masyarakat sekitar, teras warga, dsb).",
  "lingkunganPembelajaran": "Kondisi ruang kelas/lokasi fisik pembelajaran.",
  "rubrikPenilaian": "Tuliskan Rubrik Penilaian secara detail dan terstruktur dalam format HTML tabel (<table> dengan <thead>, <tbody>, <tr>, <th>, <td>). Wajib memiliki kolom: 'Kriteria', 'Sangat Baik (4)', 'Baik (3)', 'Cukup (2)', dan 'Perlu Bimbingan (1)'. Buatlah minimal 2 kriteria untuk Sikap (misal: Sopan Santun, Percaya Diri) dan 2 kriteria untuk Pengetahuan/Keterampilan. Jangan gunakan style CSS sebaris yang rumit, cukup gunakan border='1' dan cellpadding='5'.",
  "pemahamanBermakna": "Tuliskan uraian manfaat materi ini dalam kehidupan sehari-hari.",
  "pertanyaanPemantik": ["Pertanyaan pemantik 1", "Pertanyaan pemantik 2"],
  "kegiatanPendahuluan": [
    "(PENTING: JANGAN beri nomor urut di awal kalimat). Tuliskan 5-7 langkah Kegiatan Pendahuluan (Kegiatan Awal) sesuai standar Kemendikdasmen, detail layaknya skenario mengajar asli.",
    "WAJIB urutan awal standar: (1) Guru menyapa siswa dan menanyakan kabar mereka. (2) Guru mengajak siswa berdoa bersama sebelum memulai pembelajaran.",
    "Lanjutkan dengan: mengajak menyanyi lagu kebangsaan/daerah, apersepsi/pertanyaan pemantik terkait topik, memancing minat (gambar/benda nyata), menyampaikan tujuan pembelajaran."
  ],
  "kegiatanInti": [
    "(PENTING: JANGAN beri nomor urut di awal kalimat). Tuliskan 8-10 langkah Kegiatan Inti yang SANGAT KREATIF, MENDETAIL, dan PANJANG.",
    "Wajib menyebutkan aktivitas spesifik (misal: mengeja huruf K-U-M-A-N, membaca buku cerita di halaman tertentu, bermain kartu kata/gambar, atau eksperimen fisik). JANGAN gunakan kalimat generik/template.",
    "Sertakan interaksi guru-murid yang hidup, termasuk pembagian kelompok dan aktivitas hands-on (praktik langsung).",
    "Labeli langkah yang butuh fokus/pengamatan dengan '[Mindful Learning (Fokus dan Kesadaran Penuh)]' di akhir kalimat.",
    "Labeli langkah yang mengaitkan materi dengan dunia nyata dengan '[Pembelajaran Bermakna (Meaningful)]' di akhir kalimat.",
    "Labeli langkah yang berupa permainan/kuis seru dengan '[Pembelajaran Menyenangkan (Joyful)]' di akhir kalimat."
  ],
  "kegiatanPenutup": [
    "(PENTING: JANGAN beri nomor urut di awal kalimat). Tuliskan 4-5 langkah Penutup yang sangat detail dan spesifik.",
    "Misal: Guru memberikan soal mandiri spesifik (menyebutkan contoh soalnya), mengoreksi bersama, melakukan refleksi mendalam, menyanyikan lagu penutup (sebutkan judul lagunya), dan diakhiri dengan doa penutup."
  ],
  "asesmenDiagnostik": "Tuliskan jenis & bentuk asesmen diagnostik awal di sini.",
  "asesmenFormatif": "Tuliskan rincian asesmen formatif (e.g. observasi diskusi) di sini.",
  "asesmenSumatif": "Tuliskan rincian instrumen asesmen sumatif akhir di sini.",
  "pengayaan": "Uraian kegiatan pengayaan bagi siswa di atas rata-rata.",
  "remedial": "Uraian kegiatan bimbingan remedial bagi siswa di bawah rata-rata.",
  "lkpd": "Buatlah Lembar Kerja Peserta Didik (LKPD) yang menarik berupa tugas/latihan soal tertulis dengan instruksi pengerjaan yang jelas.",
  "bahanBacaan": "Bahan bacaan singkat untuk guru dan peserta didik mengenai topik ini.",
  "glosarium": "Daftar istilah penting beserta definisinya.",
  "daftarPustaka": "Daftar pustaka atau referensi buku panduan guru/siswa."
}`;

  // 1. ENGINE UTAMA: GROQ
  const groqKey = process.env.GROQ_API_KEY;
  if (groqKey) {
    console.log("Using Groq API for Modul Ajar generation...");
    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${groqKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            { role: "system", content: "You are an expert Indonesian elementary school teacher and educational curriculum designer. You output strictly valid JSON objects." },
            { role: "user", content: prompt },
          ],
          response_format: { type: "json_object" },
          temperature: 0.3,
        }),
      });

      if (response.ok) {
        const data = await response.json() as any;
        const contentText = data.choices[0]?.message?.content;
        const parsed = JSON.parse(contentText);
        return { success: true, content: parsed as GeneratedModulAjar, isSimulated: false };
      }
    } catch (e) {
      console.error("Groq Modul Ajar generation failed, falling back to Mistral...", e);
    }
  }

  // 2. FALLBACK 1: MISTRAL
  const mistralKey = process.env.MISTRAL_API_KEY;
  if (mistralKey) {
    console.log("Using Mistral AI API for Modul Ajar generation...");
    try {
      const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${mistralKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "mistral-large-latest",
          messages: [
            { role: "system", content: "You are an expert curriculum designer. Reply only in valid JSON objects." },
            { role: "user", content: prompt },
          ],
          response_format: { type: "json_object" },
          temperature: 0.3,
        }),
      });

      if (response.ok) {
        const data = await response.json() as any;
        const contentText = data.choices[0]?.message?.content;
        const parsed = JSON.parse(contentText);
        return { success: true, content: parsed as GeneratedModulAjar, isSimulated: false };
      }
    } catch (e) {
      console.error("Mistral Modul Ajar generation failed, falling back to MiMo...", e);
    }
  }

  // 3. FALLBACK 2: MIMO V2.5
  const mimoKey = process.env.MIMO_API_KEY;
  if (mimoKey) {
    console.log("Using MiMo V2.5 API for Modul Ajar generation...");
    try {
      const response = await fetch("https://api.xiaomimimo.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${mimoKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "mimo-v2.5",
          messages: [
            { role: "system", content: "You are an expert curriculum designer. Reply only in valid JSON." },
            { role: "user", content: prompt },
          ],
          response_format: { type: "json_object" },
          temperature: 0.3,
        }),
      });

      if (response.ok) {
        const data = await response.json() as any;
        const contentText = data.choices[0]?.message?.content;
        const parsed = JSON.parse(contentText);
        return { success: true, content: parsed as GeneratedModulAjar, isSimulated: false };
      }
    } catch (e) {
      console.error("MiMo Modul Ajar generation failed, falling back to Simulation...", e);
    }
  }

  // 4. SIMULATION FALLBACK (MODE SIMULASI)
  console.log("Using Simulation Mode for Modul Ajar generation...");
  const simulated: GeneratedModulAjar = {
    identifikasiMurid: {
      pengetahuanAwal: "Peserta didik secara umum sudah memahami dasar materi ini dan siap mempelajari lebih dalam.",
      minat: "Peserta didik sangat tertarik dengan metode belajar interaktif dan diskusi kelompok.",
      kebutuhanBelajar: "Bimbingan terarah bagi peserta didik lambat belajar dan pengayaan bagi yang cepat belajar."
    },
    materiPelajaran: `Konsep dan materi esensial mengenai ${params.element}.`,
    praktikPedagogis: {
      meaningful: `Mengaitkan materi ${params.element} dengan aktivitas kehidupan nyata peserta didik sehari-hari.`,
      joyful: "Belajar menyenangkan melalui kuis tebak kata, permainan kelompok, dan pemberian apresiasi.",
      mindful: "Mendorong fokus penuh dan kesadaran penuh melalui refleksi mandiri di akhir pembelajaran."
    },
    pemanfaatanDigital: "Penggunaan LCD Proyektor untuk slide presentasi interaktif dan video penunjang.",
    mitraPembelajaran: "Masyarakat di lingkungan sekolah dan orang tua murid.",
    lingkunganPembelajaran: "Ruang kelas dengan sirkulasi udara yang baik dan penataan tempat duduk kelompok.",
    rubrikPenilaian: `
      <table border="1" cellpadding="6" cellspacing="0" style="width: 100%; border-collapse: collapse; font-size: 11px; margin-top: 10px;">
        <thead>
          <tr style="background-color: #f2f2f2;">
            <th>Kriteria Penilaian</th>
            <th>Sangat Baik (4)</th>
            <th>Baik (3)</th>
            <th>Cukup (2)</th>
            <th>Perlu Bimbingan (1)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>Sopan Santun</b></td>
            <td>Selalu berlaku sopan dan santun selama proses pembelajaran.</td>
            <td>Berlaku sopan selama sebagian besar proses pembelajaran.</td>
            <td>Hanya berlaku sopan kepada guru saja.</td>
            <td>Belum menampakkan perilaku sopan santun.</td>
          </tr>
          <tr>
            <td><b>Percaya Diri</b></td>
            <td>Berani berpendapat, bertanya, dan menjawab pertanyaan dengan mantap.</td>
            <td>Berani berpendapat dan bertanya di dalam kelas.</td>
            <td>Hanya berani menjawab saat ditunjuk oleh guru.</td>
            <td>Kesulitan dalam mengemukakan pendapat atau menjawab.</td>
          </tr>
        </tbody>
      </table>
    `,
    pemahamanBermakna: `Siswa dapat mengerti esensi materi ${params.element} dan menghubungkannya dengan kehidupan sehari-hari (contoh: ${params.tpDescription}).`,
    pertanyaanPemantik: [
      `Mengapa materi ${params.element} penting bagi kita?`,
      `Bagaimana jika kita tidak mempelajari konsep ini?`,
    ],
    kegiatanPendahuluan: [
      "Guru menyapa siswa dan menanyakan kabar mereka.",
      "Guru mengajak siswa berdoa bersama sebelum memulai pembelajaran.",
      "Guru mengajak siswa menyanyikan lagu kebangsaan atau lagu daerah yang relevan.",
      "Apersepsi: Guru mengaitkan materi sebelumnya dengan topik hari ini dan melontarkan pertanyaan pemantik.",
      "Guru menyampaikan tujuan pembelajaran hari ini dan memberikan motivasi.",
    ],
    kegiatanInti: [
      "â€¢ Mindful Learning: Guru menyajikan gambar pemantik untuk memusatkan perhatian siswa secara penuh.",
      `â€¢ Pembelajaran Bermakna: Siswa dibentuk ke dalam kelompok kecil untuk mendiskusikan kaitan ${params.element} dengan kehidupan sehari-hari.`,
      "â€¢ Pembelajaran Menyenangkan: Siswa melakukan permainan merangkai kata/konsep penting menggunakan kartu kelompok.",
      "Siswa bersama kelompok menuliskan hasil penyelidikan mereka pada lembar kerja.",
      "Setiap kelompok mempresentasikan hasil karyanya di depan kelas secara bergantian.",
    ],
    kegiatanPenutup: [
      "Siswa bersama guru menyimpulkan butir-butir penting pembelajaran hari ini.",
      "Guru menutup pembelajaran dengan evaluasi singkat, refleksi diri, doa, dan salam penutup.",
    ],
    asesmenDiagnostik: "Tes lisan kognitif awal menggunakan pertanyaan pemantik sederhana.",
    asesmenFormatif: "Observasi sikap ilmiah selama diskusi kelompok dan kerja sama.",
    asesmenSumatif: `Tes tertulis berbentuk pilihan ganda dan esai sebanyak 5 soal mengenai: ${params.tpDescription}.`,
    pengayaan: `Diberikan tugas problem-solving tingkat lanjut (HOTS) mengenai penerapan ${params.element} dalam skala besar.`,
    remedial: "Bimbingan individu dan pemberian latihan soal sederhana yang telah disederhanakan bagi siswa yang belum mencapai Kriteria Ketercapaian (KKTP).",
    lkpd: `LEMBAR KERJA PESERTA DIDIK (LKPD)
Mata Pelajaran: ${params.subjectName}
Fase / Kelas: Fase ${params.phaseName}
Tujuan Pembelajaran: ${params.tpDescription}

Nama Anggota Kelompok:
1. .....................
2. .....................

Tugas Kelompok:
1. Diskusikan dan tuliskan langkah pemecahan masalah dari kasus nyata yang diberikan oleh guru!
2. Jawablah soal-soal latihan berikut bersama rekan kelompokmu dengan teliti.
   (Tuliskan jawaban lengkap di kolom bawah ini beserta penjelasannya!)`,
    bahanBacaan: `Materi esensial tentang ${params.element}: Membahas definisi, cara kerja, formula, serta contoh nyata yang relevan bagi anak didik SD tingkat Fase ${params.phaseName}.`,
    glosarium: `${params.element}: Istilah utama dalam topik ini.\nKurikulum Merdeka: Kurikulum nasional berorientasi pengembangan karakter.`,
    daftarPustaka: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi RI. (2024). Buku Panduan Guru & Buku Siswa Kurikulum Merdeka. Jakarta: Puskur BSKAP.",
  };

  return { success: true, content: simulated, isSimulated: true };
}

export async function updateModulAjarContentAction(id: string, newContentJson: string) {
  try {
    const userId = await requireUserId();
    const existing = await db.modulAjar.findFirst({ where: { id, userId } });
    if (!existing) {
      return { success: false, error: "Modul Ajar tidak ditemukan." };
    }
    const updated = await db.modulAjar.update({
      where: { id },
      data: {
        content: newContentJson
      }
    });
    revalidatePath("/modul-ajar");
    return { success: true, modulAjar: updated };
  } catch (error) {
    console.error("Error updating Modul Ajar:", error);
    return { success: false, error: "Gagal memperbarui konten Modul Ajar." };
  }
}
