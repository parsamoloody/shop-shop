'use client'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import useWindowWidthAndHeight from '@/utilities/customHook'
import Link from 'next/link'
import { StaticImageData } from 'next/image'
import handleAddToCart from '../hooks/handleAddToCart'
import useHandleAddToCart from '../hooks/handleAddToCart'
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
  category: string[];
  subCategory: string[];
  name: string;
  description: string;
  price: IPrice;
  images: StaticImageData[];
  // createdBy: string;
  // editedBy: string;
  // createdAt: Date;
  // updatedAt: Date;
  size?: number;
  rating: number;
  tailwindSize?: string;
  onAddToCart?: () => void;
  onAddToFavorite?: () => void;
}

const ProductGrid = ({ products }: { products: IProductDocument[] }) => {
  const [width] = useWindowWidthAndHeight()
  const [size, setSize] = useState(40)
  const [domain, setDomain] = useState('')
  const addToFavorite = () => console.log("Added to favorite")

  useEffect(() => {
    const setFromWidth = (w: number) => {
      if (w <= 400) setSize(40)
      else if (w >= 380 && w < 1240) setSize(46)
      else setSize(46)
    }
    // First run
    if (typeof window !== "undefined") {
      setFromWidth(window.innerWidth)
    }
    // Listen to resize
    const handleResize = () => setFromWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
const handleAddToCart = useHandleAddToCart()
  return (
    <div className="grid max-w-screen-xl sm:gap-2 mx-auto grid-cols-[repeat(auto-fit,minmax(162px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(190px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(172px,1fr))]">
      {products.map((product, i) => (
        <div key={i} className="mx-auto max-w-xs">
          <Link href={`${domain || ''}/product/${product._id}`}>
            <ProductCard
              description={product.description}
              _id={product._id}
              size={size}
              images={product.images}
              name={product.name}
              rating={product.rating}
              price={product.price}
              onAddToCart={(count) => handleAddToCart(product._id, count)}
              onAddToFavorite={addToFavorite}
            />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ProductGrid
