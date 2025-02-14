"use client"; // ✅ Ensure it's a client component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "tertiary";
}

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
    const baseStyles = "py-2 px-4 rounded-md transition w-full"; // Common styles for all buttons

    const variantStyles = {
        primary: "bg-black text-white hover:bg-gray-800",
        secondary: "bg-gray-300 text-black hover:bg-gray-400",
        tertiary: "bg-transparent text-black border border-black hover:bg-gray-100",
    };

    return (
        <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
}
