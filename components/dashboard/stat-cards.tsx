interface Props {
  stats: any;
}

export default function StatsCards({
  stats,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">

      <Card
        title="Total Kelas"
        value={stats.totalClasses}
      />

      <Card
        title="Total Pelanggaran"
        value={stats.totalViolations}
      />

      <Card
        title="Rata-rata Poin"
        value={stats.averagePoints}
      />

      <Card
        title="Poin Tertinggi"
        value={`${stats.highest?.code ?? "-"} (${stats.highest?.points ?? 0})`}
      />

      <Card
        title="Poin Terendah"
        value={`${stats.lowest?.code ?? "-"} (${stats.lowest?.points ?? 0})`}
      />

    </div>
  );
}

function Card({
  title,
  value,
}: {
  title: string;
  value: any;
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">

      <p className="text-sm text-gray-500">
        {title}
      </p>

      <h2 className="mt-3 text-3xl font-bold">
        {value}
      </h2>

    </div>
  );
}