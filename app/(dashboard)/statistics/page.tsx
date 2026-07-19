import Link from "next/link";
import {
  BarChart3,
  TrendingUp,
  PieChart,
  Trophy,
  ArrowRight,
} from "lucide-react";

export default function StatisticsPage() {
  const menus = [
    {
      title: "Statistik Poin Kelas",
      description: "Melihat grafik poin seluruh kelas.",
      icon: BarChart3,
      href: "/statistics/points",
    },
    {
      title: "Pelanggaran Bulanan",
      description: "Grafik jumlah pelanggaran setiap bulan.",
      icon: TrendingUp,
      href: "/statistics/monthly",
    },
    {
      title: "Kategori Pelanggaran",
      description: "Persentase kategori pelanggaran.",
      icon: PieChart,
      href: "/statistics/categories",
    },
    {
      title: "Ranking Kelas",
      description: "10 kelas terbaik dan terendah.",
      icon: Trophy,
      href: "/statistics/ranking",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          Statistik
        </h1>

        <p className="text-gray-500 mt-2">
          Analisis data kedisiplinan SMA Negeri 1 Jember
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <Link
              key={menu.title}
              href={menu.href}
              className="group rounded-2xl bg-white p-6 shadow transition hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-blue-100 p-3">
                  <Icon className="h-7 w-7 text-blue-600" />
                </div>

                <ArrowRight className="text-gray-400 transition group-hover:translate-x-1" />
              </div>

              <h2 className="mt-5 text-xl font-bold">
                {menu.title}
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                {menu.description}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}