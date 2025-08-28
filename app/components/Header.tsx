'use client';

import SmallScreensNavbar from '@/ui/SmallScreensNavbar';
import Navbar from '@/ui/Navbar';
import { useEffect, useRef, useState, useCallback } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { PiHeartStraightLight, PiShoppingCartLight } from 'react-icons/pi';
import { cn } from '@/lib/utilities/ctx';
import { CiSearch } from 'react-icons/ci';
import { Input } from '@/ui/input';
import { Badge } from '@/ui/badge';
import { ShortProfile } from '@/ui/shortProfile';
import Link from 'next/link';
import { useWishList } from '../hooks/user/userOrder';


const useUserAndCart = () => {
  const [cartCount, setCartCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { data: wishList } = useWishList();
  useEffect(() => {
    if (!wishList) {
      setIsLoading(true);
    }
    if (wishList) {
      setCartCount(wishList.data?.cart.length || 0);
      setIsLoading(false);
    }
  }, [wishList]);

  return { cartCount, isLoading };
};

const Header = () => {
  const [nav, setNav] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const {cartCount, isLoading } = useUserAndCart();

  // Toggle navigation
  const toggleNav = useCallback(() => {
    setNav((prev) => !prev);
  }, []);

  // Handle click outside for mobile nav
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (nav && navRef.current && !navRef.current.contains(event.target as Node)) {
        setNav(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [nav]);

  return (
    <div className="grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 items-center space-y-3 lg:space-y-0 lg:h-28 h-30 md:h-36 max-w-[1240px] mx-auto px-4 dark:bg-background text-white py-4">
      <div className="flex justify-between items-center w-full">
        <Link href="/" className="w-full text-3xl font-bold text-foreground dark:text-foreground uppercase">
          Exclusive.
        </Link>

        <Navbar className="hidden md:flex md:items-center space-x-7 mr-4 text-foreground" />

        <div className="cursor-pointer flex space-x-4">
          {/* Cart (mobile) */}
          <Link
          href={cartCount ? "/checkout/cart" : "/auth/login"}
           className="relative lg:hidden">
            <Badge variant="onValue">{isLoading ? 0 : cartCount}</Badge>
            <PiShoppingCartLight className="text-[#171717] dark:text-[#ededed]" size={24} />
          </Link>
          {/* Burger menu */}
          {nav ? (
            <AiOutlineClose className="text-[#171717] dark:text-[#ededed] md:hidden" size={24} onClick={toggleNav} />
          ) : (
            <AiOutlineMenu className="text-[#171717] dark:text-[#ededed] md:hidden" size={24} onClick={toggleNav} />
          )}
        </div>

        <SmallScreensNavbar
          ref={navRef}
          className={cn(
            'top-0 h-full w-[215px] border-r border-r-gray-900 dark:bg-[#000300] bg-gray-100 text-black fixed ease-in-out duration-500 z-50 md:hidden',
            nav ? 'left-0' : 'left-[-100%]'
          )}
          linkClass="text-gray-800 px-4 py-2 hover:bg-gray-800 border-b dark:border-b dark:border-slate-500 dark:text-white"
        />
      </div>
      {/* Second part */}
      <div className="flex space-x-8 items-center w-full justify-end">
        <div className="relative w-full lg:w-72">
          <Input
            type="search"
            className="pl-1 w-full focus:outline-none focus:border-none pr-8 text-foreground dark:text-foreground rounded-md border-input bg-third dark:bg-gray-800 dark:border-2 dark:border-gray-700"
          />
          <CiSearch className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        </div>
        {/* Favorites */}
        <div className="relative">
          <Badge variant="onValue">{0}</Badge>
          <PiHeartStraightLight className="text-[#171717] dark:text-[#ededed]" size={24} />
        </div>
        {/* Cart (desktop) */}
        <Link
        href={cartCount ? "/checkout/cart" : "/auth/login"}
         className="relative hidden lg:block">
          <Badge variant="onValue">{isLoading ? 0 : cartCount}</Badge>
          <PiShoppingCartLight className="text-[#171717] dark:text-[#ededed]" size={24} />
        </Link>
        {/* Profile */}
        <div className="mt-4 lg:block hidden md:mt-0 pt-3 w-full md:w-12 md:pt-0">
          <ShortProfile
            size={32}
            className="w-full h-full flex items-center justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;