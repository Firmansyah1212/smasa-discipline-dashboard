import { supabase } from "@/lib/supabase";

export async function deleteViolation(violationId: string) {
  console.log("Menghapus pelanggaran:", violationId);

  const { data, error } = await supabase.rpc(
    "delete_class_violation",
    {
      p_violation_id: violationId,
    }
  );

  console.log("RPC Data:", data);
  console.log("RPC Error:", error);

  if (error) {
    throw error;
  }

  return true;
}