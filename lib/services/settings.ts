import { supabase } from "@/lib/supabase";

export async function getSettings() {
  const { data, error } = await supabase
    .from("settings")
    .select("*")
    .single();

  if (error) throw error;

  return data;
}

export async function updateSettings(values: {
  school_name: string;
  school_address: string;
  school_phone: string;
  principal: string;
  initial_points: number;
}) {
  const { error } = await supabase
    .from("settings")
    .update(values)
    .eq("id", 1);

  if (error) throw error;
}