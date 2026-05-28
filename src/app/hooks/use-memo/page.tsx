"use client"
import { useState, useMemo } from "react"

// An expensive function to simulate heavy calculation
function expensiveCalculation(num: number) {
  console.log("Calculating...");
  for (let i = 0; i < 100000000; i++) {
    num += 1;
  }
  return num;
}

export default function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["Learn React", "Learn Next.js"]);
  const [inputValue, setInputValue] = useState("");

  // This will ONLY re-calculate when `count` changes,
  // NOT when `todos` changes!
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-4xl font-extrabold mb-4 text-purple-600 dark:text-purple-400">useMemo</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          The `useMemo` hook returns a memoized value. It only recalculates the memoized value when one of the dependencies has changed, preventing expensive calculations on every render.
        </p>
      </div>

      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Example: Expensive Calculation</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-purple-500">Heavy Task</h3>
            <p>Count: <span className="font-bold">{count}</span></p>
            <p>Expensive Result: <span className="font-mono bg-gray-100 dark:bg-gray-900 px-2 rounded">{calculation}</span></p>
            <button 
              onClick={() => setCount(c => c + 1)}
              className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition shadow-sm active:scale-95"
            >
              Increment (+ triggers delay)
            </button>
          </div>

          <div className="space-y-4 border-t md:border-t-0 md:border-l pt-6 md:pt-0 md:pl-6 border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-lg text-blue-500">Unrelated State Update</h3>
            <div className="flex space-x-2">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="New todo"
                className="flex-1 px-3 py-2 border rounded-lg dark:bg-gray-900 dark:border-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                onClick={() => {
                  if (inputValue.trim()) {
                    setTodos([...todos, inputValue]);
                    setInputValue("");
                  }
                }}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition shadow-sm active:scale-95"
              >
                Add
              </button>
            </div>
            
            <ul className="list-disc pl-5 space-y-1 mt-4">
              {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
              ))}
            </ul>
            
            <p className="text-sm text-gray-500 mt-4">
              Adding a todo does <b>not</b> trigger the expensive calculation because the result is memoized!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
