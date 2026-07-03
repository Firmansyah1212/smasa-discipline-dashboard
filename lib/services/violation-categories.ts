import { supabase } from "@/lib/supabase";

export async function getViolationCategories() {
  const { data, error } = await supabase
    .from("violation_categories")
    .select("*")
    .order("deduction");

  if (error) throw error;

  return data ?? [];
}