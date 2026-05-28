"use client"
import { useState, useEffect } from "react"

export default function UseEffectExample() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Example 1: Timer (Component Lifecycle & Cleanup)
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
    }
    // Cleanup function runs on unmount or before re-running the effect
    return () => clearInterval(interval);
  }, [isActive]); // Dependency array: only re-run if isActive changes

  // Example 2: Event Listener (Global subscriptions)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []); // Empty dependency array: runs only once on mount

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-4xl font-extrabold mb-4 text-green-600 dark:text-green-400">useEffect</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          The `useEffect` hook lets you perform side effects in functional components, like data fetching, subscriptions, or manually changing the DOM.
        </p>
      </div>

      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Example 1: Timer with Cleanup</h2>
        <div className="flex items-center space-x-6 mb-4">
          <div className="text-4xl font-mono bg-gray-100 dark:bg-gray-900 px-6 py-4 rounded-xl shadow-inner">
            {seconds}s
          </div>
          <div className="space-x-3">
            <button 
              onClick={() => setIsActive(!isActive)}
              className={`px-4 py-2 text-white rounded-lg transition shadow-sm active:scale-95 ${isActive ? 'bg-amber-500 hover:bg-amber-600' : 'bg-green-500 hover:bg-green-600'}`}
            >
              {isActive ? 'Pause' : 'Start'}
            </button>
            <button 
              onClick={() => { setIsActive(false); setSeconds(0); }}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition shadow-sm active:scale-95"
            >
              Reset
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-500">
          This effect sets up a `setInterval` when active, and crucially, cleans it up in the return function to prevent memory leaks.
        </p>
      </div>

      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Example 2: Window Event Listener</h2>
        <div className="h-40 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-2 border-dashed border-blue-200 dark:border-blue-800 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
            background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, blue 0%, transparent 50px)`
          }} />
          <div className="text-center z-10">
            <p className="font-medium text-lg">Mouse Position</p>
            <p className="font-mono text-xl text-blue-600 dark:text-blue-400">X: {mousePos.x}, Y: {mousePos.y}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
