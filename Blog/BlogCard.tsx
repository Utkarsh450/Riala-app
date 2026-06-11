import Image, { StaticImageData } from "next/image";

interface BlogCardProps {
  image: string | StaticImageData;
  title: string;
  excerpt: string;
  date: string;
  isNew?: boolean;
}

export default function BlogCard({ image, title, excerpt, date, isNew }: BlogCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
      <div className="relative h-44 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isNew && (
          <span className="absolute top-2.5 right-2.5 bg-blue-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
            NEW
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="text-[11px] text-gray-400 mb-1.5">{date}</p>
        <h3 className="text-sm font-bold text-gray-900 mb-1.5 leading-snug line-clamp-2">
          {title}
        </h3>
        <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">{excerpt}</p>
      </div>
    </div>
  );
}