import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export const runtime = "edge";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SEKLIK AI - Otomasi Administrasi Guru SDN 3 Pringgabaya",
  description: "Aplikasi internal otomasi Modul Ajar dan Promes Kurikulum Merdeka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex bg-light-gray text-slate-800">
        <Sidebar />
        <div className="flex-1 flex flex-col pl-68 print:pl-0">
          <Header />
          <main className="flex-1 pt-20 p-8 min-h-screen print:pt-0 print:p-0">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
