import CategoryChart from "@/components/statistics/category-chart";
import { getCategoryStatistics } from "@/lib/services/category-statistics";

export default async function CategoryPage() {
  const data = await getCategoryStatistics();

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">
          Statistik Kategori
        </h1>

        <p className="text-gray-500">
          Persentase kategori pelanggaran.
        </p>

      </div>

      <CategoryChart data={data} />

    </div>
  );
}