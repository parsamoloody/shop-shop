import React from 'react'
import SectionCard from '@/ui/SectionCard'
import ScrollGrid from '../ScrollGrid'
import { Button } from '@/ui/button'
import { products } from '../../../database/Products'
import Link from 'next/link'

const NewProducts = () => {
    return (
        <section className='flex flex-col justify-center items-center overflow-hidden'>
            <div className='max-w-[1240px] mx-auto mt-28 flex justify-between px-4'>
                <SectionCard
                    title='Flash Sales'
                    category='Today,s'
                >
                    <ScrollGrid data={products} />
                </SectionCard>
            </div>
            
            <Link href="/product"><Button size={'default'}>View All Products</Button></Link>
        </section>
    )
}

export default NewProducts
