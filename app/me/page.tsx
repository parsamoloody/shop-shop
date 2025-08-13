'use client'

import userPlaceHolder from "@/images/Portrait_Placeholder.png"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'


type User = {
  id: string
  email: string
  role: string
  name: string
}

export default function DashboardPage() {
  const [data, setData] = useState<User | null>(null)
  const router = useRouter()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/me?action=verify', {
          method: 'GET',
          credentials: 'include',
        })

        if (!response.ok) {
          throw new Error('["/me"] Error on response data')
        }
        const userData = await response.json()
        setData(userData.user)
      } catch (error) {
        console.error('Error fetching user',)
      }
    }

    fetchUser()
  }, [router])

  const handleLogout = async () => {
    try {
      await fetch('/api/me?action=delete', {
        method: 'GET',
        credentials: 'include',
      })
      location.reload()
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }

  return (
    <div className="flex justify-center min-h-auto bg-gray-50 dark:bg-background px-4">
      <div className="max-w-sm w-full bg-white dark:bg-gray-800 shadow-lg p-6 text-center">
        {data ? (
          <>
            <div className="relative mx-auto w-24 h-24">
              <Image
                src={userPlaceHolder}
                alt={data.name}
                fill
                className="rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-md"
              />
            </div>
            <h1 className="mt-4 text-2xl font-semibold text-gray-900 dark:text-white">
              {data.name}
            </h1>
            <p className="text-gray-500 dark:text-gray-400">{data.email}</p>
            <p className="mt-2 inline-block px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
              {data.role}
            </p>

            <div className="mt-6">
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 text-sm font-medium text-white cursor-pointer bg-red-600 hover:bg-red-700 transition-colors"
              >
                Log Out
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-500 dark:text-gray-400">Loading profile...</p>
        )}
      </div>
    </div>
  )
}
