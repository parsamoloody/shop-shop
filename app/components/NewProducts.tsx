import React from 'react'
import SectionCard from '@/ui/SectionCard'
import ScrollGrid from './ScrollGrid'
import { Button } from '@/ui/button'

const NewProducts = () => {
    return (
       <section className='flex flex-col justify-center items-center'>
        <div className='max-w-[1240px] mx-auto mt-40 flex justify-between px-4'>
                <SectionCard
                    title='Flash Sales'
                    category='Today,s'
                >
                    <ScrollGrid />
                </SectionCard>
            </div>
            <Button size={'default'}>View All Products</Button>
       </section>
    )
}

export default NewProducts
