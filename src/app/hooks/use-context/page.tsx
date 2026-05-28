"use client"
import { createContext, useContext, useState, ReactNode } from "react"

// 1. Create a Context
type Theme = 'light' | 'dark';
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 2. Create a Provider Component
function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Consume the Context
function ThemedCard() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("ThemedCard must be used within ThemeProvider");
  
  const { theme, toggleTheme } = context;
  
  return (
    <div className={`p-8 rounded-xl transition-colors duration-500 shadow-md ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <h3 className="text-xl font-bold mb-4">I am a deeply nested component!</h3>
      <p className="mb-6">Current Theme: <span className="font-mono bg-black/10 px-2 py-1 rounded">{theme}</span></p>
      <button 
        onClick={toggleTheme}
        className={`px-4 py-2 rounded-lg font-medium transition active:scale-95 ${theme === 'dark' ? 'bg-white text-gray-900 hover:bg-gray-200' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default function UseContextExample() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-4xl font-extrabold mb-4 text-cyan-600 dark:text-cyan-400">useContext</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          The `useContext` hook lets you subscribe to React context without introducing nesting. It solves the "prop drilling" problem by passing data directly down the component tree.
        </p>
      </div>

      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Example: Theme Switcher</h2>
        <ThemeProvider>
          {/* We are passing no props here! */}
          <ThemedCard />
        </ThemeProvider>
      </div>
    </div>
  )
}
