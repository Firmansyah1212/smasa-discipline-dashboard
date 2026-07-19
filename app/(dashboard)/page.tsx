import StatsCards from "@/components/dashboard/stat-cards";
import RankingCard from "@/components/dashboard/ranking-card";
import ActivityCard from "@/components/dashboard/activity-card";
import ChartCard from "@/components/dashboard/chart-card";

import { getDashboardStats } from "@/lib/services/dashboard";

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

      <StatsCards stats={stats} />

      <div className="grid gap-6 lg:grid-cols-3">

        <div className="lg:col-span-2">
          <ChartCard
            data={stats.chartData}
          />
        </div>

        <RankingCard
          ranking={stats.ranking}
        />

      </div>

      <ActivityCard
        activities={stats.recentViolations}
      />

    </div>
  );
}