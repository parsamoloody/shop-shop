'use client'
import React, { useState } from 'react'
import AuthForm from '../../../components/AuthForm'
import axios from 'axios'
import Link from 'next/link'

function Fulfilled({ email }: { email: string }) {
    return (
        <div className='max-w-sm mx-auto mt-20 p-10 bg-white dark:bg-black shadow-md rounded-lg leading-9'>
            <h3 className='text-2xl text-center text-gray-50 mb-10'>Check your E-mail</h3>
            <p className=''>we send a link to <b className='text-sky-400'>{email}</b> for reset your password</p>
            <Link href="/" className='underline'>Back to Home</Link>
        </div>
    )
}

const ForgotPassword = () => {
    const [msg, setMsg] = useState("")
    const [onSuccess, setOnSuccess] = useState(false)
    const [email, setEmail] = useState("")
    const handleSubmit = async (data: { email?: string }) => {
        try {
            const res = await axios.post('http://localhost://4000/api/login', data)
            if (res.status === 200 || 201) {
                data.email ? setEmail(data.email) : ""
                setOnSuccess(true)
            }

        } catch (e: any) {
            setMsg(e.response?.data.message || "Failed to submit")
        }
    }

    return <div>
        {
            onSuccess ? (
                <Fulfilled email={email} />
            ) :
                <AuthForm message={msg} type='resetpassword' onSubmit={handleSubmit} />
        }
    </div>
}

export default ForgotPassword
