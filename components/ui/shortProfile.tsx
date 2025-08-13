'use client'
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import userPlaceholder from "@/images/Portrait_Placeholder.png";
import { cn } from "@/lib/utilities/ctx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoIosLogOut } from "react-icons/io";
import Link from "next/link";

const shortProfileVariants = cva(
  "inline-flex items-center text-white dark:border-none dark:bg-gray-900 dark:bg-transparent border border-gray-400 md:border-none p-2 rounded-lg flex items-center text-xs font-semibold",
  {
    variants: {
      variant: {
        default: "w-22",

      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ShortProfileProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof shortProfileVariants> {
  size?: number;
}

type User = {
  id: string
  email: string
  role: string
  name: string
}

const ShortProfile = React.memo(function ShortProfile({
  className,
  variant,
  size = 22,
  ...props
}: ShortProfileProps) {

  const [data, setData] = React.useState<User | null>(null)
  const router = useRouter()

  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/me?action=verify', {
          method: 'GET',
          credentials: 'include',
        })

        if (!response.ok) {
          // throw new Error('["/me"] Error on response data')
          return
        }
        const userData = await response.json()
        setData(userData.user)
      } catch (error) {
        // console.error('Error fetching user:', error)
      }
    }

    fetchUser()
  }, [router])

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
      <Link
      href={data? "/me" : "/auth/login"}
      
        className={cn(shortProfileVariants({ variant }), className)}
      >
        <Image
          src={userPlaceholder}
          alt="User Profile Picture"
          width={size}
          height={size}
          className="rounded-full object-cover"
          priority
        />
        <span className="w-full ml-4 text-gray-800 md:hidden">{data?.name || "Login"}</span>
        {data && (
          <button
          onClick={handleLogout}
          className="text-sm text-white cursor-pointer p-1 rounded"
        >
          <IoIosLogOut size={22} 
          className="text-red-700 dark:text-red-400 md:hidden"/>
        </button>
        )}
      </Link>
    )
  // );
});

export { ShortProfile, shortProfileVariants };
