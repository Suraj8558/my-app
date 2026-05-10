import TodoList from "@/src/components/Todo"

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-2xl flex-col gap-6 px-6 py-10">
      <TodoList />
     
    </main>
  );
}
