import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function exportReportPDF(data: any[]) {
  const doc = new jsPDF("p", "mm", "a4");

  // Judul
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("SMA NEGERI 1 JEMBER", 105, 18, {
    align: "center",
  });

  doc.setFontSize(14);
  doc.text("LAPORAN KEDISIPLINAN", 105, 26, {
    align: "center",
  });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);

  doc.text(
    `Tanggal Cetak : ${new Date().toLocaleDateString(
      "id-ID"
    )}`,
    14,
    36
  );

  autoTable(doc, {
    startY: 45,

    head: [
      [
        "No",
        "Tanggal",
        "Kelas",
        "Kategori",
        "Guru",
        "Keterangan",
        "Poin",
      ],
    ],

    body: data.map((item, index) => [
      index + 1,

      new Date(
        item.violation_date
      ).toLocaleDateString("id-ID"),

      item.classes?.code,

      item.violation_categories?.name,

      item.teacher,

      item.description,

      "-" + item.violation_categories?.deduction,
    ]),

    styles: {
      fontSize: 9,
      cellPadding: 3,
    },

    headStyles: {
      fillColor: [37, 99, 235],
    },
  });

  const finalY =
    (doc as any).lastAutoTable.finalY + 20;

  doc.text(
    "Jember, " +
      new Date().toLocaleDateString("id-ID"),
    150,
    finalY
  );

  doc.text(
    "Administrator",
    150,
    finalY + 8
  );

  doc.text(
    "_____________________",
    145,
    finalY + 35
  );

  doc.save(
    `Laporan-Kedisiplinan-${new Date()
      .toISOString()
      .split("T")[0]}.pdf`
  );
}