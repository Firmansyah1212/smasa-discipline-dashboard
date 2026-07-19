import StatsCards from "@/components/dashboard/stat-cards";
import RankingCard from "@/components/dashboard/ranking-card";
import ActivityCard from "@/components/dashboard/activity-card";
import ChartCard from "@/components/dashboard/chart-card";

import { getDashboardStats } from "@/lib/services/dashboard";

export default async function DashboardPage() {
  const stats = await getDashboardStats();

  return (
    <div className="space-y-6 md:space-y-8">

      {/* Header */}

      <div className="space-y-1">

        <h1 className="text-2xl font-bold md:text-4xl">
          Dashboard Kedisiplinan
        </h1>

        <p className="text-sm text-gray-500 md:text-base">
          SMA Negeri 1 Jember
        </p>

      </div>

      {/* Statistik */}

      <StatsCards stats={stats} />

      {/* Grafik + Ranking */}

      <div className="grid gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">

          <ChartCard
            data={stats.chartData}
          />

        </div>

        <RankingCard
          ranking={stats.ranking}
        />

      </div>

      {/* Aktivitas */}

      <ActivityCard
        activities={stats.recentViolations}
      />

    </div>
  );
}