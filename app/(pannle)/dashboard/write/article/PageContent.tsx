'use client'
export const dynamic = 'force-dynamic'

import { useId, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function Page() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const searchParams = useSearchParams()

    const userId = searchParams.get('userid')
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const secretKey = process.env.NEXT_PUBLIC_API_SECRET
            if (!secretKey) throw new Error("NEXT_PUBLIC_API_SECRET not defined in environment variable")
            const res = await fetch(`http://localhost:4000/post`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': secretKey
                },
                body: JSON.stringify({ title, body: description, userId }),
            })

            if (!res.ok) {
                throw new Error('Failed to submit')
            }

            const result = await res.json()
            console.log('Submitted:', result)

            setTitle('')
            setDescription('')
        } catch (error) {
            console.error('Error submitting:', error)
        }
    }

    return (
        <main className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
            <div className="w-full max-w-lg bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                    Submit New Post
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Title
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            placeholder="Enter title"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Description
                        </label>
                        <textarea
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            placeholder="Enter description"
                            rows={4}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </main>
    )
}