import p1 from '@/images/products/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.jpg'
import p2 from '@/images/products/Cart (1).jpg'
import p3 from '@/images/products/Cart (1).png'
import p4 from '@/images/products/Cart.jpg'
import p5 from '@/images/products/Cart.png'
import p6 from '@/images/products/Frame 570 (1).jpg'
import p7 from '@/images/products/Frame 570 (2).jpg'
import p8 from '@/images/products/Frame 570.png'
import { ProductCardProps } from '@/types/type'
import { StaticImageData } from 'next/image'

type Product = {
  id: string
  images: StaticImageData[]
  title: string
  rating: number
  price: number
  discountPrice: number
  isDiscount: boolean
}

export const products: Product[] = [
  {
    id: "0",
    images: [p1, p5, p6, p8],
    title: "S-Series Comfort Chair",
    rating: 4.32,
    price: 1160,
    discountPrice: 375,
    isDiscount: true,
  },
  {
    id: "1",
    images: [p2, p5, p6, p8],
    title: "Ergo Pro Office Chair",
    rating: 4.8,
    price: 980,
    discountPrice: 0,
    isDiscount: false,
  },
  {
    id: "2",
    images: [p3, p5, p6, p8],
    title: "Modern Lounge Sofa",
    rating: 3.55,
    price: 1600,
    discountPrice: 1400,
    isDiscount: true,
  },
  {
    id: "3",
    images: [p4, p5, p6, p8],
    title: "Minimalist Wooden Desk",
    rating: 4.2,
    price: 450,
    discountPrice: 0,
    isDiscount: false,
  },
  {
    id: "4",
    images: [p5, p5, p6, p8],
    title: "Modern Lounge Sofa",
    rating: 2.55,
    price: 1600,
    discountPrice: 1400,
    isDiscount: true,
  },
  {
    id: "5",
    images: [p6, p5, p6, p8],
    title: "Minimalist Wooden Desk",
    rating: 4.7,
    price: 450,
    discountPrice: 0,
    isDiscount: false,
  },
  {
    id: "6",
    images: [p7, p5, p6, p8],
    title: "Modern Lounge Sofa",
    rating: 5.55,
    price: 1600,
    discountPrice: 1400,
    isDiscount: true,
  },
  {
    id: "7",
    images: [p8, p5, p6, p8],
    title: "Minimalist Wooden Desk",
    rating: 2.3,
    price: 450,
    discountPrice: 0,
    isDiscount: false,
  },
  {
    id: "8",
    images: [p4, p5, p6, p8],
    title: "Minimalist Wooden Desk",
    rating: 4.2,
    price: 450,
    discountPrice: 0,
    isDiscount: false,
  },
  {
    id: "9",
    images: [p5, p5, p6, p8],
    title: "Modern Lounge Sofa",
    rating: 2.55,
    price: 1600,
    discountPrice: 1400,
    isDiscount: true,
  },
  {
    id: "10",
    images: [p1, p5, p6, p8],
    title: "S-Series Comfort Chair",
    rating: 3.32,
    price: 1160,
    discountPrice: 375,
    isDiscount: true,
  },
  {
    id: "11",
    images: [p2, p5, p6, p8],
    title: "Ergo Pro Office Chair",
    rating: 4.8,
    price: 980,
    discountPrice: 0,
    isDiscount: false,
  },
  {
    id: "12",
    images: [p3, p5, p6, p8],
    title: "Modern Lounge Sofa",
    rating: 5.55,
    price: 1600,
    discountPrice: 1400,
    isDiscount: true,
  },
  {
    id: "13",
    images: [p4, p5, p6, p8],
    title: "Minimalist Wooden Desk",
    rating: 6.2,
    price: 450,
    discountPrice: 0,
    isDiscount: false,
  }
]