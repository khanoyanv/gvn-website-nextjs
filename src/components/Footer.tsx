import { gvnproMail, phoneNumber } from '@/constants/contactInfo';
import Image from 'next/image';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-(--color-muted) text-(--color-light) text-center pt-4 pb-4">
      <div className="flex justify-center items-center gap-4 md:gap-20 flex-col md:flex-row mb-4">
        <Image
          src="/gvnpro.png"
          className="w-1/2 md:w-1/5 object-contain"
          alt="Footer Logo"
          width={100}
          height={100}
        />

        <div className="text-center">
          <p className="m-0 p-0 mb-1">Mail Address</p>
          <a href={'mailto:' + gvnproMail} className="text-(--color-primary) no-underline">{gvnproMail}</a>
        </div>
        <div className="text-center">
          <p className="m-0 p-0 mb-1">Phone Number</p>
          <span className="text-(--color-primary)">{phoneNumber}</span>
        </div>
      </div>

      <p className="m-0">&copy; 2025 GVN Pro. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
