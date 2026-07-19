interface Props {
  points: number;
  violations: number;
}

export default function ClassSummary({
  points,
  violations,
}: Props) {
  const status =
    points >= 90
      ? "🟢 Sangat Baik"
      : points >= 75
      ? "🟡 Baik"
      : points >= 50
      ? "🟠 Perlu Pembinaan"
      : "🔴 Pembinaan Intensif";

  return (
    <div className="grid gap-6 md:grid-cols-3">

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <p className="text-gray-500 text-sm">
          Sisa Poin
        </p>

        <h2 className="mt-2 text-4xl font-bold text-blue-600">
          {points}
        </h2>
      </div>

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <p className="text-gray-500 text-sm">
          Total Pelanggaran
        </p>

        <h2 className="mt-2 text-4xl font-bold text-red-600">
          {violations}
        </h2>
      </div>

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <p className="text-gray-500 text-sm">
          Status
        </p>

        <h2 className="mt-2 text-xl font-bold">
          {status}
        </h2>
      </div>

    </div>
  );
}