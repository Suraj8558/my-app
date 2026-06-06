export default async function PageA() {
  // We add an artificial 2 second delay to simulate fetching data from a database
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className="p-6 bg-red-100 rounded-lg dark:bg-red-900/30 text-black dark:text-white">
      <h3 className="text-lg font-bold text-red-800 dark:text-red-300">📄 Page A (/learn-routing/page-a)</h3>
      <p className="mt-2">You navigated here! Check the counters above.</p>
    </div>
  );
}
