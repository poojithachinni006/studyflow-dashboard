import { supabase } from "./supabase";

export async function getCourses() {
  const { data, error } = await supabase
    .from("courses")
    .select("*");

  if (error) throw error;

  return data;
}