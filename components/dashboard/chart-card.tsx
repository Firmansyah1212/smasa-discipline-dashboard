"use client";

interface Props {
  data: {
    name: string;
    points: number;
  }[];
}

export default function ChartCard({
  data,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm md:p-6">

      <div className="mb-6">

        <h2 className="text-lg font-bold md:text-xl">
          Grafik Poin Kelas
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Perbandingan poin setiap kelas
        </p>

      </div>

      <div className="space-y-4">

        {data.length === 0 ? (

          <div className="rounded-xl bg-slate-50 py-10 text-center">

            <p className="text-gray-500">
              Belum ada data.
            </p>

          </div>

        ) : (

          data.map((item) => (

            <div
              key={item.name}
              className="rounded-xl border p-3 transition hover:bg-slate-50"
            >

              <div className="mb-2 flex items-center justify-between">

                <span className="font-medium text-slate-700">
                  {item.name}
                </span>

                <span className="font-bold text-blue-600">
                  {item.points}
                </span>

              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-200">

                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-700 transition-all duration-700"
                  style={{
                    width: `${Math.max(
                      0,
                      Math.min(item.points, 100)
                    )}%`,
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