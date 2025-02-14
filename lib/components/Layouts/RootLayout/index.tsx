import React, { ReactNode, useState } from "react";

interface RootLayoutProps {
    header?: ReactNode; // ✅ Optional Top Navigation
    sideNav?: ReactNode; // ✅ Optional Side Navigation
    children: ReactNode;
}

export function RootLayout({ header, sideNav, children }: RootLayoutProps) {
    return (
        <div className="flex flex-col h-screen w-screen overflow-hidden">
            {/* 🔹 Top Navigation (Only Renders if Provided) */}
            {header && <div className="flex-none">{header}</div>}

            {/* 🔹 Main Layout (Sidebar + Scrollable Content) */}
            <div className="flex flex-1 overflow-hidden">
                {/* 🔹 Sidebar (Only Renders if Provided) */}
                {sideNav && <div className="flex-none">{sideNav}</div>}

                {/* 🔹 Scrollable Page Content */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">{children}</div>
            </div>
        </div>
    );
}
