import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function Page() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts")
  if (!data.ok) {
    notFound()
  }
  const posts = await data.json()

  return (
    <div className="w-full">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-6 px-6 py-10">
      <h1>Posts</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {posts?.map((post:any) => (
          <Link href={`/post/${post?.id}`} className="py-2 px-2 w-full border" key={post.id}>
              <h3 className="text-2xl">
                {post?.title}
              </h3>
              <p className="mt-4 text-base">{post?.body}</p> 
          </Link>
        ))}
      </div>
      </div>

    </div>
  )
}