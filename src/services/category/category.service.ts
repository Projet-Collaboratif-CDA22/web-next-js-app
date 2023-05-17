import supabase from "@/lib/config/supabaseClient";

export async function getAllCategories() {
  return await supabase.from("category").select("*");
}

export async function getCategoryById(id: number) {
  return await supabase.from("category").select().eq("id", id).single();
}

export async function addCategory(category: any) {
  return await supabase.from("category").insert(category).select().single();
}

type CategoryResponse = Awaited<ReturnType<typeof getAllCategories>>;
export type CategoryResponseSuccess = CategoryResponse["data"];
export type CategoryResponseError = CategoryResponse["error"];
