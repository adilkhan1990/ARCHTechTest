import { FC } from "react";
import { HomeLink } from "@/app/components/shared/HomeLink";

const homeLinks = [
  {
    href: "/launches",
    title: "Launches",
    description: "Explore SpaceX launches",
  },
  {
    href: "/rockets",
    title: "Rockets",
    description: "Discover SpaceX rockets",
  },
  {
    href: "/crew",
    title: "Crew",
    description: "Meet the SpaceX crew",
  },
];

const Home: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="container mx-auto bg-white p-12 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold text-center text-gray-800">
          Welcome to SpaceX Explorer
        </h1>
        <p className="mt-4 text-center text-lg text-gray-600">
          Explore SpaceX Launches, Rockets, and Crew.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {homeLinks.map((link, index) => (
            <HomeLink
              key={index}
              href={link.href}
              title={link.title}
              description={link.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
