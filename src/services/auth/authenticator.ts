import { createClient } from "@supabase/supabase-js";

const client = require("@/lib/supabaseClient");
export async function getCourses() {
  //@ts-ignore
  const URL: string = process.env.SUPABASE_URL;
  //@ts-ignore
  const token: string = process.env.SUPABASE_TOKEN;
  const client = createClient(URL, token);
  const { data, error } = await client.from("courses").select();
  return error ?? data;
}
