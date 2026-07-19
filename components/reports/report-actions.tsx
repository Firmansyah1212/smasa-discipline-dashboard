"use client";

import { Button } from "@/components/ui/button";

import { exportReportExcel } from "@/lib/services/export-excel";
import { exportReportPDF } from "@/lib/services/export-pdf";

interface Props {
  data: any[];
}

export default function ReportActions({
  data,
}: Props) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">

      <div className="flex flex-wrap gap-3">

        <Button
          variant="secondary"
          onClick={() =>
            exportReportExcel(data)
          }
        >
          📊 Export Excel
        </Button>

        <Button
          variant="destructive"
          onClick={() =>
            exportReportPDF(data)
          }
        >
          📄 Export PDF
        </Button>

        <Button
          variant="outline"
          onClick={() =>
            window.print()
          }
        >
          🖨 Cetak
        </Button>

      </div>

      <p className="mt-5 text-sm text-gray-500">
        Total Data :
        <span className="ml-2 font-bold">
          {data.length}
        </span>
      </p>

    </div>
  );
}