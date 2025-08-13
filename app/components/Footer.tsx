import React from 'react'
import { Input } from '@/ui/input'
import qr from '@/images/Qrcode 1.jpg'
import googlePlay from '@/images/googlepllay-1.jpg'
import appstore from '@/images/download-appstore.jpg'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full bg-background text-foreground py-10">
      <div className="max-w-screen-xl mx-auto grid gap-8 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        
        {/* Exclusive */}
        <div className=''>
          <h4 className="text-lg font-bold mb-3">EXCLUSIVE</h4>
          <p className="font-semibold">Subscribe</p>
          <p className="text-sm mb-3">Get 10% off your first order</p>
          <Input type="email" placeholder="Enter your email" className='border ' />
        </div>

        {/* Support */}
        <div className=''>
          <h4 className="text-lg font-bold mb-3">Support</h4>
          <ul className="space-y-1 text-sm">
            <li>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>

        {/* Account */}
        <div className=''>
          <h4 className="text-lg font-bold mb-3">Account</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/me" className="hover:text-primary transition-colors">My Account</Link></li>
            <li><Link href="/auth/login" className="hover:text-primary transition-colors">Login / Register</Link></li>
            {/* <li><Link href="/cart" className="hover:text-primary transition-colors">Cart</Link></li> */}
            {/* <li><Link href="/wishlist" className="hover:text-primary transition-colors">Wishlist</Link></li> */}
            <li><Link href="/product" className="hover:text-primary transition-colors">Shop</Link></li>
          </ul>
        </div>

        {/* Quick Link */}
        <div className=''>
          <h4 className="text-lg font-bold mb-3">Quick Link</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms-of-use" className="hover:text-primary transition-colors">Terms Of Use</Link></li>
            <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            <li><Link href="/contact-us" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Download App */}
        <div className=''>
          <h4 className="text-lg font-bold mb-3">Download App</h4>
          <p className="text-sm mb-3">Save $3 with App New User Only</p>
          <div className="flex items-start gap-3">
            <Image
              src={qr}
              alt="QR Code"
              width={80}
              height={80}
              className=""
              priority
            />
            <div className="flex flex-col gap-2">
              <Image
                src={appstore}
                alt="Download on App Store"
                width={120}
                height={40}
                className=""
              />
              <Image
                src={googlePlay}
                alt="Get it on Google Play"
                width={120}
                height={40}
                className=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-xs text-gray-400 mt-8 border-t border-gray-700 pt-4">
        Built by <Link href="https://github.com/parsamoloody" className='underline'>Parsa</Link> you can see more repository
      </div>
    </footer>
  )
}

export default Footer
