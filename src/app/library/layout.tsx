export default function LibraryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full py-8 min-h-svh max-w-4xl mx-auto flex flex-col overflow-y-auto">
      <div className="bg-indigo-900 p-4 w-fit rounded-lg text-lg fixed top-4 z-10">
        <button className="p-2 hover:bg-violet-950 rounded-md">Docs</button>
        <button className="p-2 hover:bg-violet-950 rounded-md">
          Components
        </button>
      </div>
      <div className="w-full bg-indigo-800 bg-opacity-50 border border-indigo-700 rounded-xl h-auto mt-12">
        {children}
      </div>
    </div>
  );
}
