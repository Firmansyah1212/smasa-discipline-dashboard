import { supabase } from "@/lib/supabase";

export async function getPointStatistics() {
  const { data, error } = await supabase
    .from("classes")
    .select("code, points")
    .order("code");

  if (error) throw error;

  return data ?? [];
}