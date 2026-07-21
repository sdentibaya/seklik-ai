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
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT 'active-setup',
    "subjectId" TEXT NOT NULL,
    "phaseId" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Subject_name_key" ON "Subject"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Phase_name_key" ON "Phase"("name");

-- CreateIndex
CREATE UNIQUE INDEX "CapaianPembelajaran_subjectId_phaseId_key" ON "CapaianPembelajaran"("subjectId", "phaseId");
