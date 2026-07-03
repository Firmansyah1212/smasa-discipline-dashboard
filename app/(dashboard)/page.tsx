import StatCard from "@/components/dashboard/stat-card";
import RankingCard from "@/components/dashboard/ranking-card";
import ActivityCard from "@/components/dashboard/activity-card";
import ChartCard from "@/components/dashboard/chart-card";
import { getDashboardStats } from "@/lib/services/dashboard";

import {
  School,
  Trophy,
  AlertTriangle,
  Star,
} from "lucide-react";

export default async function DashboardPage() {
 const stats = await getDashboardStats();

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold">
          Dashboard Kedisiplinan
        </h1>

        <p className="text-gray-500">
          SMA Negeri 1 Jember
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Jumlah Kelas" value={stats.totalClasses} icon={School} />
        <StatCard title="Rata-rata Poin" value={stats.averagePoint} icon={Star} />
        <StatCard title="Pelanggaran Hari Ini" value={0} icon={AlertTriangle} />
        <StatCard title="Kelas Terbaik" value={stats.bestClass?.name ?? "-"} icon={Trophy} />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ChartCard />
        </div>

        <RankingCard />
      </div>

      <ActivityCard />

    </div>
  );
}