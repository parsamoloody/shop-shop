import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  const protectedPaths = ['/dashboard/admin', '/me']
  const isProtected = protectedPaths.some(path => pathname.startsWith(path))

  if (!isProtected) {
    return NextResponse.next()
  }

  const response = await fetch('http://localhost:3000/api/me?action=verify', {
    method: 'GET',
    headers: {
      cookie: req.headers.get('cookie') || '',
    },
  })

  if (!response.ok) {
    return NextResponse.redirect(new  URL('/auth/login', req.url))
  }

  const data = await response.json()

  if (pathname.startsWith('/dashboard/admin') && data.user.role !== 'admin') {
    return NextResponse.redirect(new URL('/auth/login', req.url))
  }

  return NextResponse.next()
}
