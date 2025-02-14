import { useState } from "react";

interface SideNavProps {
    items: ReadonlyArray<{
        text: string;
        isLink?: boolean;
        href?: string;
    }>;
}

export function SideNav({ items }: SideNavProps) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div
            className={`transition-all duration-300 ${isOpen ? "w-32" : "w-16"
                } bg-gray-800 text-white h-screen p-3 flex flex-col `}
        >
            {/* Toggle Button */}
            <button
                className="mb-4 p-2 bg-gray-700 rounded-md"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? "←" : "☰"}
            </button>

            {/* Nav Items */}
            <nav className={`flex flex-col gap-4 ${isOpen ? "opacity-100" : "opacity-0 hidden"}`}>
                {items.map((item) => {
                    if (item.isLink) {
                        return (
                            <a href={item.href} className="p-2 rounded-md hover:bg-gray-700">
                                {item.text}
                            </a>)
                    } else {
                        return <p className="p-2 rounded-md hover:bg-gray-700 cursor-pointer">{item.text}</p>
                    }

                })}
            </nav>
        </div>
    );
}
