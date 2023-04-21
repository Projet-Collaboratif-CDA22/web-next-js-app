const client = require("@/lib/supabaseClient");

export async function register(email: string, password: string) {
  const { data, error } = await client.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        first_name: "John",
        age: 27,
      },
    },
  });
  return error ?? data;
}
export async function login(email: string, password: string) {
  const { data, error } = await client.auth.signInWithPassword({
    email: email,
    password: password,
  });
  return error ?? data;
}
export async function getUserData() {}
