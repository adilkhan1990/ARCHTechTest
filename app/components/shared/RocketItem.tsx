import React from "react";
import Image from "next/image";
import { truncatedName } from "@/app/utils/helper";

interface RocketItemProps {
  name: string;
  description: string;
  images: string[];
}

const RocketItem: React.FC<RocketItemProps> = ({
  name,
  description,
  images,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      {images.length > 0 ? (
        <div className="relative w-full h-40 mb-4 rounded-t-lg overflow-hidden">
          <Image
            src={images[0] || "/images/placeholder-image.jpg"}
            alt={name}
            layout="fill"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            className="object-cover"
            onError={(e) => {
              e.currentTarget.src = "/images/placeholder-image.jpg";
            }}
            placeholder="blur"
            blurDataURL="/images/placeholder-image.jpg"
          />
        </div>
      ) : (
        <div className="w-full h-40 bg-gray-200 mb-4 rounded-t-lg"></div>
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="mt-2 text-gray-600">{truncatedName(description, 50)}</p>
      </div>
    </div>
  );
};

export default RocketItem;
