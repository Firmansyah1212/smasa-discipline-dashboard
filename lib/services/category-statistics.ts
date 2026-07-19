import { supabase } from "@/lib/supabase";

export async function getCategoryStatistics() {
  const { data, error } = await supabase
    .from("violations")
    .select(`
      violation_categories (
        name
      )
    `);

  if (error) throw error;

  const result: Record<string, number> = {};

  data?.forEach((item: any) => {
    const name = item.violation_categories?.name ?? "Lainnya";

    if (!result[name]) {
      result[name] = 0;
    }

    result[name]++;
  });

  return Object.keys(result).map((key) => ({
    name: key,
    value: result[key],
  }));
}