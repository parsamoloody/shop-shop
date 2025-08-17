"use client";

import { ProductCardProps, StaticImage } from "@/types/type";
import Image from "next/image";
import React, { memo } from "react";
import { PiEyeLight, PiHeartStraightLight } from "react-icons/pi";
import { PiStarFill } from "react-icons/pi";
const ProductCard: React.FC<ProductCardProps> = ({
  images,
  title,
  rating,
  price,
  discountPrice,
  isDiscount = false,
  onAddToCart,
  onAddToFavorite,
  size = 46,
  tailwindSize = ""
}) => {

  return (
    <div className={`custom-w-${size} w-${tailwindSize} small-size group relative overflow-clip`}>
      {/* Image Container */}
      <div className="relative w-full bg-third h-48 overflow-hidden">
        <Image
          src={images[0]}
          alt={title}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 200px"
          className="object-cover transition-transform scale-65 overflow-visible duration-300 bg-third "
          priority={false}
        />

        {/* Favorite Button */}
        <div className="absolute grid grid-cols-1 space-y-2 top-2 right-2 p-1.5">
          {/* Add to favorite */}
          <button
            onClick={onAddToFavorite}
            className="p-1.5 bg-white rounded-full shadow hover:bg-gray-100 transition"
            aria-label="Add to Favorite"
          >
            <PiHeartStraightLight className="w-4 h-4 text-black" />
          </button>
          {/* Quick view */}
          <button
            onClick={onAddToFavorite}
            className="p-1.5 bg-white rounded-full shadow hover:bg-gray-100 transition"
            aria-label="Add to Favorite"
          >
            <PiEyeLight className="w-4 h-4 text-black" />
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={onAddToCart}
          className="absolute bg-black text-white  bottom-[-100%] left-0 w-full bg-primary text-white text-sm py-2 font-medium transition-all duration-300 ease-in-out group-hover:bottom-0"
        >
          Add to Cart
        </button>
      </div>

      {/* Product Info */}
      <div className="p-2 w-full overflow-hidden">
        <h3 className="text-sm font-medium dark:text-white truncate">{title}</h3>
        <div className="flex items-center space-x-1 mt-1">
          {
            [...Array(5)].map((_, i) => (
              <PiStarFill key={i} className={`w-3 h-3 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`} />
            ))
          }
        </div>
        <div className="mt-1">
          {isDiscount && discountPrice ? (
            <>
              <span className="text-secondary dark:text-secondary font-bold">${discountPrice}</span>
              <span className="text-gray-400 text-xs line-through ml-2">
                ${price}
              </span>
            </>
          ) : (
            <span className="text-secondary dark:text-secondary font-bold">${price}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCard);
