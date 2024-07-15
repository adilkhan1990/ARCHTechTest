import { useContext, useEffect, useState } from "react";
import { SpaceXContext, SpaceXContextType } from "@/app/context/SpaceXContext";
import {
  fetchLaunches,
  fetchRockets,
  fetchCrew,
  Launch,
  Rocket,
  CrewMember,
} from "@/app/services/spacexApi";

export const useSpaceX = (): SpaceXContextType => {
  const context = useContext(SpaceXContext);
  if (!context) {
    throw new Error("useSpaceX must be used within a SpaceXProvider");
  }
  return context;
};

export const useFetchSpaceXData = () => {
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [rockets, setRockets] = useState<Rocket[]>([]);
  const [crew, setCrew] = useState<CrewMember[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [launchData, rocketData, crewData] = await Promise.all([
          fetchLaunches(),
          fetchRockets(),
          fetchCrew(),
        ]);
        setLaunches(launchData);
        setRockets(rocketData);
        setCrew(crewData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return { launches, rockets, crew };
};
