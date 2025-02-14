interface CardProps {
  title: string;
  imageSrc: string;
  description: string;
}

export function Card({ title, imageSrc, description }: CardProps) {
  return (
    <div className="bg-[#121521] p-4 rounded-lg shadow-lg border border-[#2A2E3F]">
      {/* Title */}
      <h2 className="text-xl font-semibold flex items-center gap-2 text-white">
        {title}
      </h2>

      {/* Image */}
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-40 object-cover rounded my-2 border border-[#2A2E3F]"
      />

      {/* Description */}
      <p className="text-[#C4C7D1]">
        {description}
      </p>
    </div>
  );
}
