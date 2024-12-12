import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import Header from "../components/Header";
import Footer from "../components/Footer";

import "/styles/globals.css";
import { AppProps } from "next/app";

const cache = createCache({ key: "css" });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CacheProvider value={cache}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </CacheProvider>
    </>
  );
}

export default MyApp;
