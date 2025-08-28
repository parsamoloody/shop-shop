"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductCard from "./ProductCard";
import { ProductCardProps } from "@/types/type";
import handleAddToCart from "../hooks/handleAddToCart";
import useHandleAddToCart from "../hooks/handleAddToCart";

const ScrollGrid = ({ productData }: { productData: ProductCardProps[] }) => {
  const [width, setWidth] = useState(0);
  const [preview, setPreview] = useState(3);
  const [spaceBetween, setSpaceBetween] = useState(20);
  const [domain, setDomain] = useState('');

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => setDomain(window.location.origin), []);

  useEffect(() => {
    if (width < 768) { setPreview(2) }
    else if (width >= 768 && width <= 635) { setPreview(2.5) }
    else if (width >= 641 && width <= 920) { setPreview(3.5) }
    else if (width >= 1024) { setPreview(4.2) }
  }, [width]);

  useEffect(() => {
    if (width < 768) { setSpaceBetween(20) }
    else if (width >= 768 && width <= 1024) { setSpaceBetween(30) }
    else { setSpaceBetween(45) }
  }, [width]);
  const handleAddToCart = useHandleAddToCart()
  return (
    <div className="story_container my-4 px-2 lg:px-6">
      <Swiper spaceBetween={spaceBetween} slidesPerView={preview}>
        {productData.map((product) => (
          <SwiperSlide key={product._id}>
            <ProductCard
              {...product}
              onAddToCart={(count) => handleAddToCart(product._id, count)}
              onAddToFavorite={() => console.log("added to favorite")}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ScrollGrid;
