import { getRequestContext } from "@cloudflare/next-on-pages";

export function getR2Bucket() {
  // Mengambil instance R2 dari Request Context (Cloudflare Edge Runtime)
  // Harus dipanggil di dalam fungsi (misal di dalam Server Actions atau API Route)
  try {
    const env: any = getRequestContext().env;
    if (!env || !env.R2) {
      throw new Error("R2 bucket binding tidak ditemukan di env.");
    }
    return env.R2 as any; // Tipe disesuaikan dengan Cloudflare Workers KV/R2 Namespace
  } catch (e) {
    console.error("Gagal mendapatkan konteks R2:", e);
    throw e;
  }
}
