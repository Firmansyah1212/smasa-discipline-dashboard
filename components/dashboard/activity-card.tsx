import { History } from "lucide-react";

const data = [
  "XI IPA 1 - Kedisiplinan (-5)",
  "X.8 - Kebersihan (-5)",
  "XI Teknik 2 - Kerapian (-2)",
  "XII IPS 1 - Terlambat (-5)",
];

export default function ActivityCard() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-5">
        <History />
        <h2 className="text-xl font-bold">
          Aktivitas Terbaru
        </h2>
      </div>

      <div className="space-y-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="rounded-lg bg-slate-50 p-3"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}