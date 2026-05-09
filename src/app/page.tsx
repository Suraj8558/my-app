import TodoList from "@/src/components/Todo"
// async function fetchTodos(): Promise<Todo[]> {
//   const response = await fetch("/api/todos");
//   if (!response.ok) {
//     throw new Error("Failed to fetch todos");
//   }
//   const payload = (await response.json()) as { data: Todo[] };
//   return payload.data;
// }

// async function createTodo(title: string): Promise<Todo> {
//   const response = await fetch("/api/todos", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ title }),
//   });

//   if (!response.ok) {
//     throw new Error("Failed to create todo");
//   }

//   const payload = (await response.json()) as { data: Todo };
//   return payload.data;
// }

// async function updateTodo(
//   id: string,
//   body: { title?: string; completed?: boolean },
// ): Promise<Todo> {
//   const response = await fetch(`/api/todos/${id}`, {
//     method: "PATCH",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(body),
//   });

//   if (!response.ok) {
//     throw new Error("Failed to update todo");
//   }

//   const payload = (await response.json()) as { data: Todo };
//   return payload.data;
// }

// async function deleteTodo(id: string): Promise<void> {
//   const response = await fetch(`/api/todos/${id}`, { method: "DELETE" });
//   if (!response.ok) {
//     throw new Error("Failed to delete todo");
//   }
// }

export default function Home() {
  // const todosQuery = useQuery({
  //   queryKey: ["todos"],
  //   queryFn: fetchTodos,
  // });

  // const createMutation = useMutation({
  //   mutationFn: createTodo,
  //   onSuccess: () => {
  //     setTitle("");
  //     queryClient.invalidateQueries({ queryKey: ["todos"] });
  //   },
  // });

  // const toggleMutation = useMutation({
  //   mutationFn: ({ id, completed }: { id: string; completed: boolean }) =>
  //     updateTodo(id, { completed }),

  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["todos"] });
  //   },
  // });

  // const deleteMutation = useMutation({
  //   mutationFn: deleteTodo,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["todos"] });
  //   },
  // });

  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const cleanTitle = title.trim();
  //   if (!cleanTitle) {
  //     return;
  //   }
  //   createMutation.mutate(cleanTitle);
  // };

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-2xl flex-col gap-6 px-6 py-10">
      <TodoList />
      {/* <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Enter a todo..."
          className="w-full rounded border px-3 py-2"
        />
        <button
          type="submit"
          disabled={createMutation.isPending}
          className="rounded bg-black px-4 py-2 text-white disabled:opacity-50"
        >
          {createMutation.isPending ? "Adding..." : "Add"}
        </button>
      </form> */}

      {/* {todosQuery.isLoading && <p>Loading todos...</p>}
      {todosQuery.isError && (
        <p className="text-red-600">Could not load todos. Try again.</p>
      )} */}

      {/* <ul className="space-y-2">
        {(todosQuery.data ?? []).map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between rounded border px-3 py-2"
          >
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() =>
                  toggleMutation.mutate({
                    id: todo.id,
                    completed: !todo.completed,
                  })
                }
              />
              <span className={todo.completed ? "line-through opacity-60" : ""}>
                {todo.title}
              </span>
            </label>
            <button
              type="button"
              onClick={() => deleteMutation.mutate(todo.id)}
              className="rounded bg-red-600 px-3 py-1 text-sm text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul> */}
    </main>
  );
}
