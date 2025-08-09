import React from 'react'
import Aside from './Aside'
import HeroSlider from './HeroSlider'

const Hero = () => {
  return (
    <div className='flex mt-10 md:space-x-3 lg:space-x-4 justify-between max-w-[1240] mx-auto'>
     <div className=' overflow-hidden'>
       <Aside />
     </div>
     <div className='hidden md:block border-r-[0.5px] border-border-slate-500 dark:border-gray-500 -mt-10'></div>
      <div className='w-full justify-center overflow-hidden mx-4 md:mr-4'>
        <HeroSlider />
      </div>
    </div>
  )
}

export default Hero
