import { getPointStatistics } from "@/lib/services/statistics";
import PointsChart from "@/components/statistics/points-chart";

export default async function PointsPage() {
  const data = await getPointStatistics();

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold">
          Statistik Poin Kelas
        </h1>

        <p className="text-gray-500">
          Grafik seluruh poin kelas.
        </p>
      </div>

      <PointsChart
        data={data}
      />

    </div>
  );
}