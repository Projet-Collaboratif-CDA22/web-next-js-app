import { createClient } from "@supabase/supabase-js";
//@ts-ignore
const url: string = process.env.SUPABASE_URL;
//@ts-ignore
const token: string = process.env.SUPABASE_TOKEN;
console.log(url, token);
module.exports = createClient(url, token);
