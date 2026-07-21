export { auth as middleware } from "@/lib/auth";

export const config = {
  matcher: [
    "/",
    "/setup/:path*",
    "/tp-atp/:path*",
    "/promes/:path*",
    "/modul-ajar/:path*",
    "/lkpd/:path*",
    "/bank-soal/:path*",
    "/pengaturan/:path*",
    "/settings/:path*",
  ],
};

