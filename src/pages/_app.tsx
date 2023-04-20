import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {SessionProvider} from "next-auth/react"

export default function App({Component, pageProps: { session, ...pageProps}}: AppProps) {
    console.log(pageProps.session);
    return (
            <SessionProvider session={pageProps.session}>
                <Component {...pageProps} />
            </SessionProvider>
        );
}
