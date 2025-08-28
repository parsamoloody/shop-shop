import { StaticImageData } from "next/image";
// User
interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  profilePicture: string;
  addresses: IAddress[];
  cart: ICartItem[];
  orderHistory: IOrderSummary[];
  createdAt?: Date;
  updatedAt?: Date;
  resetToken?: String;
  resetTokenExpire?: Number;
}

interface IAddress {
  fullName: string;
  street: string;
  city: string;
  postalCode: string;
  country: string;
  phone?: string;
}

interface IWish {
  _id: string;
  cart: ICartItem[];
  orderHistory: IOrderSummary[];
}
interface IOrderSummary {
  orderId: string;
  total: number;
  status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: Date;
}

interface ICartItem {
  product: string;
  quantity: number;
}

// Product
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
  product_id: string;
  category: string[];
  name: string;
  images: string[],
  description: string;
  price: IPrice;
  createdBy: string,
  editedBy?: string,
  createdAt: Date;
  updatedAt: Date;
}
interface IProductDocumentResponse extends IProductDocument {
  _id: string;
}
type StaticImage = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};
interface ProductCardProps {
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
type Category = {
  id: number
  name: string
  icon?: string
}
type MainCategory = {
  id: number
  name: string
  icon?: string
  image?: StaticImage
}
export { IProductDocument,IProductDocumentResponse, MainCategory, IWish, StaticImage, ProductCardProps, Category, IUser, IOrderSummary, IAddress, ICartItem }