import React from 'react'
import SectionCard from '@/ui/SectionCard'
import ProductGrid from '../ProductGrid'
import { Button } from '@/ui/button'
import { products } from '../../../database/Products'
import Link from 'next/link'

const BestSellingProduct = () => {
    return (
        <div className='max-w-[1240px] mx-auto px-4'>
            <SectionCard
                title='Best Selling Products'
                category='This Month'
                element={<><Link href="/product" className='hidden md-block'><Button size={'default'}>View All Products</Button></Link></>}
            >
                <ProductGrid
                products={products.slice(3,9).reverse()}
                 />
            </SectionCard>
            <Link className='md:hidden' href="/product"><Button size={'default'}>View All Products</Button></Link>
        </div>
    )
}

export default BestSellingProduct
