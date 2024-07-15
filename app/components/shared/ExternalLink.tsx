import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export const ExternalLink: React.FC<{ href: string; text: string }> = ({
  href,
  text,
}) => (
  <Link href={href} target="_blank" rel="noopener noreferrer" passHref>
    <span className="text-blue-500 hover:text-blue-700 transition duration-300 flex items-center">
      <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
      {text}
    </span>
  </Link>
);
