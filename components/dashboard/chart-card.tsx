"use client";

interface Props {
  data: {
    name: string;
    points: number;
  }[];
}

export default function ChartCard({ data }: Props) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">

      <h2 className="mb-6 text-xl font-bold">
        Grafik Poin Kelas
      </h2>

      <div className="space-y-4">

        {data.length === 0 ? (
          <p className="text-gray-500">
            Belum ada data.
          </p>
        ) : (
          data.map((item) => (
            <div key={item.name}>

              <div className="mb-1 flex justify-between text-sm">
                <span>{item.name}</span>
                <span>{item.points}</span>
              </div>

              <div className="h-3 rounded-full bg-slate-200">

                <div
                  className="h-3 rounded-full bg-blue-600 transition-all"
                  style={{
                    width: `${item.points}%`,
                  }}
                />

              </div>

            </div>
          ))
        )}

      </div>

    </div>
  );
}