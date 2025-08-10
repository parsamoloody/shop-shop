'use client'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { ProductCardProps } from '@/types/type'
import useWindowWidthAndHeight from '@/utilities/customHook'

const ProductGrid = ({products}: {products: ProductCardProps[]}) => {
  const [width, height] = useWindowWidthAndHeight();
  const [size, setSize] = useState(40)
  const addToFavorite = () => {
    console.log("Added to favorite")
  }

  const addToCart = () => {
    console.log("Added to cart")
  }
  useEffect(() => {
    if (width < 690){
      setSize(40)
    } else {
      setSize(48)
    }
  })

return (
  // <div className="grid max-w-screen-xl space-x-1 mx-auto grid-cols-[repeat(auto-fit,minmax(178px,1fr))]">
    <div className="grid max-w-screen-xl sm:gap-2 mx-auto grid-cols-[repeat(auto-fit,minmax(162px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(190px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(182px,1fr))]">

    {products.map((product, i) => (
    <div
    key={i}
    className='mx-auto max-w-xs'
    >
      <ProductCard
      size={size}
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
