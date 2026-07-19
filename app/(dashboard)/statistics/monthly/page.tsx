import MonthlyChart from "@/components/statistics/monthly-chart";
import { getMonthlyViolations } from "@/lib/services/monthly-statistics";

export default async function MonthlyPage() {
  const data = await getMonthlyViolations();

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">
          Pelanggaran Bulanan
        </h1>

        <p className="text-gray-500">
          Statistik jumlah pelanggaran setiap bulan.
        </p>

      </div>

      <MonthlyChart
        data={data}
      />

    </div>
  );
}