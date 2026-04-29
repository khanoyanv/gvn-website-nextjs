import { useRouter } from 'next/router';

import {
  BACKGROUND_IMAGE_URL,
  CTA_LABEL,
  CTA_TARGET,
  HEADING,
  TAGLINE,
} from './consts/content';

const Hero = () => {
  const router = useRouter();

  const handleViewProducts = () => {
    router.push(CTA_TARGET);
  };

  return (
    <section
      id="home"
      className="hidden md:flex items-center justify-center relative overflow-hidden h-screen w-full"
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed z-1"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url("${BACKGROUND_IMAGE_URL}")`,
        }}
      />
      <div className="relative flex flex-col items-start text-(--color-light) -ml-[40%] max-w-[600px] p-4 z-2">
        <h1 className="m-0 text-5xl">{HEADING}</h1>
        <p className="text-lg">{TAGLINE}</p>
        <button
          className="bg-(--color-primary) text-white px-6 py-3 text-base border-none rounded-md cursor-pointer transition-colors duration-300 hover:text-(--color-light)"
          onClick={handleViewProducts}
        >
          {CTA_LABEL}
        </button>
      </div>
    </section>
  );
};

export default Hero;
