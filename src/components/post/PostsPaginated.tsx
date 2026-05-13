"use client";

import { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import PostsGrid from "@/src/components/post/PostsGrid";

const PAGE_SIZE = 9;

type Post = {
  id: number;
  title: string;
  body: string;
};

async function fetchPostsPage(page: number): Promise<Post[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${PAGE_SIZE}`
  );
  if (!res.ok) {
    throw new Error("Failed to load posts");
  }
  return res.json();
}

export default function PostsPaginated() {
  const [page, setPage] = useState(1);

  const { data: posts = [], isLoading, isError, isFetching, isPlaceholderData } =
    useQuery({
      queryKey: ["posts", "paginated", page, PAGE_SIZE],
      queryFn: () => fetchPostsPage(page),
      placeholderData: keepPreviousData,
    });

  const canGoPrev = page > 1;
  const canGoNext = posts.length === PAGE_SIZE;

  return (
    <div className="flex flex-col gap-4">
      <div className="relative min-h-[200px]">
        {isLoading && !isPlaceholderData ? (
          <p className="text-sm text-slate-500">Loading posts…</p>
        ) : isError ? (
          <p className="text-sm text-red-600">
            Could not load posts. Try again.
          </p>
        ) : (
          <PostsGrid posts={posts} />
        )}
        {isFetching && !isLoading ? (
          <div className="pointer-events-none absolute inset-0 flex items-start justify-end pt-2">
            <span className="rounded-full bg-white/90 px-2 py-1 text-[10px] font-medium text-slate-500 shadow-sm ring-1 ring-slate-200">
              Updating…
            </span>
          </div>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4">
        <p className="text-xs text-slate-500">
          Page {page}
          {isPlaceholderData ? " (showing previous page while loading)" : ""}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            disabled={!canGoPrev || isFetching}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Previous
          </button>
          <button
            type="button"
            disabled={!canGoNext || isFetching}
            onClick={() => setPage((p) => p + 1)}
            className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
