import React from "react";
import { Core } from "@/app/services/spacexApi";

export const CoreDetails: React.FC<{ core: Core }> = ({ core }) => (
  <div className="mb-4">
    <ul className="text-lg space-y-2">
      <li>
        <strong className="font-semibold">Flight:</strong> {core.flight}
      </li>
      <li>
        <strong className="font-semibold">Gridfins:</strong>{" "}
        {core.gridfins ? "Yes" : "No"}
      </li>
      <li>
        <strong className="font-semibold">Legs:</strong>{" "}
        {core.legs ? "Yes" : "No"}
      </li>
      <li>
        <strong className="font-semibold">Reused:</strong>{" "}
        {core.reused ? "Yes" : "No"}
      </li>
      <li>
        <strong className="font-semibold">Landing Attempt:</strong>{" "}
        {core.landing_attempt ? "Yes" : "No"}
      </li>
      <li>
        <strong className="font-semibold">Landing Success:</strong>{" "}
        {core.landing_success ? "Yes" : "No"}
      </li>
      <li>
        <strong className="font-semibold">Landing Type:</strong>{" "}
        {core.landing_type || "N/A"}
      </li>
    </ul>
  </div>
);
