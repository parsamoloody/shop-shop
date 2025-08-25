'use client'
import ScrollGrid from '@/components/ScrollGrid'
import { ProductCardProps } from '@/types/type'
import SectionCard from '@/ui/SectionCard'
import React from 'react'

const Suggests = () => {
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
        <div className='max-w-[1240px] mx-auto px-4 mt-14'>
            <SectionCard
                title=''
                category='Related Item'
            >
                <ScrollGrid productData={products} />
            </SectionCard>
        </div>
    )
}

export default Suggests
