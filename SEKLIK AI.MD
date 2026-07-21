# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## Nama Produk: SEKLIK AI
**Deskripsi:** Tools Administrasi Internal Khusus Untuk Guru SD Negeri 3 Pringgabaya (Private Use / Non-Public).

---

### 1. VISI & OBJEKTIF
Sistem SaaS internal yang sangat simpel, berfokus pada otomasi administrasi Kurikulum Merdeka untuk jenjang SD (Fase A, B, dan C). Mengingat aplikasi ini khusus untuk SD Negeri 3 Pringgabaya, sistem pengelompokan gelombang dan sesinya harus dirancang sejelas mungkin agar manajemen logistik pembelajaran di kelas berjalan mulus tanpa membingungkan guru.

### 2. DESIGN SYSTEM & UI/UX
*   **Tema Utama:** Profesional, bersih, dan meminimalisir kelelahan mata.
*   **Warna:** Dominasi "Biru Gemini" (`#1A73E8`) untuk tombol aksi utama dan aksen, dipadukan dengan Biru Gelap (`#0D47A1`) untuk sidebar/header, dan latar belakang abu-abu terang (`#F8FAFC`).
*   **Interaksi:** Tidak ada form bertumpuk. Gunakan *wizard* (Langkah 1, 2, dst). Tombol "Buat Modul Ajar" adalah *Call-to-Action* (CTA) paling besar.

### 3. ARSITEKTUR KECERDASAN BUATAN (AI ENGINE)
Sistem otomasi teks dan pembacaan data menggunakan arsitektur *multi-provider* dengan skema *fallback*:
1.  **Groq (Primary Engine):** Digunakan untuk generasi teks berkecepatan tinggi (ekstraksi CP ke TP, menyusun ATP, merangkai kerangka Modul Ajar, dan *generate* Pertanyaan Pemantik).
2.  **Mistral (Fallback 1):** Menggantikan Groq secara otomatis apabila terjadi *rate limit* atau *server error* pada *provider* utama.
3.  **MiMo V2.5 (Fallback 2 & Vision/Document Processor):** Dikhususkan untuk tugas *multimodal*. Bertugas membaca dokumen fisik yang diunggah guru (OCR), menganalisis gambar, atau menangani *edge cases* yang tidak didukung oleh Groq/Mistral.

### 4. WORKFLOW & FASE PENGEMBANGAN (INSTRUKSI UNTUK IDE)
*AI Assistant (IDE), kerjakan fase ini secara berurutan. Jangan melompat ke fase berikutnya sebelum fase sebelumnya disetujui oleh user.*

#### FASE 1: Setup & Master Data
*   **Tugas:** Buat kerangka UI (Sidebar kiri, header, area konten utama). Gunakan Tailwind CSS.
*   **Fitur:** Buat halaman "Setup Kelas" (Pilih Mata Pelajaran & Fase A/B/C). Tarik data 'Capaian Pembelajaran (CP)' dari *database* (Pusat Data Kemdikbud).

#### FASE 2: AI Ekstraksi TP & ATP
*   **Tugas:** Integrasikan API LLM (Groq -> Mistral). 
*   **Fitur:** User klik "Ekstrak TP". Kirim teks CP ke Groq untuk di-*parse* menjadi daftar Tujuan Pembelajaran (JSON array). Tampilkan hasilnya di UI. Tambahkan fitur *drag-and-drop* agar guru bisa mengurutkan daftar TP tersebut menjadi ATP (Alur Tujuan Pembelajaran).

#### FASE 3: Penjadwalan & OCR (Promes)
*   **Tugas:** Buat UI Kalender berbasis *grid*.
*   **Fitur:** User memasukkan Alokasi Waktu (Jam Pelajaran) untuk setiap TP. Sistem memplot jadwal tersebut ke kalender aktif. 
*   **Integrasi MiMo V2.5:** Sediakan tombol "Unggah Kalender Akademik". Gunakan MiMo V2.5 untuk membaca gambar/dokumen kalender sekolah, ekstrak tanggal merah/liburnya, lalu sinkronkan otomatis ke *grid* kalender web.

#### FASE 4: 1-Click Modul Ajar Generator (Core Feature)
*   **Tugas:** Buat form Modul Ajar pintar.
*   **Fitur:** Saat user klik "Buat Modul Ajar", minta user memilih TP dari jadwal (Promes). Sistem otomatis mengisi (auto-populate) metadata (Informasi Umum, Tujuan, dsb). Gunakan Groq untuk mengisi bagian "Kegiatan Pembelajaran" dan "Asesmen".

#### FASE 5: Export Engine (.docx & .pdf)
*   **Tugas:** Fitur unduh dokumen untuk keperluan cetak fisik.
*   **Fitur:** Integrasikan *library* pembuat dokumen. *Mapping* data HTML dari form Fase 4 ke dalam *template* standar Modul Ajar. Sediakan tombol "Download .DOCX" dan "Download .PDF" yang langsung mengunduh file dengan rapi ke perangkat guru.

### 5. INFRASTRUKTUR
*   **Frontend/Backend:** Gunakan *framework* yang paling efisien untuk *fullstack* (misal: Next.js).
*   **Database:** PostgreSQL atau *database* relasional sejenis.
*   **Jaringan:** Gunakan Cloudflare untuk manajemen DNS dan *proxy* agar performa aplikasi tetap cepat dan stabil saat diakses dari jaringan sekolah SD Negeri 3 Pringgabaya.