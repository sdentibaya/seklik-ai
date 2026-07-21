"use server";

import { getDb } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { requireUserId } from "@/lib/session";

export interface HolidayItem {
  month: string;
  week: number;
  description: string;
}

export interface AllocationItem {
  tpId: string;
  month: string;
  week: number;
  jp: number;
}

export async function getPromesData() {
  try {
    const userId = await requireUserId();
    const activeSetup = await getDb().classSetup.findUnique({ where: { userId } });
    if (!activeSetup) {
      return { activeSetup: null, tps: [], allocations: [], holidays: [] };
    }

    const subject = await getDb().subject.findUnique({
      where: { id: activeSetup.subjectId },
    });
    const phase = await getDb().phase.findUnique({
      where: { id: activeSetup.phaseId },
    });

    const tps = await getDb().tujuanPembelajaran.findMany({
      where: {
        userId,
        subjectId: activeSetup.subjectId,
        phaseId: activeSetup.phaseId,
      },
      orderBy: { order: "asc" },
    });

    const allocations = await getDb().promesAllocation.findMany({
      where: {
        userId,
        subjectId: activeSetup.subjectId,
        phaseId: activeSetup.phaseId,
      },
    });

    const holidays = await getDb().calendarHoliday.findMany({
      where: {
        userId,
        subjectId: activeSetup.subjectId,
        phaseId: activeSetup.phaseId,
      },
    });

    return {
      activeSetup: {
        subjectId: activeSetup.subjectId,
        phaseId: activeSetup.phaseId,
        subjectName: subject?.name || "",
        phaseName: phase?.name || "",
      },
      tps,
      allocations: allocations.map((al) => ({
        tpId: al.tujuanPembelajaranId,
        month: al.month,
        week: al.week,
        jp: al.jp,
      })),
      holidays: holidays.map((h) => ({
        month: h.month,
        week: h.week,
        description: h.description,
      })),
    };
  } catch (error) {
    console.error("Error in getPromesData:", error);
    throw new Error("Gagal memuat data Promes");
  }
}

export async function savePromesAllocationsAction(
  subjectId: string,
  phaseId: string,
  allocations: AllocationItem[],
  semester: number
) {
  try {
    const userId = await requireUserId();
    const semesterMonths =
      semester === 2
        ? ["Januari", "Februari", "Maret", "April", "Mei", "Juni"]
        : ["Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    await getDb().$transaction(async (tx) => {
      await tx.promesAllocation.deleteMany({
        where: {
          userId,
          subjectId,
          phaseId,
          month: { in: semesterMonths },
        },
      });

      const validAllocations = allocations.filter(
        (al) => al.jp > 0 && semesterMonths.includes(al.month)
      );
      if (validAllocations.length > 0) {
        const chunkSize = 100;
        for (let i = 0; i < validAllocations.length; i += chunkSize) {
          const chunk = validAllocations.slice(i, i + chunkSize);
          await tx.promesAllocation.createMany({
            data: chunk.map((al) => ({
              userId,
              subjectId,
              phaseId,
              tujuanPembelajaranId: al.tpId,
              month: al.month,
              week: al.week,
              jp: parseInt(al.jp as any) || 0,
            })),
          });
        }
      }
    });

    revalidatePath("/promes");
    return { success: true };
  } catch (error) {
    console.error("Error in savePromesAllocationsAction:", error);
    return { success: false, error: "Gagal menyimpan alokasi program semester" };
  }
}

export async function clearHolidaysAction(
  subjectId: string,
  phaseId: string,
  semester: number
) {
  try {
    const userId = await requireUserId();
    const semesterMonths =
      semester === 2
        ? ["Januari", "Februari", "Maret", "April", "Mei", "Juni"]
        : ["Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    await getDb().calendarHoliday.deleteMany({
      where: {
        userId,
        subjectId,
        phaseId,
        month: { in: semesterMonths },
      },
    });
    revalidatePath("/promes");
    return { success: true };
  } catch (error) {
    console.error("Error in clearHolidaysAction:", error);
    return { success: false, error: "Gagal mengosongkan data libur" };
  }
}

export async function processCalendarOCRAction(
  subjectId: string,
  phaseId: string,
  base64Image: string,
  semester: number
) {
  const userId = await requireUserId();
  // Cap payload to reduce DoS/cost abuse
  if (!base64Image || base64Image.length > 4_000_000) {
    return {
      success: false,
      isSimulated: true,
      holidays: [] as HolidayItem[],
      error: "Gambar terlalu besar atau kosong.",
    };
  }

  const mimoKey = process.env.MIMO_API_KEY;
  let parsedHolidays: HolidayItem[] = [];
  let isSimulated = false;

  const semesterMonths =
    semester === 2
      ? ["Januari", "Februari", "Maret", "April", "Mei", "Juni"]
      : ["Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  const simulatedHolidays: HolidayItem[] =
    semester === 2
      ? [
          { month: "Januari", week: 1, description: "Libur Tahun Baru & Awal Semester" },
          { month: "Maret", week: 2, description: "Libur Hari Raya Nyepi" },
          { month: "April", week: 2, description: "Libur Hari Raya Idul Fitri" },
          { month: "April", week: 3, description: "Libur Hari Raya Idul Fitri" },
          { month: "Juni", week: 3, description: "Libur Akhir Semester Genap" },
          { month: "Juni", week: 4, description: "Libur Akhir Semester Genap" },
        ]
      : [
          { month: "Juli", week: 1, description: "Libur Akhir Tahun Pelajaran" },
          { month: "Juli", week: 2, description: "Libur Akhir Tahun Pelajaran" },
          { month: "Agustus", week: 3, description: "Libur HUT RI ke-81" },
          { month: "September", week: 4, description: "Libur Jeda Tengah Semester 1" },
          { month: "Desember", week: 3, description: "Libur Akhir Semester Ganjil" },
          { month: "Desember", week: 4, description: "Libur Akhir Semester Ganjil" },
        ];

  if (mimoKey) {
    console.log(
      `Processing Academic Calendar for Semester ${semester} with MiMo V2.5 Vision API...`
    );
    try {
      const response = await fetch("https://api.xiaomimimo.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${mimoKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "mimo-v2.5",
          messages: [
            {
              role: "system",
              content: `Anda adalah asisten AI pembaca Kalender Akademik Sekolah Dasar di Indonesia.
Analisis gambar kalender akademik yang diberikan. Temukan minggu-minggu libur sekolah di Semester ${semester} (${semester === 2 ? "Januari s/d Juni" : "Juli s/d Desember"}).
Kembalikan respon berupa JSON Array objek, di mana setiap objek mewakili 1 minggu libur dengan atribut:
- month: nama bulan dalam Bahasa Indonesia (${semester === 2 ? '"Januari", "Februari", "Maret", "April", "Mei", "Juni"' : '"Juli", "Agustus", "September", "Oktober", "November", "Desember"'})
- week: nomor minggu dalam bulan tersebut (1 s/d 5)
- description: alasan libur (maksimal 30 karakter)

Contoh format respon:
[
  { "month": "${semester === 2 ? "Januari" : "Juli"}", "week": 1, "description": "Libur Awal Semester" }
]

PENTING: Hanya kembalikan array JSON saja tanpa teks pembuka atau penutup markdown!`,
            },
            {
              role: "user",
              content: [
                {
                  type: "text",
                  text: `Ekstrak seluruh minggu libur sekolah untuk Semester ${semester} (${semester === 2 ? "Januari s/d Juni" : "Juli s/d Desember"}) dari gambar kalender akademik terlampir.`,
                },
                {
                  type: "image_url",
                  image_url: {
                    url: base64Image,
                  },
                },
              ],
            },
          ],
          response_format: { type: "json_object" },
          temperature: 0.1,
        }),
      });

      if (response.ok) {
        const data = await response.json() as any;
        const contentText = data.choices[0]?.message?.content?.trim();
        let parsed = JSON.parse(contentText);
        if (Array.isArray(parsed)) {
          parsedHolidays = parsed;
        } else {
          const firstKey = Object.keys(parsed)[0];
          if (Array.isArray(parsed[firstKey])) {
            parsedHolidays = parsed[firstKey];
          }
        }
      } else {
        parsedHolidays = simulatedHolidays;
        isSimulated = true;
      }
    } catch (e) {
      console.error("MiMo Vision API execution failed:", e);
      parsedHolidays = simulatedHolidays;
      isSimulated = true;
    }
  } else {
    parsedHolidays = simulatedHolidays;
    isSimulated = true;
  }

  const sanitizedHolidays = parsedHolidays.filter(
    (h) =>
      h &&
      typeof h.month === "string" &&
      semesterMonths.includes(h.month) &&
      typeof h.week === "number" &&
      h.week >= 1 &&
      h.week <= 5 &&
      typeof h.description === "string"
  );

  const finalHolidays =
    sanitizedHolidays.length > 0 ? sanitizedHolidays : simulatedHolidays;

  try {
    await getDb().$transaction(async (tx) => {
      await tx.calendarHoliday.deleteMany({
        where: {
          userId,
          subjectId,
          phaseId,
          month: { in: semesterMonths },
        },
      });

      await tx.calendarHoliday.createMany({
        data: finalHolidays.map((h) => ({
          userId,
          subjectId,
          phaseId,
          month: h.month,
          week: h.week,
          description: h.description,
        })),
      });
    });
  } catch (dbError) {
    console.error("Failed to store holidays in database:", dbError);
  }

  revalidatePath("/promes");
  return { success: true, isSimulated, holidays: finalHolidays };
}

export async function addManualHolidayAction(
  subjectId: string,
  phaseId: string,
  month: string,
  week: number,
  description: string
) {
  try {
    const userId = await requireUserId();
    await getDb().calendarHoliday.upsert({
      where: {
        userId_subjectId_phaseId_month_week: {
          userId,
          subjectId,
          phaseId,
          month,
          week,
        },
      },
      create: {
        userId,
        subjectId,
        phaseId,
        month,
        week,
        description,
      },
      update: {
        description,
      },
    });
    revalidatePath("/promes");
    return { success: true };
  } catch (error) {
    console.error("Error in addManualHolidayAction:", error);
    return { success: false, error: "Gagal menyimpan jadwal manual" };
  }
}
