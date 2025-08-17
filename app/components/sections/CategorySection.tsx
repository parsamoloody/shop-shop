import { Card } from '@/ui/card'
import SectionCard from '@/ui/SectionCard'
import Link from 'next/link';
import React from 'react'
import { PiCameraThin, PiGameControllerThin, PiHeadphonesThin, PiWatchThin, PiMonitorThin, PiDeviceMobileCameraThin } from "react-icons/pi";


const categories = [
    {
        id: 0,
        name: "Phone",
        icon: <PiDeviceMobileCameraThin className='mx-auto group-hover:text-gray-200' size={52} />
    },
    {
        id: 1,
        name: "Computers",
        icon: <PiMonitorThin className='mx-auto group-hover:text-gray-200' size={52} />
    },
    {
        id: 2,
        name: "SmartWatch",
        icon: <PiWatchThin className='mx-auto group-hover:text-gray-200' size={52} />
    },
    {
        id: 3,
        name: "Camera",
        icon: <PiCameraThin className='mx-auto group-hover:text-gray-200' size={52} />
    },
    {
        id: 4,
        name: "HeadPhones",
        icon: <PiHeadphonesThin className='mx-auto group-hover:text-gray-200' size={52} />
    },
    {
        id: 5,
        name: "Gamings",
        icon: <PiGameControllerThin className='mx-auto group-hover:text-gray-200' size={52} />
    },
]

const CategorySection = () => {
    return (
        <div className='max-w-[1240px] mx-auto px-4 mt-18 sm:mt-20'>
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
                                <Link
                                    href={{
                                        pathname: "subcategory/"+a.name.toLocaleLowerCase(),
                                    }}>
                                    <Card
                                        size={"default"}
                                        card={{
                                            description: a.name
                                        }}
                                        variant='default'

                                    >
                                        {a.icon}
                                    </Card></Link>
                            </div>
                        ))
                    }

                </div>
            </SectionCard>
        </div>
    )
}

export default CategorySection
