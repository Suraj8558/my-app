import { notFound } from "next/navigation";

export const dynamic = "force-static";
 export async function generateStaticParams () {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await data.json()
    return posts?.map((post:any) => ({
      slug: `${post?.id}`,
    }))
  }

export default async function Page ({params}: any) {
  const {slug} = await params

  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
  if (!data.ok) {
    notFound()
  }
  const post = await data.json();

 
  return (
    <div className="w-full mx-auto flex min-h-screen max-w-2xl flex-col gap-6 px-6 py-10">
      <h3 className="text-2xl">
        {post?.title}
      </h3>
      <p className="mt-3 text-base">{post?.body}</p> 
    </div>
  )
}