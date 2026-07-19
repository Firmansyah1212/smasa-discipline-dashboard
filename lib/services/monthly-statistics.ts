import { supabase } from "@/lib/supabase";

export async function getMonthlyViolations() {
  const { data, error } = await supabase
    .from("violations")
    .select("violation_date");

  if (error) throw error;

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];

  const result = months.map((month) => ({
    month,
    total: 0,
  }));

  data?.forEach((item) => {
    const date = new Date(item.violation_date);
    const month = date.getMonth();

    result[month].total++;
  });

  return result;
}