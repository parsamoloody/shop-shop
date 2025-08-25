"use client";

import { ProductCardProps, StaticImage } from "@/types/type";
import Image, { StaticImageData } from "next/image";
import { redirect } from "next/navigation";
import React, { memo, useState } from "react";
import { PiEyeLight, PiHeartStraightLight, PiStarFill } from "react-icons/pi";

interface IDiscount {
  amount: number
  type: 'fixed' | 'percent';
  expiresAt?: string
}

interface IPrice {
  original: number;
  discount: IDiscount;
  currency: "USD" | "IRR"
}

interface IProductDocument {
  _id: string;
  category?: string[];
  subCategory?: string[];
  name: string;
  description: string;
  price: IPrice;
  images: StaticImageData[];
  size?: number;
  rating: number;
  tailwindSize?: string;
  isInCart?: boolean;
  onAddToCart?: (count: number) => Promise<{ auth: boolean, inCart: boolean }>;
  onAddToFavorite?: () => void;
}

const ProductCard: React.FC<IProductDocument> = ({
  images,
  _id: id,
  name,
  description,
  rating,
  price,
  onAddToCart,
  onAddToFavorite,
  size = 46,
  tailwindSize = ""
}) => {
  const [isAdding, setIsAdding] = useState(false);
  const [added, setAdded] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const discountPrice = price.discount.type === 'percent'
    ? price.original * (1 - price.discount.amount / 100)
    : price.original - price.discount.amount;

  const handleAddToCart = async () => {
    if (!onAddToCart) return;

    setIsAdding(true);
    try {
      const { auth, inCart } = await onAddToCart(1);
      if (!auth) {
        redirect("/auth/login");
      }
      setIsAuth(auth);
      setAdded(inCart);
    } catch (error) {
      console.error("Failed to add to cart", error);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className={`custom-w-${size} w-${tailwindSize} small-size group relative overflow-clip`}>
      {/* Image Container */}
      <div className="relative w-full bg-third h-48 overflow-hidden">
        <Image
          src={`/assets/uploads/products/${images[0]}`}
          alt={name}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 200px"
          className="object-cover transition-transform scale-65 overflow-visible duration-300 bg-third "
          priority={false}
        /> 

        {/* Favorite Button */}
        <div className="absolute grid grid-cols-1 space-y-2 top-2 right-2 p-1.5">
          <button
            onClick={onAddToFavorite}
            className="p-1.5 bg-white rounded-full shadow hover:bg-gray-100 transition"
            aria-label="Add to Favorite"
          >
            <PiHeartStraightLight className="w-4 h-4 text-black" />
          </button>
          <button
            onClick={onAddToFavorite}
            className="p-1.5 bg-white rounded-full shadow hover:bg-gray-100 transition"
            aria-label="Quick View"
          >
            <PiEyeLight className="w-4 h-4 text-black" />
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={isAdding || added}
          className={`absolute bg-black text-white  bottom-[-100%] left-0 w-full bg-primary text-white text-sm py-2 font-medium transition-all duration-300 ease-in-out group-hover:bottom-0
            ${added ? 'bg-green-600 text-white cursor-default' : 'bg-primary text-white'}
            ${isAdding ? 'opacity-50 cursor-not-allowed' : ''}
          `}
        >
          {added ? "In Cart" : isAdding ? "Adding..." : "Add to Cart"}
        </button>
      </div>

      {/* Product Info */}
      <div className="p-2 w-full overflow-hidden">
        <h3 className="text-sm font-medium dark:text-white truncate">{name}</h3>
        <div className="flex items-center space-x-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <PiStarFill key={i} className={`w-3 h-3 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`} />
          ))}
        </div>
        <div className="mt-1">
          {price.discount.amount && discountPrice < price.original ? (
            <>
              <span className="text-secondary dark:text-secondary font-bold">${discountPrice}</span>
              <span className="text-gray-400 text-xs line-through ml-2">
                ${price.original}
              </span>
            </>
          ) : (
            <span className="text-secondary dark:text-secondary font-bold">${price.original}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCard);
