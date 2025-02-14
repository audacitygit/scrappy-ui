import { useState } from "react";
import { Menu, ArrowLeft } from "lucide-react"; // For better icons

interface SideNavItem {
    label: string;
    icon?: string;
    href?: string;
}

interface SideNavProps {
    items?: SideNavItem[];
}

export function SideNav({
    items = [
        { label: "Dashboard", icon: "🏠", href: "#" },
        { label: "Properties", icon: "📋", href: "#" },
        { label: "Reports", icon: "📊", href: "#" },
        { label: "Settings", icon: "⚙️", href: "#" },
    ],
}: SideNavProps) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            {/* Mobile Overlay - Click to Close */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
                    fixed z-50 transition-all duration-300
                    ${isOpen ? "w-full md:w-64 left-0" : "w-16 left-0"} 
                    md:relative md:left-0
                    min-h-screen bg-[#161A26] p-4 border-r border-[#2A2E3F] flex flex-col
                `}
            >
                {/* Toggle Button (Always Visible) */}
                <button
                    className="mb-4 p-2 bg-[#1574A6] rounded-md flex justify-center"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <ArrowLeft className="text-white w-6 h-6" /> : <Menu className="text-white w-6 h-6" />}
                </button>

                {/* Nav Items */}
                <ul className="space-y-3">
                    {items.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.href}
                                className={`flex items-center gap-2 p-2 rounded hover:bg-[#1574A6] text-white font-semibold transition-all duration-300 ${isOpen ? "justify-start" : "justify-center"
                                    }`}
                            >
                                {item.icon && <span>{item.icon}</span>}
                                {isOpen && <span>{item.label}</span>}
                            </a>
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    );
}
