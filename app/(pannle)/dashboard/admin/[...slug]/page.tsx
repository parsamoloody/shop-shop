import React, { Suspense } from 'react'
import Loading from './loading'
import NewArticle from './addArticle'
import { notFound } from 'next/navigation'
import Users from './UserManual'

const SLUGS = {
  ARTICLE: 'new-article',
  USERS: 'users',
  ADD_PRODUCT: 'new-product'
} as const

const AdminPanel = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) => {

  const { slug } = await params
  const action = slug[0]?.trim()

  switch (action) {
    case SLUGS.ARTICLE:
      return (
        <Suspense fallback={<Loading />}>
          <NewArticle />
        </Suspense>
      )

    case SLUGS.USERS:
      return (
        <Suspense fallback={<Loading />}>
          <Users />
        </Suspense>
      )

    default:
      notFound()
  }
}

export default AdminPanel
