'use client';

import SmallScreensNavbar from '@/ui/SmallScreensNavbar';
import Navbar from '@/ui/Navbar';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { PiHeartStraightLight, PiShoppingCartLight } from "react-icons/pi";
import { cn } from '@/lib/utilities/ctx';
import { CiSearch } from "react-icons/ci";
import { Input } from '@/ui/input';
import { Badge } from '@/ui/badge';

const Header = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(prev => !prev);

  return (
    <div className="flex flex-col justify-between items-center h-30 max-w-[1240px] mx-auto px-4 dark:bg-background text-white border-b-[1px] border-slate-500 py-4">
      <div className='flex justify-between items-center w-full'>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] uppercase">Exclusive.</h1>

        <Navbar className="hidden md:flex space-x-7" />

        <div onClick={toggleNav} className="md:hidden cursor-pointer flex space-x-4">
          {/* Cart */}
          <div className="relative">
            <Badge variant={'onValue'}>{0}</Badge>
            <PiShoppingCartLight
              className="text-[#171717] dark:text-[#ededed]"
              size={24} />
          </div>
          {/* Burger menu */}
          {nav
            ? <AiOutlineClose className="text-[#171717] dark:text-[#ededed] dark" size={24} />
            : <AiOutlineMenu className="text-[#171717] dark:text-[#ededed]" size={24} />}
        </div>

        <SmallScreensNavbar
          className={cn(
            'top-0 h-full w-[215px] border-r border-r-gray-900 bg-[#000300] fixed ease-in-out duration-500 z-50 md:hidden',
            nav ? 'left-0' : 'left-[-100%]'
          )}
          linkClass="text-white px-4 py-2 hover:bg-gray-800"
        />
      </div>
      {/* second part */}
      <div className='flex space-x-6 items-center w-full'>
        <div className='relative w-full'>
          <Input type="search" className='pl-8 w-full focus:border-none focus:outline-none' />
          <CiSearch className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        </div>
        <div className='relative '>
          <Badge variant={'onValue'}>{0}</Badge>
          <PiHeartStraightLight className="text-[#171717] dark:text-[#ededed]" size={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
