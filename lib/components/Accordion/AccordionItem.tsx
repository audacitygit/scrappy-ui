import { CircleMinusIcon, CirclePlusIcon } from "lucide-react";
import { useState, ReactNode } from "react";

interface AccordionItemProps {
    title: string;
    children: ReactNode;
    open?: boolean;
}

export function AccordionItem({ title, children, open = false }: AccordionItemProps) {
    const [isOpen, setIsOpen] = useState(open);

    return (
        <div className="border border-gray-300 rounded-lg mb-2 overflow-hidden bg-white">
            {/* Accordion Header */}
            <button
                className="w-full flex justify-between items-center px-4 py-3 text-left font-semibold bg-gray-300 hover:bg-gray-200 transition-all duration-300"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
                <span className="text-black text-lg">{isOpen ? <CircleMinusIcon /> : <CirclePlusIcon />}</span>
            </button>

            {/* Accordion Content (Only Visible When Open) */}
            <div
                className={`transition-all duration-300 flex flex-col sm:flex-col gap-4 md:flex-row md:gap-10 ${isOpen ? "max-h-screen opacity-100 p-4" : "max-h-0 opacity-0 p-0"
                    } overflow-hidden`}
            >
                {children}
            </div>
        </div>
    );
}
