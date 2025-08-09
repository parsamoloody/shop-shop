import React from 'react'

interface SectionProps {
    category: string;
    title: string;
    children: React.ReactNode
}

const SectionCard: React.FC<SectionProps> = ({
    category,
    title,
    children
}) => {
    return (
        <section className='w-full'>
            <div className='flex space-x-4 items-center w-full'>
                <div className='bg-secondary h-11 border-1 border-black rounded-[6px] w-5'></div>
                <p className='font-bold text-secondary text-lg'>{category}</p>
            </div>
            <h2 className='text-3xl mt-10 dark:text-foreground'>{title}</h2>
            <div className='w-full'>{children}</div>
        </section>
    )
}

export default SectionCard
