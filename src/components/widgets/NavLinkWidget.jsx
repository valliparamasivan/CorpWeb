'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinkWidget = ({ href, children }) => {
  const pathname = usePathname();
  const isActive =
  (href === '/' && (pathname === '/' || pathname === '/home')) ||
  (href === '/home' && (pathname === '/' || pathname === '/home')) ||
  pathname === href;

  return (
    <Link href={href} className={isActive ? 'active' : ''}>
     {children}
    </Link>
  );
};

export default NavLinkWidget;
