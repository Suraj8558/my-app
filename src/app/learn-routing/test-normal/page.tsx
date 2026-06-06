export default function NormalFolderPage() {
  return (
    <div className="p-6 bg-blue-100 rounded-lg text-black">
      <h3 className="text-lg font-bold">✅ Normal Folder Page</h3>
      <p className="mt-2">
        This folder is called <code>test-normal</code> and it has a <code>page.tsx</code> inside it.
      </p>
      <p className="mt-2 font-bold text-green-700">
        Result: It successfully created the route <code>/learn-routing/test-normal</code>!
      </p>
    </div>
  );
}
