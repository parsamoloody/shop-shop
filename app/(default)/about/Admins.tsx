import P0 from '@/images/Frame 874.jpg'
import P1 from '@/images/Frame 875.jpg'
import P2 from '@/images/Frame 876.jpg'
import Image from 'next/image'
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import React from 'react'

interface Social {
  twitter: string;
  instagram: string;
  linkedin: string;
}

interface Admin {
  name: string;
  title: string;
  description: string;
  image: any;
  socials: Social;
}

const adminData: Admin[] = [
  {
    name: "Parsa Moludi",
    title: "CEO & Founder",
    description: "Strategic leader with 10+ years of experience",
    image: P0,
    socials: {
      twitter: "https://twitter.com/ParsaMoloodii",
      instagram: "https://instagram.com/parsa-moloody",
      linkedin: "https://linkedin.com/in/microsoft"
    }
  },
  {
    name: "Jane Smith",
    title: "CTO",
    description: "Tech innovator with expertise in e-commerce",
    image: P1,
    socials: {
      twitter: "https://twitter.com/twitternews",
      instagram: "https://instagram.com/instagram",
      linkedin: "https://linkedin.com/in/microsoft"
    }
  },
  {
    name: "Mike Johnson",
    title: "Head of Operations",
    description: "Operations specialist focused on growth",
    image: P2,
    socials: {
      twitter: "https://twitter.com/twitternews",
      instagram: "https://instagram.com/instagram",
      linkedin: "https://linkedin.com/in/microsoft"
    }
  }
];

const Admins = () => {
  return (
    <div>
      <div className="container mx-auto px-4 mt-22">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminData.map((admin, index) => (
            <div key={index} className="p-4 transition-all duration-300">
              <Image
                src={admin.image}
                alt={admin.name}
                className="w-full h-auto mb-4"
                placeholder='blur'
                loading='lazy'
              />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {admin.name}
              </h2>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
                {admin.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {admin.description}
              </p>
              <div className="flex space-x-4">
                <a
                  href={admin.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-400 transition-colors"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href={admin.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href={admin.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Admins
