"use client";

import LaunchItem from "@/app/components/shared/LaunchItem";
import { useSpaceX } from "@/app/hooks/useSpaceX";

const LaunchesPage: React.FC = () => {
  const { launches } = useSpaceX();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Launches
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {launches.map((launch) => (
          <LaunchItem
            key={launch.id}
            id={launch.id}
            name={launch.name}
            date={launch.date_utc}
            patch={launch.links.patch.small}
            success={launch.success}
            failure={launch.failures.length > 0}
          />
        ))}
      </div>
    </div>
  );
};

export default LaunchesPage;
