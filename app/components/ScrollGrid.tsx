"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ProductCardProps } from "@/types/type";
import ProductCard from "./ProductCard";


const ScrollGrid = ({ data }: { data: ProductCardProps[] }) => {
  const [width, setWidth] = useState(0);
  const [preview, setPreview] = useState(3);
  const [spaceBetween, setSpaceBetween] = useState(20);
  const products = data
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
    } else if (width >= 641 && width <= 920) {
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
      <Swiper spaceBetween={2}
        slidesPerView={1}
        width={210}

      >
        {products.map((a, i) => (
          <SwiperSlide key={i}>
            <ProductCard
              title={a.title}
              imageUrl={a.imageUrl}
              rating={a.rating}
              price={a.price}
              discountPrice={a.discountPrice}
              isDiscount={a.isDiscount}
              onAddToCart={() => console.log("added to cart")}
              onAddToFavorite={() => console.log("added to favorite")}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ScrollGrid;