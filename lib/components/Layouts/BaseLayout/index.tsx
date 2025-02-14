"use client"
import { ReactNode } from "react";

interface BaseLayoutProps {
    header?: ReactNode; // ✅ Optional Top Navigation
    sideNav?: ReactNode; // ✅ Optional Side Navigation
    children: ReactNode;
}

export function BaseLayout({ header, sideNav, children }: BaseLayoutProps) {
    return (
        <div className="flex flex-col h-screen w-screen overflow-hidden bg-[#0B0D18]">
            {/* 🔹 Top Navigation (Only Renders if Provided) */}
            {header && <div className="z-50 relative">{header}</div>}

            {/* 🔹 Main Layout (Sidebar + Scrollable Content) */}
            <div className="flex flex-1 overflow-hidden">
                {/* 🔹 Sidebar (Only Renders if Provided) */}
                {sideNav && <div className="flex-none">{sideNav}</div>}

                {/* 🔹 Scrollable Page Content */}
                <div className="flex-1 overflow-y-auto">{children}</div>
            </div>
        </div>
    );
}
