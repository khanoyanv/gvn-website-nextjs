export const LOGO_ALT = 'GVN Pro Logo';

export const SCROLL_HIDE_THRESHOLD = 100;

export const NAV_LINKS = [
  { href: '/#home', label: 'Home', variant: 'link' },
  { href: '/#products', label: 'Products', variant: 'link' },
  { href: '/#about', label: 'About', variant: 'link' },
  { href: '/#contacts', label: 'Contact', variant: 'cta' },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];
