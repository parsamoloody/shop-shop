'use client'
import { redirect } from 'next/navigation'
import React, { useEffect } from 'react'

const Validate = () => {
    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch('http://localhost:3000/api/me?action=verify', {
                method: 'GET',
                credentials: 'include',
            })
            if (!response.ok) {
                redirect('/auth/login')
            }
            const userData = await response.json()
            if (userData.user.role !== "admin") {
                redirect('/auth/login')
            }
            console.log(userData.user.role)
        }

        fetchUser()
    }, [])
    return (
        <div>

        </div>
    )
}

export default Validate