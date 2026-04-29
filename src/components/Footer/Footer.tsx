import Image from 'next/image';

import { gvnproMail, phoneNumber } from '@/constants/contactInfo';
import {
  COPYRIGHT,
  LOGO_ALT,
  MAIL_LABEL,
  PHONE_LABEL,
} from './consts/content';

const Footer = () => {
  const telHref = `tel:${phoneNumber.replace(/[^+\d]/g, '')}`;

  return (
    <footer className="flex flex-col items-center justify-center bg-(--color-muted) text-(--color-light) text-center pt-4 pb-4">
      <div className="flex justify-center items-center gap-4 md:gap-20 flex-col md:flex-row mb-4">
        <Image
          src="/gvnpro.png"
          className="w-1/2 md:w-1/5 object-contain"
          alt={LOGO_ALT}
          width={100}
          height={100}
        />

        <div className="text-center">
          <p className="m-0 p-0 mb-1">{MAIL_LABEL}</p>
          <a
            href={`mailto:${gvnproMail}`}
            className="text-(--color-primary) no-underline"
          >
            {gvnproMail}
          </a>
        </div>
        <div className="text-center">
          <p className="m-0 p-0 mb-1">{PHONE_LABEL}</p>
          <a href={telHref} className="text-(--color-primary) no-underline">
            {phoneNumber}
          </a>
        </div>
      </div>

      <p className="m-0">{COPYRIGHT}</p>
    </footer>
  );
};

export default Footer;
