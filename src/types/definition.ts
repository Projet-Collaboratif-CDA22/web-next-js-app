import { Database } from "./supabase";

export type Course = Database["public"]["Tables"]["courses"]["Row"];

export type CourseInsert = Database["public"]["Tables"]["courses"]["Insert"];
