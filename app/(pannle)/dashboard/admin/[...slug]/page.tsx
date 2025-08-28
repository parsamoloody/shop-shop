import React, { Suspense } from 'react'
import Loading from './loading'
import NewArticle from './addArticle'
import { notFound } from 'next/navigation'
import Users from './UserManual'
import AddProduct from './addProduct'
import AddCategory from './addCategory'
import AddSubCategory from './addSubCategory'

const SLUGS = {
  ARTICLE: 'new-article',
  USERS: 'users',
  ADD_PRODUCT: 'new-product',
  ADD_CATEGORY: 'new-category',
  ADD_SUBCATEGORY: 'new-subcategory'
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
      case SLUGS.ADD_PRODUCT:
        return (
          <Suspense fallback={<Loading />}>
            <AddProduct />
          </Suspense>
        )

    case SLUGS.ADD_CATEGORY:
      return (
        <Suspense fallback={<Loading />}>
          <AddCategory />
        </Suspense>
      )

    case SLUGS.ADD_SUBCATEGORY:
      return (
        <Suspense fallback={<Loading />}>
          <AddSubCategory />
        </Suspense>
      )

    default:
      notFound()
  }
}

export default AdminPanel
