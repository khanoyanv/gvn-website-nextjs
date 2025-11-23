import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center py-16 px-8 max-w-[1200px] mx-auto"
    >
      <div className="flex flex-col items-center">
        <h2 className="mb-6 text-(--color-primary) leading-[1.2] text-2xl font-bold">
          About Us
        </h2>
        <p className="text-base leading-relaxed mb-8 text-[#555] w-full md:w-[70%] text-center">
          GVN Pro company was founded in 2019 and is actively operating in
          Yerevan, it specializes in professional audio, photo and video, media
          equipment supply and sales. GVN Pro is the official representative of{' '}
          <a
            href="http://www.univiso.tv/en/index.html"
            target="_blank"
            className="no-underline text-(--color-primary)"
          >
            Univiso Technologies & Develop Ltd.
          </a>{' '}
          The company cooperates with the leading companies, manufacturers,
          offers and supports such brands as Sony, Panasonic, Samsung, Canon,
          Manfrotto, Libec, DJI, Blackmagic, Sennheiser, Aja, Canare, Neutrik
          etc. The GVN Pro is the supplier for the leading broadcast and media
          companies in Armenia.
        </p>
      </div>
    </section>
  );
};

export default About;
