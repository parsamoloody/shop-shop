import React, { forwardRef } from 'react';
import Link from 'next/link';
import { PiHeartStraightLight } from 'react-icons/pi';
import { ShortProfile } from './shortProfile';

export interface NavProps {
  className?: string;
  linkClass?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const Navbar = forwardRef<HTMLElement, NavProps>(
  ({ className, linkClass, onClick }, ref) => (
    <NavComponent
      ref={ref}
      className={className}
      linkClass={linkClass}
      onClick={onClick}
    />
  )
);

export const NavComponent = forwardRef<HTMLElement, NavProps>(
  ({ className, linkClass, onClick }, ref) => (
    <>
    <nav ref={ref} className={className}>
      {["Home", "Content", "About", "SignUp"].map((section, i) => (
        <Link
          key={i}
          href={`#${section.toLowerCase()}`}
          className={linkClass}
          onClick={onClick}
        >
          {section}
        </Link>
      ))}
      <div className='mt-4'>
      <ShortProfile size={32} className='w-full h-full' />
    </div>
    </nav>
    
    
    </>
  )
);

export default Navbar;
