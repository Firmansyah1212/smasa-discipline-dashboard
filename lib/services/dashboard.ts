import { supabase } from "@/lib/supabase";

export async function getDashboardStats() {
  const { data, error } = await supabase
    .from("classes")
    .select("*");

  if (error) throw error;

  // Pastikan selalu berupa array
  const classes = data ?? [];

  const totalClasses = classes.length;

  const averagePoint =
    totalClasses === 0
      ? 0
      : Number(
          (
            classes.reduce((sum, item) => sum + item.points, 0) /
            totalClasses
          ).toFixed(1)
        );

  const bestClass =
    classes.length > 0
      ? [...classes].sort((a, b) => b.points - a.points)[0]
      : null;

  return {
    totalClasses,
    averagePoint,
    bestClass,
  };
}