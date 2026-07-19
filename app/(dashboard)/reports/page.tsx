import ReportFilter from "@/components/reports/report-filter";
import ReportActions from "@/components/reports/report-actions";
import ReportTable from "@/components/reports/report-table";

import {
  getReports,
  ReportFilter as ReportFilterType,
} from "@/lib/services/reports";

import { getFilterData } from "@/lib/services/report-filter";

interface Props {
  searchParams: Promise<{
    start?: string;
    end?: string;
    class?: string;
    category?: string;
    teacher?: string;
  }>;
}

export default async function ReportsPage({
  searchParams,
}: Props) {
  const params = await searchParams;

  const filter: ReportFilterType = {
    start: params.start,
    end: params.end,
    class: params.class,
    category: params.category,
    teacher: params.teacher,
  };

  const [reports, filters] = await Promise.all([
    getReports(filter),
    getFilterData(),
  ]);

  return (
    <div className="space-y-8">

      {/* Header */}

      <div>

        <h1 className="text-4xl font-bold">
          Laporan Kedisiplinan
        </h1>

        <p className="text-gray-500">
          Filter, cetak, dan export laporan pelanggaran.
        </p>

      </div>

      {/* Filter */}

      <ReportFilter
        classes={filters.classes}
        categories={filters.categories}
        teachers={filters.teachers}
      />

      {/* Action */}

      <ReportActions
        data={reports}
      />

      {/* Table */}

      <ReportTable
        data={reports}
      />

    </div>
  );
}