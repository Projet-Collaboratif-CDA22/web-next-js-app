import supabase from "@/lib/config/supabaseClient";

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
