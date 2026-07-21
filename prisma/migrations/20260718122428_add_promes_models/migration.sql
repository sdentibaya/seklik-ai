-- CreateTable
CREATE TABLE "PromesAllocation" (
    "id" TEXT NOT NULL PRIMARY KEY,
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
    "subjectId" TEXT NOT NULL,
    "phaseId" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "week" INTEGER NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "PromesAllocation_subjectId_phaseId_tujuanPembelajaranId_month_week_key" ON "PromesAllocation"("subjectId", "phaseId", "tujuanPembelajaranId", "month", "week");

-- CreateIndex
CREATE UNIQUE INDEX "CalendarHoliday_subjectId_phaseId_month_week_key" ON "CalendarHoliday"("subjectId", "phaseId", "month", "week");
