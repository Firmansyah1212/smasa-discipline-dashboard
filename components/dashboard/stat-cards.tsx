import {
  School,
  ShieldAlert,
  Trophy,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

interface Props {
  stats: any;
}

export default function StatsCards({
  stats,
}: Props) {
  return (
    <div className="grid grid-cols-2 gap-4 xl:grid-cols-5">

      <Card
        title="Total Kelas"
        value={stats.totalClasses}
        icon={<School className="h-6 w-6" />}
        color="bg-blue-100 text-blue-600"
      />

      <Card
        title="Pelanggaran"
        value={stats.totalViolations}
        icon={<ShieldAlert className="h-6 w-6" />}
        color="bg-red-100 text-red-600"
      />

      <Card
        title="Rata-rata"
        value={stats.averagePoints}
        icon={<Trophy className="h-6 w-6" />}
        color="bg-yellow-100 text-yellow-600"
      />

      <Card
        title="Tertinggi"
        value={`${stats.highest?.code ?? "-"} (${stats.highest?.points ?? 0})`}
        icon={<TrendingUp className="h-6 w-6" />}
        color="bg-green-100 text-green-600"
      />

      <Card
        title="Terendah"
        value={`${stats.lowest?.code ?? "-"} (${stats.lowest?.points ?? 0})`}
        icon={<TrendingDown className="h-6 w-6" />}
        color="bg-orange-100 text-orange-600"
      />

    </div>
  );
}

function Card({
  title,
  value,
  icon,
  color,
}: {
  title: string;
  value: any;
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-6">

      <div className="flex items-start justify-between">

        <div>

          <p className="text-xs text-gray-500 md:text-sm">
            {title}
          </p>

          <h2 className="mt-3 break-words text-lg font-bold text-slate-800 md:text-3xl">
            {value}
          </h2>

        </div>

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${color}`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}