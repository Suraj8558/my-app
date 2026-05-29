"use client"
import { useState, useCallback, memo } from "react"

// A child component wrapped in React.memo
// It only re-renders if its props change
const TodoList = memo(function TodoList({ todos, addTodo }: { todos: string[], addTodo: () => void }) {
  console.log("TodoList Rendered!"); // You will see this only when todos change OR addTodo reference changes
  
  return (
    <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
      <h3 className="font-bold mb-3">My Todos</h3>
      <ul className="list-disc pl-5 mb-4 space-y-1">
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button 
        onClick={addTodo}
        className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition shadow-sm active:scale-95"
      >
        Add Todo
      </button>
    </div>
  );
});

export default function UseCallbackExample() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["Todo 1", "Todo 2"]);

  // We use useCallback to memoize the function.
  // The function reference will remain exactly the same across re-renders
  // as long as the dependencies (in this case `todos`) don't change.
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, []);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-4xl font-extrabold mb-4 text-indigo-600 dark:text-indigo-400">useCallback</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          The `useCallback` hook returns a memoized callback. It is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.
        </p>
      </div>

      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Example: Optimizing Child Renders</h2>
        
        <div className="mb-6">
          <p className="mb-2">Parent Count: <span className="font-bold text-lg">{count}</span></p>
          <button 
            onClick={() => setCount(c => c + 1)}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-white transition shadow-sm active:scale-95"
          >
            Increment Parent
          </button>
          <p className="text-sm text-gray-500 mt-2">
            Clicking this increments parent state, but does <b>not</b> re-render the TodoList component, because the `addTodo` function reference is memoized via `useCallback`.
          </p>
        </div>

        <TodoList todos={todos} addTodo={addTodo} />
      </div>
    </div>
  )
}
