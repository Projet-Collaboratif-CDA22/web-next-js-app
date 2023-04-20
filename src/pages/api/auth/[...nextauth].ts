import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: "",
      type: "credentials",
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { username, password } = credentials as any;
        // TODO: Changer le localhost par l'adresse de l'API
        const res = await fetch(`http://localhost:8000/auth/accounts`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });

        const user = await res.json();

        if (user && res.ok) {
          return user;
        } else {
          return null;
        }
      },
    }),
    // ...add more providers here
  ],
};
// @ts-ignore
export default NextAuth(authOptions);
