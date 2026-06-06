import SecretButton from "../components/SecretButton";

export default function PageB() {
  return (
    <div className="p-6 bg-yellow-100 rounded-lg dark:bg-yellow-900/30 text-black dark:text-white">
      <h3 className="text-lg font-bold text-yellow-800 dark:text-yellow-300">📄 Page B (/learn-routing/page-b)</h3>
      <p className="mt-2">You navigated here! Check the counters above.</p>
      
      <div className="mt-6 p-4 border-2 border-dashed border-gray-400 rounded">
        <p className="text-sm font-bold">Imported from a Private Folder:</p>
        <p className="text-xs opacity-80 mb-2">
          This button lives in <code>_components/SecretButton.tsx</code>. Next.js knows NOT to turn the <code>_components</code> folder into a URL.
        </p>
        <SecretButton />
      </div>
    </div>
  );
}
