export default function PrivateFolderPage() {
  return (
    <div className="p-6 bg-red-100 rounded-lg text-black">
      <h3 className="text-lg font-bold">🚫 Private Folder Page</h3>
      <p className="mt-2">
        This folder is called <code>_test-private</code> and it has a <code>page.tsx</code> inside it.
      </p>
      <p className="mt-2 font-bold text-red-700">
        Result: You will NEVER see this page! Even though page.tsx exists, Next.js ignores it.
      </p>
    </div>
  );
}
