import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {createBrowserSupabaseClient} from "@supabase/auth-helpers-nextjs";
import {Session, SessionContextProvider} from "@supabase/auth-helpers-react";
import {useState} from "react";

export default function App({Component, pageProps: { ...pageProps },}: AppProps<{ initialSession: Session }>) {
  let supabaseUrl = process.env.SUPABASE_URL;
  let supabaseKey = process.env.SUPABASE_TOKEN;
  const [supabase] = useState(
      () => createBrowserSupabaseClient({supabaseUrl, supabaseKey})
  );
  return (
      <SessionContextProvider
          supabaseClient={supabase}
          initialSession={pageProps.initialSession}>
        <Component {...pageProps} />;
      </SessionContextProvider>
  );
}
