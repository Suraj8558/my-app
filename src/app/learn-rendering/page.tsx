import InteractiveCounter from "./InteractiveCounter";

export default function RenderingPage() {
  // This console.log will ONLY appear in your terminal, NOT in the browser console!
  console.log("🖥️ SERVER COMPONENT: I am rendering on the Server!");

  return (
    <div className="p-8 text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-4">Phase 2: Server vs Client Components</h1>
      <p className="mb-6 opacity-80">
        This is the most important concept in the Next.js App Router. Let's see them in action.
      </p>
      
      <div className="p-6 bg-blue-100 border-4 border-blue-500 rounded-lg mb-6 dark:bg-blue-900/30">
        <h2 className="text-xl font-bold text-blue-800 dark:text-blue-300">🖥️ Server Component (page.tsx)</h2>
        <ul className="list-disc pl-5 mt-2 opacity-80">
          <li>Runs <strong>only</strong> on the server.</li>
          <li>Zero impact on the browser's JavaScript bundle size!</li>
          <li>Can fetch data directly from databases without exposing secrets.</li>
          <li><strong>Cannot</strong> use <code>useState</code>, <code>useEffect</code>, or <code>onClick</code>.</li>
        </ul>
      </div>

      {/* We import and use a Client Component inside a Server Component */}
      <InteractiveCounter />
    </div>
  );
}
