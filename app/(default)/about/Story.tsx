import React from 'react'
import Image from 'next/image'
import tWomens from '@/images/about-ereeresfad33.jpg'
const Story = () => {
  return (
    <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-1 space-y-4">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-foreground">
                        Our Story
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Launched in 2015, Exclusive is South Asia’s
                        premier online shopping marketplace with an
                        active presence in Bangladesh. Supported by
                        a wide range of tailored marketing, data,
                        and service solutions, Exclusive has 10,500
                        sellers and 300 brands and serves 3 millions
                        customers across the region.
                    </p>
                    <p className='text-lg text-gray-600 dark:text-gray-300 mt-6'>
                        Exclusive has more than 1 Million products to offer, 
                        growing at a very fast. Exclusive offers a diverse 
                        assortment in categories ranging from consumer.
                    </p>
                </div>

                <div className="w-full lg:w-1/2">
                    <Image
                        src={tWomens}
                        alt="About our shop"
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                        priority
                    />
                </div>
            </div>
        </div>
  )
}

export default Story
