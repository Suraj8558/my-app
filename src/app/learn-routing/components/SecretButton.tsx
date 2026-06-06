"use client";

export default function SecretButton() {
  return (
    <button 
      onClick={() => alert("This component is safely hidden inside a _private folder!")}
      className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-black dark:bg-gray-200 dark:text-black"
    >
      Click my Secret Button
    </button>
  );
}
