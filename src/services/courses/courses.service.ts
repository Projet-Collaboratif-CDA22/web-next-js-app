import supabase from "@/lib/config/supabaseClient";
import { Database } from "@/types/supabase";

export async function getAllCourses() {
  return await supabase.from("courses").select();
}

export async function getFilteredCourses() {
  return await supabase.from("courses").select();
}

export async function getCourseById(id: number) {
  return await supabase.from("courses").select().eq("id", id).single();
}

type CoursesResponse = Awaited<ReturnType<typeof getAllCourses>>;
export type CoursesResponseSuccess = CoursesResponse["data"];
export type CoursesReponseError = CoursesResponse["error"];
