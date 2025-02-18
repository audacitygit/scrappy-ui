interface AvatarCardProps {
    imageUrl: string;
    title: string;
    label?: string; // Optional
    text: string;
    onClick?: (e: any) => void | Promise<void>;
}

export function AvatarCard({ imageUrl, title, label = "", text, onClick }: AvatarCardProps) {
    return (
        <div onClick={onClick} className="flex items-center bg-white shadow-md rounded-lg p-4 border border-gray-200 w-full max-w-[320px] aspect-[16/9] transition-all duration-300 hover:shadow-[0px_0px_15px_#FF7600] hover:cursor-pointer hover:scale-105">
            {/* Avatar Image */}
            <div className="flex-shrink-0">
                <img src={imageUrl} alt={title} className="w-16 h-16 object-cover rounded-full border-2 border-gray-300" />
            </div>

            {/* Divider Line */}
            <div className="w-px h-14 bg-gray-300 mx-4"></div>

            {/* Text Content */}
            <div className="flex flex-col w-full overflow-hidden">
                {/* Title with Ellipsis */}
                <h2 className="text-lg font-semibold text-gray-900 truncate w-full">{title}</h2>

                {/* Type Section (Only Renders if typeValue Exists) */}
                {text && (
                    <div className="mt-1">
                        {label && <span className="text-sm font-bold text-gray-700">{label}</span>}
                        <p className="text-sm text-gray-500 line-clamp-2">{text}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
