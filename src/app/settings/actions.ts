"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { requireUserId } from "@/lib/session";

export async function getSettingsData() {
  try {
    const userId = await requireUserId();
    let school = await db.schoolProfile.findUnique({ where: { userId } });
    if (!school) {
      school = await db.schoolProfile.create({
        data: { userId },
      });
    }

    let user = await db.userProfile.findUnique({ where: { userId } });
    if (!user) {
      user = await db.userProfile.create({
        data: { userId },
      });
    }

    return { school, user, success: true };
  } catch (error) {
    console.error("Error fetching settings:", error);
    return { success: false, error: "Failed to fetch settings" };
  }
}

export async function saveSchoolProfile(data: {
  schoolName: string;
  headmasterName: string;
  headmasterNip: string;
}) {
  try {
    const userId = await requireUserId();
    await db.schoolProfile.upsert({
      where: { userId },
      update: data,
      create: { userId, ...data },
    });
    revalidatePath("/settings");
    return { success: true };
  } catch (error) {
    console.error("Error saving school profile:", error);
    return { success: false };
  }
}

export async function saveUserProfile(data: { fullName: string; nip: string }) {
  try {
    const userId = await requireUserId();
    await db.userProfile.upsert({
      where: { userId },
      update: data,
      create: { userId, ...data },
    });
    revalidatePath("/settings");
    return { success: true };
  } catch (error) {
    console.error("Error saving user profile:", error);
    return { success: false };
  }
}
