import { supabase } from "@/lib/supabase";

export async function getClassDetail(id: string) {
  const { data: kelas, error } = await supabase
    .from("classes")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  const { data: violations } = await supabase
    .from("violations")
    .select("*")
    .eq("class_id", id)
    .order("created_at", {
      ascending: false,
    });

  return {
    kelas,
    violations: violations ?? [],
  };
}