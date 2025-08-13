"use client"

import { useEffect, useState } from "react"
import Image, { StaticImageData } from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/ui/button"
import { products } from "@/data/Products"
import { PiHeartThin, PiStarFill } from "react-icons/pi";
import SpaceLine from "@/ui/spaceLine"


// Product type
type Product = {
  id: string
  images: StaticImageData[]
  title: string
  rating: number
  price: number
  discountPrice: number
  isDiscount: boolean
}

// Mock fetch function
export async function getProduct(id: string): Promise<Product> {
  const data = products.find((a) => a.id === id)

  if (!data) {
    notFound()
  }

  return data
}
export default function ProductDetailPage({ id }: { id: string }) {
  const [product, setProduct] = useState<Product | null>(null)
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null)
  const [quantity, setQuantity] = useState<number>(1)

  // Load product on mount
  useEffect(() => {
    getProduct(id).then((p) => {
      if (!p) return notFound()
      setProduct(p)
      setSelectedImage(p.images[0])
    })
  }, [id])

  if (!product || !selectedImage) return null

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left: Main Image */}
      <div>
        <div className="relative w-full h-96 overflow-hidden rounded-lg">
          <Image
            src={selectedImage}
            alt={product.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-4 mt-4 overflow-x-auto">
          {product.images.map((img, idx) => (
            <div
              key={idx}
              className={`relative w-20 h-20 overflow-hidden border cursor-pointer transition rounded-md ${selectedImage === img ? "ring-2 ring-blue-500" : ""
                }`}
              onClick={() => setSelectedImage(img)}
            >
              <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Right: Info */}
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl font-semibold dark:text-foreground mb-2">{product.title}</h1>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          {[...Array(5)].map((_, i) => (
            <PiStarFill key={i} className={`w-5 h-5 ${i < product.rating ? 'text-yellow-500' : 'text-gray-300'}`} />
          ))}
        </div>

        {/* Price */}
        <div className="mb-4">
          {product.isDiscount ? (
            <>
              <span className="text-3xl font-bold text-red-600 mr-3">${product.discountPrice}</span>
              <span className="line-through text-gray-400">${product.price}</span>
            </>
          ) : (
            <span className="text-3xl font-bold dark:text-foreground">${product.price}</span>
          )}
        </div>

        {/* Description placeholder */}
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Experience unparalleled comfort and design with the S-Series Comfort Chair — perfect for work and relaxation.
        </p>
        <hr className="text-gray-500 mb-5" />


        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          {/* Quantity Selector */}
          <Button className="rounded">Add to cart</Button>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center">
              <button
                className="w-10 h-10 flex items-center justify-center border rounded-l-sm border-gray-300 dark:border-gray-700 hover:bg-secondary dark:text-foreground transition-colors"
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
              >
                -
              </button>
              <span className="w-12 h-10 flex items-center justify-center border-y border-gray-300 dark:border-gray-700 dark:text-foreground">
                {quantity}
              </span>
              <button
                className="w-10 h-10 flex items-center justify-center border rounded-r-sm border-gray-300 dark:border-gray-700 hover:bg-secondary dark:text-foreground transition-colors"
                onClick={() => setQuantity(prev => prev + 1)}
              >
                +
              </button>
            </div>
          </div>
          <Button variant="outline" className="p-0 w-12 rounded border-[1.5px] text-lg"><PiHeartThin /></Button>
        </div>
      </div>
    </div>
  )
}
