import SectionCard from '@/ui/SectionCard'
import ProductGrid from '../ProductGrid'
import { Button } from '@/ui/button'
import { products } from '../../../database/Products'
import { ProductCardProps } from '@/types/type'
import Link from 'next/link'

const ExploreOurProducts = () => {

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
