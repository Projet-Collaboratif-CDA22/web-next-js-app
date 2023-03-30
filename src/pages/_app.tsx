import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/style.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
