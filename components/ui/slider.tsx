'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import slide1 from '@/images/frame-1.jpg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { JSX, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function StyledSwiper(): JSX.Element {
    const handleSlideChange = useCallback(() => {
        console.log('slide change');
    }, []);

    const handleSwiperInit = useCallback((swiper: any) => {
    }, []);

    const slides = [
        { id: 1, image: slide1, alt: 'Image 1' },
        { id: 2, image: slide1, alt: 'Image 2' },
        { id: 3, image: slide1, alt: 'Image 3' },
    ];

    return (
        <div className="">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                // navigation
                
                
                pagination={{
                    clickable: true,
                    dynamicBullets: true // Better for mobile
                }}
                onSlideChange={handleSlideChange}
                onSwiper={handleSwiperInit}
                className="h-full w-full"
                // Responsive settings
                breakpoints={{
                    // When window width is >= 320px
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    // When window width is >= 640px
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    // When window width is >= 1024px
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 30
                    }
                }}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative h-64 sm:h-80 md:h-96  w-full">
                            <Image
                                alt={slide.alt}
                                src={slide.image}
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 640px) 100vw, (max-width: 640px) 100vw, 100vw"
                                priority={slide.id === 1}
                            />
                        </div>
                        <div
                            className='absolute text-white w-56 lg:w-1/2 p-3 md:px-4 sm:px-3 lg:px-5 sm:w-60 md:w-72 left-2.5 top-0 sm:space-y-12 space-y-8 h-full flex-col  items-center'>
                            <h2 className='mt-20 tracking-wide text-3xl sm:text-4xl md:text-5xl md:leading-14 lg:leading-15 leading-9.5 font-semibold'>{"Up to 10% off Voucher"}</h2>
                            <Link
                                className='underline '
                                href={"/"}
                            >Shop now</Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default StyledSwiper;