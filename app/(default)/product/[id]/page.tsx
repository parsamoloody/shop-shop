import React, { Suspense } from 'react'
import ProductDetailPage from './Detail'
import Suggests from './Suggests'
import { Metadata } from 'next'

// ✅ Generate metadata dynamically
export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params

  // In real case, fetch product title/description from API
  const productTitle = `Products`
  const productDescription = `Details and specifications for Product ${id}.`

  return {
    title: productTitle,
    description: productDescription,
    alternates: {
      canonical: `/product/${id}`,
    }
  }
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params

  return (
    <div>
      <Suspense fallback={<>Loading</>}>
        <ProductDetailPage id={id} />
      </Suspense>
      <Suggests />
    </div>
  )
}

export default Page
