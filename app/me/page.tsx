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
  console.log(data)

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
        console.error('Error fetching user:', error)
      }
    }

    fetchUser()
  }, [router])

  // Logout and reload page
  const handleLogout = async () => {
    try {
      await fetch('http://localhost:3000/api/me?action=delete', {
        method: 'GET',
        credentials: 'include',
      })
      location.reload()
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-20">
      <h1 className="text-2xl font-semibold">Welcome <b>{data?.name}</b></h1>

      {data && (
        <div className="mt-6 p-4 rounded-lg border border-[#47464c] h-80 relative shadow-md bg-white dark:bg-[#1e1e1e]">
          <Image
            src={userPlaceHolder}
            alt={data.name}
            width={80}
            height={80}
            className="absolute -mt-12 rounded-full overflow-hidden right-0 mr-6 border-4 border-white dark:border-[#1e1e1e]"
          />

          <div className="mt-6">
            <p className="mb-2"><strong>Name:</strong> {data.name}</p>
            <p className="mb-4"><strong>Email:</strong> {data.email}</p>
            <button
              onClick={handleLogout}
              className="px-2 text-sm mt-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition"
            >
              Log out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
