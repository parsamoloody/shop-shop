"use client"

import { useEffect, useState } from "react"
import Image, { StaticImageData } from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/ui/button"
import { products } from "@/data/Products"
import { PiCarProfile, PiHeartThin, PiStarFill } from "react-icons/pi";
import { HiArrowPath } from "react-icons/hi2"


type Product = {
  id: string
  images: StaticImageData[]
  title: string
  rating: number
  price: number
  discountPrice: number
  isDiscount: boolean
}

type ColorOption = {
  name: string;
  value: string;
}

export async function getProduct(id: string): Promise<Product> {
  const data = products.find((a) => a.id === id)

  if (!data) {
    notFound()
  }

  return data
}

const colorOptions: ColorOption[] = [
  { name: 'sky', value: '#E07575' },
  { name: 'red', value: '#A0BCE0' }
]

export default function ProductDetailPage({ id }: { id: string }) {
  const [product, setProduct] = useState<Product | null>(null)
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null)
  const [quantity, setQuantity] = useState<number>(1)
  const [selectedColor, setSelectedColor] = useState<string>(colorOptions[0].value)

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
      <div className="overflow-hidden">
        <div className="relative w-full h-96  overflow-hidden rounded-lg">
          <Image
            src={selectedImage}
            alt={product.title}
            // fill
            className="w-auto mx-auto h-96 bg-third overflow-visible"
            priority
            sizes="(max-width: 768px) 100vw, 400px"
            placeholder="blur"
          />
        </div>

        {/* Thumbnails */}
        <div className="mt-4 w-full overflow-x-auto no-scrollbar whitespace-nowrap">
          <div className="flex gap-4 p-2 w-max snap-x">
            {product.images.map((img, idx) => (
              <div
                key={idx}
                className={`relative flex-shrink-0 w-20 h-20 overflow-hidden border border-white rounded-md cursor-pointer transition snap-start ${selectedImage === img ? "ring-2 ring-gray-400" : ""
                  }`}
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
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
          <span className="border-l border-gray-300 mx-2 h-6">  </span>
          <span className="text-[#00FF66]">In Stock</span>
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

        {/* Color Options */}
        <div className="mb-6 flex items-center">
          <span className="text-lg mr-3 font-medium dark:text-foreground mb-2 block">
            Colors:
          </span>
          <div className="flex gap-3">
            {colorOptions.map((color, index) => (
              <button
                key={index}
                className={`w-5 h-5 rounded-full border-2 cursor-pointer transition-colors ${selectedColor === color.value
                  ? 'border-primary ring-1 ring-primary ring-offset-2'
                  : 'border-gray-300 hover:border-primary'
                  }`}
                style={{ backgroundColor: color.value }}
                title={color.name}
                aria-label={`Select ${color.name} color`}
                onClick={() => setSelectedColor(color.value)}
              />
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          {/* Quantity Selector */}
          <Button className="rounded">Add to cart</Button>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center">
              <button
                className="w-10 h-10 flex items-center justify-center border cursor-pointer rounded-l-sm border-gray-300 dark:border-gray-700 hover:bg-secondary dark:text-foreground transition-colors"
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
              >
                -
              </button>
              <span className="w-12 h-10 flex items-center justify-center border-y border-gray-300 dark:border-gray-700 dark:text-foreground">
                {quantity}
              </span>
              <button
                className="w-10 h-10 flex items-center justify-center border cursor-pointer rounded-r-sm border-gray-300 dark:border-gray-700 hover:bg-secondary dark:text-foreground transition-colors"
                onClick={() => setQuantity(prev => Math.min(10, prev + 1))}
              >
                +
              </button>
            </div>
          </div>
          <Button variant="outline" className="p-0 w-12 rounded border-[1.5px] text-lg"><PiHeartThin /></Button>
        </div>
        {/* Service explain */}
        <div className="border dark:text-slate-300 mt-2 md:mt-0 lg:w-[370px] w-[330px] rounded">
          <div className="flex items-center p-2 space-x-5 border-b">
            <PiCarProfile size={40} />
            <div className="space-y-2">
              <p>Free Delivery</p>
              <p className="text-[12px] dark:text-gray-400 text-gray-700">Enter your postal code for Delivery Availability</p>
            </div>
          </div>
          <div className="flex items-center p-2 space-x-5">
            <HiArrowPath size={40} />
            <div className="space-y-2">
              <p>Return Delivery</p>
              <p className="text-[12px] dark:text-gray-400 text-gray-700">Free 30 Days Delivery Returns. Details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
