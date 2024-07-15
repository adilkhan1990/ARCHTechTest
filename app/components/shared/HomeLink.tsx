import { FC } from "react";
import Link from "next/link";

interface HomeLinkProps {
  href: string;
  title: string;
  description: string;
}
export const HomeLink: FC<HomeLinkProps> = ({ href, title, description }) => {
  return (
    <Link href={href}>
      <span className="block p-8 border rounded-lg shadow hover:shadow-lg transition duration-300 text-center bg-white hover:bg-indigo-50">
        <h2 className="text-2xl font-semibold text-indigo-700">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </span>
    </Link>
  );
};
