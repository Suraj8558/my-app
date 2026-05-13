import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export default async function Page() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  })
  if (!data.ok) {
    notFound()
  }
  const posts = await data.json();

  return (
    <div className="min-h-screen w-full bg-slate-50">
      <header className="border-b bg-white/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-sm font-semibold text-white">
              P
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-slate-900">
                Blog Posts
              </span>
              <span className="text-xs text-slate-500">
                JSONPlaceholder demo feed
              </span>
            </div>
          </Link>
          <nav className="flex items-center gap-4 text-sm text-slate-600">
            <Link
              href="/post"
              className="rounded-full bg-slate-900 px-3 py-1.5 text-xs font-medium text-white shadow-sm transition hover:bg-slate-800"
            >
              All posts
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
              Latest posts
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Browse posts fetched from{" "}
              <span className="font-mono text-xs">
                jsonplaceholder.typicode.com
              </span>
              .
            </p>
          </div>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
            {posts.length} posts
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts?.map((post: any) => (
            <Link
              href={`/post/${post?.id}`}
              key={post.id}
              className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
            >
              <div>
                <h3 className="line-clamp-2 text-lg font-semibold tracking-tight text-slate-900 group-hover:text-slate-950">
                  {post?.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-slate-600">
                  {post?.body}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                <span>View details</span>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium">
                  Post #{post?.id}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}