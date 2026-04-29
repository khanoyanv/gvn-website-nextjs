import {
  HEADING,
  INTRO,
  OUTRO,
  PARTNER_NAME,
  PARTNER_URL,
} from './consts/content';

const About = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center py-16 px-8 max-w-[1200px] mx-auto"
    >
      <div className="flex flex-col items-center">
        <h2 className="mb-6 text-(--color-primary) leading-[1.2] text-2xl font-bold">
          {HEADING}
        </h2>
        <p className="text-base leading-relaxed mb-8 text-[#555] w-full md:w-[70%] text-center">
          {INTRO}{' '}
          <a
            href={PARTNER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-(--color-primary)"
          >
            {PARTNER_NAME}
          </a>{' '}
          {OUTRO}
        </p>
      </div>
    </section>
  );
};

export default About;
