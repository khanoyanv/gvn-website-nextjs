import { AppProps } from 'next/app';
import Head from 'next/head';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import '../../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>GVN Pro - Capture Your Vision</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="GVN Pro - Capture Your Vision" />
        <meta
          property="og:description"
          content="Welcome to GVN Pro, the best place in Armenia to find your desired professional technology."
        />
        <meta
          property="og:image"
          content="https://gvnpro.com/gvnpro-thumbnail.png"
        />
        <meta property="og:url" content="https://gvnpro.com" />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:card"
          content="https://gvnpro.com/gvnpro-thumbnail.png"
        />
        <meta name="twitter:title" content="GVN Pro - Capture Your Vision" />
        <meta
          name="twitter:description"
          content="Welcome to GVN Pro, the best place in Armenia to find your desired professional technology."
        />
        <meta
          name="twitter:image"
          content="https://gvnpro.com/gvnpro-thumbnail.png"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
