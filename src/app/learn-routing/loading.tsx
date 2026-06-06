export default function Loading() {
  return (
    <div className="p-6 bg-purple-100 rounded-lg dark:bg-purple-900/30 text-black dark:text-white border-4 border-purple-500 animate-pulse">
      <h3 className="text-lg font-bold text-purple-800 dark:text-purple-300">⏳ Loading...</h3>
      <p className="mt-2">Next.js is fetching the page. Please wait!</p>
    </div>
  );
}
