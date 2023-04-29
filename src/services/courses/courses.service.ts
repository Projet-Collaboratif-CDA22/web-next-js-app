import supabase from "@/lib/config/supabaseClient";
import { Database } from "@/types/supabase";

export type Course = Database["public"]["Tables"]["courses"]["Row"];

export async function getAllCourses() {
  return await supabase.from("courses").select();
}

type CoursesResponse = Awaited<ReturnType<typeof getAllCourses>>;
export type CoursesResponseSuccess = CoursesResponse["data"];
export type CoursesReponseError = CoursesResponse["error"];
