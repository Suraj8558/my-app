"use client"
import { useReducer } from "react"

// 1. Define State & Action Types
interface State {
  count: number;
  error: string | null;
}

type Action = 
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' }
  | { type: 'set_error'; payload: string };

// 2. Define Reducer Function
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1, error: null };
    case 'decrement':
      if (state.count === 0) return { ...state, error: "Count cannot be negative!" };
      return { count: state.count - 1, error: null };
    case 'reset':
      return { count: 0, error: null };
    case 'set_error':
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export default function UseReducerExample() {
  // 3. Initialize useReducer
  const [state, dispatch] = useReducer(reducer, { count: 0, error: null });

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-4xl font-extrabold mb-4 text-pink-600 dark:text-pink-400">useReducer</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          The `useReducer` hook is an alternative to `useState` for managing complex state logic that involves multiple sub-values or when the next state depends on the previous one.
        </p>
      </div>

      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Example: Advanced Counter</h2>
        
        <div className="flex flex-col items-center p-8 bg-gray-50 dark:bg-gray-900 rounded-xl">
          <div className="text-6xl font-bold font-mono mb-6 bg-white dark:bg-gray-800 px-8 py-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            {state.count}
          </div>
          
          {state.error && (
            <div className="mb-6 px-4 py-2 bg-red-100 text-red-700 border border-red-200 rounded-lg text-sm font-medium animate-pulse">
              {state.error}
            </div>
          )}

          <div className="flex space-x-3">
            <button 
              onClick={() => dispatch({ type: 'decrement' })}
              className="w-12 h-12 flex items-center justify-center bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition shadow-sm text-xl font-bold active:scale-95"
            >
              -
            </button>
            <button 
              onClick={() => dispatch({ type: 'reset' })}
              className="px-6 h-12 bg-gray-800 text-white rounded-full hover:bg-gray-900 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-white transition shadow-sm font-medium active:scale-95"
            >
              Reset
            </button>
            <button 
              onClick={() => dispatch({ type: 'increment' })}
              className="w-12 h-12 flex items-center justify-center bg-pink-500 text-white rounded-full hover:bg-pink-600 transition shadow-sm text-xl font-bold active:scale-95"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
