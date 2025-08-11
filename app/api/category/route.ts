// app/api/categories/route.ts
import { Category } from '@/types/type'
import { NextResponse } from 'next/server'

const categories: Category[] = [
  { id: 1, name: 'Phone' },
  { id: 2, name: 'Computers' },
  { id: 3, name: 'Smartwatch' },
  { id: 4, name: 'Camera' },
  { id: 5, name: 'Headphones' },
  { id: 6, name: 'Gamings' },
]

// 🚀 GET handler
export async function GET() {
  return NextResponse.json(categories, {
    status: 200,
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable', // 1 year cache for ultimate performance
    },
  })
}
