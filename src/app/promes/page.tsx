"use client";

import { useState, useEffect, useTransition } from "react";
import { 
  getPromesData, 
  savePromesAllocationsAction, 
  processCalendarOCRAction, 
  clearHolidaysAction,
  addManualHolidayAction,
  HolidayItem,
  AllocationItem
} from "./actions";
import { 
  Upload, 
  Trash2, 
  Save, 
  Calendar, 
  Loader2, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  Info,
  ChevronRight,
  RefreshCw,
  X,
  Printer,
  Settings
} from "lucide-react";
import Link from "next/link";

const SEMESTER_CONFIG: Record<number, { name: string; weeks: number }[]> = {
  1: [
    { name: "Juli", weeks: 4 },
    { name: "Agustus", weeks: 5 },
    { name: "September", weeks: 4 },
    { name: "Oktober", weeks: 4 },
    { name: "November", weeks: 5 },
    { name: "Desember", weeks: 4 },
  ],
  2: [
    { name: "Januari", weeks: 4 },
    { name: "Februari", weeks: 4 },
    { name: "Maret", weeks: 5 },
    { name: "April", weeks: 4 },
    { name: "Mei", weeks: 4 },
    { name: "Juni", weeks: 5 },
  ],
};

const getEventDetails = (desc: string) => {
  const isActualHoliday = desc.toLowerCase().includes("libur");
  
  let label = "EVT";
  if (isActualHoliday) {
    label = "LBR";
  } else {
    const words = desc.split(" ").filter(w => w.trim().length > 0);
    if (words.length === 1 && words[0].length <= 4) {
      label = words[0].toUpperCase();
    } else if (words.length === 1) {
      label = words[0].substring(0, 3).toUpperCase();
    } else {
      label = words.map(w => w[0]).join("").substring(0, 4).toUpperCase();
    }
  }

  return {
    isActualHoliday,
    label,
    boxClass: isActualHoliday 
      ? "bg-rose-100/50 text-rose-500" 
      : "bg-amber-100/50 text-amber-600",
    bgClass: isActualHoliday
      ? "bg-rose-50/40"
      : "bg-amber-50/40",
    headerBg: isActualHoliday
      ? "bg-rose-50 text-rose-500 font-semibold"
      : "bg-amber-50 text-amber-600 font-semibold",
    footerBg: isActualHoliday
      ? "bg-rose-50 text-rose-400"
      : "bg-amber-50 text-amber-500"
  };
};

export default function PromesPage() {
  const [activeSetup, setActiveSetup] = useState<{
    subjectId: string;
    phaseId: string;
    subjectName: string;
    phaseName: string;
  } | null>(null);

  const [selectedSemester, setSelectedSemester] = useState<number>(1);
  const MONTH_WEEKS = SEMESTER_CONFIG[selectedSemester];

  const [tps, setTps] = useState<{
    id: string;
    code: string;
    element: string;
    description: string;
    order: number;
  }[]>([]);

  // Lookup map: allocations[tpId][month][week] = jp
  const [allocations, setAllocations] = useState<Record<string, Record<string, Record<number, number>>>>({});
  
  // Lookup map for holidays: "Month-Week" -> description
  const [holidaysMap, setHolidaysMap] = useState<Record<string, string>>({});
  const [dbHolidays, setDbHolidays] = useState<HolidayItem[]>([]);
  const [clearedSemesters, setClearedSemesters] = useState<Record<number, boolean>>({});

  const [loading, setLoading] = useState(true);
  const [isPendingSave, startTransitionSave] = useTransition();
  const [isPendingOCR, startTransitionOCR] = useTransition();
  const [isPendingClear, startTransitionClear] = useTransition();
  
  const [saveStatus, setSaveStatus] = useState<"idle" | "success" | "error">("idle");
  const [ocrStatus, setOcrStatus] = useState<"idle" | "processing" | "success" | "error">("idle");
  const [ocrMessage, setOcrMessage] = useState("");
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileBase64, setFileBase64] = useState("");

  const [asasAwSem1, setAsasAwSem1] = useState(4);
  const [cadanganAwSem1, setCadanganAwSem1] = useState(10);
  const [asasAwSem2, setAsasAwSem2] = useState(5);
  const [cadanganAwSem2, setCadanganAwSem2] = useState(9);
  const [tahunPelajaran, setTahunPelajaran] = useState("2026/2027");

  // State for manual holiday entry
  const [manualMonth, setManualMonth] = useState("");
  const [manualWeek, setManualWeek] = useState(1);
  const [manualEventName, setManualEventName] = useState("");
  const [isPendingManualHoliday, startTransitionManualHoliday] = useTransition();

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const a1 = localStorage.getItem("asasAwSem1");
      const c1 = localStorage.getItem("cadanganAwSem1");
      const a2 = localStorage.getItem("asasAwSem2");
      const c2 = localStorage.getItem("cadanganAwSem2");
      const tp = localStorage.getItem("tahunPelajaran");
      if (a1) setAsasAwSem1(parseInt(a1) || 0);
      if (c1) setCadanganAwSem1(parseInt(c1) || 0);
      if (a2) setAsasAwSem2(parseInt(a2) || 0);
      if (c2) setCadanganAwSem2(parseInt(c2) || 0);
      if (tp) setTahunPelajaran(tp);
    }
  }, []);

  const updateTahunPelajaran = (val: string) => {
    setTahunPelajaran(val);
    localStorage.setItem("tahunPelajaran", val);
  };

  // Save to localStorage when changed
  const updateAsasSem1 = (val: number) => {
    setAsasAwSem1(val);
    localStorage.setItem("asasAwSem1", val.toString());
  };
  const updateCadanganSem1 = (val: number) => {
    setCadanganAwSem1(val);
    localStorage.setItem("cadanganAwSem1", val.toString());
  };
  const updateAsasSem2 = (val: number) => {
    setAsasAwSem2(val);
    localStorage.setItem("asasAwSem2", val.toString());
  };
  const updateCadanganSem2 = (val: number) => {
    setCadanganAwSem2(val);
    localStorage.setItem("cadanganAwSem2", val.toString());
  };

  // Load initial data
  const loadData = async () => {
    setLoading(true);
    try {
      const data = await getPromesData();
      if (data.activeSetup) {
        setActiveSetup(data.activeSetup);
        setTps(data.tps);
        
        // Map allocations to lookup structure
        const allocMap: Record<string, Record<string, Record<number, number>>> = {};
        data.allocations.forEach(al => {
          if (!allocMap[al.tpId]) allocMap[al.tpId] = {};
          if (!allocMap[al.tpId][al.month]) allocMap[al.tpId][al.month] = {};
          allocMap[al.tpId][al.month][al.week] = al.jp;
        });
        setAllocations(allocMap);

        // Store database holidays
        setDbHolidays(data.holidays);
      } else {
        setActiveSetup(null);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  // Reactively calculate holidaysMap based on selectedSemester, dbHolidays, and clearedSemesters
  useEffect(() => {
    if (!activeSetup) return;

    const semesterMonths = selectedSemester === 2 
      ? ["Januari", "Februari", "Maret", "April", "Mei", "Juni"] 
      : ["Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    // Filter db holidays for active semester
    const semesterDbHolidays = dbHolidays.filter(h => semesterMonths.includes(h.month));
    const newHolMap: Record<string, string> = {};

    if (clearedSemesters[selectedSemester]) {
      // Explicitly cleared by user
      setHolidaysMap({});
      return;
    }

    if (semesterDbHolidays.length > 0) {
      // Use database holidays
      semesterDbHolidays.forEach(h => {
        newHolMap[`${h.month}-${h.week}`] = h.description;
      });
    } else {
      // Use default simulated/cached holidays for instant preview
      const defaults = selectedSemester === 2
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

      defaults.forEach(h => {
        newHolMap[`${h.month}-${h.week}`] = h.description;
      });
    }

    setHolidaysMap(newHolMap);
  }, [selectedSemester, dbHolidays, clearedSemesters, activeSetup]);

  useEffect(() => {
    loadData();
  }, []);

  // Handle JP input change
  const handleCellChange = (tpId: string, month: string, week: number, valStr: string) => {
    let val = parseInt(valStr);
    if (isNaN(val) || val < 0) val = 0;
    
    setAllocations(prev => {
      const next = { ...prev };
      if (!next[tpId]) next[tpId] = {};
      if (!next[tpId][month]) next[tpId][month] = {};
      next[tpId][month][week] = val;
      return next;
    });
  };

  // Calculate sum of JP per TP
  const getTpTotalJp = (tpId: string) => {
    let total = 0;
    const tpAlloc = allocations[tpId];
    if (tpAlloc) {
      Object.keys(tpAlloc).forEach(month => {
        const weeks = tpAlloc[month];
        if (weeks) {
          Object.keys(weeks).forEach(weekStr => {
            total += weeks[parseInt(weekStr)] || 0;
          });
        }
      });
    }
    return total;
  };

  // Calculate sum of JP per TP for a specific semester
  const getTpSemesterTotalJp = (tpId: string, semester: number) => {
    let total = 0;
    const months = semester === 1 
      ? ["Juli", "Agustus", "September", "Oktober", "November", "Desember"]
      : ["Januari", "Februari", "Maret", "April", "Mei", "Juni"];
    
    const tpAlloc = allocations[tpId];
    if (tpAlloc) {
      months.forEach(m => {
        const weeks = tpAlloc[m];
        if (weeks) {
          Object.keys(weeks).forEach(weekStr => {
            total += weeks[parseInt(weekStr)] || 0;
          });
        }
      });
    }
    return total;
  };

  // Calculate weekly total JPs (across all TPs)
  const getWeeklyTotalJp = (month: string, week: number) => {
    let total = 0;
    tps.forEach(tp => {
      total += allocations[tp.id]?.[month]?.[week] || 0;
    });
    return total;
  };

  // Cetak Promes
  const handlePrintPromes = () => {
    if (!activeSetup) return;
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    
    // Siapkan styling CSS untuk print
    const css = `
      body { font-family: 'Times New Roman', Times, serif; font-size: 12px; padding: 20px; }
      .header { text-align: center; margin-bottom: 20px; font-weight: bold; font-size: 14px; }
      .info-table { margin-bottom: 20px; width: 100%; font-size: 12px; }
      .info-table td { padding: 2px 5px; }
      table.data { width: 100%; border-collapse: collapse; font-size: 11px; text-align: center; }
      table.data th, table.data td { border: 1px solid black; padding: 4px; }
      .text-left { text-align: left; }
      .bg-gray { background-color: #e5e7eb; }
      .holiday { background-color: #fca5a5; font-weight: bold; }
      @media print {
        @page { size: landscape; margin: 1cm; }
        .bg-gray { background-color: #e5e7eb !important; -webkit-print-color-adjust: exact; }
        .holiday { background-color: #fca5a5 !important; -webkit-print-color-adjust: exact; }
      }
    `;

    // Buat HTML tabel
    let tableHtml = `
      <table class="data">
        <thead>
          <tr class="bg-gray">
            <th rowspan="2" style="width:5%">No</th>
            <th rowspan="2" style="width:10%">Kode TP</th>
            <th rowspan="2" style="width:25%">Tujuan Pembelajaran</th>
            <th rowspan="2" style="width:5%">AW</th>
    `;

    MONTH_WEEKS.forEach(m => {
      tableHtml += `<th colspan="${m.weeks}">${m.name}</th>`;
    });
    tableHtml += `</tr><tr class="bg-gray">`;
    
    MONTH_WEEKS.forEach(m => {
      for(let i=1; i<=m.weeks; i++) {
        tableHtml += `<th>${i}</th>`;
      }
    });
    tableHtml += `</tr></thead><tbody>`;

    tps.forEach((tp, i) => {
      const tpTotal = getTpSemesterTotalJp(tp.id, selectedSemester);
      tableHtml += `
        <tr>
          <td>${i + 1}</td>
          <td>${tp.code}</td>
          <td class="text-left">${tp.description}</td>
          <td>${tpTotal > 0 ? tpTotal : ""}</td>
      `;
      
      MONTH_WEEKS.forEach(m => {
        for(let w=1; w<=m.weeks; w++) {
          const isHoliday = !!holidaysMap[`${m.name}-${w}`];
          const jp = allocations[tp.id]?.[m.name]?.[w];
          
          if (isHoliday) {
             tableHtml += `<td class="holiday">L</td>`;
          } else {
             tableHtml += `<td>${jp || ""}</td>`;
          }
        }
      });
      tableHtml += `</tr>`;
    });

    // Tambah baris Asesmen Sumatif Akhir Semester (ASAS)
    const asasAw = selectedSemester === 1 ? asasAwSem1 : asasAwSem2;
    tableHtml += `
      <tr>
        <td>${tps.length + 1}</td>
        <td>-</td>
        <td class="text-left">Asesmen Sumatif Akhir Semester (ASAS)</td>
        <td>${asasAw}</td>
    `;
    MONTH_WEEKS.forEach(m => {
      const isLastMonth = (selectedSemester === 1 && m.name === "Desember") || (selectedSemester === 2 && m.name === "Juni");
      for(let w=1; w<=m.weeks; w++) {
        const isHoliday = !!holidaysMap[`${m.name}-${w}`];
        if (isHoliday) {
          tableHtml += `<td class="holiday">L</td>`;
        } else if (isLastMonth && w === 1) {
          tableHtml += `<td>${asasAw}</td>`;
        } else {
          tableHtml += `<td></td>`;
        }
      }
    });
    tableHtml += `</tr>`;

    // Tambah baris Cadangan / Remedial / Pengayaan
    const cadanganAw = selectedSemester === 1 ? cadanganAwSem1 : cadanganAwSem2;
    tableHtml += `
      <tr>
        <td>${tps.length + 2}</td>
        <td>-</td>
        <td class="text-left">Cadangan / Remedial / Pengayaan</td>
        <td>${cadanganAw}</td>
    `;
    MONTH_WEEKS.forEach(m => {
      const isLastMonth = (selectedSemester === 1 && m.name === "Desember") || (selectedSemester === 2 && m.name === "Juni");
      for(let w=1; w<=m.weeks; w++) {
        const isHoliday = !!holidaysMap[`${m.name}-${w}`];
        if (isHoliday) {
          tableHtml += `<td class="holiday">L</td>`;
        } else if (isLastMonth && w === 2) {
          tableHtml += `<td>${cadanganAw}</td>`;
        } else {
          tableHtml += `<td></td>`;
        }
      }
    });
    tableHtml += `</tr>`;

    // Jumlah Row (Total per Minggu)
    let totalRowHtml = `
      <tr class="bg-gray" style="font-weight:bold;">
        <td colspan="3" style="text-align:right; padding-right:10px;">Jumlah Jam Pelajaran (JP)</td>
        <td>${tps.reduce((acc, tp) => acc + getTpSemesterTotalJp(tp.id, selectedSemester), 0) + asasAw + cadanganAw}</td>
    `;

    MONTH_WEEKS.forEach(m => {
      const isLastMonth = (selectedSemester === 1 && m.name === "Desember") || (selectedSemester === 2 && m.name === "Juni");
      for(let w=1; w<=m.weeks; w++) {
        const isHoliday = !!holidaysMap[`${m.name}-${w}`];
        if (isHoliday) {
          totalRowHtml += `<td class="holiday">L</td>`;
        } else {
          let weeklyTotal = 0;
          tps.forEach(tp => {
            weeklyTotal += allocations[tp.id]?.[m.name]?.[w] || 0;
          });
          if (isLastMonth && w === 1) weeklyTotal += asasAw;
          if (isLastMonth && w === 2) weeklyTotal += cadanganAw;
          
          totalRowHtml += `<td>${weeklyTotal > 0 ? weeklyTotal : ""}</td>`;
        }
      }
    });
    totalRowHtml += `</tr>`;
    
    tableHtml += totalRowHtml + `</tbody></table>`;

    const semesterText = selectedSemester === 1 ? "I (Satu) / Ganjil" : "II (Dua) / Genap";

    const html = `
      <html>
        <head>
          <title>Program Semester - ${activeSetup.subjectName}</title>
          <style>${css}</style>
        </head>
        <body>
          <div class="header">
            PROGRAM SEMESTER (PROMES)<br/>
            KURIKULUM MERDEKA
          </div>
          <table class="info-table">
            <tr>
              <td style="width:15%">Mata Pelajaran</td>
              <td style="width:2%">:</td>
              <td style="width:33%">${activeSetup.subjectName}</td>
              <td style="width:15%">Fase</td>
              <td style="width:2%">:</td>
              <td style="width:33%">${activeSetup.phaseName}</td>
            </tr>
            <tr>
              <td>Semester</td>
              <td>:</td>
              <td>${semesterText}</td>
              <td>Tahun Pelajaran</td>
              <td>:</td>
              <td>${tahunPelajaran}</td>
            </tr>
          </table>
          ${tableHtml}
          <br/>
          <table style="width:100%; margin-top: 30px; font-size:12px">
             <tr>
               <td style="width:70%"></td>
               <td style="text-align:center">
                 ...................., .................... 20...<br/>
                 Guru Mata Pelajaran
                 <br/><br/><br/><br/>
                 _________________________<br/>
                 NIP.
               </td>
             </tr>
          </table>
        </body>
      </html>
    `;

    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 500);
  };

  // Cetak Prota
  const handlePrintProta = () => {
    if (!activeSetup || tps.length === 0) return;
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    
    // Siapkan styling CSS untuk print
    const css = `
      body { font-family: 'Times New Roman', Times, serif; font-size: 12px; padding: 20px; }
      .header { text-align: center; margin-bottom: 20px; font-weight: bold; font-size: 14px; }
      .info-table { margin-bottom: 20px; width: 100%; font-size: 12px; }
      .info-table td { padding: 2px 5px; }
      .section-title { font-weight: bold; margin-top: 15px; margin-bottom: 5px; text-decoration: underline; text-transform: uppercase; }
      table.data { width: 100%; border-collapse: collapse; font-size: 12px; margin-top: 10px; }
      table.data th, table.data td { border: 1px solid black; padding: 6px; }
      table.data th { background-color: #e5e7eb; text-align: center; }
      .text-center { text-align: center; }
      .text-right { text-align: right; }
      .font-bold { font-weight: bold; }
      .bg-gray { background-color: #f3f4f6; }
      @media print {
        @page { size: portrait; margin: 1cm; }
        table.data th { background-color: #e5e7eb !important; -webkit-print-color-adjust: exact; }
        .bg-gray { background-color: #f3f4f6 !important; -webkit-print-color-adjust: exact; }
      }
    `;

    // 1. Hitung Minggu Efektif (Bagian A) secara dinamis
    const months = ["Juli", "Agustus", "September", "Oktober", "November", "Desember", "Januari", "Februari", "Maret", "April", "Mei", "Juni"];
    let effectiveWeeksCount = 0;
    let maxWeeklyJp = 0;
    
    months.forEach(m => {
      for (let w = 1; w <= 5; w++) {
        let hasAlloc = false;
        let weekSum = 0;
        tps.forEach(tp => {
          const jp = allocations[tp.id]?.[m]?.[w] || 0;
          if (jp > 0) {
            hasAlloc = true;
            weekSum += jp;
          }
        });
        if (hasAlloc) {
          effectiveWeeksCount++;
          if (weekSum > maxWeeklyJp) maxWeeklyJp = weekSum;
        }
      }
    });

    const jumlahMingguEfektif = effectiveWeeksCount > 0 ? effectiveWeeksCount : 36;
    const jumlahMingguTidakEfektif = 52 - jumlahMingguEfektif;
    const jpPerMinggu = maxWeeklyJp > 0 ? maxWeeklyJp : 5;
    const totalJpEfektifPerTahun = jumlahMingguEfektif * jpPerMinggu;

    // 2. Hitung Distribusi per Semester (Bagian B)
    let sem1Weeks = 0;
    let sem2Weeks = 0;
    const sem1Months = ["Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const sem2Months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni"];
    
    sem1Months.forEach(m => {
      for (let w = 1; w <= 5; w++) {
        let hasAlloc = tps.some(tp => (allocations[tp.id]?.[m]?.[w] || 0) > 0);
        if (hasAlloc) sem1Weeks++;
      }
    });
    sem2Months.forEach(m => {
      for (let w = 1; w <= 5; w++) {
        let hasAlloc = tps.some(tp => (allocations[tp.id]?.[m]?.[w] || 0) > 0);
        if (hasAlloc) sem2Weeks++;
      }
    });

    if (sem1Weeks === 0 && sem2Weeks === 0) {
      sem1Weeks = 18;
      sem2Weeks = 18;
    }

    const sem1Jp = sem1Weeks * jpPerMinggu;
    const sem2Jp = sem2Weeks * jpPerMinggu;

    // 3. Pengelompokan TP per Semester (Bagian C)
    const sem1Tps: typeof tps = [];
    const sem2Tps: typeof tps = [];
    
    tps.forEach((tp, idx) => {
      let hasSem1 = false;
      let hasSem2 = false;
      
      sem1Months.forEach(m => {
        for(let w=1; w<=5; w++) {
          if ((allocations[tp.id]?.[m]?.[w] || 0) > 0) hasSem1 = true;
        }
      });
      sem2Months.forEach(m => {
        for(let w=1; w<=5; w++) {
          if ((allocations[tp.id]?.[m]?.[w] || 0) > 0) hasSem2 = true;
        }
      });

      if (hasSem1 && !hasSem2) {
        sem1Tps.push(tp);
      } else if (!hasSem1 && hasSem2) {
        sem2Tps.push(tp);
      } else if (hasSem1 && hasSem2) {
        sem1Tps.push(tp); // Spans both, put in Sem 1
      } else {
        // Fallback berdasarkan urutan
        if (idx < tps.length / 2) {
          sem1Tps.push(tp);
        } else {
          sem2Tps.push(tp);
        }
      }
    });

    // AW Constants
    const sem1AsasAw = asasAwSem1;
    const sem1CadanganAw = cadanganAwSem1;
    const sem2AsasAw = asasAwSem2;
    const sem2CadanganAw = cadanganAwSem2;
    const isIpas = activeSetup.subjectName.toLowerCase().includes("ipas");
    const proyekAw = isIpas ? 40 : 0;

    const sem1TpTotal = sem1Tps.reduce((acc, tp) => acc + getTpSemesterTotalJp(tp.id, 1), 0);
    const sem2TpTotal = sem2Tps.reduce((acc, tp) => acc + getTpSemesterTotalJp(tp.id, 2), 0);
    
    const sem1Total = sem1TpTotal + sem1AsasAw + sem1CadanganAw;
    const sem2Total = sem2TpTotal + sem2AsasAw + sem2CadanganAw + proyekAw;
    const grandTotal = sem1Total + sem2Total;

    // Buat HTML tabel
    let tableHtml = `
      <table class="data">
        <thead>
          <tr>
            <th style="width:5%">No</th>
            <th style="width:15%">Kode TP</th>
            <th style="width:50%">Tujuan Pembelajaran (Domain/Elemen)</th>
            <th style="width:15%">Alokasi Waktu (JP)</th>
            <th style="width:15%">Keterangan</th>
          </tr>
        </thead>
        <tbody>
          <!-- SEMESTER 1 -->
          <tr class="bg-gray font-bold">
            <td colspan="3">SEMESTER 1 (GANJIL)</td>
            <td class="text-center">${sem1Total} JP</td>
            <td>Total Semester 1</td>
          </tr>
    `;

    sem1Tps.forEach((tp, i) => {
      const tpTotal = getTpSemesterTotalJp(tp.id, 1);
      tableHtml += `
        <tr>
          <td class="text-center">${i + 1}</td>
          <td class="text-center">${tp.code}</td>
          <td>[${tp.element}] ${tp.description}</td>
          <td class="text-center">${tpTotal > 0 ? tpTotal : "-"}</td>
          <td>Pembelajaran TP</td>
        </tr>
      `;
    });

    // Semester 1 Asesmen & Cadangan rows
    tableHtml += `
      <tr>
        <td class="text-center">${sem1Tps.length + 1}</td>
        <td class="text-center">-</td>
        <td>Asesmen Sumatif Tengah & Akhir Semester 1 (ASAS)</td>
        <td class="text-center">${sem1AsasAw}</td>
        <td>Evaluasi Semester 1</td>
      </tr>
      <tr>
        <td class="text-center">${sem1Tps.length + 2}</td>
        <td class="text-center">-</td>
        <td>Cadangan dan Kegiatan Lainnya</td>
        <td class="text-center">${sem1CadanganAw}</td>
        <td>Remedial / Pengayaan</td>
      </tr>
      
      <!-- SEMESTER 2 -->
      <tr class="bg-gray font-bold">
        <td colspan="3">SEMESTER 2 (GENAP)</td>
        <td class="text-center">${sem2Total} JP</td>
        <td>Total Semester 2</td>
      </tr>
    `;

    sem2Tps.forEach((tp, i) => {
      const tpTotal = getTpSemesterTotalJp(tp.id, 2);
      tableHtml += `
        <tr>
          <td class="text-center">${i + 1}</td>
          <td class="text-center">${tp.code}</td>
          <td>[${tp.element}] ${tp.description}</td>
          <td class="text-center">${tpTotal > 0 ? tpTotal : "-"}</td>
          <td>Pembelajaran TP</td>
        </tr>
      `;
    });

    // Semester 2 Asesmen & Cadangan rows
    tableHtml += `
      <tr>
        <td class="text-center">${sem2Tps.length + 1}</td>
        <td class="text-center">-</td>
        <td>Asesmen Sumatif Akhir Semester 2 (ASAS) / Penilaian Akhir Tahun (PAT)</td>
        <td class="text-center">${sem2AsasAw}</td>
        <td>Evaluasi Semester 2</td>
      </tr>
      <tr>
        <td class="text-center">${sem2Tps.length + 2}</td>
        <td class="text-center">-</td>
        <td>Cadangan dan Kegiatan Lainnya</td>
        <td class="text-center">${sem2CadanganAw}</td>
        <td>Remedial / Pengayaan</td>
      </tr>
    `;

    if (isIpas) {
      tableHtml += `
        <tr class="bg-gray font-bold">
          <td colspan="3">PROYEK AKHIR TAHUN</td>
          <td class="text-center">${proyekAw} JP</td>
          <td>Proyek Akhir</td>
        </tr>
        <tr>
          <td class="text-center">${sem2Tps.length + 3}</td>
          <td class="text-center">-</td>
          <td>Bab Proyek Akhir IPAS (Terintegrasi)</td>
          <td class="text-center">${proyekAw}</td>
          <td>Pelaksanaan Proyek</td>
        </tr>
      `;
    }

    // Grand Total Row
    tableHtml += `
        <tr class="bg-gray font-bold">
          <td colspan="3" style="text-align:right; padding-right:10px;">Jumlah Alokasi Waktu Setahun</td>
          <td class="text-center">${grandTotal} JP</td>
          <td>Total 1 Tahun Ajaran</td>
        </tr>
      </tbody>
      </table>
    `;

    const html = `
      <html>
        <head>
          <title>Program Tahunan - ${activeSetup.subjectName}</title>
          <style>${css}</style>
        </head>
        <body>
          <div class="header">
            PROGRAM TAHUNAN (PROTA)<br/>
            KURIKULUM MERDEKA
          </div>
          <table class="info-table">
            <tr>
              <td style="width:18%">Mata Pelajaran</td>
              <td style="width:2%">:</td>
              <td style="width:30%">${activeSetup.subjectName}</td>
              <td style="width:18%">Satuan Pendidikan</td>
              <td style="width:2%">:</td>
              <td style="width:30%">SDN 3 PRINGGABAYA</td>
            </tr>
            <tr>
              <td>Fase</td>
              <td>:</td>
              <td>Fase ${activeSetup.phaseName}</td>
              <td>Tahun Pelajaran</td>
              <td>:</td>
              <td>${tahunPelajaran}</td>
            </tr>
          </table>

          <div class="section-title">A. Perhitungan Alokasi Waktu Efektif</div>
          <ul style="list-style-type: decimal; font-size: 12px; margin-top: 5px; line-height: 1.5;">
            <li>Jumlah Minggu dalam Satu Tahun Ajaran: <strong>52 minggu</strong></li>
            <li>Jumlah Minggu Tidak Efektif (Libur Semester, Hari Besar, dll.): <strong>± ${jumlahMingguTidakEfektif} minggu</strong></li>
            <li>Jumlah Minggu Efektif (52 - ${jumlahMingguTidakEfektif}): <strong>${jumlahMingguEfektif} minggu</strong></li>
            <li>Jumlah Jam Pelajaran (JP) per Minggu: <strong>${jpPerMinggu} JP</strong></li>
            <li>Total Jam Pelajaran Efektif per Tahun: <strong>${jumlahMingguEfektif} minggu x ${jpPerMinggu} JP = ${totalJpEfektifPerTahun} JP</strong></li>
          </ul>

          <div class="section-title">B. Distribusi Alokasi Waktu per Semester</div>
          <ul style="list-style-type: decimal; font-size: 12px; margin-top: 5px; line-height: 1.5;">
            <li>Semester 1 (Ganjil): <strong>${sem1Weeks} minggu x ${jpPerMinggu} JP = ${sem1Jp} JP</strong></li>
            <li>Semester 2 (Genap): <strong>${sem2Weeks} minggu x ${jpPerMinggu} JP = ${sem2Jp} JP</strong></li>
          </ul>

          <div class="section-title">C. Alokasi Waktu Pembelajaran dan Asesmen per Bab</div>
          ${tableHtml}
          
          <br/>
          <table style="width:100%; margin-top: 30px; font-size:12px">
             <tr>
               <td style="width:60%"></td>
               <td style="text-align:center">
                 ...................., .................... 20...<br/>
                 Guru Mata Pelajaran
                 <br/><br/><br/><br/>
                 _________________________<br/>
                 NIP.
               </td>
             </tr>
          </table>
        </body>
      </html>
    `;

    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 500);
  };

  // Save allocations to DB
  const handleSave = () => {
    if (!activeSetup) return;
    
    setSaveStatus("idle");
    const flatAllocations: AllocationItem[] = [];
    
    tps.forEach(tp => {
      const tpAlloc = allocations[tp.id];
      if (tpAlloc) {
        Object.keys(tpAlloc).forEach(month => {
          const weeks = tpAlloc[month];
          if (weeks) {
            Object.keys(weeks).forEach(weekStr => {
              const week = parseInt(weekStr);
              const jp = weeks[week] || 0;
              if (jp > 0) {
                flatAllocations.push({ tpId: tp.id, month, week, jp });
              }
            });
          }
        });
      }
    });

    startTransitionSave(async () => {
      const res = await savePromesAllocationsAction(
        activeSetup.subjectId,
        activeSetup.phaseId,
        flatAllocations,
        selectedSemester
      );
      if (res.success) {
        setSaveStatus("success");
        setTimeout(() => setSaveStatus("idle"), 3000);
      } else {
        setSaveStatus("error");
      }
    });
  };

  // Clear Holidays from DB
  const handleClearHolidays = () => {
    if (!activeSetup) return;
    if (!confirm("Apakah Anda yakin ingin menghapus seluruh jadwal libur kalender akademik aktif?")) return;

    startTransitionClear(async () => {
      const res = await clearHolidaysAction(activeSetup.subjectId, activeSetup.phaseId, selectedSemester);
      if (res.success) {
        const semesterMonths = selectedSemester === 2 
          ? ["Januari", "Februari", "Maret", "April", "Mei", "Juni"] 
          : ["Juli", "Agustus", "September", "Oktober", "November", "Desember"];
          
        setDbHolidays(prev => prev.filter(h => !semesterMonths.includes(h.month)));
        setClearedSemesters(prev => ({ ...prev, [selectedSemester]: true }));
      }
    });
  };

  // File Upload Handlers (Drag & Drop)
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Hanya file gambar (PNG, JPG, JPEG) yang dapat diunggah!");
      return;
    }
    
    setFileName(file.name);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFileBase64(reader.result as string);
    };
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  // Trigger OCR with MiMo
  const handleRunOCR = () => {
    if (!activeSetup || !fileBase64) return;
    
    setOcrStatus("processing");
    setOcrMessage("Mengunggah dan menganalisis kalender akademik...");

    const semesterMonths = selectedSemester === 2 
      ? ["Januari", "Februari", "Maret", "April", "Mei", "Juni"] 
      : ["Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    startTransitionOCR(async () => {
      try {
        const res = await processCalendarOCRAction(
          activeSetup.subjectId,
          activeSetup.phaseId,
          fileBase64,
          selectedSemester
        );
        
        if (res.success) {
          // Update local state
          setDbHolidays(prev => {
            const filtered = prev.filter(h => !semesterMonths.includes(h.month));
            return [...filtered, ...res.holidays];
          });
          setClearedSemesters(prev => ({ ...prev, [selectedSemester]: false }));
          
          setOcrStatus("success");
          setOcrMessage(
            res.isSimulated 
              ? "Mode Simulasi aktif! Berhasil memuat kalender akademik standar Indonesia."
              : "Pemindaian AI sukses! Berhasil mengekstrak tanggal libur sekolah."
          );
          
          // Close modal after success
          setTimeout(() => {
            setShowUploadModal(false);
            setOcrStatus("idle");
            setFileName("");
            setFileBase64("");
          }, 2500);
        } else {
          setOcrStatus("error");
          setOcrMessage("Gagal mengekstrak kalender akademik.");
        }
      } catch (err) {
        console.error(err);
        setOcrStatus("error");
        setOcrMessage("Koneksi bermasalah atau file terlalu besar.");
      }
    });
  };

  const handleAddManualHoliday = () => {
    if (!activeSetup || !manualMonth || !manualEventName.trim()) return;

    startTransitionManualHoliday(async () => {
      const res = await addManualHolidayAction(
        activeSetup.subjectId,
        activeSetup.phaseId,
        manualMonth,
        manualWeek,
        manualEventName.trim()
      );
      if (res.success) {
        setManualEventName("");
        await loadData();
      } else {
        alert(res.error || "Gagal menambahkan jadwal libur.");
      }
    });
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-3">
        <Loader2 className="w-8 h-8 text-gemini-blue animate-spin" />
        <p className="text-slate-500 font-medium text-sm">Memuat modul Sesi & Kalender Promes...</p>
      </div>
    );
  }

  if (!activeSetup) {
    return (
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center space-y-6 my-12 animate-fadeIn">
        <div className="w-16 h-16 bg-blue-50 text-gemini-blue rounded-2xl flex items-center justify-center mx-auto border border-blue-100">
          <Calendar className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-black text-slate-800 tracking-tight">Setup Kelas Belum Aktif</h2>
          <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
            Anda perlu mengonfigurasi Mata Pelajaran dan Fase kelas sasaran terlebih dahulu sebelum dapat menyusun jadwal Program Semester (Promes).
          </p>
        </div>
        <div className="pt-2">
          <Link
            href="/setup"
            className="inline-flex items-center gap-2 bg-gemini-blue hover:bg-gemini-blue/90 text-white text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md shadow-blue-500/10 active:scale-98"
          >
            Pilih Setup Kelas
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fadeIn max-w-7xl mx-auto pb-12">
      {/* Header section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 bg-white p-6 rounded-3xl border border-border-gray shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] bg-blue-50 text-gemini-blue font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border border-blue-100">
              Fase 3: Sesi & Promes
            </span>
            <span className="text-[10px] bg-indigo-50 text-indigo-600 font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border border-indigo-100">
              {activeSetup.subjectName} — Fase {activeSetup.phaseName}
            </span>
          </div>
          <h1 className="text-2xl font-black text-slate-800 tracking-tight mt-2.5">
            Program Semester (Promes) SD
          </h1>
          <p className="text-sm text-slate-400 mt-1 font-medium mb-4">
            Alokasikan Jam Pelajaran (JP) mingguan dari ATP Anda ke dalam kalender aktif.
          </p>

          {/* Semester Selector Tabs */}
          <div className="bg-slate-100/80 p-1 rounded-xl inline-flex items-center gap-1 border border-slate-200/40">
            <button
              onClick={() => setSelectedSemester(1)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 ${
                selectedSemester === 1
                  ? "bg-white text-gemini-blue shadow-sm font-black"
                  : "text-slate-500 hover:text-slate-800 hover:bg-white/40"
              }`}
            >
              Semester 1 (Ganjil)
            </button>
            <button
              onClick={() => setSelectedSemester(2)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 ${
                selectedSemester === 2
                  ? "bg-white text-gemini-blue shadow-sm font-black"
                  : "text-slate-500 hover:text-slate-800 hover:bg-white/40"
              }`}
            >
              Semester 2 (Genap)
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {Object.keys(holidaysMap).length > 0 && (
            <button
              onClick={handleClearHolidays}
              disabled={isPendingClear}
              className="flex items-center gap-2 border border-rose-100 hover:border-rose-200 text-rose-600 bg-rose-50/50 hover:bg-rose-50 text-xs font-bold px-4 py-2.5 rounded-xl transition-all duration-200"
            >
              {isPendingClear ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Trash2 className="w-4 h-4" />
              )}
              Hapus Libur
            </button>
          )}

          <button
            onClick={() => setShowUploadModal(true)}
            className="flex items-center gap-2 border border-slate-200 hover:border-slate-300 text-slate-600 hover:bg-slate-50 text-xs font-bold px-4 py-2.5 rounded-xl transition-all duration-200"
          >
            <Upload className="w-4 h-4 text-slate-500" />
            Unggah Kalender
          </button>
          
          <button
            onClick={handlePrintPromes}
            disabled={tps.length === 0}
            className="flex items-center gap-2 border border-blue-200 hover:border-blue-300 text-gemini-blue bg-blue-50 hover:bg-blue-100 text-xs font-bold px-4 py-2.5 rounded-xl transition-all duration-200 disabled:opacity-50"
          >
            <Printer className="w-4 h-4" />
            Cetak Promes
          </button>
          
          <button
            onClick={handlePrintProta}
            disabled={tps.length === 0}
            className="flex items-center gap-2 border border-indigo-200 hover:border-indigo-300 text-indigo-600 bg-indigo-50 hover:bg-indigo-100 text-xs font-bold px-4 py-2.5 rounded-xl transition-all duration-200 disabled:opacity-50"
          >
            <Printer className="w-4 h-4" />
            Cetak Prota
          </button>

          <button
            onClick={handleSave}
            disabled={isPendingSave || tps.length === 0}
            className="flex items-center gap-2 bg-gemini-blue hover:bg-gemini-blue/90 disabled:bg-slate-100 disabled:text-slate-400 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-md shadow-blue-500/10 active:scale-98"
          >
            {isPendingSave ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Save className="w-4 h-4" />
            )}
            Simpan Alur Promes
          </button>
        </div>
      </div>

      {/* Alokasi Waktu Evaluasi & Cadangan (Konfigurasi Prota/Promes) */}
      <div className="bg-white p-6 rounded-3xl border border-border-gray shadow-sm space-y-4">
        <div className="flex items-center gap-2 border-b pb-3">
          <Settings className="w-4 h-4 text-slate-500" />
          <div>
            <h3 className="text-xs font-black text-slate-700 uppercase tracking-widest">
              Konfigurasi Jam Pelajaran (JP) Evaluasi & Cadangan
            </h3>
            <p className="text-[10px] text-slate-400 font-medium">
              Tentukan sendiri alokasi JP untuk Asesmen (ASAS) dan Cadangan/Remedial. Nilai di sini akan otomatis diterapkan pada cetak Prota dan Promes.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="space-y-1.5">
            <label className="text-[10px] text-slate-400 font-black uppercase tracking-wider block">Tahun Pelajaran</label>
            <input
              type="text"
              value={tahunPelajaran}
              onChange={(e) => updateTahunPelajaran(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-200 text-xs font-extrabold text-slate-700 focus:border-gemini-blue outline-none transition-all"
              placeholder="e.g. 2026/2027"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] text-slate-400 font-black uppercase tracking-wider block">ASAS Semester 1</label>
            <div className="flex items-center gap-1.5">
              <input
                type="number"
                min="0"
                value={asasAwSem1}
                onChange={(e) => updateAsasSem1(parseInt(e.target.value) || 0)}
                className="w-full p-2.5 rounded-xl border border-slate-200 text-xs font-extrabold text-slate-700 focus:border-gemini-blue outline-none transition-all"
              />
              <span className="text-xs text-slate-400 font-bold shrink-0">JP</span>
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] text-slate-400 font-black uppercase tracking-wider block">Cadangan Semester 1</label>
            <div className="flex items-center gap-1.5">
              <input
                type="number"
                min="0"
                value={cadanganAwSem1}
                onChange={(e) => updateCadanganSem1(parseInt(e.target.value) || 0)}
                className="w-full p-2.5 rounded-xl border border-slate-200 text-xs font-extrabold text-slate-700 focus:border-gemini-blue outline-none transition-all"
              />
              <span className="text-xs text-slate-400 font-bold shrink-0">JP</span>
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] text-slate-400 font-black uppercase tracking-wider block">ASAS Semester 2</label>
            <div className="flex items-center gap-1.5">
              <input
                type="number"
                min="0"
                value={asasAwSem2}
                onChange={(e) => updateAsasSem2(parseInt(e.target.value) || 0)}
                className="w-full p-2.5 rounded-xl border border-slate-200 text-xs font-extrabold text-slate-700 focus:border-gemini-blue outline-none transition-all"
              />
              <span className="text-xs text-slate-400 font-bold shrink-0">JP</span>
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] text-slate-400 font-black uppercase tracking-wider block">Cadangan Semester 2</label>
            <div className="flex items-center gap-1.5">
              <input
                type="number"
                min="0"
                value={cadanganAwSem2}
                onChange={(e) => updateCadanganSem2(parseInt(e.target.value) || 0)}
                className="w-full p-2.5 rounded-xl border border-slate-200 text-xs font-extrabold text-slate-700 focus:border-gemini-blue outline-none transition-all"
              />
              <span className="text-xs text-slate-400 font-bold shrink-0">JP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Manual Calendar Holiday Entry */}
      <div className="bg-white p-6 rounded-3xl border border-border-gray shadow-sm space-y-4">
        <div className="flex items-center gap-2 border-b pb-3">
          <Calendar className="w-4 h-4 text-slate-500" />
          <div>
            <h3 className="text-xs font-black text-slate-700 uppercase tracking-widest">
              Kalender Akademik
            </h3>
            <p className="text-[10px] text-slate-400 font-medium">
              Tandai minggu libur/ujian. Apply ke grid PROMES.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-end">
          <div className="space-y-1.5 flex-1">
            <label className="text-[10px] text-slate-400 font-black uppercase tracking-wider block">Bulan</label>
            <select
              value={manualMonth}
              onChange={(e) => {
                setManualMonth(e.target.value);
                setManualWeek(1); // reset week when month changes
              }}
              className="w-full p-2.5 rounded-xl border border-slate-200 text-xs font-extrabold text-slate-700 focus:border-gemini-blue outline-none transition-all"
            >
              <option value="">Pilih Bulan...</option>
              {MONTH_WEEKS.map(m => (
                <option key={m.name} value={m.name}>{m.name}</option>
              ))}
            </select>
          </div>
          <div className="space-y-1.5 flex-1">
            <label className="text-[10px] text-slate-400 font-black uppercase tracking-wider block">Minggu ke-</label>
            <select
              value={manualWeek}
              onChange={(e) => setManualWeek(parseInt(e.target.value) || 1)}
              className="w-full p-2.5 rounded-xl border border-slate-200 text-xs font-extrabold text-slate-700 focus:border-gemini-blue outline-none transition-all"
            >
              {Array.from({ length: manualMonth ? (MONTH_WEEKS.find(m => m.name === manualMonth)?.weeks || 5) : 5 }).map((_, i) => (
                <option key={i + 1} value={i + 1}>Minggu ke-{i + 1}</option>
              ))}
            </select>
          </div>
          <div className="space-y-1.5 flex-1">
            <label className="text-[10px] text-slate-400 font-black uppercase tracking-wider block">Nama Event</label>
            <input
              type="text"
              value={manualEventName}
              onChange={(e) => setManualEventName(e.target.value)}
              placeholder="e.g. Libur Umum, Ujian"
              className="w-full p-2.5 rounded-xl border border-slate-200 text-xs font-extrabold text-slate-700 focus:border-gemini-blue outline-none transition-all"
            />
          </div>
          <button
            onClick={handleAddManualHoliday}
            disabled={isPendingManualHoliday || !manualMonth || !manualEventName.trim()}
            className="flex items-center justify-center gap-2 bg-gemini-blue hover:bg-gemini-blue/90 disabled:bg-slate-100 disabled:text-slate-400 text-white text-xs font-bold px-6 py-2.5 rounded-xl transition-all h-[38px] w-full md:w-auto"
          >
            {isPendingManualHoliday ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Calendar className="w-4 h-4" />
            )}
            Tambah
          </button>
        </div>
      </div>

      {/* Save Status Alert */}
      {saveStatus === "success" && (
        <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-100 text-emerald-800 p-4 rounded-2xl shadow-sm animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
          <p className="text-xs font-semibold">Alur program semester (Promes) berhasil disimpan ke database!</p>
        </div>
      )}
      {saveStatus === "error" && (
        <div className="flex items-center gap-3 bg-rose-50 border border-rose-100 text-rose-800 p-4 rounded-2xl shadow-sm animate-fadeIn">
          <AlertTriangle className="w-5 h-5 text-rose-500" />
          <p className="text-xs font-semibold">Gagal menyimpan data ke database. Silakan coba kembali.</p>
        </div>
      )}

      {/* Main Grid View */}
      {tps.length === 0 ? (
        <div className="bg-white p-12 rounded-3xl border border-slate-100 text-center space-y-4 shadow-sm">
          <Info className="w-12 h-12 text-slate-300 mx-auto" />
          <div className="space-y-1">
            <h3 className="font-bold text-slate-700">Belum Ada TP/ATP</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Silakan lakukan ekstrak Tujuan Pembelajaran terlebih dahulu di menu **Ekstraksi TP & ATP** sebelum melakukan penjadwalan.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/tp-atp"
              className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 hover:bg-slate-100 text-xs font-bold px-4 py-2 rounded-xl transition-all"
            >
              Ekstrak TP Sekarang
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-border-gray shadow-sm overflow-hidden flex flex-col">
          {/* Scrollable Container with sticky column */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse table-fixed">
              <thead>
                {/* Month Headers */}
                <tr className="bg-slate-50/70 border-b border-slate-100 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                  <th className="w-[130px] p-3 sticky left-0 bg-slate-50 z-20 border-r border-slate-100">TP / Elemen</th>
                  <th className="w-[280px] p-3 border-r border-slate-100">Deskripsi Tujuan Pembelajaran</th>
                  <th className="w-[64px] p-3 text-center border-r border-slate-100">Total JP</th>
                  {MONTH_WEEKS.map((m) => (
                    <th
                      key={m.name}
                      colSpan={m.weeks}
                      className="p-3 text-center border-r border-slate-100 bg-slate-100/40 text-[11px] font-black text-slate-600"
                    >
                      {m.name}
                    </th>
                  ))}
                </tr>

                {/* Week Headers */}
                <tr className="bg-slate-50/30 border-b border-slate-100 text-[10px] text-slate-400 font-bold text-center">
                  <th className="sticky left-0 bg-slate-50 z-20 border-r border-slate-100"></th>
                  <th className="border-r border-slate-100"></th>
                  <th className="border-r border-slate-100"></th>
                  {MONTH_WEEKS.flatMap((m) =>
                    Array.from({ length: m.weeks }).map((_, idx) => {
                      const holidayName = holidaysMap[`${m.name}-${idx + 1}`];
                      const isHoliday = !!holidayName;
                      
                      let headerClass = "";
                      if (isHoliday) {
                        const evt = getEventDetails(holidayName);
                        headerClass = evt.headerBg;
                      }

                      return (
                        <th
                          key={`${m.name}-${idx + 1}`}
                          className={`p-2 border-r border-slate-100 w-10 text-[9px] ${headerClass}`}
                          title={holidayName}
                        >
                          M{idx + 1}
                        </th>
                      );
                    })
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {tps.map((tp, rowIndex) => {
                  const tpTotalJp = getTpSemesterTotalJp(tp.id, selectedSemester);
                  return (
                    <tr key={tp.id} className="hover:bg-slate-50/40 transition-colors duration-150">
                      {/* Sticky Code & Element */}
                      <td className="p-3 sticky left-0 bg-white hover:bg-slate-50 z-10 border-r border-slate-100 align-top shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                        <div className="space-y-1">
                          <span className="text-[10px] font-black text-gemini-blue bg-blue-50/50 border border-blue-100 px-2 py-0.5 rounded-md inline-block">
                            {tp.code}
                          </span>
                          <p className="text-[10px] text-slate-500 font-bold leading-tight line-clamp-2">
                            {tp.element}
                          </p>
                        </div>
                      </td>

                      {/* TP Description */}
                      <td className="p-3 border-r border-slate-100 align-top max-w-[280px]">
                        <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-3" title={tp.description}>
                          {tp.description}
                        </p>
                      </td>

                      {/* Total JP per TP */}
                      <td className="p-3 border-r border-slate-100 text-center align-middle">
                        <span className={`text-xs font-extrabold px-2.5 py-1 rounded-full ${
                          tpTotalJp > 0 
                            ? "bg-slate-100 text-slate-800" 
                            : "bg-slate-50 text-slate-400 font-medium"
                        }`}>
                          {tpTotalJp} JP
                        </span>
                      </td>

                      {/* Weekly Inputs */}
                      {MONTH_WEEKS.flatMap((m) =>
                        Array.from({ length: m.weeks }).map((_, idx) => {
                          const weekNum = idx + 1;
                          const holidayName = holidaysMap[`${m.name}-${weekNum}`];
                          const isHoliday = !!holidayName;
                          const jpVal = allocations[tp.id]?.[m.name]?.[weekNum] || "";
                          
                          let cellBg = "";
                          let cellContent = null;

                          if (isHoliday) {
                            const evt = getEventDetails(holidayName);
                            cellBg = evt.bgClass;
                            cellContent = (
                              <div
                                className={`w-full h-8 flex items-center justify-center rounded text-[9px] font-black cursor-not-allowed uppercase ${evt.boxClass}`}
                                title={`${evt.isActualHoliday ? 'LIBUR' : 'EVENT'}: ${holidayName}`}
                              >
                                {evt.label}
                              </div>
                            );
                          } else {
                            cellContent = (
                              <input
                                type="text"
                                value={jpVal}
                                onChange={(e) =>
                                  handleCellChange(tp.id, m.name, weekNum, e.target.value)
                                }
                                placeholder="-"
                                className="w-full h-8 text-center text-xs font-bold text-slate-700 border border-slate-200 rounded-lg hover:border-slate-300 focus:border-gemini-blue focus:ring-1 focus:ring-blue-100/50 outline-none transition-all"
                              />
                            );
                          }

                          return (
                            <td
                              key={`${tp.id}-${m.name}-${weekNum}`}
                              className={`p-1.5 border-r border-slate-100 text-center align-middle w-10 ${cellBg}`}
                            >
                              {cellContent}
                            </td>
                          );
                        })
                      )}
                    </tr>
                  );
                })}

                {/* Bottom Row: Total JP per Week */}
                <tr className="bg-slate-50 font-bold border-t-2 border-slate-200">
                  <td className="p-3 sticky left-0 bg-slate-50 z-10 border-r border-slate-100 text-[10px] text-slate-500 font-extrabold uppercase shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                    TOTAL JP / MINGGU
                  </td>
                  <td className="p-3 border-r border-slate-100"></td>
                  <td className="p-3 border-r border-slate-100 text-center"></td>
                  {MONTH_WEEKS.flatMap((m) =>
                    Array.from({ length: m.weeks }).map((_, idx) => {
                      const weekNum = idx + 1;
                      const holidayName = holidaysMap[`${m.name}-${weekNum}`];
                      const isHoliday = !!holidayName;
                      const totalWJp = getWeeklyTotalJp(m.name, weekNum);

                      let tdClass = "text-slate-400";
                      if (isHoliday) {
                        const evt = getEventDetails(holidayName);
                        tdClass = evt.footerBg;
                      } else if (totalWJp > 0) {
                        tdClass = "bg-blue-50/50 text-gemini-blue";
                      }

                      return (
                        <td
                          key={`total-${m.name}-${weekNum}`}
                          className={`p-2 border-r border-slate-100 text-center text-[11px] font-black ${tdClass}`}
                        >
                          {isHoliday ? "-" : totalWJp > 0 ? `${totalWJp}h` : "-"}
                        </td>
                      );
                    })
                  )}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Footer Guide inside grid */}
          <div className="bg-slate-50/40 p-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs font-medium text-slate-400">
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-rose-100 border border-rose-200 rounded"></span>
                Minggu Libur Kalender
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-amber-100 border border-amber-200 rounded"></span>
                Minggu Event Sekolah
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-blue-50 border border-blue-100 rounded"></span>
                Minggu Terisi Jadwal
              </span>
            </div>
            <p className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-gemini-blue" />
              Tip: Isikan JP (misal: 4) pada minggu efektif belajar. Klik "Simpan Alur Promes" jika selesai.
            </p>
          </div>
        </div>
      )}

      {/* OCR Academic Calendar Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white w-full max-w-lg rounded-3xl border border-slate-100 shadow-xl overflow-hidden animate-scaleIn">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gemini-blue" />
                <h3 className="font-black text-slate-800 tracking-tight">Unggah Kalender Akademik</h3>
              </div>
              <button
                onClick={() => {
                  setShowUploadModal(false);
                  setOcrStatus("idle");
                  setFileName("");
                  setFileBase64("");
                }}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {ocrStatus === "idle" ? (
                <>
                  <p className="text-xs font-medium text-slate-400 leading-relaxed">
                    Unggah gambar kalender akademik sekolah Anda (Format: PNG, JPG, JPEG). Sistem akan memproses gambar tersebut menggunakan AI Vision MiMo V2.5 untuk mengenali dan memblokir tanggal libur nasional serta libur semester secara otomatis.
                  </p>

                  <div
                    onDragEnter={handleDrag}
                    onDragOver={handleDrag}
                    onDragLeave={handleDrag}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-2xl p-8 text-center flex flex-col items-center justify-center gap-3 transition-all cursor-pointer ${
                      dragActive
                        ? "border-gemini-blue bg-blue-50/20"
                        : "border-slate-200 hover:border-slate-300 bg-slate-50/40 hover:bg-slate-50/80"
                    }`}
                    onClick={() => document.getElementById("fileInput")?.click()}
                  >
                    <input
                      id="fileInput"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <div className="w-12 h-12 bg-white text-slate-400 rounded-xl flex items-center justify-center border border-slate-200/60 shadow-sm">
                      <Upload className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-600">
                        {fileName || "Pilih Berkas Gambar"}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Seret & lepas berkas ke sini, atau klik untuk mencari berkas
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="py-8 text-center space-y-4">
                  {ocrStatus === "processing" && (
                    <div className="flex flex-col items-center gap-3">
                      <Loader2 className="w-10 h-10 text-gemini-blue animate-spin" />
                      <p className="text-sm font-semibold text-slate-700 animate-pulse">{ocrMessage}</p>
                    </div>
                  )}

                  {ocrStatus === "success" && (
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center border border-emerald-100">
                        <CheckCircle2 className="w-6 h-6 animate-bounce" />
                      </div>
                      <p className="text-sm font-semibold text-slate-700">{ocrMessage}</p>
                    </div>
                  )}

                  {ocrStatus === "error" && (
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center border border-rose-100">
                        <AlertTriangle className="w-6 h-6 animate-bounce" />
                      </div>
                      <p className="text-sm font-semibold text-slate-700">{ocrMessage}</p>
                      <button
                        onClick={() => setOcrStatus("idle")}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-gemini-blue hover:underline mt-2"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        Coba lagi
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {ocrStatus === "idle" && (
              <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex items-center justify-end gap-3">
                <button
                  onClick={() => {
                    setShowUploadModal(false);
                    setFileName("");
                    setFileBase64("");
                  }}
                  className="px-4 py-2 border border-slate-200 hover:bg-slate-100 text-slate-500 hover:text-slate-700 text-xs font-bold rounded-xl transition-all"
                >
                  Batal
                </button>
                <button
                  onClick={handleRunOCR}
                  disabled={!fileBase64 || isPendingOCR}
                  className="flex items-center gap-2 bg-gemini-blue hover:bg-gemini-blue/90 disabled:bg-slate-100 disabled:text-slate-400 text-white text-xs font-bold px-5 py-2 rounded-xl transition-all shadow-md shadow-blue-500/10"
                >
                  <Sparkles className="w-4 h-4" />
                  Mulai Analisis AI
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
