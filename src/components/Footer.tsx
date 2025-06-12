import { gvnproMail, phoneNumber } from '@/constants/contactInfo';
import Image from 'next/image';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footerTopRow">
        <Image
          src="/gvnpro.png"
          className="footerLogo"
          alt="Footer Logo"
          width={100}
          height={100}
        />

        <div className="footerContactInfoContainer">
          <p>Mail Address</p>
          <a href={'mailto:' + gvnproMail}>{gvnproMail}</a>
        </div>
        <div className="footerContactInfoContainer">
          <p>Phone Number</p>
          <span>{phoneNumber}</span>
        </div>
      </div>

      <p>&copy; 2025 GVN Pro. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
