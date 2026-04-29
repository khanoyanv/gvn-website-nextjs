import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {
  LOGO_ALT,
  NAV_LINKS,
  SCROLL_HIDE_THRESHOLD,
} from './consts/content';

const LINK_CLASS =
  'flex items-center box-border no-underline border-t-[3px] border-l-[3px] border-r-[3px] border-b-[3px] border-transparent text-(--color-primary) p-[.5rem] text-[1.2rem] transition-[color,border-color] duration-300 ease-in-out hover:text-(--color-primary) hover:border-b-(--color-primary)';

const CTA_CLASS =
  'flex items-center box-border no-underline p-[.5rem] border-2 border-(--color-primary) rounded-[0.2rem] text-(--color-primary) text-[1.2rem] transition-[background-color,color] duration-300 ease-in-out hover:bg-(--color-primary) hover:text-(--color-light)';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (
      currentScrollY > lastScrollY &&
      currentScrollY > SCROLL_HIDE_THRESHOLD
    ) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={`fixed top-0 left-0 w-screen z-1000 transition-transform duration-300 ease-in-out bg-white flex items-center justify-between px-[1.8rem] box-border shadow-[0_2px_8px_rgba(0,0,0,0.1)] ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <Link href="/" aria-label="Go to home">
        <Image
          src="/gvnpro.png"
          alt={LOGO_ALT}
          className="w-[150px] object-contain cursor-pointer"
          width={150}
          height={100}
        />
      </Link>
      <nav className="box-border flex gap-4 list-none justify-around p-4 md:flex">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={link.variant === 'cta' ? CTA_CLASS : LINK_CLASS}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
