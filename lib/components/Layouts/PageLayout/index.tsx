interface PageLayoutProps {
    children: React.ReactNode;
    className?: string;
}

export function PageLayout({ children, className }: PageLayoutProps) {
    return (
        <div className={`flex flex-col min-h-screen px-4 py-4 sm:px-6 py-6 md:px-10 lg:px-16 xl:px-24 ${className}`}>
            {/* Scrollable Content Container */}
            <div className="flex-1">{children}</div>
        </div>
    );
}
