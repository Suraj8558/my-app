export default async function DataFetchingPage() {
  // 1. Fetching in Server Components is as simple as async/await!
  // No useEffect, no loading state management, no useState needed.
  
  // Note: we add `{ cache: 'no-store' }` so it fetches fresh data every time for this demo.
  // If we wanted to cache it for an hour, we'd use `{ next: { revalidate: 3600 } }`.
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    cache: 'no-store' 
  });
  
  const post = await response.json();

  return (
    <div className="p-8 text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-4">Phase 2: Data Fetching</h1>
      
      <div className="p-6 bg-purple-100 border-4 border-purple-500 rounded-lg dark:bg-purple-900/30">
        <h2 className="text-xl font-bold text-purple-800 dark:text-purple-300 mb-4">
          Data fetched directly on the Server!
        </h2>
        
        {/* We just render the data directly! */}
        <div className="bg-white dark:bg-black p-4 rounded shadow border border-gray-200 dark:border-gray-700">
          <h3 className="font-bold text-lg capitalize">{post.title}</h3>
          <p className="mt-2 opacity-80">{post.body}</p>
        </div>

        <div className="mt-6">
          <p className="font-bold">Why is this better than traditional React fetching?</p>
          <ul className="list-disc pl-5 mt-2 opacity-80">
            <li>We didn't need to use <code>useEffect</code>.</li>
            <li>We didn't need a <code>useState</code> for the data.</li>
            <li>The API call happened on the incredibly fast Node.js server, not the user's potentially slow phone.</li>
            <li>The browser received the data already fully baked into the HTML! (Great for SEO).</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
