"use server";

import { getDb } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { requireUserId } from "@/lib/session";

export interface GenerateLkpdParams {
  tpIds: string[];
  tpText: string;
  phaseName: string;
  types: string[];
}

export async function getLkpdSetupDataAction() {
  try {
    const userId = await requireUserId();
    const activeSetup = await getDb().classSetup.findUnique({ where: { userId } });

    const phases = await getDb().phase.findMany({
      orderBy: { name: "asc" },
    });

    const tps = await getDb().tujuanPembelajaran.findMany({
      where: activeSetup
        ? { userId, subjectId: activeSetup.subjectId }
        : { userId },
      orderBy: { code: "asc" },
    });

    const savedLkpds = await getDb().lkpd.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      include: {
        tps: {
          select: { description: true, code: true },
        },
      },
    });

    return { phases, tps, savedLkpds, activeSetup };
  } catch (error) {
    console.error(error);
    return { phases: [], tps: [], savedLkpds: [], activeSetup: null };
  }
}

export async function generateLkpdAction(params: GenerateLkpdParams) {
  try {
    await requireUserId();
    const prompt = `Anda adalah ahli pembuat Lembar Kerja Peserta Didik (LKPD) yang kreatif.
Tugas Anda adalah:
Buatkan materi LKPD terpadu yang memiliki variasi jenis aktivitas berikut: "${params.types.join(", ")}" berdasarkan Tujuan Pembelajaran: "${params.tpText}". 
Pastikan setiap jenis aktivitas mendapatkan porsinya masing-masing dalam struktur LKPD (misal: Kegiatan 1 untuk aktivitas pertama, Kegiatan 2 untuk aktivitas kedua).
Sesuaikan tingkat kesulitan soal dan gaya bahasa pengantar untuk siswa SD ${params.phaseName}. 
Kembalikan HANYA dalam format JSON murni yang terstruktur untuk di-render ke UI.

PENTING: Anda WAJIB memberikan respons berupa objek JSON dengan struktur persis seperti ini (tanpa teks pengantar lain):
{
  "title": "Judul LKPD Kreatif (Maks 7 kata)",
  "goals": ["Tujuan 1 (Dari TP)"],
  "instructions": ["Petunjuk pengerjaan 1", "Petunjuk pengerjaan 2"],
  "materials": ["Alat dan bahan (kosongkan array jika tidak butuh alat)"],
  "activities": [
    {
      "step": "Nama Langkah / Kegiatan 1 (Sesuai Jenis Aktivitas 1)",
      "instruction": "Instruksi kerja detail",
      "questions": []
    }
  ],
  "rubrics": ["Kriteria Penilaian 1", "Kriteria Penilaian 2"]
}`;

    const groqKey = process.env.GROQ_API_KEY;
    if (!groqKey) {
      return { success: false, error: "Groq API key belum dikonfigurasi." };
    }

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${groqKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: "You output strictly valid JSON objects." },
          { role: "user", content: prompt },
        ],
        response_format: { type: "json_object" },
        temperature: 0.3,
      }),
    });

    if (!response.ok) {
      return { success: false, error: "Gagal menghasilkan LKPD melalui API AI." };
    }

    const data = await response.json() as any;
    const content = JSON.parse(data.choices[0].message.content);

    return { success: true, content };
  } catch (error) {
    console.error("Error generating LKPD:", error);
    return { success: false, error: "Terjadi kesalahan internal saat menghasilkan LKPD." };
  }
}

export async function saveLkpdAction(
  tpIds: string[],
  types: string[],
  difficulty: string,
  contentJson: string
) {
  try {
    const userId = await requireUserId();
    // Ensure TPs belong to current user when provided
    if (tpIds && tpIds.length > 0) {
      const validTps = await getDb().tujuanPembelajaran.findMany({
        where: { id: { in: tpIds }, userId },
      });
      if (validTps.length !== tpIds.length) {
        return { success: false, error: "Beberapa TP tidak valid untuk akun ini." };
      }
    }

    const lkpd = await getDb().lkpd.create({
      data: {
        userId,
        tps: { connect: tpIds.map(id => ({ id })) },
        type: types.join(", "),
        difficulty,
        content: contentJson,
      },
    });
    revalidatePath("/lkpd");
    return { success: true, lkpd };
  } catch (error) {
    console.error("Error saving LKPD:", error);
    return { success: false, error: "Gagal menyimpan dokumen LKPD." };
  }
}

export async function deleteLkpdAction(id: string) {
  try {
    const userId = await requireUserId();
    const existing = await getDb().lkpd.findFirst({ where: { id, userId } });
    if (!existing) {
      return { success: false, error: "LKPD tidak ditemukan." };
    }
    await getDb().lkpd.delete({ where: { id } });
    revalidatePath("/lkpd");
    return { success: true };
  } catch (error) {
    console.error("Error deleting LKPD:", error);
    return { success: false, error: "Gagal menghapus LKPD." };
  }
}
