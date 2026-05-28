"use client"
import { useRef, useState } from "react"

export default function UseRefExample() {
  // Example 1: DOM Access
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Example 2: Mutable state without re-rendering
  const secretCountRef = useRef(0);
  const [visibleCount, setVisibleCount] = useState(0);

  const focusInput = () => {
    // We directly talk to the HTML element bypassing React's state
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const increaseSecretCount = () => {
    // This updates the value, but DOES NOT tell React to re-render the screen.
    secretCountRef.current += 1;
    console.log("Secret count is now:", secretCountRef.current);
  };

  const revealCount = () => {
    // Updating state TELLS React to re-render, which will also show the latest ref value!
    setVisibleCount(secretCountRef.current);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-4xl font-extrabold mb-4 text-yellow-600 dark:text-yellow-400">useRef</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Think of <code>useRef</code> as a <b>"secret box"</b> that can hold any value. Unlike <code>useState</code>, 
          when you change the value inside this box, <b>React does NOT re-render the component.</b>
          <br/><br/>
          It's mostly used for two things: <b>1. Accessing HTML elements directly</b> and <b>2. Remembering values behind the scenes without causing visual updates.</b>
        </p>
      </div>

      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Use Case 1: Directly Controlling HTML Elements</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Sometimes you need to do things React can't easily do via state, like focusing an input, scrolling to an element, or playing a video.
        </p>
        <div className="flex flex-col space-y-4 max-w-sm p-5 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-100 dark:border-yellow-900/50">
          <input 
            ref={inputRef}
            type="text" 
            placeholder="I am an input box..."
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-900 dark:border-gray-700 outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button 
            onClick={focusInput}
            className="px-4 py-2 bg-yellow-500 text-white font-medium rounded-lg hover:bg-yellow-600 transition shadow-sm active:scale-95 self-start"
          >
            Click me to Focus the Input
          </button>
        </div>
      </div>

      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Use Case 2: Remembering Values Without Re-rendering</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          If you want to track something (like how many times a background process ran) but you <b>don't</b> want the screen to flash or update immediately, you use <code>useRef</code>.
        </p>
        <div className="space-y-4 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-900/50">
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={increaseSecretCount}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition shadow-sm active:scale-95"
            >
              Add to Secret Count 🤫
            </button>
            <button 
              onClick={revealCount}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition shadow-sm active:scale-95"
            >
              Reveal Secret Count 👁️
            </button>
          </div>
          
          <div className="mt-6 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-inner text-center border border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-2 font-bold">What's visible on screen:</p>
            <p className="text-6xl font-bold text-blue-600 dark:text-blue-400">{visibleCount}</p>
          </div>
          
          <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded text-sm text-gray-700 dark:text-gray-300">
            <p className="font-bold mb-1">How to test this:</p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Click the gray "Add to Secret Count" button 5 times. Notice the number below stays at 0.</li>
              <li>The <code>useRef</code> value is actually increasing in the background!</li>
              <li>Click the blue "Reveal" button. This triggers a React re-render (via <code>useState</code>), pulling the hidden number out of the ref and putting it on screen!</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
