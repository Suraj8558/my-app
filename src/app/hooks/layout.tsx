import Link from 'next/link';

const hooks = [
  { name: 'useState', path: '/hooks/use-state' },
  { name: 'useEffect', path: '/hooks/use-effect' },
  { name: 'useContext', path: '/hooks/use-context' },
  { name: 'useReducer', path: '/hooks/use-reducer' },
  { name: 'useRef', path: '/hooks/use-ref' },
  { name: 'useMemo', path: '/hooks/use-memo' },
  { name: 'useCallback', path: '/hooks/use-callback' },
];

export default function HooksLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 font-sans">
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-screen sticky top-0 overflow-y-auto">
        <div className="p-6">
          <Link href="/hooks">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6 hover:underline cursor-pointer">React Hooks</h2>
          </Link>
          <nav className="space-y-2">
            {hooks.map((hook) => (
              <Link key={hook.name} href={hook.path} className="block px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
                {hook.name}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
