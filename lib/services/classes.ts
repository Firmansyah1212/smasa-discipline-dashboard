import { supabase } from "@/lib/supabase";

export async function getClasses() {
  const { data, error } = await supabase
    .from("classes")
    .select("*");

  console.log(data);
  console.log(error);

  if (error) throw error;

  return data ?? [];
}

export async function getClassDetail(id: string) {
  // nanti kita isi query Supabase
}