import { PrismaClient } from "../src/generated/client-db-final";

const prisma = new PrismaClient();

async function main() {
  console.log("Cleaning database...");
  try {
    await prisma.classSetup.deleteMany({});
    await prisma.cPElement.deleteMany({});
    await prisma.capaianPembelajaran.deleteMany({});
    await prisma.subject.deleteMany({});
    await prisma.phase.deleteMany({});
  } catch (e) {
    console.log("Clean up error, continuing...", e);
  }

  console.log("Seeding subjects...");
  const matematika = await prisma.subject.create({
    data: { name: "Matematika", description: "Mata pelajaran Matematika Kurikulum Merdeka" },
  });

  const bahasaIndonesia = await prisma.subject.create({
    data: { name: "Bahasa Indonesia", description: "Mata pelajaran Bahasa Indonesia Kurikulum Merdeka" },
  });

  const ipas = await prisma.subject.create({
    data: { name: "IPAS", description: "Mata pelajaran Ilmu Pengetahuan Alam dan Sosial Kurikulum Merdeka" },
  });

  const pancasila = await prisma.subject.create({
    data: { name: "Pendidikan Pancasila", description: "Mata pelajaran Pendidikan Pancasila Kurikulum Merdeka" },
  });

  const paibp = await prisma.subject.create({
    data: { name: "Pendidikan Agama Islam dan Budi Pekerti (PAIBP)", description: "Mata pelajaran PAIBP Kurikulum Merdeka" },
  });

  const pjok = await prisma.subject.create({
    data: { name: "Pendidikan Jasmani, Olahraga dan Kesehatan (PJOK)", description: "Mata pelajaran PJOK Kurikulum Merdeka" },
  });

  const seniRupa = await prisma.subject.create({
    data: { name: "Seni Rupa", description: "Mata pelajaran Seni Rupa Kurikulum Merdeka" },
  });

  console.log("Seeding phases...");
  const phaseA = await prisma.phase.create({
    data: { name: "A", description: "Fase A untuk Kelas 1 dan Kelas 2 SD", classes: "Kelas 1-2" },
  });

  const phaseB = await prisma.phase.create({
    data: { name: "B", description: "Fase B untuk Kelas 3 dan Kelas 4 SD", classes: "Kelas 3-4" },
  });

  const phaseC = await prisma.phase.create({
    data: { name: "C", description: "Fase C untuk Kelas 5 dan Kelas 6 SD", classes: "Kelas 5-6" },
  });

  console.log("Seeding Capaian Pembelajaran (CP) & Elements...");

  // ==========================================
  // --- MATEMATIKA ---
  // ==========================================
  const cpMatA = await prisma.capaianPembelajaran.create({
    data: {
      subjectId: matematika.id,
      phaseId: phaseA.id,
      content: "Pada akhir Fase A, peserta didik dapat memahami bilangan cacah sampai 100, menunjukkan pemahaman intuisi bilangan (number sense), melakukan operasi penjumlahan dan pengurangan bilangan cacah sampai 20, mengenal makna simbol kesamaan, membandingkan panjang dan berat secara tidak baku, serta mengenal berbagai bentuk bangun datar dan bangun ruang.",
    },
  });
  await prisma.cPElement.createMany({
    data: [
      {
        capaianPembelajaranId: cpMatA.id,
        name: "Bilangan",
        content: "Peserta didik menunjukkan pemahaman dan intuisi bilangan (number sense) pada bilangan cacah sampai 100, mereka dapat membaca, menulis, menentukan nilai tempat, membandingkan, mengurutkan, serta melakukan komposisi (menyusun) dan dekomposisi (mengurai) bilangan. Peserta didik dapat melakukan operasi penjumlahan dan pengurangan menggunakan benda-benda konkret yang banyaknya sampai 20.",
      },
      {
        capaianPembelajaranId: cpMatA.id,
        name: "Aljabar",
        content: "Peserta didik dapat menunjukkan pemahaman makna simbol kesamaan '=' dan menggunakannya untuk menuliskan persamaan matematika sederhana. Peserta didik dapat menyelesaikan persamaan sederhana menggunakan gambar atau benda-benda konkret. Mereka dapat mengenali, meniru, dan melanjutkan pola gambar atau pola objek sederhana.",
      },
      {
        capaianPembelajaranId: cpMatA.id,
        name: "Pengukuran",
        content: "Peserta didik dapat membandingkan panjang dan berat benda secara langsung, serta mengukur dan mengestimasi panjang benda menggunakan satuan tidak baku (seperti depa, jengkal, langkah, atau benda lain) secara konkret.",
      },
      {
        capaianPembelajaranId: cpMatA.id,
        name: "Geometri",
        content: "Peserta didik dapat mengenal berbagai bangun datar (segitiga, segiempat, segi banyak, lingkaran) dan bangun ruang (balok, kubus, bola, tabung, kerucut) berdasarkan karakteristik fisiknya, serta menyusun dan mengurai bangun datar secara sederhana.",
      },
    ],
  });

  const cpMatB = await prisma.capaianPembelajaran.create({
    data: {
      subjectId: matematika.id,
      phaseId: phaseB.id,
      content: "Pada akhir Fase B, peserta didik dapat menunjukkan pemahaman bilangan cacah sampai 10.000, melakukan operasi penjumlahan/pengurangan sampai 1.000 dan perkalian/pembagian sampai 100, membandingkan pecahan, mengisi nilai yang belum diketahui dalam kalimat matematika, mengukur panjang, berat, luas, dan volume secara baku, serta mendeskripsikan ciri bangun datar.",
    },
  });
  await prisma.cPElement.createMany({
    data: [
      {
        capaianPembelajaranId: cpMatB.id,
        name: "Bilangan",
        content: "Peserta didik menunjukkan pemahaman dan intuisi bilangan (number sense) pada bilangan cacah sampai 10.000. Mereka dapat membaca, menulis, menentukan nilai tempat, membandingkan, mengurutkan, menggunakan nilai tempat, melakukan komposisi dan dekomposisi bilangan tersebut. Mereka juga dapat menyelesaikan masalah berkaitan dengan uang menggunakan ribuan sebagai satuan. Peserta didik dapat melakukan operasi penjumlahan dan pengurangan bilangan cacah sampai 1.000. Mereka dapat melakukan operasi perkalian dan pembagian bilangan cacah sampai 100 menggunakan benda-benda konkret, gambar, dan simbol matematika. Mereka juga dapat menyelesaikan masalah berkaitan dengan kelipatan dan faktor. Peserta didik dapat membandingkan dan mengurutkan antar-pecahan dengan pembilang satu dan antar-pecahan dengan penyebut yang sama. Mereka dapat mengenali pecahan senilai menggunakan gambar dan benda konkret.",
      },
      {
        capaianPembelajaranId: cpMatB.id,
        name: "Aljabar",
        content: "Peserta didik dapat mengisi nilai yang belum diketahui dalam sebuah kalimat matematika yang melibatkan penjumlahan dan pengurangan pada bilangan cacah sampai 100, serta perkalian dan pembagian sederhana. Mereka dapat mengidentifikasi, meniru, dan mengembangkan pola gambar atau objek sederhana dan pola bilangan membesar dan mengecil.",
      },
      {
        capaianPembelajaranId: cpMatB.id,
        name: "Pengukuran",
        content: "Peserta didik dapat mengukur panjang dan berat benda menggunakan satuan baku, menentukan hubungan antar-satuan baku panjang (mm, cm, m), serta mengukur dan mengestimasi luas dan volume menggunakan satuan tidak baku dan satuan baku berupa bilangan cacah.",
      },
      {
        capaianPembelajaranId: cpMatB.id,
        name: "Geometri",
        content: "Peserta didik dapat mendeskripsikan ciri berbagai bentuk bangun datar (segiempat, segitiga, segi banyak). Mereka dapat menyusun (komposisi) dan mengurai (dekomposisi) berbagai bangun datar dengan satu cara atau lebih jika memungkinkan.",
      },
      {
        capaianPembelajaranId: cpMatB.id,
        name: "Analisis Data dan Peluang",
        content: "Peserta didik dapat mengurutkan, membandingkan, menyajikan, menganalisis, dan menginterpretasi data banyak benda dan data hasil pengukuran dalam bentuk tabel, diagram gambar (piktogram), dan diagram batang (skala satu satuan).",
      },
    ],
  });

  const cpMatC = await prisma.capaianPembelajaran.create({
    data: {
      subjectId: matematika.id,
      phaseId: phaseC.id,
      content: "Pada akhir Fase C, peserta didik dapat mengoperasikan bilangan pecahan dan desimal, menggunakan rasio, menyelesaikan persamaan linier satu variabel sederhana, menghitung keliling dan luas berbagai bangun datar serta volume bangun ruang, dan menyajikan serta menganalisis data hasil pengukuran.",
    },
  });
  await prisma.cPElement.createMany({
    data: [
      {
        capaianPembelajaranId: cpMatC.id,
        name: "Bilangan",
        content: "Peserta didik menunjukkan pemahaman dan intuisi bilangan (number sense) pada bilangan desimal dan pecahan. Mereka dapat membaca, menulis, membandingkan, mengurutkan, serta melakukan operasi penjumlahan, pengurangan, perkalian, dan pembagian pecahan dan desimal. Mereka dapat mengubah bentuk pecahan ke desimal dan persen, serta menyelesaikan masalah yang berkaitan dengan persen, perbandingan, dan skala.",
      },
      {
        capaianPembelajaranId: cpMatC.id,
        name: "Aljabar",
        content: "Peserta didik dapat menuliskan, menggambarkan, dan menjelaskan hubungan antara dua kuantitas yang berubah secara proporsional. Mereka dapat menyelesaikan persamaan linier satu variabel sederhana menggunakan model matematika atau penalaran logis.",
      },
      {
        capaianPembelajaranId: cpMatC.id,
        name: "Geometri",
        content: "Peserta didik dapat menentukan keliling dan luas berbagai bangun datar (segitiga, segiempat, segi banyak), menentukan volume dan luas permukaan bangun ruang (kubus, balok, prisma segitiga), serta memahami jaring-jaring bangun ruang tersebut.",
      },
      {
        capaianPembelajaranId: cpMatC.id,
        name: "Analisis Data dan Peluang",
        content: "Peserta didik dapat mengumpulkan, menyajikan, dan menganalisis data hasil pengukuran dan pencacahan dalam bentuk diagram batang, diagram garis, dan diagram lingkaran, serta menghitung nilai rata-rata (mean), median, dan modus untuk menyelesaikan masalah.",
      },
    ],
  });

  // ==========================================
  // --- BAHASA INDONESIA ---
  // ==========================================
  const cpIndA = await prisma.capaianPembelajaran.create({
    data: {
      subjectId: bahasaIndonesia.id,
      phaseId: phaseA.id,
      content: "Pada akhir Fase A, peserta didik memiliki kemampuan berbahasa untuk berkomunikasi dan bernalar secara sederhana kepada teman sebaya dan orang dewasa di lingkungan sekitar. Mereka mampu mengeja kata-kata baru, memahami instruksi lisan, menceritakan kembali isi teks, serta menulis kalimat sederhana.",
    },
  });
  await prisma.cPElement.createMany({
    data: [
      {
        capaianPembelajaranId: cpIndA.id,
        name: "Menyimak",
        content: "Peserta didik mampu bersikap menjadi penyimak yang baik. Peserta didik mampu memahami instruksi lisan sederhana dan menyebutkan informasi kunci dari teks audio atau teks aural (teks yang dibacakan) tentang diri dan lingkungan sekitarnya.",
      },
      {
        capaianPembelajaranId: cpIndA.id,
        name: "Membaca dan Memirsa",
        content: "Peserta didik mampu mengeja huruf, suku kata, dan kata-kata yang sering ditemui sehari-hari secara fasih. Peserta didik mampu memahami informasi dari bacaan sederhana dan tayangan visual tentang topik yang dekat dengan kehidupannya.",
      },
      {
        capaianPembelajaranId: cpIndA.id,
        name: "Berbicara dan Mempresentasikan",
        content: "Peserta didik mampu berbicara dengan santun, menggunakan volume dan intonasi yang tepat sesuai konteks komunikasi. Peserta didik mampu menceritakan kembali suatu peristiwa, pengalamannya, atau isi teks yang dibaca dengan runtut.",
      },
      {
        capaianPembelajaranId: cpIndA.id,
        name: "Menulis",
        content: "Peserta didik mampu menulis huruf, suku kata, kata, dan kalimat sederhana dengan sikap menulis yang benar serta ejaan yang tepat sesuai kaidah kebahasaan sederhana.",
      },
    ],
  });

  const cpIndB = await prisma.capaianPembelajaran.create({
    data: {
      subjectId: bahasaIndonesia.id,
      phaseId: phaseB.id,
      content: "Pada akhir Fase B, peserta didik menunjukkan penguasaan bahasa Indonesia untuk belajar dan menyelesaikan masalah, serta mengekspresikan gagasan secara lisan dan tertulis. Mereka memahami ide pokok dan pendukung pada teks informatif, membaca fasih kata-kata baru, dan menulis berbagai teks sederhana.",
    },
  });
  await prisma.cPElement.createMany({
    data: [
      {
        capaianPembelajaranId: cpIndB.id,
        name: "Menyimak",
        content: "Peserta didik mampu memahami ide pokok (gagasan) suatu pesan lisan, informasi dari media audio, teks aural (teks yang dibacakan dan/atau didengar), dan instruksi lisan yang berkaitan dengan tujuan berkomunikasi serta hal-hal menarik di lingkungan sekitar. Peserta didik juga mampu memahami dan memaknai teks narasi yang dibacakan atau dari media audio.",
      },
      {
        capaianPembelajaranId: cpIndB.id,
        name: "Membaca dan Memirsa",
        content: "Peserta didik mampu membaca kata-kata baru dengan pola kombinasi huruf yang telah dikenali dengan fasih. Mampu memaknai kosakata baru dan/atau kosakata Bahasa Indonesia serapan dari bahasa daerah dari teks yang dibaca atau tayangan yang dipirsa mengenai hal-hal menarik di lingkungan sekitar. Mampu memahami pesan dan informasi tentang kehidupan sehari-hari, teks narasi, dan puisi anak dalam bentuk cetak atau elektronik. Mampu memahami ide pokok dan ide pendukung pada teks informatif dan teks narasi.",
      },
      {
        capaianPembelajaranId: cpIndB.id,
        name: "Berbicara dan Mempresentasikan",
        content: "Peserta didik mampu berbicara dengan pilihan kata dan sikap tubuh/gestur yang santun, serta menggunakan volume dan intonasi yang tepat sesuai konteks. Mampu terlibat secara aktif dalam suatu percakapan dan diskusi sesuai tata cara. Mampu menceritakan kembali suatu informasi atau isi teks narasi yang dibaca, didengar, atau dipirsa mengenai hal-hal menarik di lingkungan sekitar.",
      },
      {
        capaianPembelajaranId: cpIndB.id,
        name: "Menulis",
        content: "Peserta didik mampu menulis berbagai teks sederhana dengan rangkaian kalimat yang beragam dan informasi mengenai hal-hal menarik di lingkungan sekitar. Mampu menggunakan kaidah sederhana kebahasaan dan kosakata baru yang memiliki makna denotatif untuk menulis teks sesuai dengan konteks. Terampil menulis kalimat dalam tulisan Latin dan tegak bersambung.",
      },
    ],
  });

  const cpIndC = await prisma.capaianPembelajaran.create({
    data: {
      subjectId: bahasaIndonesia.id,
      phaseId: phaseC.id,
      content: "Pada akhir Fase C, peserta didik memiliki kemampuan berbahasa untuk berkomunikasi secara efektif, santun, bernalar kritis, dan kreatif. Mereka mampu menganalisis informasi lisan, menemukan makna tersirat dari teks narasi/eksposisi yang kompleks, berdiskusi secara logis, serta menulis karya tulis secara kreatif.",
    },
  });
  await prisma.cPElement.createMany({
    data: [
      {
        capaianPembelajaranId: cpIndC.id,
        name: "Menyimak",
        content: "Peserta didik mampu menganalisis informasi lisan yang didengar dengan mengidentifikasi fakta, opini, serta maksud terselubung pembicara. Mereka mampu memahami ide pokok, ide pendukung, dan pesan dari berbagai jenis teks lisan maupun karya sastra lisan.",
      },
      {
        capaianPembelajaranId: cpIndC.id,
        name: "Membaca dan Memirsa",
        content: "Peserta didik mampu membaca teks dengan lancar, melafalkan kata dengan tepat, serta memahami ide pokok, detail informasi, dan pesan tersirat dari teks narasi, eksposisi, persuasi, dan teks sastra yang kompleks.",
      },
      {
        capaianPembelajaranId: cpIndC.id,
        name: "Berbicara dan Mempresentasikan",
        content: "Peserta didik mampu berpartisipasi aktif dalam diskusi kelompok, menyampaikan argumen yang logis secara santun, menyanggah pendapat orang lain dengan sopan, serta mempresentasikan laporan hasil pengamatan atau karya secara sistematis.",
      },
      {
        capaianPembelajaranId: cpIndC.id,
        name: "Menulis",
        content: "Peserta didik mampu menulis berbagai jenis teks (eksposisi, persuasi, narasi, deskripsi) secara kreatif dan sistematis. Mereka mampu menggunakan kosakata baru, ejaan yang benar sesuai PUEBI, serta kalimat efektif untuk menarik minat pembaca.",
      },
    ],
  });

  // ==========================================
  // --- IPAS ---
  // ==========================================
  const cpIpasB = await prisma.capaianPembelajaran.create({
    data: {
      subjectId: ipas.id,
      phaseId: phaseB.id,
      content: "Pada akhir Fase B, peserta didik menganalisis hubungan antara bentuk serta fungsi bagian tubuh pada manusia (pancaindra), siklus hidup makhluk hidup, gaya dan gerak, serta pelestarian sumber daya alam di lingkungan sekitar.",
    },
  });
  await prisma.cPElement.createMany({
    data: [
      {
        capaianPembelajaranId: cpIpasB.id,
        name: "Pemahaman IPAS (Sains & Sosial)",
        content: "Peserta didik menganalisis hubungan antara bentuk serta fungsi bagian tubuh pada manusia (pancaindra). Peserta didik membandingkan siklus hidup manusia, hewan, dan tumbuhan. Mereka mendeskripsikan keragaman hayati dan upaya pelestariannya. Peserta didik mengidentifikasi masalah lingkungan dan dampaknya, mengenali jenis-jenis gaya, serta memahami pelestarian lingkungan dan sejarah singkat daerah setempat.",
      },
      {
        capaianPembelajaranId: cpIpasB.id,
        name: "Keterampilan Proses",
        content: "Peserta didik mampu mengamati fenomena di sekitar secara sistematis, mempertanyakan aspek tertentu, merencanakan penyelidikan ilmiah sederhana, mengumpulkan data berbasis hasil pengamatan, membandingkan data, mengevaluasi kesimpulan, serta mengomunikasikan hasil penyelidikan alam sekitar secara lisan maupun tulisan.",
      },
    ],
  });

  const cpIpasC = await prisma.capaianPembelajaran.create({
    data: {
      subjectId: ipas.id,
      phaseId: phaseC.id,
      content: "Pada akhir Fase C, peserta didik menganalisis hubungan antara sistem organ tubuh manusia dan pemeliharaannya, perpindahan energi (cahaya dan bunyi), struktur bumi dan cuaca, serta interaksi sosial dan kegiatan ekonomi di masyarakat.",
    },
  });
  await prisma.cPElement.createMany({
    data: [
      {
        capaianPembelajaranId: cpIpasC.id,
        name: "Pemahaman IPAS (Sains & Sosial)",
        content: "Peserta didik memahami sistem pernapasan, pencernaan, dan peredaran darah manusia, memahami sifat cahaya dan bunyi melalui eksperimen, menganalisis struktur bumi dan bencana alam, serta memahami peran pelaku ekonomi dan keragaman sosial budaya di Indonesia.",
      },
      {
        capaianPembelajaranId: cpIpasC.id,
        name: "Keterampilan Proses",
        content: "Peserta didik mampu merumuskan pertanyaan penyelidikan ilmiah mandiri, mengendalikan variabel penelitian, menganalisis hubungan sebab-akibat antar variabel, mengidentifikasi bias data hasil pengukuran, serta menyajikan kesimpulan ilmiah secara meyakinkan menggunakan media visual.",
      },
    ],
  });

  // ==========================================
  // --- PENDIDIKAN PANCASILA ---
  // ==========================================
  const cpPancasilaA = await prisma.capaianPembelajaran.create({
    data: {
      subjectId: pancasila.id,
      phaseId: phaseA.id,
      content: "Pada akhir Fase A, peserta didik dapat mengenal simbol Pancasila, menyebutkan identitas diri sesuai jenis kelamin dan hobinya, menyebutkan aturan di rumah dan di sekolah, serta mengenal keragaman karakteristik fisik.",
    },
  });
  await prisma.cPElement.createMany({
    data: [
      {
        capaianPembelajaranId: cpPancasilaA.id,
        name: "Pancasila",
        content: "Peserta didik mampu mengenal dan menceritakan simbol dan sila-sila Pancasila dalam lambang negara Garuda Pancasila, menerapkan nilai-nilai Pancasila di lingkungan keluarga dan sekolah secara rutin, serta menunjukkan perilaku kasih sayang sesama.",
      },
      {
        capaianPembelajaranId: cpPancasilaA.id,
        name: "UUD NRI Tahun 1945",
        content: "Peserta didik mampu mengenal aturan di lingkungan keluarga dan sekolah, menceritakan contoh sikap patuh dan tidak patuh terhadap aturan, serta mempraktikkannya dalam aktivitas bermain bersama.",
      },
      {
        capaianPembelajaranId: cpPancasilaA.id,
        name: "Bhinneka Tunggal Ika",
        content: "Peserta didik mampu menyebutkan identitas dirinya secara lengkap, menceritakan keragaman fisik serta budaya teman-temannya di lingkungan kelas dan sekolah secara harmonis dan menghargai perbedaan.",
      },
      {
        capaianPembelajaranId: cpPancasilaA.id,
        name: "NKRI",
        content: "Peserta didik mampu menyebutkan karakteristik wilayah tempat tinggalnya (desa/kelurahan, kecamatan), menceritakan bentuk kerja sama menjaga kebersihan lingkungan, serta bersikap peduli terhadap lingkungan alam sekitar.",
      },
    ],
  });

  const cpPancasilaB = await prisma.capaianPembelajaran.create({
    data: {
      subjectId: pancasila.id,
      phaseId: phaseB.id,
      content: "Pada akhir Fase B, peserta didik memahami hubungan simbol dan sila Pancasila, mengidentifikasi hak dan kewajiban sebagai anggota keluarga dan sekolah, serta menghargai keragaman suku bangsa, sosial, dan budaya.",
    },
  });
  await prisma.cPElement.createMany({
    data: [
      {
        capaianPembelajaranId: cpPancasilaB.id,
        name: "Pancasila",
        content: "Peserta didik mampu menjelaskan makna sila-sila Pancasila, menceritakan hubungan simbol dengan makna sila Pancasila, mengidentifikasi keteladanan perumus Pancasila, serta menunjukkan sikap gotong royong dan adil di sekolah dan rumah.",
      },
      {
        capaianPembelajaranId: cpPancasilaB.id,
        name: "UUD NRI Tahun 1945",
        content: "Peserta didik mampu mengidentifikasi aturan, norma, hak, dan kewajiban sebagai anggota keluarga dan warga sekolah, menceritakan contoh pelaksanaan aturan tersebut, serta membiasakan diri melaksanakannya secara sadar.",
      },
      {
        capaianPembelajaranId: cpPancasilaB.id,
        name: "Bhinneka Tunggal Ika",
        content: "Peserta didik mampu menjelaskan identitas diri, keluarga, dan teman-teman sesuai budaya setempat, serta menghargai keragaman adat istiadat, bahasa, dan agama yang ada di lingkungan kabupaten/kota.",
      },
      {
        capaianPembelajaranId: cpPancasilaB.id,
        name: "NKRI",
        content: "Peserta didik mampu mengidentifikasi wilayah kabupaten/kota sebagai bagian dari wilayah provinsi dan NKRI, menceritakan kerja bakti menjaga lingkungan, serta menunjukkan perilaku cinta tanah air.",
      },
    ],
  });

  const cpPancasilaC = await prisma.capaianPembelajaran.create({
    data: {
      subjectId: pancasila.id,
      phaseId: phaseC.id,
      content: "Pada akhir Fase C, peserta didik menganalisis dan mempraktikkan nilai-nilai Pancasila, memahami norma-norma sosial dalam masyarakat, menghargai keragaman adat istiadat, serta menjaga persatuan NKRI.",
    },
  });
  await prisma.cPElement.createMany({
    data: [
      {
        capaianPembelajaranId: cpPancasilaC.id,
        name: "Pancasila",
        content: "Peserta didik mampu menganalisis nilai-nilai Pancasila dalam kehidupan sehari-hari, meneladani sikap juang para pahlawan nasional, serta membuat komitmen bersama untuk menjaga kerukunan di sekolah dan masyarakat.",
      },
      {
        capaianPembelajaranId: cpPancasilaC.id,
        name: "UUD NRI Tahun 1945",
        content: "Peserta didik mampu menganalisis norma, aturan, hak, dan kewajiban yang berlaku di masyarakat demi keadilan sosial, serta menampilkan perilaku patuh hukum di jalan raya dan lingkungan publik.",
      },
      {
        capaianPembelajaranId: cpPancasilaC.id,
        name: "Bhinneka Tunggal Ika",
        content: "Peserta didik mampu menganalisis penyebab konflik akibat perbedaan budaya dan merumuskan solusi pemecahannya, serta merancang kampanye toleransi antarumat beragama di lingkungan provinsi.",
      },
      {
        capaianPembelajaranId: cpPancasilaC.id,
        name: "NKRI",
        content: "Peserta didik mampu mendemonstrasikan perilaku bela negara sederhana, menjaga persatuan bangsa Indonesia, serta berpartisipasi aktif dalam kegiatan gotong royong kebencanaan di daerah setempat.",
      },
    ],
  });

  // ==========================================
  // --- PAIBP ---
  // ==========================================
  const cpPaibpA = await prisma.capaianPembelajaran.create({
    data: {
      subjectId: paibp.id,
      phaseId: phaseA.id,
      content: "Pada akhir Fase A, peserta didik mengenal huruf hijaiyah berharakat, menghafal surah pendek Al-Qur'an, memahami rukun iman, rukun Islam, adab makan dan minum, serta meneladani kisah keteladanan para nabi.",
    },
  });
  await prisma.cPElement.createMany({
    data: [
      {
        capaianPembelajaranId: cpPaibpA.id,
        name: "Al-Qur'an dan Hadis",
        content: "Peserta didik mampu melafalkan huruf hijaiyah tunggal berharakat fathah, kasrah, dan dammah dengan benar. Mereka mampu menghafal surah Al-Fatihah, Al-Ikhlas, dan Al-Asr secara tartil dan lancar.",
      },
      {
        capaianPembelajaranId: cpPaibpA.id,
        name: "Akidah",
        content: "Peserta didik mampu menjelaskan rukun iman kepada Allah swt. dan rukun Islam secara berurutan, serta meyakini bahwa Allah swt. Maha Pencipta alam semesta.",
      },
      {
        capaianPembelajaranId: cpPaibpA.id,
        name: "Akhlak",
        content: "Peserta didik mampu membiasakan diri mengucapkan kalimat tayyibah (basmalah, hamdalah), mempraktikkan adab makan-minum yang islami, serta bersikap sopan santun kepada orang tua dan guru.",
      },
      {
        capaianPembelajaranId: cpPaibpA.id,
        name: "Fikih",
        content: "Peserta didik mampu memahami tata cara bersuci (istinja, wudu) secara sederhana dan mempraktikkannya sebelum beribadah.",
      },
    ],
  });

  const cpPaibpB = await prisma.capaianPembelajaran.create({
    data: {
      subjectId: paibp.id,
      phaseId: phaseB.id,
      content: "Pada akhir Fase B, peserta didik dapat membaca Al-Qur'an dengan tartil, memahami makna asmaul husna, rukun iman kepada rasul, kitab, dan hari akhir, serta mempraktikkan salat fardu dan salat sunah.",
    },
  });
  await prisma.cPElement.createMany({
    data: [
      {
        capaianPembelajaranId: cpPaibpB.id,
        name: "Al-Qur'an dan Hadis",
        content: "Peserta didik mampu membaca surah Al-Alaq dan Al-Kautsar dengan tajwid yang benar. Mereka mampu menulis kalimat-kalimat pendek dari Al-Qur'an dengan tulisan yang rapi dan benar.",
      },
      {
        capaianPembelajaranId: cpPaibpB.id,
        name: "Akidah",
        content: "Peserta didik mampu menjelaskan makna Asmaul Husna (Al-Malik, Al-Aziz, Al-Quddus) dan meneladani sifat-sifat mulia tersebut dalam pertemanan sehari-hari.",
      },
      {
        capaianPembelajaranId: cpPaibpB.id,
        name: "Fikih",
        content: "Peserta didik mampu menjelaskan rukun dan syarat sah salat lima waktu, mempraktikkan gerakan dan bacaan salat fardu secara tertib, serta menjelaskan tata cara salat berjamaah.",
      },
      {
        capaianPembelajaranId: cpPaibpB.id,
        name: "Sejarah Peradaban Islam",
        content: "Peserta didik mampu menceritakan kisah nabi Adam a.s., nabi Ibrahim a.s., nabi Muhammad saw., serta meneladani ketangguhan dakwah mereka.",
      },
    ],
  });

  const cpPaibpC = await prisma.capaianPembelajaran.create({
    data: {
      subjectId: paibp.id,
      phaseId: phaseC.id,
      content: "Pada akhir Fase C, peserta didik dapat memahami makna ayat Al-Qur'an tentang toleransi, rukun iman secara mendalam, tata cara zakat, puasa, dan haji, serta meneladani akhlak mulia kepemimpinan khulafaurasyidin.",
    },
  });
  await prisma.cPElement.createMany({
    data: [
      {
        capaianPembelajaranId: cpPaibpC.id,
        name: "Al-Qur'an dan Hadis",
        content: "Peserta didik mampu memahami isi kandungan surah Al-Ma'un dan Al-Hujurat ayat 13 tentang nilai toleransi dan menghargai keragaman sosial budaya di lingkungan sekitar.",
      },
      {
        capaianPembelajaranId: cpPaibpC.id,
        name: "Akidah",
        content: "Peserta didik mampu menganalisis makna iman kepada Hari Akhir (Kiamat) dan Qada dan Qadar Allah swt. secara mendalam untuk memperkuat takwa.",
      },
      {
        capaianPembelajaranId: cpPaibpC.id,
        name: "Fikih",
        content: "Peserta didik mampu menjelaskan ketentuan ibadah puasa Ramadan, zakat fitrah, zakat mal, serta manasik ibadah haji secara runtut dan benar.",
      },
      {
        capaianPembelajaranId: cpPaibpC.id,
        name: "Akhlak",
        content: "Peserta didik mampu menerapkan akhlak mulia dalam penggunaan media sosial, menunjukkan toleransi beragama, serta menjauhi sifat gibah dan fitnah.",
      },
    ],
  });

  // ==========================================
  // --- PJOK ---
  // ==========================================
  const cpPjokA = await prisma.capaianPembelajaran.create({
    data: {
      subjectId: pjok.id,
      phaseId: phaseA.id,
      content: "Pada akhir Fase A, peserta didik dapat mempraktikkan gerak dasar lokomotor, non-lokomotor, dan manipulatif, memahami prosedur aktivitas pola gerak dasar tersebut, memahami pentingnya aktivitas jasmani harian untuk kebugaran, serta menunjukkan perilaku tertib dan jujur.",
    },
  });
  await prisma.cPElement.createMany({
    data: [
      {
        capaianPembelajaranId: cpPjokA.id,
        name: "Keterampilan Gerak",
        content: "Peserta didik mampu menirukan dan mempraktikkan gerak lokomotor (berjalan, berlari, melompat), non-lokomotor (menekuk, memutar), dan manipulatif (melempar, menangkap bola) dalam bentuk permainan sederhana yang aman.",
      },
      {
        capaianPembelajaranId: cpPjokA.id,
        name: "Pengetahuan Gerak",
        content: "Peserta didik mampu mengidentifikasi dan memahami fakta, konsep, serta prosedur dasar saat mempraktikkan pola gerak lokomotor, non-lokomotor, dan manipulatif melalui instruksi atau visualisasi sederhana.",
      },
      {
        capaianPembelajaranId: cpPjokA.id,
        name: "Pemanfaatan Gerak",
        content: "Peserta didik mampu mempraktikkan pola hidup sehat dengan cara mencuci tangan, menggosok gigi, mengenali jenis makanan sehat dan bergizi, serta melakukan peregangan tubuh ringan sebelum belajar.",
      },
      {
        capaianPembelajaranId: cpPjokA.id,
        name: "Pengembangan Karakter dan Internalisasi Nilai-Nilai Gerak",
        content: "Peserta didik menunjukkan perilaku tertib saat mengikuti instruksi guru, bersikap jujur selama bermain, menerima kekalahan dengan lapang dada, serta mau berbagi alat olahraga dengan teman sebaya.",
      },
    ],
  });

  const cpPjokB = await prisma.capaianPembelajaran.create({
    data: {
      subjectId: pjok.id,
      phaseId: phaseB.id,
      content: "Pada akhir Fase B, peserta didik dapat mempraktikkan variasi dan kombinasi gerak dasar lokomotor/manipulatif, memahami konsep gerak dasar dalam olahraga permainan sederhana, mempraktikkan kebugaran jasmani dasar, serta menampilkan kerja sama tim.",
    },
  });
  await prisma.cPElement.createMany({
    data: [
      {
        capaianPembelajaranId: cpPjokB.id,
        name: "Keterampilan Gerak",
        content: "Peserta didik mampu melakukan variasi gerak lokomotor, non-lokomotor, dan manipulatif dalam olahraga permainan bola besar (sepak bola dasar) dan bola kecil (kasti). Mereka mempraktikkan senam lantai (roll depan) secara aman.",
      },
      {
        capaianPembelajaranId: cpPjokB.id,
        name: "Pengetahuan Gerak",
        content: "Peserta didik mampu menjelaskan prosedur variasi dan kombinasi gerak dasar lokomotor, non-lokomotor, dan manipulatif dalam berbagai olahraga permainan sederhana, serta memahami langkah-langkah keselamatan senam lantai.",
      },
      {
        capaianPembelajaranId: cpPjokB.id,
        name: "Pemanfaatan Gerak",
        content: "Peserta didik mampu mengukur kebugaran jasmani dasar (daya tahan otot dan kelenturan) serta memahami konsep pemeliharaan kesehatan organ tubuh utama (jantung dan paru-paru).",
      },
      {
        capaianPembelajaranId: cpPjokB.id,
        name: "Pengembangan Karakter dan Internalisasi Nilai-Nilai Gerak",
        content: "Peserta didik menampilkan kerja sama yang baik dengan rekan satu tim, mematuhi aturan bermain, menghormati keputusan wasit/guru, serta bersikap sportif menerima kemenangan maupun kekalahan.",
      },
    ],
  });

  const cpPjokC = await prisma.capaianPembelajaran.create({
    data: {
      subjectId: pjok.id,
      phaseId: phaseC.id,
      content: "Pada akhir Fase C, peserta didik mempraktikkan kombinasi gerak dasar spesifik dalam olahraga permainan, memahami taktis permainan, mempraktikkan latihan sirkuit kebugaran jasmani secara mandiri, serta menunjukkan kepemimpinan kelompok.",
    },
  });
  await prisma.cPElement.createMany({
    data: [
      {
        capaianPembelajaranId: cpPjokC.id,
        name: "Keterampilan Gerak",
        content: "Peserta didik mampu mendemonstrasikan kombinasi gerak spesifik passing, drible, shooting pada permainan bola besar. Mereka mempraktikkan kombinasi gerak senam irama menggunakan pita/gada.",
      },
      {
        capaianPembelajaranId: cpPjokC.id,
        name: "Pengetahuan Gerak",
        content: "Peserta didik mampu menganalisis konsep dan prosedur kombinasi gerak spesifik (passing, drible, shooting) dalam olahraga permainan, bela diri, senam irama menggunakan gada/pita, serta aktivitas air.",
      },
      {
        capaianPembelajaranId: cpPjokC.id,
        name: "Pemanfaatan Gerak",
        content: "Peserta didik mampu melakukan latihan sirkuit kebugaran jasmani untuk melatih kelincahan dan kekuatan tubuh, serta menjelaskan bahaya narkoba, zat adiktif, dan rokok bagi kesehatan diri.",
      },
      {
        capaianPembelajaranId: cpPjokC.id,
        name: "Pengembangan Karakter dan Internalisasi Nilai-Nilai Gerak",
        content: "Peserta didik menunjukkan kepemimpinan (leadership) saat menjadi kapten tim, mampu memecahkan konflik permainan secara damai, serta memiliki komitmen disiplin latihan yang tinggi.",
      },
    ],
  });

  // ==========================================
  // --- SENI RUPA ---
  // ==========================================
  const cpSeniRupaA = await prisma.capaianPembelajaran.create({
    data: {
      subjectId: seniRupa.id,
      phaseId: phaseA.id,
      content: "Pada akhir Fase A, peserta didik mampu mengamati bentuk-bentuk di sekitar mereka, menggambar bentuk geometris dasar, mengenali warna primer, serta mengekspresikan perasaannya melalui karya visual sederhana.",
    },
  });
  await prisma.cPElement.createMany({
    data: [
      {
        capaianPembelajaranId: cpSeniRupaA.id,
        name: "Mengalami",
        content: "Peserta didik mampu mengamati, mengenali, dan mendeskripsikan elemen rupa di lingkungan sekitar secara visual (garis tebal-tipis, bentuk geometris sederhana, warna primer merah-kuning-biru).",
      },
      {
        capaianPembelajaranId: cpSeniRupaA.id,
        name: "Menciptakan",
        content: "Peserta didik mampu menggambar bentuk-bentuk organis dan geometris sederhana, mewarnai dengan krayon secara merata, serta membuat kolase kertas sederhana menggunakan lem dan gunting.",
      },
      {
        capaianPembelajaranId: cpSeniRupaA.id,
        name: "Merefleksikan",
        content: "Peserta didik mampu menyebutkan hal yang mereka sukai dari karya gambar/warna yang telah dibuat sendiri maupun karya milik teman sebaya.",
      },
    ],
  });

  const cpSeniRupaB = await prisma.capaianPembelajaran.create({
    data: {
      subjectId: seniRupa.id,
      phaseId: phaseB.id,
      content: "Pada akhir Fase B, peserta didik mampu mengeksplorasi alat dan bahan seni, menggunakan prinsip tekstur dan ruang dalam gambar dua dimensi, serta membuat produk kerajinan tangan lokal sederhana secara mandiri.",
    },
  });
  await prisma.cPElement.createMany({
    data: [
      {
        capaianPembelajaranId: cpSeniRupaB.id,
        name: "Mengalami",
        content: "Peserta didik mampu mengeksplorasi beraneka ragam tekstur (kasar, halus, licin) dan mengaplikasikannya ke dalam gambar teknik cetak tinggi (frottage/tempel daun).",
      },
      {
        capaianPembelajaranId: cpSeniRupaB.id,
        name: "Menciptakan",
        content: "Peserta didik mampu melukis dengan perspektif objek sederhana (dekat-jauh), mempraktikkan teknik gradasi warna krayon, serta merancang gambar dekoratif bermotif flora dan fauna daerah.",
      },
      {
        capaianPembelajaranId: cpSeniRupaB.id,
        name: "Berpikir Artistik",
        content: "Peserta didik mampu memilih dan mempersiapkan alat lukis, kuas, palet, dan media kertas/karton yang sesuai dengan tema gambar imajinatif mereka secara mandiri.",
      },
    ],
  });

  const cpSeniRupaC = await prisma.capaianPembelajaran.create({
    data: {
      subjectId: seniRupa.id,
      phaseId: phaseC.id,
      content: "Pada akhir Fase C, peserta didik mampu mengeksplorasi teknik lukis cat air, membuat karya rupa tiga dimensi (clay, patung sabun), merancang poster edukatif, serta mengapresiasi keindahan karya seni tradisional Lombok.",
    },
  });
  await prisma.cPElement.createMany({
    data: [
      {
        capaianPembelajaranId: cpSeniRupaC.id,
        name: "Menciptakan",
        content: "Peserta didik mampu melukis menggunakan teknik basah-pada-basah (wet on wet) cat air, membuat karya patung tiga dimensi dari sabun batangan, serta merancang poster bertema kelestarian lingkungan hidup.",
      },
      {
        capaianPembelajaranId: cpSeniRupaC.id,
        name: "Merefleksikan",
        content: "Peserta didik mampu menganalisis estetika, keseimbangan proporsi, dan makna di balik sebuah karya seni, serta menuliskan apresiasi seni secara santun dan konstruktif.",
      },
      {
        capaianPembelajaranId: cpSeniRupaC.id,
        name: "Berdampak",
        content: "Peserta didik mampu membuat karya seni rupa dekorasi kelas yang bermanfaat bagi kenyamanan belajar bersama, serta menunjukkan rasa bangga terhadap warisan tenun ikat tradisional Lombok.",
      },
    ],
  });

  console.log("Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
