import ProductGrid from '@/components/ProductGrid'
import React from 'react'
import { products } from '@/data/Products'
import { Category } from '@/types/type'
import bg from '@/images/gaming-asgasgagag.jpg'
import Image from 'next/image'
import mainCategories from '@/data/MainCategories'
export const dynamicParams = false

export async function generateStaticParams() {
    return mainCategories.map((c: Category) => ({
        category: c.name,
    }))
}

const Page = async ({
    params
}: {
    params: Promise<{ category: string }>
}) => {
    const category = decodeURIComponent((await params).category);
    console.log("params:", category)
    const categoryImage = mainCategories.find(c => c.name === category)?.image?.src || bg;
    
    console.log("image URL:", categoryImage)
    return (
        <div className='overflow-hidden'>
            <div className='mask-b-from-80% mask-b-to-90%'>
                <Image
                    src={categoryImage}
                    alt="category"
                    width={1200}
                    height={400}
                    placeholder='empty'
                    className='w-full h-auto mb-4 object-cover scale-150 -z-10 mt-10 sm:scale-100 sm:mt-0'
                    priority
                />
            </div>
            <div className='max-w-[1240px] mx-auto px-4 mt-[-50px] sm:mt-[-100px] md:mt-[-140px] lg:mt-[-170px] xl:mt-[-208px]'>

                    <ProductGrid
                        products={products.reverse()}
                    />
            </div>
        </div>
    )
}

export default Page
