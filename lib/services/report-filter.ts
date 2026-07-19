import { supabase } from "@/lib/supabase";

export async function getFilterData() {
  // Kelas
  const { data: classes } = await supabase
    .from("classes")
    .select("id, code")
    .order("code");

  // Kategori
  const { data: categories } = await supabase
    .from("violation_categories")
    .select("id, name")
    .order("name");

  // Guru (unik dari data pelanggaran)
  const { data: teachers } = await supabase
    .from("violations")
    .select("teacher");

  const uniqueTeachers = Array.from(
    new Set(
      teachers
        ?.map((t) => t.teacher)
        .filter(Boolean)
    )
  ).sort();

  return {
    classes: classes ?? [],
    categories: categories ?? [],
    teachers: uniqueTeachers,
  };
}