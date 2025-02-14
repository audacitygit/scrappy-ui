import React from "react";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  onViewProperty?: () => void;
  className?: string;
}

const descriptionStyle = {
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxHeight: "4.5rem", // Adjust based on font size
}

export function Card({ title, description, imageUrl, onViewProperty, className }: CardProps) {
  return (
    <div className={`flex flex-col items-start border border-black rounded-lg shadow-sm p-4 ${className}`}>
      {/* 🔹 Bold Title */}
      <h2 className="text-xl font-bold mb-3 truncate w-full">{title}</h2>

      {/* 🔹 Avatar | Divider | Centered Description */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <img
          src={imageUrl}
          alt={title}
          className="w-20 h-20 rounded-full border border-gray-300"
        />

        {/* 🔹 Vertical Divider (Hidden on Small Screens) */}
        <div className="hidden lg:block w-[2px] h-16 bg-black"></div>

        {/* 🔹 Centered Description (Hidden on Small Screens) */}
        <p className=" sm:block text-sm text-gray-600" style={{
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxHeight: "4.5rem", // Adjust based on font size
        }}>
          {description}
        </p>
      </div>

      {/* 🔹 View Property Button */}
      <button
        onClick={onViewProperty}
        className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
      >
        View Property
      </button>
    </div>
  );
}
