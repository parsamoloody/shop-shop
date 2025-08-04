import React, { Suspense } from 'react'
import Validate from './Validate'
import Loading from './loading'

const AdminPanel = async ({
  params,
}: {
  params: Promise<{ slug: ['id'] }>
}) => {


  const { slug } = await params
  return (
   <Suspense fallback={<Loading />}>
     <div>
      <Validate  />
      <p>{slug[0]}</p>
    </div>
   </Suspense>
  )
}

export default AdminPanel
