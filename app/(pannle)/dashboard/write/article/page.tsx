'use client'

import { Suspense } from 'react'
import Page from './pageContent'

export default function Wrapper() {
  return (
    <Suspense fallback={<div className="text-white">Loading...</div>}>
      <Page />
    </Suspense>
  )
}