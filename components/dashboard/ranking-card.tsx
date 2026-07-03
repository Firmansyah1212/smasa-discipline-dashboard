import { Trophy } from "lucide-react";

const ranking = [
  { rank: 1, class: "X.4", point: 100 },
  { rank: 2, class: "XI IPA 1", point: 98 },
  { rank: 3, class: "XII Teknik 2", point: 97 },
  { rank: 4, class: "XI KES 2", point: 95 },
  { rank: 5, class: "X.8", point: 94 },
];

export default function RankingCard() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-5">
        <Trophy className="text-yellow-500" />
        <h2 className="font-bold text-xl">
          Ranking Kelas
        </h2>
      </div>

      <div className="space-y-4">
        {ranking.map((item) => (
          <div
            key={item.rank}
            className="flex items-center justify-between border-b pb-3"
          >
            <div className="flex gap-4 items-center">
              <div className="font-bold text-blue-600">
                #{item.rank}
              </div>

              <div>{item.class}</div>
            </div>

            <div className="font-semibold">
              {item.point}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}