export default function LibraryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-svh max-w-5xl mx-auto flex justify-end flex-col">
      <div className="bg-indigo-900 p-4 w-fit rounded-lg text-lg">
        <button className="p-2 hover:bg-violet-950 rounded-md">Docs</button>
        <button className="p-2 hover:bg-violet-950 rounded-md">
          Components
        </button>
      </div>
      <div className="w-full h-[80%] bg-indigo-800 bg-opacity-50 border border-indigo-700 rounded-t-xl">
        {children}
      </div>
    </div>
  );
}
