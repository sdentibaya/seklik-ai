import { getSubjectCode } from "./utils";

interface CPElementInput {
  name: string;
  content: string;
}

interface TPResult {
  code: string;
  element: string;
  description: string;
}

export async function extractTPFromAI(
  subjectName: string,
  phaseName: string,
  classesInfo: string,
  cpElements: CPElementInput[]
): Promise<TPResult[]> {
  const groqKey = process.env.GROQ_API_KEY;
  const mistralKey = process.env.MISTRAL_API_KEY;
  const codePrefix = getSubjectCode(subjectName);

  const prompt = `Anda adalah AI pakar Kurikulum Merdeka untuk SD.
Mata Pelajaran: ${subjectName}
Fase: ${phaseName} (${classesInfo})

Tugas Anda adalah membedah dan merumuskan Tujuan Pembelajaran (TP) dari Capaian Pembelajaran (CP) per elemen yang kami berikan.
PENTING: CP ini mencakup seluruh cakupan 1 Fase (2 tahun ajaran). Oleh karena itu, Anda WAJIB menjabarkan dan memecah 1 Elemen menjadi 2 hingga 4 TP yang berjenjang (dari mudah ke sulit). 
Sehingga total keseluruhan TP yang dihasilkan dari seluruh elemen minimal berjumlah 8-12 TP.
Buat TP yang konkret, spesifik, operasional, dan dapat diukur. TP harus menggunakan kata kerja operasional (KKO) seperti: memahami, mengidentifikasi, menganalisis, menyajikan, dsb.

Format kode TP harus berupa: TP.${codePrefix}.[Nomor Urut 2 Digit].
Contoh format kode untuk mata pelajaran ini:
- TP.${codePrefix}.01, TP.${codePrefix}.02, TP.${codePrefix}.03, dst.

Daftar Elemen CP untuk diekstrak:
${JSON.stringify(cpElements, null, 2)}

RESPON WAJIB BERUPA JSON ARRAY SAJA TANPA TEKS PENDAHULUAN ATAU PENUTUP.
Format JSON yang diharapkan:
[
  {
    "code": "TP.${codePrefix}.01",
    "element": "Nama Elemen",
    "description": "Deskripsi Tujuan Pembelajaran"
  }
]`;

  // 1. TENTUKAN PRIMARY ENGINE (GROQ)
  if (groqKey) {
    console.log("Using Groq API for TP Extraction...");
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
            {
              role: "system",
              content: "You are a helpful assistant that only replies in valid JSON arrays.",
            },
            {
              role: "user",
              content: prompt,
            },
          ],
          response_format: { type: "json_object" },
          temperature: 0.2,
        }),
      });

      if (response.ok) {
        const data = await response.json() as any;
        const contentText = data.choices[0]?.message?.content;
        const parsed = JSON.parse(contentText);
        // If parsed object is wrapped in a root key like {"tps": [...]}, unwrap it
        if (Array.isArray(parsed)) return parsed as TPResult[];
        const firstKey = Object.keys(parsed)[0];
        if (Array.isArray(parsed[firstKey])) return parsed[firstKey] as TPResult[];
      } else {
        console.warn(`Groq API returned error: ${response.status} ${response.statusText}`);
      }
    } catch (e) {
      console.error("Groq API Call failed, trying fallback...", e);
    }
  }

  // 2. FALLBACK KE MISTRAL AI
  if (mistralKey) {
    console.log("Using Mistral API Fallback for TP Extraction...");
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
            {
              role: "system",
              content: "You are a helpful assistant that only replies in valid JSON arrays.",
            },
            {
              role: "user",
              content: prompt,
            },
          ],
          response_format: { type: "json_object" },
          temperature: 0.2,
        }),
      });

      if (response.ok) {
        const data = await response.json() as any;
        const contentText = data.choices[0]?.message?.content;
        const parsed = JSON.parse(contentText);
        if (Array.isArray(parsed)) return parsed as TPResult[];
        const firstKey = Object.keys(parsed)[0];
        if (Array.isArray(parsed[firstKey])) return parsed[firstKey] as TPResult[];
      } else {
        console.warn(`Mistral API returned error: ${response.status} ${response.statusText}`);
      }
    } catch (e) {
      console.error("Mistral API Call failed, falling back to Simulation Mode...", e);
    }
  }

  // 3. FALLBACK 2 KE MIMO V2.5
  const mimoKey = process.env.MIMO_API_KEY;
  if (mimoKey) {
    console.log("Using MiMo V2.5 API Fallback for TP Extraction...");
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
            {
              role: "system",
              content: "You are a helpful assistant that only replies in valid JSON arrays.",
            },
            {
              role: "user",
              content: prompt,
            },
          ],
          response_format: { type: "json_object" },
          temperature: 0.2,
        }),
      });

      if (response.ok) {
        const data = await response.json() as any;
        const contentText = data.choices[0]?.message?.content;
        const parsed = JSON.parse(contentText);
        if (Array.isArray(parsed)) return parsed as TPResult[];
        const firstKey = Object.keys(parsed)[0];
        if (Array.isArray(parsed[firstKey])) return parsed[firstKey] as TPResult[];
      } else {
        console.warn(`MiMo API returned error: ${response.status} ${response.statusText}`);
      }
    } catch (e) {
      console.error("MiMo API Call failed, falling back to Simulation Mode...", e);
    }
  }

  // 4. SIMULATION FALLBACK (MODE SIMULASI JIKA SEMUA ENGINE KOSONG ATAU ERROR)
  console.log("Using local Simulation Mode for TP Extraction...");
  return getSimulationTPs(subjectName, phaseName, cpElements);
}

function getSimulationTPs(
  subjectName: string,
  phaseName: string,
  cpElements: CPElementInput[]
): TPResult[] {
  const codePrefix = getSubjectCode(subjectName);

  const results: TPResult[] = [];
  let tpCounter = 1;

  for (const element of cpElements) {
    const elemName = element.name;
    const contentText = element.content;

    // Generate high quality simulated TPs based on the element data we have in database
    if (subjectName.toLowerCase() === "matematika") {
      if (elemName.includes("Bilangan")) {
        results.push({
          code: `TP.${codePrefix}.${String(tpCounter++).padStart(2, "0")}`,
          element: elemName,
          description: `Peserta didik dapat membaca, menulis, menentukan nilai tempat, membandingkan, dan mengurutkan bilangan cacah sesuai tingkatan Fase ${phaseName}.`,
        });
        results.push({
          code: `TP.${codePrefix}.${String(tpCounter++).padStart(2, "0")}`,
          element: elemName,
          description: `Peserta didik dapat melakukan operasi hitung (penjumlahan, pengurangan, perkalian, pembagian) sesuai domain Fase ${phaseName}.`,
        });
      } else if (elemName.includes("Aljabar")) {
        results.push({
          code: `TP.${codePrefix}.${String(tpCounter++).padStart(2, "0")}`,
          element: elemName,
          description: `Peserta didik dapat mengidentifikasi, mendeskripsikan, dan melanjutkan pola gambar atau pola numerik sederhana.`,
        });
        results.push({
          code: `TP.${codePrefix}.${String(tpCounter++).padStart(2, "0")}`,
          element: elemName,
          description: `Peserta didik dapat menentukan nilai variabel tersembunyi pada kalimat matematika penjumlahan atau pengurangan.`,
        });
      } else if (elemName.includes("Geometri")) {
        results.push({
          code: `TP.${codePrefix}.${String(tpCounter++).padStart(2, "0")}`,
          element: elemName,
          description: `Peserta didik dapat mendeskripsikan dan membandingkan karakteristik bangun datar dan bangun ruang berdasarkan ciri fisiknya.`,
        });
      } else {
        // Fallback for other math elements (Pengukuran / Analisis Data)
        results.push({
          code: `TP.${codePrefix}.${String(tpCounter++).padStart(2, "0")}`,
          element: elemName,
          description: `Peserta didik dapat mengukur, mengestimasi, dan membandingkan besaran (panjang, berat, waktu, luas, volume) menggunakan alat ukur standar.`,
        });
      }
    } else if (subjectName.toLowerCase() === "bahasa indonesia") {
      if (elemName.includes("Menyimak")) {
        results.push({
          code: `TP.${codePrefix}.${String(tpCounter++).padStart(2, "0")}`,
          element: elemName,
          description: `Peserta didik dapat menyimak informasi dengan saksama dan menyebutkan kembali gagasan utama atau fakta penting dari teks lisan.`,
        });
      } else if (elemName.includes("Membaca")) {
        results.push({
          code: `TP.${codePrefix}.${String(tpCounter++).padStart(2, "0")}`,
          element: elemName,
          description: `Peserta didik dapat mengeja, membaca kata dengan lancar, serta memahami makna eksplisit dan implisit dalam teks bacaan sesuai tingkatannya.`,
        });
      } else if (elemName.includes("Berbicara")) {
        results.push({
          code: `TP.${codePrefix}.${String(tpCounter++).padStart(2, "0")}`,
          element: elemName,
          description: `Peserta didik dapat berbicara secara runtut, santun, dan percaya diri untuk menyampaikan gagasan atau presentasi sederhana di depan kelas.`,
        });
      } else if (elemName.includes("Menulis")) {
        results.push({
          code: `TP.${codePrefix}.${String(tpCounter++).padStart(2, "0")}`,
          element: elemName,
          description: `Peserta didik dapat menulis kalimat terstruktur dengan ejaan dan tanda baca yang tepat untuk mengekspresikan pikiran secara kreatif.`,
        });
      }
    } else {
      // IPAS or other subjects
      if (elemName.includes("Pemahaman")) {
        results.push({
          code: `TP.${codePrefix}.${String(tpCounter++).padStart(2, "0")}`,
          element: elemName,
          description: `Peserta didik dapat mengidentifikasi dan mendeskripsikan hubungan struktur dan fungsi organ tubuh serta siklus hidup materi sesuai bahasan Fase ${phaseName}.`,
        });
        results.push({
          code: `TP.${codePrefix}.${String(tpCounter++).padStart(2, "0")}`,
          element: elemName,
          description: `Peserta didik dapat menganalisis interaksi sosial dan kegiatan ekonomi dasar yang terjadi di lingkungan masyarakat sekitar.`,
        });
      } else {
        results.push({
          code: `TP.${codePrefix}.${String(tpCounter++).padStart(2, "0")}`,
          element: elemName,
          description: `Peserta didik dapat merancang, melakukan, dan mengevaluasi penyelidikan ilmiah sederhana untuk memecahkan masalah sehari-hari.`,
        });
      }
    }
  }

  // Double check that we have generated some TPs
  if (results.length === 0) {
    results.push({
      code: `TP.${codePrefix}.01`,
      element: cpElements[0]?.name || "Umum",
      description: `Peserta didik dapat memahami dan mempraktikkan konsep dasar mata pelajaran ${subjectName} untuk Fase ${phaseName}.`,
    });
  }

  return results;
}

export interface BankSoalAIResult {
  stimulus: string;
  pertanyaan: string;
  opsi_jawaban?: string[];
  kunci_jawaban: string;
  rubrik_penilaian?: string;
}

export async function generateBankSoalAI(
  tpText: string,
  phaseName: string,
  akmType: string,
  cognitiveLevel: string
): Promise<BankSoalAIResult> {
  const groqKey = process.env.GROQ_API_KEY;
  const mistralKey = process.env.MISTRAL_API_KEY;
  const mimoKey = process.env.MIMO_API_KEY;

  const prompt = `Bertindaklah sebagai pembuat soal Asesmen Kompetensi Minimum (AKM) tingkat SD. 
Buatkan 1 butir soal berjenis "${akmType}" dengan tingkat kesulitan "${cognitiveLevel}" berdasarkan Tujuan Pembelajaran: "${tpText}". 

ATURAN WAJIB:
1. Soal harus diawali dengan 'Stimulus' (teks cerita pendek, deskripsi gambar, atau data sederhana yang sesuai dengan nalar anak SD).
2. Kembalikan HANYA dalam format JSON dengan struktur kunci: 'stimulus', 'pertanyaan', 'opsi_jawaban' (jika ada, berupa array string), 'kunci_jawaban', dan 'rubrik_penilaian' (khusus uraian).

Pastikan keluaran berupa objek JSON valid dan matang untuk konsumsi anak SD ${phaseName}.`;

  // 1. GROQ
  if (groqKey) {
    try {
      console.log("Using Groq API for Bank Soal Generation...");
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${groqKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            { role: "system", content: "You output strictly valid JSON objects only." },
            { role: "user", content: prompt }
          ],
          response_format: { type: "json_object" },
          temperature: 0.4,
        }),
      });

      if (response.ok) {
        const data = await response.json() as any;
        return JSON.parse(data.choices[0].message.content) as BankSoalAIResult;
      }
    } catch (e) {
      console.error("Groq bank soal failed:", e);
    }
  }

  // 2. MISTRAL
  if (mistralKey) {
    try {
      console.log("Using Mistral API Fallback for Bank Soal...");
      const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${mistralKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "mistral-large-latest",
          messages: [
            { role: "system", content: "You output strictly valid JSON objects only." },
            { role: "user", content: prompt }
          ],
          response_format: { type: "json_object" },
          temperature: 0.4,
        }),
      });

      if (response.ok) {
        const data = await response.json() as any;
        return JSON.parse(data.choices[0].message.content) as BankSoalAIResult;
      }
    } catch (e) {
      console.error("Mistral bank soal failed:", e);
    }
  }

  // 3. MIMO
  if (mimoKey) {
    try {
      console.log("Using MiMo API Fallback for Bank Soal...");
      const response = await fetch("https://api.xiaomimimo.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${mimoKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "mimo-v2.5",
          messages: [
            { role: "system", content: "You output strictly valid JSON objects only." },
            { role: "user", content: prompt }
          ],
          response_format: { type: "json_object" },
          temperature: 0.4,
        }),
      });

      if (response.ok) {
        const data = await response.json() as any;
        return JSON.parse(data.choices[0].message.content) as BankSoalAIResult;
      }
    } catch (e) {
      console.error("MiMo bank soal failed:", e);
    }
  }

  // 4. SIMULATION FALLBACK
  console.log("Using local Simulation Fallback for Bank Soal...");
  return getSimulationBankSoal(tpText, phaseName, akmType, cognitiveLevel);
}

function getSimulationBankSoal(
  tpText: string,
  phaseName: string,
  akmType: string,
  cognitiveLevel: string
): BankSoalAIResult {
  return {
    stimulus: `Simulasi bacaan untuk Fase ${phaseName}. Di kebun sekolah SDN 3 Pringgabaya, anak-anak melakukan observasi kelompok. Mereka menemukan beberapa pot tanaman hias dan mencatat pertumbuhannya.`,
    pertanyaan: `[Tipe: ${akmType} - Level: ${cognitiveLevel}] Berdasarkan stimulus tersebut, kerjakan tugas yang berkaitan dengan: "${tpText}"!`,
    opsi_jawaban: akmType.includes("Pilihan Ganda") 
      ? ["A. Pilihan jawaban 1", "B. Pilihan jawaban 2", "C. Pilihan jawaban 3", "D. Pilihan jawaban 4"]
      : undefined,
    kunci_jawaban: akmType.includes("Pilihan Ganda") ? "A. Pilihan jawaban 1" : "Hasil observasi dicatat dengan benar.",
    rubrik_penilaian: akmType.includes("Uraian") ? "Skor 2: Menjawab lengkap. Skor 1: Menjawab sebagian. Skor 0: Salah." : undefined
  };
}

