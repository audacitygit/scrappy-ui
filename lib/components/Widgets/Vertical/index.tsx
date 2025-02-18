import React from "react";

interface KeyValue {
    key: string;
    value: string | any;
}

interface VerticalWidgetProps {
    items: KeyValue[];
}

export function VerticalWidget({ items }: VerticalWidgetProps) {
    return (
        <div className="flex-grow w-full sm:min-h-[50vh] md:w-1/2 md:min-h-[33vh] p-4 border border-gray-300 rounded-lg bg-white shadow-md">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`grid grid-cols-3 sm:grid-cols-2 gap-20 py-2 border-b border-gray-200 ${index === items.length - 1 ? "border-none" : ""
                        }`}
                >
                    <span className="font-bold text-gray-800">{item.key}</span>
                    <span className="col-span-2 sm:col-span-1 text-gray-600 break-words">{item.value}</span>
                </div>
            ))}
        </div>
    );
}
