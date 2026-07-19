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
  return (
    <div className="rounded-2xl bg-white p-6 shadow">

      <h2 className="mb-6 text-xl font-bold">
        Ranking Kelas
      </h2>

      <div className="space-y-3">

        {ranking.length === 0 ? (
          <p className="text-gray-500">
            Belum ada data.
          </p>
        ) : (
          ranking.map((item, index) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-lg bg-slate-50 p-3"
            >

              <div className="flex items-center gap-3">

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  {index + 1}
                </div>

                <span className="font-medium">
                  {item.code}
                </span>

              </div>

              <span className="font-bold text-blue-600">
                {item.points}
              </span>

            </div>
          ))
        )}

      </div>

    </div>
  );
}