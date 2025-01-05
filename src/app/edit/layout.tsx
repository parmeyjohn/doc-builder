export default function EditLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-full h-svh max-w-6xl mx-auto">
            <div className="w-full h-full bg-blue-800 flex justify-center items-center rounded-xl border border-blue-600">
                {children}
            </div>
        </div>
    );
}
