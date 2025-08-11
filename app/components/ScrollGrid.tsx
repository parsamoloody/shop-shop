"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ProductCardProps } from "@/types/type";
import ProductCard from "./ProductCard";
import Link from "next/link";

const ScrollGrid = ({ data }: { data: ProductCardProps[] }) => {
  const [width, setWidth] = useState(0);
  const [preview, setPreview] = useState(3);
  const [spaceBetween, setSpaceBetween] = useState(20);
  const [domain, setDomain] = useState("");

  const products = data;

  // Track screen width
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update slides preview count
  useEffect(() => {
    if (width < 768) {
      setPreview(2);
    } else if (width >= 768 && width <= 635) {
      setPreview(2.5);
    } else if (width >= 641 && width <= 920) {
      setPreview(3.5);
    } else if (width >= 1024) {
      setPreview(4.2);
    }
  }, [width]);

  // Update space between slides
  useEffect(() => {
    if (width < 768) {
      setSpaceBetween(20);
    } else if (width >= 768 && width <= 1024) {
      setSpaceBetween(30);
    } else {
      setSpaceBetween(45);
    }
  }, [width]);

  // ✅ Only get domain in the browser
  useEffect(() => {
    if (typeof window !== "undefined") {
      setDomain(window.location.origin);
    }
  }, []);

  return (
    <div className="story_container my-4 px-2 lg:px-6">
      <Swiper spaceBetween={spaceBetween} slidesPerView={preview}>
        {products.map((a, i) => (
          <SwiperSlide key={i}>
            <Link href={`${domain || ""}/product/${a.id}`}>
              <ProductCard
                id={a.id}
                title={a.title}
                images={a.images}
                rating={a.rating}
                price={a.price}
                discountPrice={a.discountPrice}
                isDiscount={a.isDiscount}
                onAddToCart={() => console.log("added to cart")}
                onAddToFavorite={() => console.log("added to favorite")}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ScrollGrid;
