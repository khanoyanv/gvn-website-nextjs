/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const router = useRouter();

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

  const goToHome = () => {
    router.push("/");
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
      <img
        src="/gvnprologocropped.png"
        alt="GVN Pro Logo"
        className="headerLogo"
        onClick={goToHome}
      />
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
