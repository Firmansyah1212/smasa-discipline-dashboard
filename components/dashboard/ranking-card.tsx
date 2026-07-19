import { Medal } from "lucide-react";

interface Props {
  ranking: {
    id: string;
    code: string;
    points: number;
  }[];
}

export default function RankingCard({
  ranking,
}: Props) {
  function getRankColor(index: number) {
    switch (index) {
      case 0:
        return "bg-yellow-100 text-yellow-700";
      case 1:
        return "bg-slate-200 text-slate-700";
      case 2:
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-blue-100 text-blue-700";
    }
  }

  function getRankLabel(index: number) {
    switch (index) {
      case 0:
        return "🥇";
      case 1:
        return "🥈";
      case 2:
        return "🥉";
      default:
        return `${index + 1}`;
    }
  }

  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm md:p-6">

      <div className="mb-6 flex items-center gap-2">

        <Medal className="h-6 w-6 text-yellow-500" />

        <div>

          <h2 className="text-lg font-bold md:text-xl">
            Ranking Kelas
          </h2>

          <p className="text-sm text-gray-500">
            Urutan poin kelas tertinggi
          </p>

        </div>

      </div>

      <div className="space-y-3">

        {ranking.length === 0 ? (

          <div className="rounded-xl bg-slate-50 py-10 text-center">

            <p className="text-gray-500">
              Belum ada data.
            </p>

          </div>

        ) : (

          ranking.map((item, index) => (

            <div
              key={item.id}
              className="flex items-center justify-between rounded-xl border p-3 transition-all duration-300 hover:bg-slate-50 hover:shadow-sm"
            >

              <div className="flex items-center gap-3">

                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${getRankColor(
                    index
                  )}`}
                >
                  {getRankLabel(index)}
                </div>

                <div>

                  <p className="font-semibold text-slate-800">
                    {item.code}
                  </p>

                  <p className="text-xs text-gray-500">
                    Peringkat #{index + 1}
                  </p>

                </div>

              </div>

              <div className="text-right">

                <p className="text-xl font-bold text-blue-600">
                  {item.points}
                </p>

                <p className="text-xs text-gray-500">
                  poin
                </p>

              </div>

            </div>

          ))

        )}

      </div>

    </div>
  );
}