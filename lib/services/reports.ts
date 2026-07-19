import { supabase } from "@/lib/supabase";

export interface ReportFilter {
  start?: string;
  end?: string;
  class?: string;
  category?: string;
  teacher?: string;
}

export async function getReports(
  filter?: ReportFilter
) {
  let query = supabase
    .from("violations")
    .select(`
      id,
      teacher,
      description,
      violation_date,
      class_id,
      category_id,

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

  // Filter tanggal awal
  if (filter?.start) {
    query = query.gte(
      "violation_date",
      filter.start
    );
  }

  // Filter tanggal akhir
  if (filter?.end) {
    query = query.lte(
      "violation_date",
      filter.end
    );
  }

  // Filter kelas
  if (filter?.class) {
    query = query.eq(
      "class_id",
      filter.class
    );
  }

  // Filter kategori
  if (filter?.category) {
    query = query.eq(
      "category_id",
      filter.category
    );
  }

  // Filter guru
  if (filter?.teacher) {
    query = query.eq(
      "teacher",
      filter.teacher
    );
  }

  const { data, error } = await query;

  if (error) {
    throw error;
  }

  return data ?? [];
}