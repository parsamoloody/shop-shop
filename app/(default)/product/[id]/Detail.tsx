"use client"

import React, { useCallback, useEffect, useState } from "react"
import Image, { StaticImageData } from "next/image"
import { notFound } from "next/navigation"
// import { Button } from "@/ui/button"
// import { products } from "@/data/Products"
import { PiCarProfile, PiHeartThin, PiStarFill } from "react-icons/pi";
import { HiArrowPath } from "react-icons/hi2"
import { ProductCardProps } from "@/types/type"
import { useWishList } from "../../../hooks/user/userOrder"
import useHandleAddToCart from "../../../hooks/handleAddToCart"
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
interface ColorOption {
  name: string;
  value: string;
}

interface Price {
  original: number;
  discount: { type: 'percent' | 'fixed'; amount: number };
}


// Move theme creation outside the component
const theme = createTheme({
  palette: {
    primary: { main: '#00FF66' },
    secondary: { main: '#FF4081' },
    background: { default: '#DB4444', paper: '#DB4444' },
    text: { primary: '#ffffff', secondary: '#ffffff' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#DB4444',
          color: '#ffffff',
          '&:hover': { backgroundColor: '#DB4444' },
        },
      },
    },
  },
});

const CustomButton = styled(Button)({
  borderRadius: '4px',
  width: '100%',
  gridColumn: 'span 2',
  padding: '8px',
});

// Use environment variable for API base URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

// Fix color options to match names and values
const colorOptions: ColorOption[] = [
  { name: 'sky', value: '#87CEEB' }, // Sky blue
  { name: 'red', value: '#FF0000' }, // Red
];

export async function getProduct(id: string): Promise<ProductCardProps> {
  const response = await fetch(`${API_BASE_URL}/api/product/get-all`);
  if (!response.ok) {
    throw new Error(`Failed to fetch product: ${response.status}`);
  }
  const data = await response.json();
  const product = data.data?.find((a: ProductCardProps) => a._id === id);
  if (!product) {
    notFound();
  }
  return product;
}

export default function ProductDetailPage({ id }: { id: string }) {
  const [product, setProduct] = useState<ProductCardProps | null>(null);
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedColor, setSelectedColor] = useState<string>(colorOptions[0].value);
  const [addingToCart, setAddingToCart] = useState<boolean>(false);
  const [addedToCart, setAddedToCart] = useState<boolean>(false);
  const [inCart, setInCart] = useState<boolean>(false);

  const handleAddToCart = useHandleAddToCart();
  const { data: isInCart, isSuccess } = useWishList();

  // Memoize getProduct to avoid unnecessary re-renders
  const fetchProduct = useCallback(async () => {
    try {
      const p = await getProduct(id);
      setProduct(p);
      setSelectedImage(p.images[0]);
    } catch (error) {
      console.error('Error fetching product:', error);
      notFound();
    }
  }, [id]);

  // Load product on mount
  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  // Handle wishlist state
  useEffect(() => {
    if (isSuccess && isInCart) {
      setInCart(true);
    }
  }, [isSuccess, isInCart]);

  const addItem = async (productId: string, quantity: number) => {
    if (inCart) return;
    setAddingToCart(true);
    try {
      const res = await handleAddToCart(productId, quantity);
      console.log('Add to cart response:', res);
      setTimeout(() => {
        setAddedToCart(true);
        setAddingToCart(false);
      }, 2300);
    } catch (error) {
      console.error('Error adding to cart:', error);
      setAddingToCart(false);
    }
  };

  if (!product || !selectedImage) return null;

  const discountPrice =
    product.price.discount.type === 'percent'
      ? product.price.original * (1 - product.price.discount.amount / 100)
      : product.price.original - product.price.discount.amount;
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left: Main Image */}
      <div className="overflow-hidden">
        <div className="relative w-full h-96 bg-third overflow-hidden rounded-lg">
          <Image
            src={`/assets/uploads/products/${selectedImage}`}
            alt={product.name}
            fill
            className="object-cover scale-65 bg-third overflow-visible"
            priority
            sizes="(max-width: 768px) 100vw, 400px"
          // placeholder="blur"
          />
        </div>

        {/* Thumbnails */}
        <div className="mt-4 w-full overflow-x-auto sm:overflow-x-clip sm:flex sm:flex-wrap  no-scrollbar whitespace-nowrap">
          <div className="flex sm:flex-wrap gap-4 p-2 w-max snap-x">
            {product.images.map((img, idx) => (
              <div
                key={idx}
                className={`relative flex-shrink-0 justify-center items-center w-20 h-20 overflow-hidden border bg-white border-white rounded-md cursor-pointer transition snap-start ${selectedImage === img ? "ring-2 ring-gray-400" : ""
                  }`}
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  src={`/assets/uploads/products/${img}`}
                  alt={`Thumbnail ${idx}`}
                  width={65}
                  height={65}
                  // sizes="(max-width: 640px) 100vw, 100vw"
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Right: Info */}
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl font-semibold dark:text-foreground mb-2">{product.name}</h1>

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
          {discountPrice ? (
            <>
              <span className="text-3xl font-bold text-red-600 mr-3">${discountPrice}</span>
              <span className="line-through text-gray-400">${product.price.original}</span>
            </>
          ) : (
            <span className="text-3xl font-bold dark:text-foreground">${product.price.original}</span>
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
        <div className=" w-auto flex flex-wrap gap-4">
          {/* Quantity Selector */}
          {/* <Button className="rounded w-full col-span-2"
            onClick={() => addItem(product._id, quantity)}
          >
            {addedToCart ? (
          'In your cart'
        ) : addingToCart ? (
          
        ) : (
          'Add to cart'
        )}
          </Button> */}
          <ThemeProvider theme={theme}>
            <CustomButton
              onClick={() => addItem(product._id, quantity)}
              {...(addingToCart && { loading: true })}
              disabled={addedToCart || addingToCart || inCart}
            >
              {addedToCart ? (
                'In your cart'
              ) : addingToCart ? (
                <CircularProgress
                  size={24}
                  sx={{ color: "#ffffff" }}
                />
              ) : (
                'Add to cart'
              )}
            </CustomButton>
          </ThemeProvider>
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
          {/* <Button className="p-0 w-12 rounded border-[1.5px] text-lg"><PiHeartThin /></Button> */}
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
