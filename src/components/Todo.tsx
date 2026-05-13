"use client";

import { FormEvent, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Todo } from "@/src/type";

const fetchAllTodo = async (): Promise<Todo[]> => {
  const response = await fetch("/api/todos");
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  const payload = await response.json();
  return payload.data;
};

const addTodo = async (title: string): Promise<Todo> => {
  const res = await fetch("/api/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });

  if (!res.ok) {
    throw new Error("Failed to add todo");
  }

  const payload = await res.json();
  return payload.data;
};

const updateTodo = async (
  id: string,
  body: { title?: string; completed?: boolean }
): Promise<Todo> => {
  const res = await fetch(`/api/todos/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error("Failed to update todo");
  }

  const payload = await res.json();
  return payload.data;
};

const deleteTodo = async (id: string): Promise<void> => {
  const res = await fetch(`/api/todos/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error("Unable to delete todo");
  }
};

export default function TodoList() {
  const [title, setTitle] = useState<string>("");
  const queryClient = useQueryClient();

  const {
    data: todosQuery,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchAllTodo,
  });

  const createMutation = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      setTitle("");
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const toggleMutation = useMutation({
    mutationFn: ({ id, completed }: { id: string; completed: boolean }) =>
      updateTodo(id, { completed }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });


  const UpdateTodo = useMutation({
    mutationFn: ({
      id,
      completed,
      title,
    }: {
      id: string;
      completed: boolean;
      title?: string;
    }) => updateTodo(id, { completed, title }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title.trim()) return;
    createMutation.mutate(title.trim());
  };

  const todos = todosQuery ?? [];
  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <section className="w-full">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <header className="flex items-center justify-between gap-3">
          <div>
            <h1 className="text-xl font-semibold tracking-tight text-slate-900">
              Todo list
            </h1>
            <p className="mt-1 text-xs text-slate-500">
              Powered by TanStack Query with API routes.
            </p>
          </div>
          <div className="flex flex-col items-end text-xs text-slate-500">
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium">
              {todos.length} total • {completedCount} done
            </span>
          </div>
        </header>

        <form
          className="mt-5 flex flex-col gap-3 rounded-xl bg-slate-50 p-3 sm:flex-row sm:items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={title}
            placeholder="Add a new task..."
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-0 transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
            onChange={(e) => setTitle(e.target.value)}
          />

          <button
            type="submit"
            disabled={createMutation.isPending}
            className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {createMutation.isPending ? "Adding..." : "Add task"}
          </button>
        </form>

        {isLoading && (
          <p className="mt-4 text-sm text-slate-500">Loading todos...</p>
        )}
        {isError && (
          <p className="mt-4 text-sm text-red-600">
            Could not load todos. Try again.
          </p>
        )}

        <ul className="mt-5 space-y-2">
          {todos.map((todo: Todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-xs transition hover:border-slate-300"
            >
              <label className="flex flex-1 items-center gap-3">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-400"
                  checked={todo.completed}
                  onChange={() =>
                    toggleMutation.mutate({
                      id: todo.id,
                      completed: !todo.completed,
                    })
                  }
                />
                <span
                  className={
                    todo.completed
                      ? "line-through text-slate-400"
                      : "text-slate-800"
                  }
                >
                  {todo.title}
                </span>
              </label>
              <button
                type="button"
                onClick={() => UpdateTodo.mutate({ id: todo.id, completed: !todo.completed, title: "this data has Updated" })}
                className="ml-3 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 transition hover:bg-blue-100"
              >
                Update
              </button>

              <button
                type="button"
                onClick={() => deleteMutation.mutate(todo.id)}
                className="ml-3 rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-600 transition hover:bg-red-100"
              >
                Delete
              </button>
            </li>
          ))}

          {!isLoading && !todos.length && (
            <li className="mt-2 rounded-xl border border-dashed border-slate-200 bg-slate-50 px-3 py-4 text-center text-xs text-slate-500">
              No tasks yet. Add your first todo above.
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}