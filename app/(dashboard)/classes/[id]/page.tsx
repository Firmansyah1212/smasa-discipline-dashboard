import { getClassDetail } from "@/lib/services/class-detail";
import ClassStatus from "@/components/classes/class-status";

export default async function ClassDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { kelas, violations } =
    await getClassDetail(id);

  return (
    <div className="space-y-8">

      <div className="rounded-2xl bg-white p-8 shadow">

        <h1 className="text-4xl font-bold">
          {kelas.code}
        </h1>

        <p className="text-gray-500">
          {kelas.level} • {kelas.major}
        </p>

        <div className="mt-6 flex items-center gap-8">

          <div>

            <p className="text-sm text-gray-500">
              Poin
            </p>

            <p className="text-5xl font-bold text-blue-600">
              {kelas.points}
            </p>

          </div>

          <ClassStatus
            points={kelas.points}
          />

        </div>

      </div>

      <div className="rounded-2xl bg-white p-8 shadow">

        <h2 className="mb-6 text-2xl font-bold">
          Riwayat Pelanggaran
        </h2>

        {violations.length === 0 ? (
          <p className="text-gray-500">
            Belum ada pelanggaran.
          </p>
        ) : (
          <div className="space-y-4">

            {violations.map((item: any) => (
              <div
                key={item.id}
                className="rounded-xl border p-4"
              >
                <div className="flex justify-between">

                  <div>

                    <p className="font-semibold">
                      {item.category}
                    </p>

                    <p className="text-sm text-gray-500">
                      {item.teacher}
                    </p>

                    <p className="text-sm text-gray-400">
                      {item.description}
                    </p>

                  </div>

                  <div className="text-right">

                    <p className="font-bold text-red-600">
                      -{item.deduction}
                    </p>

                    <p className="text-xs text-gray-400">
                      {new Date(item.created_at).toLocaleDateString("id-ID")}
                    </p>

                  </div>

                </div>
              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
}