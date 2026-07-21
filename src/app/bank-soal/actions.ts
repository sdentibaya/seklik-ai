"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { generateBankSoalAI } from "@/lib/llm";
import { requireUserId } from "@/lib/session";

export interface GenerateSoalParams {
  phaseId: string;
  tpIds: string[];
  cognitiveLevel: string;
  akmType: string;
}

export async function getBankSoalSetupData() {
  try {
    const userId = await requireUserId();
    const activeSetup = await db.classSetup.findUnique({ where: { userId } });

    const subjects = await db.subject.findMany({
      orderBy: { name: "asc" },
    });

    const phases = await db.phase.findMany({
      orderBy: { name: "asc" },
    });

    const tps = await db.tujuanPembelajaran.findMany({
      where: { userId },
      orderBy: { code: "asc" },
    });

    const savedSoalsRaw = await db.bankSoal.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      include: {
        tps: {
          select: { id: true, description: true, code: true },
        },
      },
    });

    const savedSoals = savedSoalsRaw.map((s) => ({
      id: s.id,
      phaseId: s.phaseId,
      tpIds: s.tps.map(t => t.id),
      cognitiveLevel: s.cognitiveLevel,
      akmType: s.akmType,
      stimulus: s.stimulus,
      pertanyaan: s.pertanyaan,
      options: s.options ? JSON.parse(s.options) : undefined,
      kunciJawaban: s.kunciJawaban,
      rubrikPenilaian: s.rubrikPenilaian,
      generateCode: s.generateCode,
      tpText: s.tps.map(t => t.description).join("\n"),
      tpCode: s.tps.map(t => t.code).join(", "),
    }));

    const uniqueGenerateCodes = [
      ...new Set(savedSoalsRaw.map((s) => s.generateCode).filter(Boolean)),
    ];

    const savedPaketsRaw = await db.paketUjian.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });

    const savedPakets = savedPaketsRaw.map((p) => ({
      id: p.id,
      name: p.name,
      soalIds: JSON.parse(p.soalIds) as string[],
      createdAt: p.createdAt.toISOString(),
    }));

    return {
      activeSetup,
      subjects,
      phases,
      tps,
      savedSoals,
      savedPakets,
      generateCodes: uniqueGenerateCodes,
    };
  } catch (error) {
    console.error("Error loading Bank Soal setup data:", error);
    return {
      activeSetup: null,
      subjects: [],
      phases: [],
      tps: [],
      savedSoals: [],
      savedPakets: [],
      generateCodes: [],
    };
  }
}

export async function generateSoalAction(params: GenerateSoalParams) {
  try {
    const userId = await requireUserId();
    const tps = await db.tujuanPembelajaran.findMany({
      where: { id: { in: params.tpIds }, userId },
    });
    if (tps.length === 0) {
      return { success: false, error: "TP tidak valid untuk akun ini." };
    }
    const phase = await db.phase.findUnique({
      where: { id: params.phaseId },
    });

    const tpDescriptions = tps.map(t => t.description).join("\n");

    const aiRes = await generateBankSoalAI(
      tpDescriptions,
      phase?.name || "",
      params.akmType,
      params.cognitiveLevel
    );

    return {
      success: true,
      content: {
        id: `soal-${Date.now()}-${Math.random()}`,
        phaseId: params.phaseId,
        tpIds: params.tpIds,
        cognitiveLevel: params.cognitiveLevel,
        akmType: params.akmType,
        stimulus: aiRes.stimulus,
        pertanyaan: aiRes.pertanyaan,
        options: aiRes.opsi_jawaban,
        kunciJawaban: aiRes.kunci_jawaban,
        rubrikPenilaian: aiRes.rubrik_penilaian,
      },
    };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Gagal men-generate soal." };
  }
}

export async function saveSoalsAction(soals: any[], generateCode: string = "") {
  try {
    const userId = await requireUserId();
    const createdSoals = [];
    for (const soal of soals) {
      if (!soal.tpIds || soal.tpIds.length === 0) continue;
      const validTps = await db.tujuanPembelajaran.findMany({
        where: { id: { in: soal.tpIds }, userId },
      });
      if (validTps.length === 0) continue;

      const created = await db.bankSoal.create({
        data: {
          userId,
          phaseId: soal.phaseId || "",
          tps: { connect: soal.tpIds.map((id:string) => ({ id })) },
          cognitiveLevel: soal.cognitiveLevel || "",
          akmType: soal.akmType || "",
          stimulus: soal.stimulus || null,
          pertanyaan: soal.pertanyaan || "",
          options: soal.options ? JSON.stringify(soal.options) : null,
          kunciJawaban:
            typeof soal.kunciJawaban === "string"
              ? soal.kunciJawaban
              : soal.kunciJawaban
                ? JSON.stringify(soal.kunciJawaban)
                : "",
          rubrikPenilaian:
            typeof soal.rubrikPenilaian === "string"
              ? soal.rubrikPenilaian
              : soal.rubrikPenilaian
                ? JSON.stringify(soal.rubrikPenilaian)
                : null,
          generateCode: generateCode || null,
        },
      });
      createdSoals.push(created);
    }
    revalidatePath("/bank-soal");
    return { success: true, createdSoals };
  } catch (error: any) {
    console.error("Error saving soals:", error);
    return { success: false, error: "Gagal menyimpan soal ke database." };
  }
}

export async function savePaketUjianAction(name: string, soalIds: string[]) {
  try {
    const userId = await requireUserId();
    // Only allow soal IDs owned by this user
    const owned = await db.bankSoal.findMany({
      where: { userId, id: { in: soalIds } },
      select: { id: true },
    });
    const ownedIds = owned.map((s) => s.id);

    const paket = await db.paketUjian.create({
      data: {
        userId,
        name,
        soalIds: JSON.stringify(ownedIds),
      },
    });
    revalidatePath("/bank-soal");
    return { success: true, paket: { ...paket, soalIds: ownedIds } };
  } catch (error) {
    console.error("Error saving paket ujian:", error);
    return { success: false, error: "Gagal menyimpan Paket Ujian." };
  }
}

export async function deleteSoalAction(id: string) {
  try {
    const userId = await requireUserId();
    const existing = await db.bankSoal.findFirst({ where: { id, userId } });
    if (!existing) {
      return { success: false, error: "Soal tidak ditemukan." };
    }
    await db.bankSoal.delete({ where: { id } });
    revalidatePath("/bank-soal");
    return { success: true };
  } catch (error) {
    console.error("Error deleting soal:", error);
    return { success: false, error: "Gagal menghapus soal." };
  }
}

export async function deletePaketUjianAction(id: string) {
  try {
    const userId = await requireUserId();
    const existing = await db.paketUjian.findFirst({ where: { id, userId } });
    if (!existing) {
      return { success: false, error: "Paket tidak ditemukan." };
    }
    await db.paketUjian.delete({ where: { id } });
    revalidatePath("/bank-soal");
    return { success: true };
  } catch (error) {
    console.error("Error deleting paket:", error);
    return { success: false, error: "Gagal menghapus paket." };
  }
}
