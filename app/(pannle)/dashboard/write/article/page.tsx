'use client'

import { Suspense } from 'react'

export default function Wrapper() {
  return (
    <Suspense fallback={<div className="text-white">Loading...</div>}>
      {/* <Page /> */}
      <div>Not Found</div>
    </Suspense>
  )
}