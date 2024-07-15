import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-white text-2xl font-bold" aria-label="Home">
            SpaceX Explorer
          </span>
        </Link>
        <div className="flex space-x-4">
          <Link href="/launches">
            <span
              className="text-white text-lg hover:text-indigo-400 transition-colors duration-300"
              aria-label="Launches Page"
            >
              Launches
            </span>
          </Link>
          <Link href="/rockets">
            <span
              className="text-white text-lg hover:text-indigo-400 transition-colors duration-300"
              aria-label="Rockets Page"
            >
              Rockets
            </span>
          </Link>
          <Link href="/crew">
            <span
              className="text-white text-lg hover:text-indigo-400 transition-colors duration-300"
              aria-label="Crew Page"
            >
              Crew
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
