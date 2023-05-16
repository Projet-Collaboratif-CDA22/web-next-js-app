import supabase from "@/lib/config/supabaseClient";

export function getUserFavorites(userId: number) {
  return supabase.from("favorite_course").select("course").eq("id", userId);
}
export function addToUserFavorites(userId: number, courseId: number) {
  return supabase.from("favorite_course").insert([
    {
      course: courseId,
      created_at: new Date().toString(),
      user: userId.toString(),
    },
  ]);
}

export async function getJoinedCoursesByUserId(userId: number) {
  return supabase.from("enroll_course").select().eq("user", userId);
}

export async function getRolesByUserId(userId: number) {
  return supabase.from("profiles").select("role").eq("id", userId);
}
