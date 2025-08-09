import React from 'react'
import SectionCard from '@/ui/SectionCard'
import ProductGrid from './ProductGrid'

const BestSellingProducts = () => {
    return (
        <div className='max-w-[1240px] mx-auto mt-40 flex justify-between px-4'>
            <SectionCard
                title='Best Selling Products'
                category='This Month'
            >
                <ProductGrid />
            </SectionCard>
        </div>
    )
}

export default BestSellingProducts~
