-- CreateTable
CREATE TABLE "Subject" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT
);

-- CreateTable
CREATE TABLE "Phase" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "classes" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CapaianPembelajaran" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "subjectId" TEXT NOT NULL,
    "phaseId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    CONSTRAINT "CapaianPembelajaran_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "CapaianPembelajaran_phaseId_fkey" FOREIGN KEY ("phaseId") REFERENCES "Phase" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CPElement" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "capaianPembelajaranId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    CONSTRAINT "CPElement_capaianPembelajaranId_fkey" FOREIGN KEY ("capaianPembelajaranId") REFERENCES "CapaianPembelajaran" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ClassSetup" (
    "userId" TEXT NOT NULL PRIMARY KEY,
    "subjectId" TEXT NOT NULL,
    "phaseId" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "TujuanPembelajaran" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "subjectId" TEXT NOT NULL,
    "phaseId" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "element" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "PromesAllocation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "subjectId" TEXT NOT NULL,
    "phaseId" TEXT NOT NULL,
    "tujuanPembelajaranId" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "week" INTEGER NOT NULL,
    "jp" INTEGER NOT NULL,
    CONSTRAINT "PromesAllocation_tujuanPembelajaranId_fkey" FOREIGN KEY ("tujuanPembelajaranId") REFERENCES "TujuanPembelajaran" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CalendarHoliday" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "subjectId" TEXT NOT NULL,
    "phaseId" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "week" INTEGER NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ModulAjar" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "subjectId" TEXT NOT NULL,
    "phaseId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "metadata" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Lkpd" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "modulAjarId" TEXT,
    "type" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Lkpd_modulAjarId_fkey" FOREIGN KEY ("modulAjarId") REFERENCES "ModulAjar" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "BankSoal" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "phaseId" TEXT NOT NULL,
    "cognitiveLevel" TEXT NOT NULL,
    "akmType" TEXT NOT NULL,
    "stimulus" TEXT,
    "pertanyaan" TEXT NOT NULL,
    "options" TEXT,
    "kunciJawaban" TEXT NOT NULL,
    "rubrikPenilaian" TEXT,
    "generateCode" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "BankSoal_phaseId_fkey" FOREIGN KEY ("phaseId") REFERENCES "Phase" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PaketUjian" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "soalIds" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "SchoolProfile" (
    "userId" TEXT NOT NULL PRIMARY KEY,
    "schoolName" TEXT NOT NULL DEFAULT 'SD Negeri 3 Pringgabaya',
    "headmasterName" TEXT NOT NULL DEFAULT 'Nama Kepala Sekolah',
    "headmasterNip" TEXT NOT NULL DEFAULT 'NIP Kepala Sekolah',
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "UserProfile" (
    "userId" TEXT NOT NULL PRIMARY KEY,
    "fullName" TEXT NOT NULL DEFAULT 'Nama Guru, S.Pd.',
    "nip" TEXT DEFAULT '',
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" DATETIME,
    "image" TEXT,
    "password" TEXT,
    "role" TEXT DEFAULT 'user'
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" DATETIME NOT NULL,
    CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "_ModulAjarToTujuanPembelajaran" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ModulAjarToTujuanPembelajaran_A_fkey" FOREIGN KEY ("A") REFERENCES "ModulAjar" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ModulAjarToTujuanPembelajaran_B_fkey" FOREIGN KEY ("B") REFERENCES "TujuanPembelajaran" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_LkpdToTujuanPembelajaran" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_LkpdToTujuanPembelajaran_A_fkey" FOREIGN KEY ("A") REFERENCES "Lkpd" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_LkpdToTujuanPembelajaran_B_fkey" FOREIGN KEY ("B") REFERENCES "TujuanPembelajaran" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_BankSoalToTujuanPembelajaran" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_BankSoalToTujuanPembelajaran_A_fkey" FOREIGN KEY ("A") REFERENCES "BankSoal" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_BankSoalToTujuanPembelajaran_B_fkey" FOREIGN KEY ("B") REFERENCES "TujuanPembelajaran" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Subject_name_key" ON "Subject"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Phase_name_key" ON "Phase"("name");

-- CreateIndex
CREATE UNIQUE INDEX "CapaianPembelajaran_subjectId_phaseId_key" ON "CapaianPembelajaran"("subjectId", "phaseId");

-- CreateIndex
CREATE INDEX "TujuanPembelajaran_userId_idx" ON "TujuanPembelajaran"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "TujuanPembelajaran_userId_subjectId_phaseId_code_key" ON "TujuanPembelajaran"("userId", "subjectId", "phaseId", "code");

-- CreateIndex
CREATE INDEX "PromesAllocation_userId_idx" ON "PromesAllocation"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "PromesAllocation_userId_subjectId_phaseId_tujuanPembelajaranId_month_week_key" ON "PromesAllocation"("userId", "subjectId", "phaseId", "tujuanPembelajaranId", "month", "week");

-- CreateIndex
CREATE INDEX "CalendarHoliday_userId_idx" ON "CalendarHoliday"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "CalendarHoliday_userId_subjectId_phaseId_month_week_key" ON "CalendarHoliday"("userId", "subjectId", "phaseId", "month", "week");

-- CreateIndex
CREATE INDEX "ModulAjar_userId_idx" ON "ModulAjar"("userId");

-- CreateIndex
CREATE INDEX "Lkpd_userId_idx" ON "Lkpd"("userId");

-- CreateIndex
CREATE INDEX "BankSoal_userId_idx" ON "BankSoal"("userId");

-- CreateIndex
CREATE INDEX "PaketUjian_userId_idx" ON "PaketUjian"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "_ModulAjarToTujuanPembelajaran_AB_unique" ON "_ModulAjarToTujuanPembelajaran"("A", "B");

-- CreateIndex
CREATE INDEX "_ModulAjarToTujuanPembelajaran_B_index" ON "_ModulAjarToTujuanPembelajaran"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LkpdToTujuanPembelajaran_AB_unique" ON "_LkpdToTujuanPembelajaran"("A", "B");

-- CreateIndex
CREATE INDEX "_LkpdToTujuanPembelajaran_B_index" ON "_LkpdToTujuanPembelajaran"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BankSoalToTujuanPembelajaran_AB_unique" ON "_BankSoalToTujuanPembelajaran"("A", "B");

-- CreateIndex
CREATE INDEX "_BankSoalToTujuanPembelajaran_B_index" ON "_BankSoalToTujuanPembelajaran"("B");

