"use server";

import { getDb } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { requireUserId } from "@/lib/session";

export async function getSubjectsAndPhases() {
  await requireUserId();
  const subjects = await getDb().subject.findMany({
    orderBy: { name: "asc" },
  });

  const phases = await getDb().phase.findMany({
    orderBy: { name: "asc" },
  });

  return { subjects, phases };
}

export async function getCPForSubjectAndPhase(subjectId: string, phaseId: string) {
  await requireUserId();
  if (!subjectId || !phaseId) return null;

  return await getDb().capaianPembelajaran.findUnique({
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
}

export async function getActiveClassSetup() {
  const userId = await requireUserId();
  const activeSetup = await getDb().classSetup.findUnique({
    where: { userId },
  });

  if (!activeSetup) return null;

  const subject = await getDb().subject.findUnique({
    where: { id: activeSetup.subjectId },
  });

  const phase = await getDb().phase.findUnique({
    where: { id: activeSetup.phaseId },
  });

  return {
    ...activeSetup,
    subjectName: subject?.name || "",
    phaseName: phase?.name || "",
    classesInfo: phase?.classes || "",
  };
}

export async function saveClassSetup(subjectId: string, phaseId: string) {
  const userId = await requireUserId();
  if (!subjectId || !phaseId) {
    throw new Error("Subject ID and Phase ID are required.");
  }

  const setup = await getDb().classSetup.upsert({
    where: { userId },
    update: {
      subjectId,
      phaseId,
    },
    create: {
      userId,
      subjectId,
      phaseId,
    },
  });

  revalidatePath("/", "layout");
  revalidatePath("/setup");

  return setup;
}
