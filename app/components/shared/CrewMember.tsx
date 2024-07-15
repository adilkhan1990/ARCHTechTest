import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CrewMemberProps {
  name: string;
  agency: string;
  image: string;
  wikipedia: string;
  status: string;
}

const CrewMember: React.FC<CrewMemberProps> = ({
  name,
  agency,
  image,
  wikipedia,
  status,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <div className="relative w-24 h-24 mx-auto mt-4 rounded-full overflow-hidden border-4 border-indigo-500">
        <Image
          src={image || "/images/placeholder-image.jpg"}
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
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">{agency}</p>
        <p className="text-gray-600">{status}</p>
        <Link href={wikipedia} target="_blank">
          <span className="block mt-2 text-indigo-500 hover:text-indigo-700 transition duration-300">
            Learn more
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CrewMember;
