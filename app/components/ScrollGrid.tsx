"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import pimg from '@/images/products/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { StaticImage } from "@/types/type";
import ProductCard from "./ProductCard";

interface ProductCardProps {
  imageUrl: StaticImage
  title: string
  rating: number
  price: number
  discountPrice?: number
  isDiscount?: boolean
  onAddToCart?: () => void
  onAddToFavorite?: () => void
}

export const products: ProductCardProps[] = [
  {
    imageUrl: pimg,
    title: "S-Series Comfort Chair",
    rating: 4.32,
    price: 1160,
    discountPrice: 375,
    isDiscount: true,
  },
  {
    imageUrl: pimg,
    title: "Ergo Pro Office Chair",
    rating: 4.8,
    price: 980,
    isDiscount: false,
  },
  {
    imageUrl: pimg,
    title: "Modern Lounge Sofa",
    rating: 4.55,
    price: 1600,
    discountPrice: 1400,
    isDiscount: true,
  },
  {
    imageUrl: pimg,
    title: "Minimalist Wooden Desk",
    rating: 4.2,
    price: 450,
    isDiscount: false,
  },
  {
    imageUrl: pimg,
    title: "Modern Lounge Sofa",
    rating: 4.55,
    price: 1600,
    discountPrice: 1400,
    isDiscount: true,
  },
  {
    imageUrl: pimg,
    title: "Minimalist Wooden Desk",
    rating: 4.2,
    price: 450,
    isDiscount: false,
  },
]

const ScrollGrid = () => {
    const [width, setWidth] = useState(0);
    const [preview, setPreview] = useState(3);
    const [spaceBetween, setSpaceBetween] = useState(20);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (width < 768) {
            setPreview(2);
        } else if (width >= 768 && width <= 635) {
            setPreview(2.5);
        } else if (width >= 641 && width <= 920){
            setPreview(3.5)
        } else if (width >= 1024) {
            setPreview(4.2)
        }
    }, [width]);

    useEffect(() => {
        if (width < 768) {
            setSpaceBetween(20);
        } else if (width >= 768 && width <= 1024) {
            setSpaceBetween(30);
        } else {
            setSpaceBetween(45);
        }
    }, [width]);

    return (
        <div className="story_container my-4 px-2 lg:px-6">
            <Swiper spaceBetween={spaceBetween} slidesPerView={preview}>
                {products.map((a, i) => (
                    <SwiperSlide key={i}>
                       <ProductCard 
                       title={a.title}
                       imageUrl={pimg}
                       rating={a.rating}
                       price={a.price}
                       discountPrice={a.discountPrice}
                       isDiscount={a.isDiscount}
                       onAddToCart={()=> console.log("added to cart")}
                       onAddToFavorite={() => console.log("added to favorite")}
                       />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ScrollGrid;