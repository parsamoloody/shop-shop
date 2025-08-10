import React from 'react'
import xBox from '@/images/Frame 684.jpg'
import womans from '@/images/Frame 685.png'
import speaker from '@/images/Frame 686.jpg'
import perfume from '@/images/Frame 687.jpg'
import Image from 'next/image'
import Link from 'next/link'
import SectionCard from '@/ui/SectionCard'

const GridBanner = () => {
    return (
        <div className=' max-w-[1240px] mx-auto mt-22 mg:mt-26'>
            <SectionCard
            title='New Arrival'
            category='Featured'
            >
                <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* first */}
            <div className="relative w-full h-[400px]">
                <Image
                    src={xBox}
                    alt="PlayStation 5"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, 100vw"
                />

                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 z-10 
                    text-white bg-gradient-to-t from-black/60 to-transparent">
                    <h4 className="text-lg font-bold">PlayStation 5</h4>
                    <p className="text-sm mt-2">
                        Black and White version of the PS5 coming out on sale.
                    </p>
                    <Link href="/" className="underline mt-3">
                        Shop Now
                    </Link>
                </div>
            </div>
            {/* second */}
            {/* block */}
             <div className='grid grid-cols-1 space-y-2 md:space-y-4'>
                <div className="relative w-full ">
                    <Image
                        src={womans}
                        alt="PlayStation 5"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 640px) 100vw, 100vw"
                    />

                    {/* Text Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-5 z-10 
                    text-white bg-gradient-to-t from-black/60 to-transparent">
                        <h4 className="text-lg font-bold">Women’s Collections</h4>
                        <p className="text-sm mt-2">
                           Featured woman collections that give you another vibe.
                        </p>
                        <Link href="/" className="underline mt-3">
                            Shop Now
                        </Link>
                    </div>
                </div>
                {/* flex */}
            <div className='flex space-x-2 md:space-x-4'>
                <div className="relative w-full">
                    <Image
                        src={speaker}
                        alt="PlayStation 5"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 640px) 100vw, 100vw"
                    />

                    {/* Text Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-5 z-10 
                    text-white bg-gradient-to-t from-black/60 to-transparent">
                        <h4 className="text-lg font-bold">Speakers</h4>
                        <p className="text-sm mt-2">
                            Amazon wireless speakers.
                        </p>
                        <Link href="/" className="underline mt-3">
                            Shop Now
                        </Link>
                    </div>
                </div>
                <div className="relative w-full">
                    <Image
                        src={perfume}
                        alt="PlayStation 5"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 640px) 100vw, 100vw"
                    />

                    {/* Text Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-5 z-10 
                    text-white bg-gradient-to-t from-black/60 to-transparent">
                        <h4 className="text-lg font-bold">Perfume</h4>
                        <p className="text-sm mt-2">
                            GUCCI INTENSE OUD EDP.
                        </p>
                        <Link href="/" className="underline mt-3">
                            Shop Now
                        </Link>
                    </div>
                </div>
            </div>
             </div>
        </section>
            </SectionCard>
        </div>

    )
}

export default GridBanner
