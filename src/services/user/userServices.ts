import supabase from "@/lib/config/supabaseClient";
import { eRole } from "@/types/definition";

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

export async function getJoinedCoursesByUserId(userId: string) {
  return supabase.from("enroll_course").select().eq("user", userId);
}

export async function getRolesByUserId(userId: string) {
  const { data, error } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", userId)
    .single();

  if (error) {
    return eRole.none;
  } else {
    if (data) {
      switch (data.role) {
        case "admin":
          return eRole.admin;
        case "moderator":
          return eRole.moderator;
        case "member":
          return eRole.member;
        default:
          return eRole.none;
      }
    }
  }
}

export async function getUserById(userId: string) {
  return await supabase.from("profiles").select("*").eq("id", userId).single();
}
export async function getUserNameById(id: string) {
  return await supabase
    .from("profiles")
    .select("username")
    .eq("id", id)
    .single();
}
export async function participateToCourse(userId: string, courseId: number) {
  return supabase.from("enroll_course").insert({
    course_enrolled: courseId,
    user_enrolled: userId,
  });
}
export async function addFavorite(favorite: { course: number; user: string }) {
  return supabase.from("favorite_course").insert(favorite);
}
