'use client'
import React from 'react'
import SectionCard from '@/ui/SectionCard'
import ScrollGrid from '../ScrollGrid'
import { Button } from '@/ui/button'
import Link from 'next/link'
import { ProductCardProps } from '@/types/type'

const NewProducts = () => {
React.useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(`http://localhost:4000/api/product/get-all`);
            const data = await response.json();
            setProducts(data.data);
        };
        fetchProducts();
    }, []);

    const [products, setProducts] = React.useState<ProductCardProps[]>([]);

    return (
        <section className='flex flex-col justify-center items-center overflow-hidden'>
            <div className='max-w-[1240px] mx-auto mt-28 flex justify-between px-4'>
                <SectionCard
                    title='Flash Sales'
                    category='Today,s'
                >
                    <ScrollGrid productData={products.filter(a => a.price.discount?.amount > 0)} />
                </SectionCard>
            </div>

            <Link href="/product"><Button size={'default'}>View All Products</Button></Link>
        </section>
    )
}

export default NewProducts
