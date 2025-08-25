import ProductGrid from '@/components/ProductGrid'
import React from 'react'
import { products } from '../../../../database/Products'
import SectionCard from '@/ui/SectionCard'
import { Category, ProductCardProps } from '@/types/type'
import categories from '@/data/Categories' // import directly instead of fetching
export const dynamicParams = false

export async function generateStaticParams() {
  return categories.map((c: Category) => ({
    category: c.name.toLowerCase(),
  }))
}

const Page = async ({
  params
}: {
  params: Promise<{ category: string }>
}) => {
  const {category} = await params
  const response = await fetch(`http://localhost:4000/api/product/get-all`);
  const data = await response.json();
  const filteredProducts: ProductCardProps[] = data.data?.filter((item: ProductCardProps) => item.category.includes(category));


  return (
    <div className='max-w-[1240px] mx-auto px-4 mt-18 sm:mt-20'>
      <SectionCard
        title=""
        category={`Brows by ${category}`}
        element={<span className='dark:text-foreground cursor-pointer'>Filters</span>}
      >
        <ProductGrid
          products={filteredProducts.length > 0 ? filteredProducts : (data.data as ProductCardProps[]).reverse().slice(1, 13)}
        />
      </SectionCard>
    </div>
  )
}

export default Page
