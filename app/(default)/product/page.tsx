import React from 'react'
import SectionCard from '@/ui/SectionCard'
import { Button } from '@/ui/button'
import { products } from '../../../database/Products'
import { ProductCardProps } from '@/types/type'
import ProductGrid from '@/components/ProductGrid'
const page = () => {
    return (
        <div>
            <div className='max-w-[1240px] mx-auto px-4 mt-18 sm:mt-20'>
                <SectionCard
                    title='Explore Our Products'
                    category='Our Products'
                >
                    <ProductGrid
                        products={products}
                    />
                </SectionCard>
            </div>
        </div>
    )
}

export default page
