'use client';
import React, { useState } from 'react';
import Navbar from '@/ui/Navbar';
import { cn } from '@/lib/utilities/ctx';

interface SmallScreensNavbarProps {
    className?: string;
    linkClass?: string;
}

const SmallScreensNavbar: React.FC<SmallScreensNavbarProps> = ({
    className,
    linkClass,
}) => {

    return (
        <div className={cn("w-[200px]", className)}>
            <h1 className="w-[190px] text-3xl font-bold text-[#00df9a] m-4 uppercase">Exclusive.</h1>
            <Navbar
                linkClass='p-4 border-b border-slate-400'
                className='flex flex-col uppercase p-4' />
        </div>
    );
}

export default SmallScreensNavbar;
