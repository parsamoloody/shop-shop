import React from 'react'
import Hero from '../components/Hero'
import NewProducts from '../components/sections/NewProducts'
import CategorySection from '../components/sections/CategorySection'
import BestSellingProduct from '../components/sections/BestSellingProduct'
import SpaceLine from '@/ui/spaceLine'
import Banner from '../components/sections/Banner'
import ExploreOurProducts from '../components/sections/exploreOurProducts'
import GridBanner from '../components/sections/GridBanner'
import Services from '../components/sections/Services'

const page = () => {
  return (
    <div className=''>
      <Hero />
      <NewProducts />
      <SpaceLine />
      <CategorySection />
      <SpaceLine />
      <BestSellingProduct />
      <Banner />
      <ExploreOurProducts />
      <GridBanner />
      <Services />
    </div>
  )
}

export default page
