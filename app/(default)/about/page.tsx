import React from 'react'
import Story from './Story'
import MiniServices from './Services'
import Services from '@/components/sections/Services'
import Admins from './Admins'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "About Us | Shop Shop",
    description: "Learn more about our story, mission, and values. Discover how Shop Shop became South Asia's premier online shopping marketplace since 2015.",
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        title: "About Us | Shop Shop",
        description: "Learn more about our story, mission, and values. Discover how Shop Shop became South Asia's premier online shopping marketplace since 2015.",
        type: "website",
        url: "/about",
        siteName: "Shop Shop",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us | Shop Shop",
        description: "Learn more about our story, mission, and values. Discover how Shop Shop became South Asia's premier online shopping marketplace since 2015.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        }
    }
}

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
