import Link from "next/link";
import PostsPaginated from "@/src/components/post/PostsPaginated";

export default function Page() {
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
              </span>{" "}
              with TanStack Query pagination.
            </p>
          </div>
        </div>

        <PostsPaginated />
      </main>
    </div>
  );
}
