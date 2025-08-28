// app/cart/page.tsx
import { ICartItem, IProductDocumentResponse } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

// Types
interface CartItem {
  product: string; // product id
  amount: number;
}

interface Product {
  id: string;
  title: string;
  price: number;
}

interface CartPageProps {
  cart: ICartItem[];
}

async function getProducts(id: string): Promise<IProductDocumentResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/product/get-one/${id}`,
    { cache: "no-store" } 
  );
  const data = await res.json();
  return data.data
}

const CartPage: FC<CartPageProps> = async ({ cart }) => {
  if (!cart.length) {
    return <p className="p-4 text-lg">Your cart is empty.</p>;
  }
  const fallbackImgSrc = "/assets/uploads/products/EJLFNOw.webp";
  const products = await Promise.all(cart.map((item) => getProducts(item.product)));
  const productMap = new Map(products.map((p) => [p._id, p]));
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-semibold">your wishlist</h1>

      <ul className="divide-y">
        {cart.map((item, i) => {
          const product = productMap.get(item.product);
          if (!product) return null;

          return (
            <li key={i} className="flex items-center justify-between py-3">
              <Link href={`/product/${product._id}`} className="flex-1">
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-x-3">
                    <Image 
                    src={`/assets/uploads/products/${(product.images[0] || fallbackImgSrc)}`}
                    alt={product.name}
                    width={100}
                    height={100}
                    />
                 <div className="flex flex-col">
                     <span className="text-lg dark:text-white">{product.name}</span>
                  <span className="text-sm text-gray-600">
                    {item.quantity} × ${product.price.original.toFixed(2)}
                  </span>
                 </div>
                </div>
              </Link>

              {/* Delete Button (client component) */}
              <form action={`/cart/delete/${product.product_id}`} method="post">
                <button
                  type="submit"
                  className="px-3 py-1 text-red-600 border border-red-600 hover:bg-red-600 hover:text-white"
                >
                  Delete
                </button>
              </form>
            </li>
          );
        })}
      </ul>

      <div className="flex justify-end">
        <Link
          href="/checkout"
          className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700"
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
