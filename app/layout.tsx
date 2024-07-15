import { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Navbar from "@/app/components/layout/Navbar";
import { SpaceXProvider } from "@/app/context/SpaceXContext";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SpaceX Explorer",
  description: "Explore SpaceX Launches, Rockets, and Crew.",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SpaceXProvider>
          <Navbar />
          <main className="container mx-auto p-4">{children}</main>
        </SpaceXProvider>
      </body>
    </html>
  );
};

export default RootLayout;
