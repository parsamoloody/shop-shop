import React, { forwardRef } from 'react';
import Link from 'next/link';
import { PiHeartStraightLight } from 'react-icons/pi';
import { ShortProfile } from './shortProfile';
import { cn } from '@/lib/utilities/ctx';

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
      <nav ref={ref} className={cn('', className)}>
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
        <div className='mt-4 lg:hidden md:mt-0 pt-3 w-full md:w-12 md:pt-0'>
          <ShortProfile size={32} className='w-full h-full flex items-center justify-center ' />
        </div>
      </nav>


    </>
  )
);

export default Navbar;
