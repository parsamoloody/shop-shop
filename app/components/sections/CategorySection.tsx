import { Card } from '@/ui/card'
import SectionCard from '@/ui/SectionCard'
import React from 'react'
import { CiMobile1 } from "react-icons/ci";

const categories = [
    {
        id: 0,
        name: "Phone",
    },
    {
        id: 1,
        name: "Computers",
    },
    {
        id: 2,
        name: "SmartWatch",
    },
    {
        id: 3,
        name: "Camera",
    },
    {
        id: 4,
        name: "HeadPhons",
    },
    {
        id: 5,
        name: "Gamings",
    },
]

const CategorySection = () => {
    return (
        <div className='max-w-[1240px] mx-auto px-4'>
            <SectionCard
                classNames=''
                title='Browse By Category'
                category='Categories'>
                <div className='grid grid-cols-2 mt-4 sm:grid-cols-3 justify-between md:grid-cols-4 lg:grid-cols-6 gap-3 mx-auto'>
                    {
                        categories.map((a, i) => (
                            <div
                                key={i}
                                className='relative flex justify-center dm:justify-between'>
                                <Card
                                    size={"default"}
                                    card={{
                                        description: a.name
                                    }}
                                    variant='default'

                                >
                                    <CiMobile1
                                        className='mx-auto group-hover:text-gray-200'
                                        size={52} />
                                </Card>
                            </div>
                        ))
                    }

                </div>
            </SectionCard>
        </div>
    )
}

export default CategorySection
