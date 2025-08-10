import Image from 'next/image'
import React from 'react'
import frame from '@/images/Frame 600.jpg'

const Banner = () => {
  return (
    <div
    className='mt-18 px-4 mx-auto max-w-[1240]'>
      <Image 
      src={frame}
      alt='Enhance your Music Experience'
      className='w-full'
      />
    </div>
  )
}

export default Banner
