import { supabase } from "@/lib/supabase";

interface UpdateViolationData {
  violation_id: string;
  category_id: string;
  teacher: string;
  description: string;
  violation_date: string;
}

export async function updateViolation(
  data: UpdateViolationData
) {
  const { error } = await supabase.rpc(
    "update_class_violation",
    {
      p_violation_id: data.violation_id,
      p_category_id: data.category_id,
      p_teacher: data.teacher,
      p_description: data.description,
      p_violation_date: data.violation_date,
    }
  );

  if (error) throw error;
}