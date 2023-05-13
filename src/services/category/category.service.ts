import supabase from "@/lib/config/supabaseClient";

export async function getAllCategories() {
  return await supabase.from("category").select();
}

export async function getCategoryById(id: number) {
  return await supabase.from("category").select().eq("id", id).single();
}
