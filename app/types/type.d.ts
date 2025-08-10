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
    description: string;
    price: IPrice;
    createdBy: string,
    editedBy?: string,
    createdAt: Date;
    updatedAt: Date;
}
type StaticImage = {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
};
interface ProductCardProps {
  imageUrl: StaticImage
  title: string
  size: number
  rating: number
  price: number
  discountPrice?: number
  isDiscount?: boolean
  onAddToCart?: () => void
  onAddToFavorite?: () => void
}


export { IProductDocument, StaticImage,ProductCardProps }