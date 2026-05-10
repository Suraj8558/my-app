"use client"
import {useState ,FormEvent}from "react"
import { useQuery , useMutation, useQueryClient} from "@tanstack/react-query";
import {Todo} from '@/src/type'


 const fetchAllTodo = ( async () : Promise<Todo[]> => {
     const response = await fetch("/api/todos");
     if(!response.ok) {
       throw new Error("failed to fetch the data")
     }
      const payload = await response.json();

     return payload.data
  })

  const addTodo = (async ( title: string): Promise<Todo>   => {
      const res = await fetch("/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({title})
      })

      if (!res.ok) {
        throw new Error( "failed to add the data")
      }

      const payload = await res.json();
      return payload.data 

  })  

  const updateTodo = (async (id: string, body:{title?: string, completed?: boolean}) : Promise<Todo>  => {
    
      const res = await fetch(`/api/todos/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)  
      });
      if(!res.ok) {
        throw new Error("faild to update the todo")
      } 

      const payload = await res.json()

      return payload.data
  })


const deleteTodo = (async (id:string):Promise<void>  => {
    const res = await fetch(`/api/todos/${id}`, {
    method: "DELETE",
    headers: {"Content-Type": "application/json"},
    })

    if(!res.ok) {
      throw new Error ("Unabale to delete the todo ")
    }
})

export default function TodoList() {
  const [title, setTitle] = useState<string>("");
  const queryClient = useQueryClient();
  const { data:todosQuery ,isLoading , isError} = useQuery({
    queryKey: ['todos'],
    queryFn: fetchAllTodo,
  })

  const createMutation = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
    setTitle("");
      queryClient.invalidateQueries({queryKey: ["todos"]})
    }
  }) 

  
  const toggleMutation  = useMutation({
    mutationFn: ({ id, completed }: { id: string; completed: boolean }) =>
      updateTodo(id, { completed }),
      onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["todos"]})
    }
  })

  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: (() => {
      queryClient.invalidateQueries({queryKey: ["todos"]})
    })
  })

  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createMutation.mutate(title)
  }

  
    return (
      <div className="container">
            <h1 className="text-3xl font-semibold mb-4">Todo App (TanStack Query)</h1>
          <form className="flex gap-2" onSubmit={handleSubmit}>
            <input type="text"
              value={title}
              placeholder="Create your list " 
              className="w-full rounded border px-3 py-2"
              onChange={(e)=> setTitle(e.target.value)}
            /> 

            <button type="submit" disabled={createMutation.isPending} className="rounded bg-black px-4 py-2 text-white disabled:opacity-50"> {createMutation.isPending ? "Adding..." : "Add"} </button>
          </form>
          {isLoading && <p className="mt-5">Loading todos...</p>}
          {isError && (
            <p className="text-red-600">Could not load todos. Try again.</p>
          )}
          <ul className="space-y-2 mt-5">
        {(todosQuery ?? []).map((todo:Todo) => (
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
      </ul>
      </div>


    )
} 