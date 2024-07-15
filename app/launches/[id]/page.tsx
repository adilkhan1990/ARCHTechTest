"use client";
import React from "react";
import { useSpaceX } from "@/app/hooks/useSpaceX";
import { Core, Failure, Launch } from "@/app/services/spacexApi";
import { useParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { ExternalLink } from "@/app/components/shared/ExternalLink";
import { CoreDetails } from "@/app/components/shared/CoreDetails";

const LaunchDetailsPage: React.FC = () => {
  const { id } = useParams();
  const { launches } = useSpaceX();
  const launch = launches.find((l) => l.id === id) as Launch | undefined;

  if (!launch) {
    return <div className="text-center text-red-600">Launch not found</div>;
  }

  const { name, date_utc, details, success, failures, links, fairings, cores } =
    launch;

  // Extract YouTube video ID from the webcast link
  const youtubeVideoId = links.webcast
    ? new URL(links.webcast).searchParams.get("v")
    : null;

  return (
    <div className="container mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
        {name}
      </h1>
      <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
        <img
          src={links.patch.large}
          alt={`${name} patch`}
          className="w-32 h-32 mb-4 md:mb-0 rounded-lg shadow-lg transition-transform duration-300 hover:scale-110"
        />
        <div className="md:ml-8 text-lg text-gray-700 leading-relaxed">
          <p className="mb-4">{details}</p>
          <p
            className={`font-semibold ${success ? "text-green-600" : "text-red-600"}`}
          >
            {success ? (
              <span>
                <FontAwesomeIcon icon={faCheckCircle} /> Successful
              </span>
            ) : (
              <span>
                <FontAwesomeIcon icon={faTimesCircle} /> Failed
              </span>
            )}
          </p>
          <div className="mt-4 space-y-2">
            {links.article && (
              <ExternalLink href={links.article} text="Read Article" />
            )}
            {links.wikipedia && (
              <ExternalLink
                href={links.wikipedia}
                text="Learn more on Wikipedia"
              />
            )}
            {links.reddit?.launch && (
              <ExternalLink
                href={links.reddit.launch}
                text="Reddit Launch Discussion"
              />
            )}
            {links.presskit && (
              <ExternalLink href={links.presskit} text="Press Kit" />
            )}
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          Launch Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Fairings
            </h3>
            <ul className="text-lg space-y-2">
              <li>
                <strong className="font-semibold">Reused:</strong>{" "}
                {fairings?.reused ? "Yes" : "No"}
              </li>
              <li>
                <strong className="font-semibold">Recovery Attempt:</strong>{" "}
                {fairings?.recovery_attempt ? "Yes" : "No"}
              </li>
              <li>
                <strong className="font-semibold">Recovered:</strong>{" "}
                {fairings?.recovered ? "Yes" : "No"}
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Core Details
            </h3>
            {cores.map((core: Core, index: number) => (
              <CoreDetails key={index} core={core} />
            ))}
          </div>
        </div>
        {failures.length > 0 && (
          <div className="mt-8 bg-red-50 p-4 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-4 text-red-600">
              Failures
            </h3>
            {failures.map((failure: Failure, index: number) => (
              <p key={index} className="text-red-600">
                <strong className="font-semibold">At {failure.time}s:</strong>{" "}
                {failure.reason}
              </p>
            ))}
          </div>
        )}
        {youtubeVideoId && (
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Watch Webcast
            </h3>
            <div className="aspect-w-16 aspect-h-9 h-96">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}`}
                className="rounded-lg shadow-md w-full h-full"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LaunchDetailsPage;
