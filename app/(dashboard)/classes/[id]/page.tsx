import { getClassDetail } from "@/lib/services/class-detail";
import ClassStatus from "@/components/classes/class-status";
import ClassSummary from "@/components/classes/class-summary";
import ViolationHistory from "@/components/violations/violation-history";

export default async function ClassDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { kelas, violations } = await getClassDetail(id);

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="rounded-2xl bg-white p-8 shadow">

        <h1 className="text-4xl font-bold">
          {kelas.code}
        </h1>

        <p className="text-gray-500">
          {kelas.level} • {kelas.major}
        </p>

        <div className="mt-6 flex items-center gap-8">

          <div>

            <p className="text-sm text-gray-500">
              Sisa Poin
            </p>

            <p className="text-5xl font-bold text-blue-600">
              {kelas.points}
            </p>

          </div>

          <ClassStatus
            points={kelas.points}
          />

        </div>

      </div>

      {/* Ringkasan */}
      <ClassSummary
        points={kelas.points}
        violations={violations.length}
      />

      {/* Riwayat Pelanggaran */}
      <ViolationHistory
        violations={violations}
      />

    </div>
  );
}