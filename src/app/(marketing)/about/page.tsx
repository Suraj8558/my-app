import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="p-6 bg-orange-100 rounded-lg dark:bg-orange-900/30 text-black dark:text-white">
      <h3 className="text-lg font-bold text-orange-800 dark:text-orange-300">📄 About Us</h3>
      <p className="mt-2">
        Notice the URL is exactly <code>localhost:3000/about</code>!
      </p>
      <p className="mt-2 text-sm opacity-80">
        The <code>(marketing)</code> folder is completely ignored by the router. It is only used to apply the Orange Layout to this specific group of pages.
      </p>
      <div className="mt-4">
        <Link href="/learn-routing" className="text-blue-500 hover:underline">
          &larr; Back to Routing Home
        </Link>
      </div>
    </div>
  );
}
