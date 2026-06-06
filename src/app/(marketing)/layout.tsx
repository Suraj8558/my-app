export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 border-4 border-orange-500 rounded-lg m-4">
      <h2 className="font-bold text-orange-600">🟧 Marketing Route Group Layout</h2>
      <p className="text-sm opacity-80 mb-4">
        This layout only applies to pages inside the <code>(marketing)</code> folder.
      </p>
      {children}
    </div>
  );
}
