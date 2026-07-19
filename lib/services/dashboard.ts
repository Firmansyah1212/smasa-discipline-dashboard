import { supabase } from "@/lib/supabase";

export async function getDashboardStats() {
  // ==========================
  // Total Kelas
  // ==========================
  const { count: totalClasses } = await supabase
    .from("classes")
    .select("*", {
      count: "exact",
      head: true,
    });

  // ==========================
  // Total Pelanggaran
  // ==========================
  const { count: totalViolations } = await supabase
    .from("violations")
    .select("*", {
      count: "exact",
      head: true,
    });

  // ==========================
  // Ranking Kelas
  // ==========================
  const { data: ranking } = await supabase
    .from("classes")
    .select("*")
    .order("points", {
      ascending: false,
    });

  // ==========================
  // Aktivitas Terbaru
  // ==========================
  const { data: recentViolations } = await supabase
    .from("violations")
    .select(`
      id,
      teacher,
      description,
      violation_date,
      classes (
        code
      ),
      violation_categories (
        name,
        deduction
      )
    `)
    .order("violation_date", {
      ascending: false,
    })
    .limit(10);

  // ==========================
  // Rata-rata poin
  // ==========================
  const averagePoints =
    ranking && ranking.length > 0
      ? Number(
          (
            ranking.reduce(
              (sum, item) => sum + item.points,
              0
            ) / ranking.length
          ).toFixed(1)
        )
      : 0;

  return {
    totalClasses: totalClasses ?? 0,

    totalViolations: totalViolations ?? 0,

    averagePoints,

    highest: ranking?.[0] ?? null,

    lowest:
      ranking?.[ranking.length - 1] ?? null,

    ranking: ranking ?? [],

    chartData:
      ranking?.map((item) => ({
        name: item.code,
        points: item.points,
      })) ?? [],

    recentViolations:
      recentViolations ?? [],
  };
}