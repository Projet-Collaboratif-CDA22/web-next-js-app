import { Database } from "./supabase";

//Course
export type Course = Database["public"]["Tables"]["courses"]["Row"];

export type CourseInsert = Database["public"]["Tables"]["courses"]["Insert"];

export type CourseLocation = {
  place_name: string;
  type: string;
  coordinates: Coordinates;
};

export type Coordinates = {
  lon: number;
  lat: number;
};

//Category
export type Category = Database["public"]["Tables"]["category"]["Row"];
