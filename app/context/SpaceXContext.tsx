"use client";

import React, { createContext, ReactNode, useContext } from "react";
import { useFetchSpaceXData } from "@/app/hooks/useSpaceX";
import { Launch, Rocket, CrewMember } from "@/app/services/spacexApi";

export interface SpaceXContextType {
  launches: Launch[];
  rockets: Rocket[];
  crew: CrewMember[];
}

const SpaceXContext = createContext<SpaceXContextType | undefined>(undefined);

export const SpaceXProvider = ({ children }: { children: ReactNode }) => {
  const { launches, rockets, crew } = useFetchSpaceXData();

  return (
    <SpaceXContext.Provider value={{ launches, rockets, crew }}>
      {children}
    </SpaceXContext.Provider>
  );
};

export const useSpaceX = (): SpaceXContextType => {
  const context = useContext(SpaceXContext);
  if (!context) {
    throw new Error("useSpaceX must be used within a SpaceXProvider");
  }
  return context;
};

export { SpaceXContext };
