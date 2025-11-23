import Creator from '../components/Creator/Creator';
import Hero from '../components/Hero/Hero';
import Products from '../components/Products/Products';
import Contacts from '../components/Contacts/Contacts';
import About from '../components/About';
import Head from 'next/head';

const MainPage = () => {
  return (
    <>
      <Head>
        <title>GVN Pro - Capture Your Vision</title>
        <link rel="icon" href="/tabIcon.png" />
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
