'use client'
import Link from 'next/link';

const LinkWidget = ({ href, children, className }) => {
  return (
    <Link href={href} className={className}>
        {children}
    </Link>
  );
};
export default LinkWidget;
