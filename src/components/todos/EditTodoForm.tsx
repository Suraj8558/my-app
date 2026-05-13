"use client"
import { FormEvent, useState } from "react"
import { useMutation,useQueryClient } from "@tanstack/react-query";
import { Todo } from "@/src/lib/todoStore";

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


export default function EditForm({
  todoID,
  handleSubmit,
}: {
  todoID: string;
  handleSubmit: (isEditing: boolean, todoID: string) => void;
}) {
	const [title, setTitle] = useState<string>("");
	console.log("todoID", todoID);
	const  queryClient = useQueryClient()
	const UpdateTodo = useMutation({
		mutationFn: ({
			id,
			completed,
			title,
		}: {
			id: string;
			completed?: boolean;
			title?: string;
		}) => updateTodo(id, { completed, title }),
	
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["todos"] });
		},
	});
 const handleFormSubmit = ( (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
			setTitle("");
		UpdateTodo.mutate({
			id: todoID, 
			title: title
		})
    handleSubmit(false, "")

; })

	return (
		<div className="form-wrapper bg-white p-4 rounded-lg shadow-md">
			<form onSubmit={handleFormSubmit} className="flex gap-2">
				<input type="text" name="title" placeholder="Update Title"  value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 rounded-md border border-gray-300"/>
				<button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Update</button>
			</form>
		</div>
	)
};