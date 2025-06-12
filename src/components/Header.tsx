/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Header: React.FC = () => {
  const router = useRouter();

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  const goToHome = () => {
    router.push('/');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <header className={`${'headerContainer'} ${isVisible ? 'headerVisible' : 'headerHidden'}`}>
      <Image
        src="/gvnpro.png"
        alt="GVN Pro Logo"
        className="headerLogo"
        onClick={goToHome}
        width={150}
        height={100}
      />
      <nav className={'navbarContainer'}>
        <Link href="/#home" className={'navbarLink'}>
          Home
        </Link>
        <Link href="/#products" className={'navbarLink'}>
          Products
        </Link>
        <Link href="/#about" className={'navbarLink'}>
          About
        </Link>
        <Link href="/#contacts" className={`${'headerContacts'} ${'navbarLink'}`}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
