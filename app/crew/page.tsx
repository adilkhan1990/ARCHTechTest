"use client";

import { useSpaceX } from "@/app/hooks/useSpaceX";
import CrewMember from "@/app/components/shared/CrewMember";

const CrewPage: React.FC = () => {
  const { crew } = useSpaceX();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Crew
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {crew.map((member) => (
          <CrewMember
            key={member.id}
            name={member.name}
            agency={member.agency}
            image={member.image}
            wikipedia={member.wikipedia}
            status={member.status}
          />
        ))}
      </div>
    </div>
  );
};

export default CrewPage;
