export default function HooksDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-extrabold tracking-tight">Mastering React Hooks</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400">
        Select a hook from the sidebar to see practical, interactive examples and detailed explanations.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-xl font-bold mb-2">State Management</h3>
          <p className="text-gray-500 text-sm mb-4">Learn how to manage component state effectively.</p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium dark:bg-blue-900 dark:text-blue-200">useState</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium dark:bg-blue-900 dark:text-blue-200">useReducer</span>
          </div>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-xl font-bold mb-2">Side Effects & Lifecycle</h3>
          <p className="text-gray-500 text-sm mb-4">Handle external data, subscriptions, and DOM mutations.</p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium dark:bg-green-900 dark:text-green-200">useEffect</span>
          </div>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-xl font-bold mb-2">Performance Optimization</h3>
          <p className="text-gray-500 text-sm mb-4">Prevent unnecessary re-renders and computations.</p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium dark:bg-purple-900 dark:text-purple-200">useMemo</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium dark:bg-purple-900 dark:text-purple-200">useCallback</span>
          </div>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-xl font-bold mb-2">Context & Refs</h3>
          <p className="text-gray-500 text-sm mb-4">Access DOM nodes and avoid prop drilling.</p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium dark:bg-yellow-900 dark:text-yellow-200">useContext</span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium dark:bg-yellow-900 dark:text-yellow-200">useRef</span>
          </div>
        </div>
      </div>
    </div>
  )
}
