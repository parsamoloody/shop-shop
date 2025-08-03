
type Post = {
  userId: string
  id: number
  title: string
  body: string
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch('http://localhost:4000/api/post/article', {
    next: { tags: ['post'] }, 
  })

  if (!res.ok) throw new Error('Failed to fetch posts')

  return res.json()
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Blog Posts</h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {post.body.slice(0, 100)}...
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Author ID: {post.userId}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
