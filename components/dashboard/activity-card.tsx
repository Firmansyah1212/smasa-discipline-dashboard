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
    <div className="rounded-2xl bg-white p-6 shadow">

      <h2 className="mb-6 text-xl font-bold">
        Aktivitas Terbaru
      </h2>

      <div className="space-y-4">

        {activities.length === 0 ? (
          <p className="text-gray-500">
            Belum ada aktivitas.
          </p>
        ) : (
          activities.map((item) => (
            <div
              key={item.id}
              className="rounded-lg border p-4"
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="font-semibold">
                    {item.classes?.[0]?.code}
                  </p>

                  <p className="text-sm text-gray-500">
                    {item.violation_categories?.[0]?.name}
                  </p>

                  <p className="text-sm">
                    {item.description}
                  </p>

                  <p className="mt-2 text-xs text-gray-400">
                    Guru: {item.teacher}
                  </p>

                </div>

                <div className="text-xs text-gray-400">
                  {new Date(
                    item.violation_date
                  ).toLocaleDateString("id-ID")}
                </div>

              </div>

            </div>
          ))
        )}

      </div>

    </div>
  );
}