"use client";

import { useState } from "react";

export default function InteractiveCounter() {
  const [count, setCount] = useState(0);

  // This console.log will appear in the BROWSER console!
  console.log("🌐 CLIENT COMPONENT: I am rendering on the Client!");

  return (
    <div className="p-6 bg-green-100 border-4 border-green-500 rounded-lg dark:bg-green-900/30 text-black dark:text-white">
      <h2 className="text-xl font-bold text-green-800 dark:text-green-300">🌐 Client Component (InteractiveCounter.tsx)</h2>
      <ul className="list-disc pl-5 mt-2 mb-4 opacity-80">
        <li>Has the <code>"use client"</code> directive at the very top.</li>
        <li>Runs in the browser (and pre-renders on the server).</li>
        <li><strong>Can</strong> use React Hooks and listen to events (like <code>onClick</code>).</li>
      </ul>
      
      <button 
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 font-bold shadow-md transition-transform active:scale-95"
      >
        Clicked {count} times
      </button>
    </div>
  );
}
