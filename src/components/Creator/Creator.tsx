import Image from 'next/image';

const Creator = () => {
  return (
    <section
      id="creator"
      className="flex flex-col md:flex-row items-center justify-between py-16 px-8 max-w-[1200px] mx-auto text-center md:text-left"
    >
      <div className="flex-1 pr-0 md:pr-8 mb-8 md:mb-0">
        <h4 className="text-base font-bold text-(--color-primary) uppercase mb-4">
          Empowering Creators
        </h4>
        <h2 className="mb-6 text-(--color-primary) leading-[1.2] text-2xl font-bold">
          Your partner in visual excellence
        </h2>
        <p className="text-base leading-relaxed mb-8 text-[#555] w-full md:w-[70%]">
          GVN Pro stands at the forefront of technology in Yerevan, providing
          top-notch cameras, tripods, lights, and accessories tailored for
          professionals in photography, videography, and content creation. Our
          commitment to quality ensures that every creator has the tools they
          need to capture stunning visuals and tell compelling stories. Join us
          in elevating your creative projects with our reliable and innovative
          products.
        </p>
        <a
          href="#contacts"
          className="inline-block text-base text-(--color-primary) no-underline font-bold border-b-2 border-transparent transition-all hover:border-b-(--color-primary)"
        >
          Get in touch
        </a>
      </div>
      <div className="flex-1 text-center w-full">
        <Image
          src="/tools.jpg"
          alt="Photography gear"
          className="max-w-full h-auto rounded-lg"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Creator;
