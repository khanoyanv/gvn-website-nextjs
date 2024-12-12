import { gvnproMail, phoneNumber } from "@/constants/contactInfo";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footerTopRow">
        <img src="/gvnprologocropped.png" className="footerLogo" />

        <div className="footerContactInfoContainer">
          <p>Mail Address</p>
          <a href={"mailto:" + gvnproMail}>{gvnproMail}</a>
        </div>
        <div className="footerContactInfoContainer">
          <p>Phone Number</p>
          <span>{phoneNumber}</span>
        </div>
        <div className="footerContactInfoContainer"></div>
      </div>

      <p>&copy; 2024 GVN Pro. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
