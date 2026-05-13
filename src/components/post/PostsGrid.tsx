import Link from "next/link";

type Post = {
  id: number | string;
  title: string;
  body: string;
};

export default function PostsGrid({ posts }: { posts: Post[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Link
          href={`/post/${post.id}`}
          key={post.id}
          className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
        >
          <div>
            <h3 className="line-clamp-2 text-lg font-semibold tracking-tight text-slate-900 group-hover:text-slate-950">
              {post.title}
            </h3>
            <p className="mt-2 line-clamp-3 text-sm text-slate-600">
              {post.body}
            </p>
          </div>
          <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
            <span>View details</span>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium">
              Post #{post.id}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

