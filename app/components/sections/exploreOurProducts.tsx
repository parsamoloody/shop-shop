import SectionCard from '@/ui/SectionCard'
import ProductGrid from '../ProductGrid'
import { Button } from '@/ui/button'
import { products } from '../../../database/Products'
import { ProductCardProps } from '@/types/type'

const ExploreOurProducts = () => {

    return (
        <div className='max-w-[1240px] mx-auto px-4 mt-18 sm:mt-20'>
            <SectionCard
                title='Explore Our Products'
                category='Our Products'
                element={<><Button className={"hidden sm:block mr-12"} size={"sm"}>View All</Button></>}
            >
                <ProductGrid
                    products={products.reverse().slice(1,13)}
                />
            </SectionCard>
            <Button className={"sm:hidden mx-auto"} size={"default"}>View All</Button>
        </div>
    )
}

export default ExploreOurProducts
