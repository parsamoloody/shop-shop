import React from 'react'
import SectionCard from '@/ui/SectionCard'
import ProductGrid from '../ProductGrid'
import { Button } from '@/ui/button'
import { products } from '../../../database/Products'

const BestSellingProduct = () => {
    return (
        <div className='max-w-[1240px] mx-auto px-4'>
            <SectionCard
                title='Best Selling Products'
                category='This Month'
                element={<><Button className={"hidden sm:block mr-12"} size={"sm"}>View All</Button></>}
            >
                <ProductGrid
                products={products.slice(3,9).reverse()}
                 />
            </SectionCard>
            <Button className={"sm:hidden mr-12 mx-auto"} size={"default"}>View All</Button>
        </div>
    )
}

export default BestSellingProduct
