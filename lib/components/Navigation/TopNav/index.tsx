interface TopNavProps {
    title: string;
    rightContent?: React.ReactNode; // Optional buttons/icons on the right
}

export function TopNav({ title, rightContent }: TopNavProps) {
    return (
        <div className="sticky top-0 z-50 bg-white shadow-md px-6 py-4 flex justify-between items-center border-b">
            {/* 🔹 Left - Page Title */}
            <h1 className="text-lg font-bold">{title}</h1>

            {/* 🔹 Right - Custom Buttons/Icons */}
            <div>{rightContent}</div>
        </div>
    );
}
