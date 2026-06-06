"use client";

import { useState } from "react";
import Link from "next/link";

export default function RoutingLayout({ children }: { children: React.ReactNode }) {
  const [layoutCounter, setLayoutCounter] = useState(0);

  return (
    <div className="p-6 border-4 border-blue-500 rounded-lg m-4 text-black dark:text-white">
      <h2 className="text-xl font-bold text-blue-500 mb-4">🟦 Layout Wrapper (State preserved)</h2>
      <div className="mb-4 flex items-center gap-4">
        <button 
          onClick={() => setLayoutCounter(c => c + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 font-bold"
        >
          Layout Counter: {layoutCounter}
        </button>
        <span className="text-sm opacity-70">Notice this counter does NOT reset when navigating!</span>
      </div>
      
      <div className="flex gap-4 mb-6 pb-4 border-b border-gray-300 dark:border-gray-700">
        <Link href="/learn-routing" className="text-blue-500 hover:underline font-semibold">Home</Link>
        <Link href="/learn-routing/page-a" className="text-blue-500 hover:underline font-semibold">Go to Page A</Link>
        <Link href="/learn-routing/page-b" className="text-blue-500 hover:underline font-semibold">Go to Page B</Link>
      </div>

      <div className="mt-4">
        {children}
      </div>
    </div>
  );
}
