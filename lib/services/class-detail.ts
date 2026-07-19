import { supabase } from "@/lib/supabase";

export async function getClassDetail(id: string) {
  const { data: kelas, error } = await supabase
    .from("classes")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  const { data: violations, error: violationError } =
    await supabase
      .from("violations")
      .select(`
        *,
        violation_categories(
          id,
          name,
          deduction
        )
      `)
      .eq("class_id", id)
      .order("violation_date", {
        ascending: false,
      });

  if (violationError) throw violationError;

  return {
    kelas,
    violations: violations ?? [],
  };
}