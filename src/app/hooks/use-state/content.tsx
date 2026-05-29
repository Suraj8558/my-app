"use client"
import { useState } from "react"

// --- Components for Example 3: Lifting State Up ---

// Child A is an input that updates the parent state
function ChildInput({ text, onTextChange }: { text: string, onTextChange: (t: string) => void }) {
  return (
    <div className="flex flex-col space-y-2 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 w-full">
      <label className="font-medium text-sm text-blue-600 dark:text-blue-400">Child A (Input)</label>
      <input 
        type="text"
        value={text}
        onChange={(e) => onTextChange(e.target.value)} // Calling the parent's function!
        placeholder="Type something here..."
        className="px-3 py-2 border rounded dark:bg-gray-800 dark:border-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

// Child B is a display that reads from the parent state
function ChildDisplay({ text }: { text: string }) {
  return (
    <div className="flex flex-col space-y-2 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 w-full min-h-[88px] justify-center">
      <span className="font-medium text-sm text-green-600 dark:text-green-400">Child B (Display)</span>
      <p className="text-lg font-bold truncate">
        {text ? text : <span className="text-gray-400 font-normal italic">Waiting for input...</span>}
      </p>
    </div>
  );
}

// --------------------------------------------------

export default function UseStateExample() {
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState({ name: '', age: 0 });
  
  // State for Example 3 (Lifted State)
  const [sharedText, setSharedText] = useState('');

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      <div>
        <h1 className="text-4xl font-extrabold mb-4 text-blue-600 dark:text-blue-400">useState</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          The `useState` hook lets you add state to functional components. It returns an array with two values: the current state and a function to update it.
        </p>
      </div>

      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Example 1: Counter</h2>
        <div className="flex items-center space-x-4 mb-4">
          <button 
            onClick={() => setCount(c => c - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition shadow-sm active:scale-95"
          >
            Decrease
          </button>
          <span className="text-3xl font-mono w-16 text-center">{count}</span>
          <button 
            onClick={() => setCount(c => c + 1)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition shadow-sm active:scale-95"
          >
            Increase
          </button>
        </div>
      </div>

      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Example 2: Object State</h2>
        <div className="space-y-4 max-w-sm">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border rounded-lg dark:bg-gray-900 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              placeholder="Enter name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Age</label>
            <input 
              type="number" 
              className="w-full px-3 py-2 border rounded-lg dark:bg-gray-900 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition"
              value={user.age}
              onChange={(e) => setUser({ ...user, age: parseInt(e.target.value) || 0 })}
            />
          </div>
          
          <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-900 rounded-lg">
            <p className="font-mono text-sm">
              Current State:<br/>
              {JSON.stringify(user, null, 2)}
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Example 3: Lifting State Up (Child to Parent)</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          When two sibling components need to share data, you <b>"lift the state up"</b> to their closest common parent component. You pass the state down as a prop to the child that needs to read it, and you pass the <code>setState</code> function down to the child that needs to update it.
        </p>
        
        <div className="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-xl border-2 border-dashed border-blue-200 dark:border-blue-800 relative">
          <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-bold px-2 py-1 rounded">
            Parent Component (State lives here!)
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 mt-4">
            {/* Child A updates the state */}
            <div className="flex-1">
              <ChildInput 
                text={sharedText} 
                onTextChange={setSharedText} // Passing the set function down!
              />
            </div>
            
            {/* Child B reads the state */}
            <div className="flex-1">
              <ChildDisplay text={sharedText} />
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-white/60 dark:bg-gray-800/60 rounded text-sm text-gray-700 dark:text-gray-300">
            <p><b>How Child to Parent communication works:</b></p>
            <ol className="list-decimal pl-5 space-y-1 mt-2">
              <li>The <b>Parent</b> creates the state: <code>const [text, setText] = useState('')</code></li>
              <li>The <b>Parent</b> gives <b>Child A</b> the <code>setText</code> function as a prop called <code>onTextChange</code>.</li>
              <li>When you type in <b>Child A</b>, it calls <code>onTextChange("new text")</code>.</li>
              <li>This magically updates the <b>Parent's</b> state!</li>
              <li>The <b>Parent</b> then passes the new text down to <b>Child B</b> to display.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
