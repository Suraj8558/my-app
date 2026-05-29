import Link from 'next/link';

// ── Current (canonical) site URLs ──
const hooks = [
  { name: 'useState', path: '/hooks/use-state' },
  { name: 'useEffect', path: '/hooks/use-effect' },
  { name: 'useContext', path: '/hooks/use-context' },
  { name: 'useReducer', path: '/hooks/use-reducer' },
  { name: 'useRef', path: '/hooks/use-ref' },
  { name: 'useMemo', path: '/hooks/use-memo' },
  { name: 'useCallback', path: '/hooks/use-callback' },
];

// ── Old / legacy URLs that should trigger redirects ──
const oldUrls = [
  { name: 'useState (old)', path: '/react-hooks/useState', badge: '301' },
  { name: 'useEffect (old)', path: '/react-hooks/useEffect', badge: '301' },
  { name: 'useState (learn)', path: '/learn/use-state', badge: '301' },
  { name: 'useEffect (tutorial)', path: '/tutorial/hooks/effect', badge: '301' },
  { name: 'useContext (tutorial)', path: '/tutorial/hooks/context', badge: '301' },
  { name: 'useRef (learn)', path: '/learn/use-ref', badge: '301' },
  { name: 'Hooks Home (docs)', path: '/docs/hooks', badge: '301' },
  { name: 'Hooks Home (api-ref)', path: '/api-reference/hooks', badge: '301' },
];

export default function HooksLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 font-sans">
      <aside className="w-72 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-screen sticky top-0 overflow-y-auto">
        <div className="p-6">
          <Link href="/hooks">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6 hover:underline cursor-pointer">React Hooks</h2>
          </Link>

          {/* Current site URLs */}
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Current URLs</p>
          <nav className="space-y-1 mb-6">
            {hooks.map((hook) => (
              <Link key={hook.name} href={hook.path} className="block px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors text-sm">
                {hook.name}
              </Link>
            ))}
          </nav>

          {/* Old URLs to test redirects */}
          <p className="text-xs font-semibold uppercase tracking-wider text-orange-500 mb-2">🔀 Redirect Test URLs</p>
          <nav className="space-y-1">
            {oldUrls.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="flex items-center justify-between px-4 py-2 rounded-lg hover:bg-orange-50 dark:hover:bg-gray-700 transition-colors text-sm text-orange-700 dark:text-orange-300"
              >
                <span>{item.name}</span>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                  item.badge === '301'
                    ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                    : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                }`}>
                  {item.badge}
                </span>
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

