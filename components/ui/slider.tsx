'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import slide1 from '@/images/frame-1.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { JSX, useCallback } from 'react';
import Image from 'next/image';

function StyledSwiper(): JSX.Element {
    const handleSlideChange = useCallback(() => {
        console.log('slide change');
    }, []);

    const handleSwiperInit = useCallback((swiper: any) => {
        console.log(swiper);
    }, []);

    return (
        <div className="w-full max-w-6xl mx-auto px-4 ">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 }
                }}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={handleSlideChange}
                onSwiper={handleSwiperInit}
                className=""
            >
                {['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5'].map((text, index) => (
                    <SwiperSlide key={index}>
                        <div className=" flex items-center justify-center bg-blue-500 text-white text-xl font-semibold">
                            {/* {text} */}
                            <Image
                                alt='img'
                                src={slide1}
                                className='object-cover object-center'
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default StyledSwiper;
