import Image from 'next/image';

import {
  BODY,
  CTA_HREF,
  CTA_LABEL,
  HEADING,
  IMAGE_ALT,
  IMAGE_SRC,
  TAGLINE,
} from './consts/content';

const Creator = () => {
  return (
    <section
      id="creator"
      className="flex flex-col md:flex-row items-center justify-between py-16 px-8 max-w-[1200px] mx-auto text-center md:text-left"
    >
      <div className="flex-1 pr-0 md:pr-8 mb-8 md:mb-0">
        <h4 className="text-base font-bold text-(--color-primary) uppercase mb-4">
          {TAGLINE}
        </h4>
        <h2 className="mb-6 text-(--color-primary) leading-[1.2] text-2xl font-bold">
          {HEADING}
        </h2>
        <p className="text-base leading-relaxed mb-8 text-[#555] w-full md:w-[70%]">
          {BODY}
        </p>
        <a
          href={CTA_HREF}
          className="inline-block text-base text-(--color-primary) no-underline font-bold border-b-2 border-transparent transition-all hover:border-b-(--color-primary)"
        >
          {CTA_LABEL}
        </a>
      </div>
      <div className="flex-1 text-center w-full">
        <Image
          src={IMAGE_SRC}
          alt={IMAGE_ALT}
          className="max-w-full h-auto rounded-lg"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Creator;
