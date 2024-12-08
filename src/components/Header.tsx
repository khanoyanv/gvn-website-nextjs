import React, { useState, useEffect } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`${"headerContainer"} ${
        isVisible ? "headerVisible" : "headerHidden"
      }`}
    >
      <h1 className={"headerLogo"}>GVN Pro</h1>
      <nav className={"navbarContainer"}>
        <Link href="/#home" className={"navbarLink"}>
          Home
        </Link>
        <Link href="/#about" className={"navbarLink"}>
          About
        </Link>
        <Link href="/#products" className={"navbarLink"}>
          Products
        </Link>
        <Link
          href="/#contacts"
          className={`${"headerContacts"} ${"navbarLink"}`}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
