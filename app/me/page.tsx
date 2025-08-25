'use client'

import userPlaceHolder from "@/images/Portrait_Placeholder.png"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useLogOut, useVerifyUser } from "../hooks/user/userOrder"
import Loading from "../(pannle)/dashboard/admin/[...slug]/loading"

type User = {
  id: string
  email: string
  role: string
  name: string
}

export default function DashboardPage() {
  const router = useRouter()
  const { data, isLoading, isError } = useVerifyUser()
  const { mutate: logout } = useLogOut()
  const handleLogout = async () => {
    try {
      logout()
      router.push('/auth/login')
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }

  if (isLoading) return <Loading />
  if (isError) return <p>Error fetching user profile.</p>

  return (
    <div className="flex justify-center min-h-auto bg-gray-50 dark:bg-background px-4">
      <div className="max-w-sm w-full bg-white dark:bg-gray-800 shadow-lg p-6 text-center">
        {data ? (
          <>
            <div className="relative mx-auto w-24 h-24">
              <Image
                src={userPlaceHolder}
                alt={data.user.name}
                fill
                className="rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-md"
              />
            </div>
            <h1 className="mt-4 text-2xl font-semibold text-gray-900 dark:text-white">
              {data.user.name}
            </h1>
            <p className="text-gray-500 dark:text-gray-400">{data.user.email}</p>
            <p className="mt-2 inline-block px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
              {data.user.role}
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
          <p className="text-gray-500 dark:text-gray-400">No user data available.</p>
        )}
      </div>
    </div>
  )
}
