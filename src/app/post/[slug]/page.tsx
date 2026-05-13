import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = 60;
export async function generateStaticParams() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();
  return posts?.map((post: { id: number }) => ({
    slug: `${post.id}`,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug}`
  );
  if (!data.ok) {
    notFound();
  }
  const post = await data.json();

  return (
    <div className="min-h-screen w-full bg-slate-50">
      <header className="border-b bg-white/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/post" className="flex items-center gap-2 text-sm">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-xs text-slate-600">
              ←
            </span>
            <span className="font-medium text-slate-700 hover:text-slate-900">
              Back to posts
            </span>
          </Link>
          <span className="text-xs text-slate-500">
            Post #{post?.id}
          </span>
        </div>
      </header>

      <main className="w-full">
        <article className="mx-auto flex min-h-[70vh] w-full max-w-4xl flex-col gap-4 px-6 py-10">
          <header>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Post details
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
              {post?.title}
            </h1>
          </header>

          <section className="mt-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="whitespace-pre-line text-base leading-relaxed text-slate-700">
              {post?.body}
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}