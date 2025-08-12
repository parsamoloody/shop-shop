import React from 'react'
import Image from 'next/image'
import s1 from '@/images/Services (12).jpg'
import s2 from '@/images/Services (13).jpg'
import s3 from '@/images/Services (14).jpg'

const Services = () => {
    const features = [
        {
            image: s1,
            title: "Fast Delivery",
            description: "Free shipping on orders above $100"
        },
        {
            image: s2,
            title: "24/7 Support",
            description: "Customer support available all time"
        },
        {
            image: s3,
            title: "Best Quality",
            description: "Premium quality products guaranteed"
        },
        {
            image: s3,
            title: "Secure Payment",
            description: "Multiple payment methods available"
        }
    ]

    return (
        <div className="container mx-auto px-4 py-8 max-w-[1240px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="transition-all duration-300 hover:bg-secondary p-4"
                    >
                        <div className="flex items-center justify-center mb-4">
                            <Image
                                src={feature.image}
                                alt={feature.title}
                                width={75}
                                className="object-cover rounded-full"
                                priority={index === 0}
                            />
                        </div>
                        <h3 className="text-xl text-center font-bold mt-4 dark:text-foreground">
                            {feature.title}
                        </h3>
                        <p className="text-gray-900 dark:text-gray-200 text-sm mt-2 text-center">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services