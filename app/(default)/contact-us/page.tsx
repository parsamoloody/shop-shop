import { Button } from '@/ui/button'
import React from 'react'
import { FaPhone, FaEnvelope } from 'react-icons/fa'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact Us | Shop Shop",
  description: "Get in touch with Shop Shop's customer service team. We're here to help with your questions, feedback, and support needs.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact Us | Shop Shop",
    description: "Get in touch with Shop Shop's customer service team. We're here to help with your questions, feedback, and support needs.",
    type: "website",
    url: "/contact-us",
    siteName: "Shop Shop",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Contact Us | Shop Shop",
    description: "Get in touch with Shop Shop's customer service team. We're here to help with your questions, feedback, and support needs.",
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

const ContactPage = () => {
  return (
    <div className="container mx-auto max-w-[1240px] px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side - Contact Info */}
        <div className="lg:w-1/3 space-y-6">
          <div className="flex items-center space-x-4 p-4 border border-gray-200 dark:border-gray-700">
            <FaPhone className="text-2xl text-white dark:text-gray-300 bg-secondary w-10 h-10 p-2 rounded-full" />
            <div>
              <h3 className="font-bold text-lg dark:text-foreground">Phone</h3>
              <p className="text-gray-600 dark:text-gray-300">+1 234 567 890</p>
            </div>
          </div>

          <div className="w-full h-px bg-gray-200 dark:bg-gray-700" />

          <div className="flex items-center space-x-4 p-4 border border-gray-200 dark:border-gray-700">
            <FaEnvelope className="text-2xl text-white dark:text-gray-300 bg-secondary w-10 h-10 p-2 rounded-full" />
            <div>
              <h3 className="font-bold text-lg dark:text-foreground">Email</h3>
              <p className="text-gray-600 dark:text-gray-300">support@example.com</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="lg:w-2/3">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full p-3 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full p-3 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <Button >Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage