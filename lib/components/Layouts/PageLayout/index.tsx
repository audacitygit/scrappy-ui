interface PageLayoutProps {
    children: React.ReactNode;
    className?: string;
    pageTitle?: string;
}

export function PageLayout({ children, className, pageTitle }: PageLayoutProps) {
    return (
        <div className={`flex flex-col min-h-screen px-4 py-4 sm:p-6 bg-[#0B0D18] text-white ml-16 sm:ml-0 ${className}`}>
            {pageTitle && <h1 className="text-2xl font-bold border-b border-[#2A2E3F] pb-2 mb-6">{pageTitle}</h1>}
            {/* Scrollable Content Container */}
            <div className="flex-1">{children}</div>
        </div>
    );
}
