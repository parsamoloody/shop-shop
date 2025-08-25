'use client'
import { cn } from '@/lib/utilities/ctx';
import React from 'react'

interface SectionProps {
    category: string;
    title: string;
    classNames?: string;
    element?: React.ReactNode
    children: React.ReactNode
}

const SectionCard: React.FC<SectionProps> = ({
    category,
    title,
    children,
    element,
    classNames
}) => {
    const elementStyle = element ? "flex justify-between items-center" : "";
    return (
        <section className={cn('w-full', classNames)}>
            <div className='flex space-x-4 items-center w-full mb-6'>
                <div className='bg-secondary h-11 rounded-[4px] w-5'></div>
                <p className='font-bold text-secondary text-lg'>{category}</p>
            </div>
            <div className={cn("mb-4", elementStyle)}>
                <h2 className='text-3xl dark:text-foreground'>{title}</h2>
                <div>{element}</div>
            </div>
            <div className='w-full mt-10'>{children}</div>
        </section>
    )
}

export default SectionCard
