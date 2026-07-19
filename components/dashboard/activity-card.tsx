import {
  CalendarDays,
  User,
  AlertTriangle,
} from "lucide-react";

interface Props {
  activities: {
    id: string;
    teacher: string;
    description: string;
    violation_date: string;

    classes?: {
      code: string;
    }[];

    violation_categories?: {
      name: string;
      deduction: number;
    }[];
  }[];
}

export default function ActivityCard({
  activities,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm md:p-6">

      <div className="mb-6">

        <h2 className="text-lg font-bold md:text-xl">
          Aktivitas Terbaru
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Riwayat pelanggaran yang baru ditambahkan
        </p>

      </div>

      <div className="space-y-4">

        {activities.length === 0 ? (

          <div className="rounded-xl bg-slate-50 py-10 text-center">

            <p className="text-gray-500">
              Belum ada aktivitas.
            </p>

          </div>

        ) : (

          activities.map((item) => (

            <div
              key={item.id}
              className="rounded-xl border p-4 transition-all duration-300 hover:bg-slate-50 hover:shadow-sm"
            >

              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

                <div className="flex-1 space-y-3">

                  <div className="flex flex-wrap items-center gap-2">

                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                      {item.classes?.[0]?.code ?? "-"}
                    </span>

                    <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
                      -{item.violation_categories?.[0]?.deduction ?? 0} poin
                    </span>

                  </div>

                  <div>

                    <p className="flex items-center gap-2 font-semibold text-slate-800">

                      <AlertTriangle className="h-4 w-4 text-red-500" />

                      {item.violation_categories?.[0]?.name ?? "-"}

                    </p>

                    <p className="mt-2 text-sm text-gray-600">
                      {item.description}
                    </p>

                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">

                    <span className="flex items-center gap-2">

                      <User className="h-4 w-4" />

                      {item.teacher}

                    </span>

                    <span className="flex items-center gap-2">

                      <CalendarDays className="h-4 w-4" />

                      {new Date(
                        item.violation_date
                      ).toLocaleDateString("id-ID")}

                    </span>

                  </div>

                </div>

              </div>

            </div>

          ))

        )}

      </div>

    </div>
  );
}