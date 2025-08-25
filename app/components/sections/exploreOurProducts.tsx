'use client'
import SectionCard from '@/ui/SectionCard'
import ProductGrid from '../ProductGrid'
import { Button } from '@/ui/button'
import { products } from '../../../database/Products'
import { ProductCardProps } from '@/types/type'
import Link from 'next/link'
import React from 'react'

const ExploreOurProducts = () => {
    const [products, setProducts] = React.useState<ProductCardProps[]>([]);

    React.useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(`http://localhost:4000/api/product/get-all`);
            const data = await response.json();
            setProducts(data.data);
        };
        fetchProducts();
    }, []);

    return (
        <div className='max-w-[1240px] mx-auto px-4 mt-18 sm:mt-20'>
            <SectionCard
                title='Explore Our Products'
                category='Our Products'
                element={<><Link href="/product" className='hidden md:block'><Button size={'default'}>View All</Button></Link></>}
            >
                <ProductGrid
                    products={products.reverse().slice(1,13)}
                />
            </SectionCard>
            <Link className='md:hidden' href="/product"><Button size={'default'}>View All</Button></Link>
        </div>
    )
}

export default ExploreOurProducts
