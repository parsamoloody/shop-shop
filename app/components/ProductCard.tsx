"use client";

import { ProductCardProps, StaticImage } from "@/types/type";
import Image from "next/image";
import React, { memo } from "react";
import { PiHeartStraightLight } from "react-icons/pi";

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  rating,
  price,
  discountPrice,
  isDiscount = false,
  onAddToCart,
  onAddToFavorite,
  size=48
}) => {

  return (
    <div className={`w-${size} group relative overflow-clip`}>
      {/* Image Container */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 200px"
          className="object-cover transition-transform duration-300 bg-third "
          priority={false}
        />

        {/* Favorite Button */}
        <button
          onClick={onAddToFavorite}
          className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow hover:bg-gray-100 transition"
          aria-label="Add to Favorite"
        >
          <PiHeartStraightLight className="w-4 h-4 text-red-500" />
        </button>

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
          <span className="text-yellow-500">★</span>
          <span className="text-xs dark:text-shadow-gray-400 text-gray-600">{rating.toFixed(2)}</span>
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
