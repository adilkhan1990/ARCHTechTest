"use client";

import { useSpaceX } from "@/app/hooks/useSpaceX";
import RocketItem from "@/app/components/shared/RocketItem";

const RocketsPage: React.FC = () => {
  const { rockets } = useSpaceX();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Rockets
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {rockets.map((rocket) => (
          <RocketItem
            key={rocket.id}
            name={rocket.name}
            description={rocket.description}
            images={rocket.flickr_images}
          />
        ))}
      </div>
    </div>
  );
};

export default RocketsPage;
