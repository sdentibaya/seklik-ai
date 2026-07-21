"use server";

import { db } from "@/lib/db";
import { extractTPFromAI } from "@/lib/llm";
import { getSubjectCode } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { requireUserId } from "@/lib/session";

export async function extractTPFromAIAction(subjectId: string, phaseId: string) {
  const userId = await requireUserId();
  if (!subjectId || !phaseId) {
    throw new Error("Subject ID and Phase ID are required.");
  }

  const cp = await db.capaianPembelajaran.findUnique({
    where: {
      subjectId_phaseId: {
        subjectId,
        phaseId,
      },
    },
    include: {
      elements: true,
      subject: true,
      phase: true,
    },
  });

  if (!cp) {
    throw new Error("Capaian Pembelajaran (CP) data not found in database.");
  }

  const cpElementsInput = cp.elements.map((el) => ({
    name: el.name,
    content: el.content,
  }));

  const aiResults = await extractTPFromAI(
    cp.subject.name,
    cp.phase.name,
    cp.phase.classes,
    cpElementsInput
  );

  await db.tujuanPembelajaran.deleteMany({
    where: {
      userId,
      subjectId,
      phaseId,
    },
  });

  const savedTPs = [];
  let index = 0;
  for (const item of aiResults) {
    const codePrefix = getSubjectCode(cp.subject.name);
    const cleanCode = `TP.${codePrefix}.${String(index + 1).padStart(2, "0")}`;

    const tp = await db.tujuanPembelajaran.create({
      data: {
        userId,
        subjectId,
        phaseId,
        code: cleanCode,
        element: item.element,
        description: item.description,
        order: index,
      },
    });
    savedTPs.push(tp);
    index++;
  }

  revalidatePath("/tp-atp");
  return savedTPs;
}

export async function getSavedTPs(subjectId: string, phaseId: string) {
  const userId = await requireUserId();
  if (!subjectId || !phaseId) return [];

  return await db.tujuanPembelajaran.findMany({
    where: {
      userId,
      subjectId,
      phaseId,
    },
    orderBy: {
      order: "asc",
    },
  });
}

interface SaveTPInput {
  id: string;
  code: string;
  element: string;
  order: number;
  description: string;
}

export async function saveATPAction(
  subjectId: string,
  phaseId: string,
  tps: SaveTPInput[]
) {
  const userId = await requireUserId();
  if (!subjectId || !phaseId) {
    throw new Error("Subject ID and Phase ID are required.");
  }

  await db.$transaction([
    db.tujuanPembelajaran.deleteMany({
      where: {
        userId,
        subjectId,
        phaseId,
      },
    }),
    db.tujuanPembelajaran.createMany({
      data: tps.map((item, index) => ({
        userId,
        subjectId,
        phaseId,
        code: item.code,
        element: item.element || "Umum / Kustom",
        description: item.description,
        order: index,
      })),
    }),
  ]);

  revalidatePath("/tp-atp");
  return { success: true };
}

export async function checkApiKeysConfigured() {
  await requireUserId();
  return {
    groq: !!process.env.GROQ_API_KEY,
    mistral: !!process.env.MISTRAL_API_KEY,
    mimo: !!process.env.MIMO_API_KEY,
  };
}
