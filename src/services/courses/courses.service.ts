import supabase from "@/lib/config/supabaseClient";
import { CourseInsert } from "@/types/definition";

export async function getAllCourses() {
  return await supabase.from("courses").select();
}

export async function getFilteredCourses() {
  return await supabase.from("courses").select();
}

export async function getCourseById(id: number) {
  return await supabase.from("courses").select().eq("id", id).single();
}

export async function addCourse(course: CourseInsert) {
  return await supabase.from("courses").insert(course).select().single();
}
export async function getCommentsByCourseId(id: number) {
  return supabase.from("comment").select("*, profiles:username").select();
}

type CoursesResponse = Awaited<ReturnType<typeof getAllCourses>>;
export type CoursesResponseSuccess = CoursesResponse["data"];
export type CoursesReponseError = CoursesResponse["error"];
