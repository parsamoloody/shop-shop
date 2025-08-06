'use client'

import { useState } from 'react'

import type IProductDocument from '@/types/type'

const initialForm: Partial<IProductDocument> = {
  name: '',
  description: '',
  category: [],
  createdBy: "parsa",
  price: {
    original: 0,
    currency: 'USD',
    discount: {
      amount: 0,
      type: 'fixed',
    },
  },
}

export default function ProductForm() {
  const [form, setForm] = useState<Partial<IProductDocument>>(initialForm)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target

    // Handle nested fields
    if (name.includes('price.')) {
      const [, field] = name.split('.')
      setForm((prev) => ({
        ...prev,
        price: {
          ...prev.price!,
          [field]: field === 'original' ? parseFloat(value) : value,
        },
      }))
    } else if (name.includes('discount.')) {
      const [, field] = name.split('.')
      setForm((prev) => ({
        ...prev,
        price: {
          ...prev.price!,
          discount: {
            ...prev.price?.discount!,
            [field]:
              field === 'amount'
                ? parseFloat(value)
                : value,
          },
        },
      }))
    } else if (name === 'category') {
      setForm((prev) => ({ ...prev, category: value.split(',').map((c) => c.trim()) }))
    } else {
      setForm((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const res = await fetch('http://localhost:4000/api/product/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        throw new Error(`Error ${res.status}: ${res.statusText}`)
      }

      setSuccess(true)
      setForm(initialForm)
    } catch (err: any) {
      setError(err.message || 'Failed to create product')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6 rounded shadow-sm">
      <h2 className="text-2xl font-bold mb-4">Create Product</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Name"
          value={form.name || ''}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description || ''}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="category"
          placeholder="Category (comma separated)"
          value={form.category?.join(', ') || ''}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          name="price.original"
          type="number"
          placeholder="Original Price"
          value={form.price?.original ?? ''}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <select
          name="price.currency"
          value={form.price?.currency || 'USD'}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="USD">USD</option>
          <option value="IRR">IRR</option>
        </select>

        <input
          name="discount.amount"
          type="number"
          placeholder="Discount Amount"
          value={form.price?.discount?.amount ?? ''}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <select
          name="discount.type"
          value={form.price?.discount?.type || 'fixed'}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="fixed">Fixed</option>
          <option value="percent">Percent</option>
        </select>

        <input
          name="discount.expiresAt"
          type="datetime-local"
          value={form.price?.discount?.expiresAt || ''}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create Product'}
        </button>

        {success && (
          <p className="text-green-600 text-sm">Product created successfully!</p>
        )}
        {error && (
          <p className="text-red-600 text-sm">Error: {error}</p>
        )}
      </form>
    </div>
  )
}
