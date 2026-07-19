import * as XLSX from "xlsx";

export function exportReportExcel(data: any[]) {
  const rows = data.map((item, index) => ({
    No: index + 1,

    Tanggal: new Date(
      item.violation_date
    ).toLocaleDateString("id-ID"),

    Kelas: item.classes?.code ?? "-",

    Kategori:
      item.violation_categories?.name ?? "-",

    Guru: item.teacher,

    Keterangan: item.description,

    Pengurangan:
      item.violation_categories?.deduction ?? 0,
  }));

  const worksheet =
    XLSX.utils.json_to_sheet(rows);

  worksheet["!cols"] = [
    { wch: 6 },
    { wch: 15 },
    { wch: 12 },
    { wch: 20 },
    { wch: 25 },
    { wch: 40 },
    { wch: 15 },
  ];

  const workbook =
    XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Laporan"
  );

  XLSX.writeFile(
    workbook,
    `Laporan_Kedisiplinan_${
      new Date().toISOString().split("T")[0]
    }.xlsx`
  );
}