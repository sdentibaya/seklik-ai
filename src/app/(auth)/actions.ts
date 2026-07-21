"use server";

import { getDb } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function registerUser(formData: FormData) {
  try {
    // Bootstrap only: first account allowed. Further signup closed.
    const userCount = await getDb().user.count();
    if (userCount > 0) {
      return { error: "Registrasi ditutup. Hubungi admin untuk akun baru." };
    }

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!name || !email || !password) {
      return { error: "Semua field wajib diisi!" };
    }

    if (password.length < 8) {
      return { error: "Password minimal 8 karakter!" };
    }

    const existingUser = await getDb().user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { error: "Email sudah terdaftar!" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await getDb().user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: "admin",
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Register Error:", error);
    return { error: "Gagal mendaftarkan akun. Silakan coba lagi." };
  }
}
