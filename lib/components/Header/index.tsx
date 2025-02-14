import { Settings } from "lucide-react";

interface HeaderProps {
    title?: string;
    subtitle?: string;
    logoSrc?: string;
    userAvatarSrc?: string;
    onSettingsClick?: () => void;
}

export function Header({
    title = "Property App",
    subtitle = "Property Management",
    logoSrc = "/public/scrappy_logo.png",
    userAvatarSrc = "/public/scrappy_logo.png",
    onSettingsClick,
}: HeaderProps) {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-[#121521] shadow-md border-b border-[#2A2E3F]">
            {/* Left Side - Logo and Text */}
            <div className="flex items-center gap-3">
                <img src={logoSrc} alt="Logo" className="w-10 h-10 rounded-full" />
                <div>
                    <p className="text-lg font-semibold text-white">{title}</p>
                    <p className="text-sm text-[#C4C7D1]">{subtitle}</p>
                </div>
            </div>

            {/* Right Side - Settings & User Avatar */}
            <div className="flex items-center gap-4">
                <button onClick={onSettingsClick} className="p-2 rounded-lg hover:bg-[#005F88]">
                    <Settings className="w-6 h-6 text-[#FF7600]" />
                </button>
                <img src={userAvatarSrc} alt="User" className="w-10 h-10 rounded-full" />
            </div>
        </nav>
    );
}
