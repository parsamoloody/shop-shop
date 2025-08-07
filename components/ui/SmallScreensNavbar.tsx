'use client';
import React, { forwardRef } from 'react';
import Navbar from '@/ui/Navbar';
import { cn } from '@/lib/utilities/ctx';

interface SmallScreensNavbarProps {
  className?: string;
  linkClass?: string;
}

const SmallScreensNavbar = forwardRef<HTMLDivElement, SmallScreensNavbarProps>(
  ({ className, linkClass }, ref) => {
    return (
        <div
        ref={ref}
        className={cn('w-[215px]', className)}
      >
        <h1 className="w-[190px] text-3xl font-bold text-[#00df9a] m-4 uppercase">Exclusive.</h1>
        <Navbar
          linkClass={linkClass ?? 'p-4 border-b border-slate-400'}
          className="flex flex-col uppercase p-4"
        />
      </div>
    );
  }
);

// Optional: Give a display name for better debugging in React DevTools
SmallScreensNavbar.displayName = 'SmallScreensNavbar';

export default SmallScreensNavbar;
