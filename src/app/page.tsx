import TodoList from "@/src/components/Todo";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-slate-50">
      <header className="border-b bg-white/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-sm font-semibold text-white">
              T
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-slate-900">
                Todo Dashboard
              </span>
              <span className="text-xs text-slate-500">
                Manage your tasks with TanStack Query
              </span>
            </div>
          </div>
          <a
            href="/post"
            className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900"
          >
            View blog posts
          </a>
        </div>
      </header>

      <main className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-4xl flex-col gap-6 px-6 py-8">
        <TodoList />
      </main>
    </div>
  );
}
