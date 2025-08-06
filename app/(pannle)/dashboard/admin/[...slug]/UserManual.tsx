'use client'

import { useEffect, useState } from 'react'
import Navbar from './Navbar'

type User = {
  _id: string
  name: string
  email: string
  role: 'admin' | 'user'
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('http://localhost:4000/api/user/get-all')

      if (!res.ok) {
        throw new Error(`Error ${res.status}: ${res.statusText}`)
      }

      const data = await res.json()
      setUsers(data.users || [])
    } catch (err: any) {
      console.error('Failed to fetch users:', err)
      setError('Failed to load users. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const toggleRole = async (id: string, currentRole: User['role']) => {
    const newRole: User['role'] = currentRole === 'admin' ? 'user' : 'admin'

    try {
      const res = await fetch(`http://localhost:4000/api/user/edit/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: newRole }),
      })

      if (!res.ok) {
        throw new Error(`Error ${res.status}: ${res.statusText}`)
      }

      setUsers((prev) =>
        prev.map((user) =>
          user._id === id ? { ...user, role: newRole } : user
        )
      )
    } catch (err: any) {
      console.error('Error updating user role:', err)
      setError('Failed to update user role. Please try again.')
    }
  }

  return (
    <>
      <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">User List</h1>

        {error && (
          <p className="text-red-600 text-sm mb-3">
            {error}
          </p>
        )}

        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="space-y-3">
            {users.map((user) => (
              <li
                key={user._id}
                className="border p-3 rounded shadow-sm flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm capitalize">{user.role}</span>
                  <button
                    className="px-2 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition"
                    onClick={() => toggleRole(user._id, user.role)}
                  >
                    Make {user.role === 'admin' ? 'User' : 'Admin'}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}
