'use client'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { ProductCardProps } from '@/types/type'
import useWindowWidthAndHeight from '@/utilities/customHook'
import Link from 'next/link'

const ProductGrid = ({ products }: { products: ProductCardProps[] }) => {
  const [width, height] = useWindowWidthAndHeight();
  const [size, setSize] = useState(40)
  const addToFavorite = () => {
    console.log("Added to favorite")
  }

  const addToCart = () => {
    console.log("Added to cart")
  }
  useEffect(() => {
    if (width <= 400) {
      setSize(40)
    } else if (width >= 380 && width < 1240) {
      setSize(46)
    } else {
      setSize(46)
    }
  }, [width])

const domain = window.location.origin // e.g. https://example.com
  const targetUrl = `${domain}/product/`
  return (
    <div className="grid max-w-screen-xl sm:gap-2 mx-auto grid-cols-[repeat(auto-fit,minmax(162px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(190px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(172px,1fr))]">

      {products.map((product, i) => (
        <div
          key={i}
          className='mx-auto max-w-xs'
        >
          <Link
          href={targetUrl+product.id}
          >
          <ProductCard
            id={product.id}
            size={size}
            images={product.images}
            title={product.title}
            rating={product.rating}
            price={product.price}
            discountPrice={product.discountPrice}
            isDiscount={product.isDiscount}
            onAddToCart={addToCart}
            onAddToFavorite={addToFavorite}
          /></Link>
        </div>
      ))}
    </div>
  )


}

export default ProductGrid
