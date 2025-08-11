import Image from 'next/image'
import React from 'react'
import post from '@/images/Services (3).svg'
import guarantee from '@/images/Services (2).svg'
import support from '@/images/Services (1).svg'
import { StaticImage } from '@/types/type'

const services: Array<{ title: string, description: string, img: StaticImage }> = [
    { title: "FREE AND FAST DELIVERY", description: "Free delivery for all orders over $140", img: post },
    { title: "24/7 CUSTOMER SERVICE", description: "Friendly 24/7 customer support", img: support },
    { title: "MONEY BACK GUARANTEE", description: "We return money within 30 days", img: guarantee }
]

const Services = () => {
    return (
        <div className='my-13 max-w-[990px] space-y-7 md:space-y-0 mx-auto md:flex md:my-32 imd:justify-center md:items-center'>
            {
                services.map((a, i) => (
                    <div
                        className='flex-col flex justify-center space-y-2 items-center w-full'
                        key={i}>
                        <Image
                            src={a.img}
                            alt={a.title}
                            className='dark:bg-white rounded-full'
                        />
                        <div className='grid grid-rows-2 space-y-1 grid-cols-1 mt-2 md:mt-3 dark:text-foreground'>
                            <h5 className='font-bold text-center'>{a.title}</h5>
                            <p className='text-center text-gray-700 dark:text-gray-400'>{a.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Services
