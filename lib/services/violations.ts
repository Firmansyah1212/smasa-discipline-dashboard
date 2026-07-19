import { supabase } from "@/lib/supabase";

interface AddViolationData {
  class_id: string;
  category_id: string;
  teacher: string;
  description: string;
  violation_date: string;
}
export async function getViolations() {
  const { data, error } = await supabase
    .from("violations")
    .select(`
      *,
      classes (
        id,
        code
      ),
      violation_categories (
        id,
        name,
        deduction
      )
    `)
    .order("violation_date", {
      ascending: false,
    });

  if (error) throw error;

  return data ?? [];
}

export async function addViolation(data: AddViolationData) {
  const { error } = await supabase.rpc(
    "add_class_violation",
    {
      p_class_id: data.class_id,
      p_category_id: data.category_id,
      p_teacher: data.teacher,
      p_description: data.description,
      p_violation_date: data.violation_date,
    }
  );

  if (error) throw error;
}