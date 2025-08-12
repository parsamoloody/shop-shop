import React from 'react'
import Story from './Story'
import MiniServices from './Services'
import Services from '@/components/sections/Services'
import Admins from './Admins'


const About = () => {
    return (
        <section className='max-w-[1240px] mx-auto md:px-4 py-8'>
            <Story />
            <MiniServices />
            <Admins />
            <Services />
        </section>
    )
}

export default About
