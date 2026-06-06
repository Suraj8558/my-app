"use client";

import { useState } from "react";

export default function RoutingTemplate({ children }: { children: React.ReactNode }) {
  const [feedbackGiven, setFeedbackGiven] = useState(false);

  return (
    <div className="animate-in fade-in duration-500">
      {/* 1. The actual page content renders here */}
      <div className="min-h-[150px]">
        {children}
      </div>

      {/* 2. Practical Use Case: Per-page feedback form */}
      <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
        <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">🟩 Practical Template Use Case:</h4>
        
        {!feedbackGiven ? (
          <div>
            <p className="mb-3 text-sm opacity-80">Was this specific page helpful?</p>
            <div className="flex gap-2">
              <button 
                onClick={() => setFeedbackGiven(true)}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm hover:bg-green-500 hover:text-white transition-colors"
              >
                👍 Yes
              </button>
              <button 
                onClick={() => setFeedbackGiven(true)}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm hover:bg-red-500 hover:text-white transition-colors"
              >
                👎 No
              </button>
            </div>
            <p className="text-xs opacity-60 mt-3">
              Because this is in a <strong>template.tsx</strong>, this form will reset every time you navigate. 
              If it were in a <strong>layout.tsx</strong>, voting "Yes" on Page A would mean it still says "Yes" when you visit Page B.
            </p>
          </div>
        ) : (
          <div className="text-green-600 dark:text-green-400 font-bold">
            ✅ Thanks for your feedback on this route! 
            <p className="text-xs text-gray-500 dark:text-gray-400 font-normal mt-1">
              (Navigate to a different page to see this form reset automatically.)
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
