'use client'

import { useEffect, useState } from 'react'
import Navbar from './Navbar'

type User = {
  id: string
  name: string
  email: string
  role: 'admin' | 'user'
}

export default function UsersPage() {
  const [users, setUsers] = useState<any>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    setLoading(true)
    try {
      const res = await fetch('http://localhost:4000/api/user/get-all')
      const data = await res.json()
      setUsers(data)
    } catch (err) {
      console.error('Failed to fetch users', err)
    } finally {
      setLoading(false)
    }
  }

  const toggleRole = async (id: string, currentRole: User['role']) => {
    const newRole = currentRole === 'admin' ? 'user' : 'admin'

    try {
      const res = await fetch(`http://localhost:4000/api/user/edit/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: newRole }),
      })

      if (res.ok) {
        setUsers((prev: any) =>
          prev.map((user: any) =>
            user.id === id ? { ...user, role: newRole } : user
          )
        )
      } else {
        console.error('Failed to update role')
      }
    } catch (err) {
      console.error('Error updating user role', err)
    }
  }

  return (
    <>
    <Navbar />
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">User List</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-3">
          {users?.users.map((user: any, i: number) => (
            <li key={i} className="border p-3 rounded shadow-sm flex justify-between items-center">
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm">{user.role}</span>
                <button
                  className="px-2 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
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
