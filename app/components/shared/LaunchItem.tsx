import React from "react";
import Link from "next/link";
import Image from "next/image";
import { truncatedName } from "@/app/utils/helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

interface LaunchItemProps {
  id: string;
  name: string;
  date: string;
  patch: string;
  success?: boolean; // Optional boolean prop for success
  failure?: boolean; // Optional boolean prop for failure
}

const LaunchItem: React.FC<LaunchItemProps> = ({
  id,
  name,
  date,
  patch,
  success,
  failure,
}) => {
  return (
    <Link href={`/launches/${id}`}>
      <div className="block bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <div className="flex flex-col items-center p-4">
          <div className="relative w-20 h-20 mb-2">
            <Image
              src={patch || "/images/placeholder-image.jpg"}
              alt={`${name} patch`}
              layout="fill"
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover rounded-lg"
              onError={(e) => {
                e.currentTarget.src = "/images/placeholder-image.jpg";
              }}
              placeholder="blur"
              blurDataURL="/images/placeholder-image.jpg"
            />
          </div>
          <h2 className="text-xl font-semibold mt-2 text-center text-gray-800">
            {truncatedName(name, 15)}
          </h2>
          <p className="text-center text-gray-500">
            {new Date(date).toLocaleDateString()}
          </p>
          <div className="mt-2 flex items-center justify-center">
            {success && (
              <div className="flex items-center text-green-600 mr-2">
                <FontAwesomeIcon icon={faCheckCircle} className="mr-1" />
                <span className="text-sm font-semibold">Successful</span>
              </div>
            )}
            {failure && (
              <div className="flex items-center text-red-600">
                <FontAwesomeIcon icon={faTimesCircle} className="mr-1" />
                <span className="text-sm font-semibold">Failed</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LaunchItem;
