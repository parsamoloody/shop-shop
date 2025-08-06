'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const user = {
    name: 'Parsa',
    avatar: 'https://i.pravatar.cc/40',
  }

  return (
    <header className="border-gray-800 border-b h-16 px-6 flex items-center justify-between bg-white dark:bg-black shadow-sm">
      <div className="flex items-center gap-2">
        <img
          src="/logo.svg"
          alt="Logo"
          className="h-8 w-auto"
        />
        <span className="text-lg font-semibold text-gray-800 dark:text-white">ShopShop</span>
      </div>
      <ul className='flex gap-x-6'>
        <li><Link href="/dashboard/admin/users">users</Link></li>
        <li><Link href="/dashboard/admin/new-article">new article</Link></li>
        <li><Link href="/dashboard/admin/new-product">new product</Link></li>
      </ul>
      
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-700 dark:text-white">{user.name}</span>
        <Image
          src={user.avatar}
          alt={user.name}
          className="h-10 w-10 rounded-full border"
        />
      </div>
    </header>
  )
}

export default Navbar
