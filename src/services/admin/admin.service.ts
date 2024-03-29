import supabase from "@/lib/config/supabaseClient";
import { eRole } from "@/types/definition";

export async function getFlaggedCourses() {
  return await supabase
    .from("courses")
    .select("id, title, description")
    .eq("flagged", true);
}

export async function deleteCourse(id: number) {
  return await supabase
    .from("courses")
    .update({ is_validated: false })
    .eq("id", id);
}

export async function deleteCategory(id: number) {
  return await supabase
    .from("category")
    .update({ is_active: false })
    .eq("id", id);
}

export async function createCategory(name: string) {
  return await supabase.from("category").insert([{ title: name }]);
}

export async function getAllUsers() {
  return await supabase.from("profiles").select("*");
}

export async function updateUserRole(id: string, role: eRole) {
  return await supabase
    .from("profiles")
    .update({ role: eRole[role] })
    .eq("id", id)
    .single();
}

export async function getCategoryStat() {
  return await supabase.from("category_stat").select("*");
}
