import React from 'react'
import Hero from '../components/Hero'
import NewProducts from '../components/NewProducts'

const page = () => {
  return (
    <div className=''>
      <Hero />
      <NewProducts />
       <div className='border-b-[0.5px] border-border-slate-500 my-20 dark:border-gray-500 max-w-[1240] mx-auto'></div>
    </div>
  )
}

export default page
