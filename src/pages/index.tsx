import { Creator } from "../components/Creator";
import { Hero } from "../components/Hero";
import { Products } from "../components/Products";
import { Contacts } from "../components/Contacts";
import { About } from "../components/About";
import Head from "next/head";

const MainPage = () => {
  return (
    <>
      <Head>
        <title>GVN Pro - Capture Your Vision</title>
        <link rel="icon" href="/gvnpro.png" />
      </Head>
      <Hero />
      <Creator />
      <Products />
      <Contacts />
      <About />
    </>
  );
};

export default MainPage;
