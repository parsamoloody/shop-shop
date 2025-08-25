'use client'

import React from 'react'
import useSWR from 'swr'
import SectionCard from '@/ui/SectionCard'
import ProductGrid from '../ProductGrid'
import { Button } from '@/ui/button'
import Link from 'next/link'
import { ProductCardProps } from '@/types/type'

const fetcher = async (url: string): Promise<ProductCardProps[]> => {
  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch products')
  const data = await res.json()
  return data.data
}

const BestSellingProduct = () => {
  const { data: products, error, isLoading } = useSWR<ProductCardProps[]>(
    'http://localhost:4000/api/product/get-all',
    fetcher,
    {
      revalidateOnFocus: false, // don't refetch on tab focus
      shouldRetryOnError: false, // no infinite retries
    }
  )

  return (
    <div className="max-w-[1240px] mx-auto px-4">
      <SectionCard
        title="Best Selling Products"
        category="This Month"
        element={
          <Link href="/product" className="hidden md:block">
            <Button size="default">View All Products</Button>
          </Link>
        }
      >
        {isLoading && <p>Loading products...</p>}
        {error && <p className="text-red-500">Failed to load products</p>}
        {products && <ProductGrid products={products} />}
      </SectionCard>

      <Link className="md:hidden" href="/product">
        <Button size="default">View All Products</Button>
      </Link>
    </div>
  )
}

export default BestSellingProduct
