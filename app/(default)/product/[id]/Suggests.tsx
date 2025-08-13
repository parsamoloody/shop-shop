import ScrollGrid from '@/components/ScrollGrid'
import { products } from '@/data/Products'
import SectionCard from '@/ui/SectionCard'
import React from 'react'

const Suggests = () => {
    return (
        <div className='max-w-[1240px] mx-auto px-4 mt-14'>
            <SectionCard
                title=''
                category='Related Item'
            >
                <ScrollGrid data={products} />
            </SectionCard>
        </div>
    )
}

export default Suggests
