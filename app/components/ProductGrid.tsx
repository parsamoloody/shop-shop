'use client'
import React from 'react'
import ProductCard from './ProductCard'
import pimg from '@/images/products/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.jpg'
import { StaticImage } from '@/types/type'

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
]

const ProductGrid = () => {
  const addToFavorite = () => {
    console.log("Added to favorite")
  }

  const addToCart = () => {
    console.log("Added to cart")
  }

return (
  <div className="grid gap-6 p-4 max-w-screen-xl mx-auto grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
    {products.map((product, i) => (
    <div
    key={i}
    className='mx-auto max-w-xs'
    >
      <ProductCard
        imageUrl={product.imageUrl}
        title={product.title}
        rating={product.rating}
        price={product.price}
        discountPrice={product.discountPrice}
        isDiscount={product.isDiscount}
        onAddToCart={addToCart}
        onAddToFavorite={addToFavorite}
      />
    </div>
    ))}
  </div>
)


}

export default ProductGrid
