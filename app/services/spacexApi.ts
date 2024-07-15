export interface Link {
  patch: { small: string; large: string };
  reddit: {
    campaign: string | null;
    launch: string | null;
    media: string | null;
    recovery: string | null;
  };
  flickr: { small: string[]; original: string[] };
  presskit: string | null;
  webcast: string;
  youtube_id: string;
  article: string;
  wikipedia: string;
}

export interface Failure {
  time: number;
  altitude: number | null;
  reason: string;
}

export interface Fairings {
  reused: boolean;
  recovery_attempt: boolean;
  recovered: boolean;
  ships: string[];
}

export interface Core {
  core: string;
  flight: number;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  landing_attempt: boolean;
  landing_success: boolean | null;
  landing_type: string | null;
  landpad: string | null;
}

export interface Launch {
  fairings: Fairings;
  links: Link;
  static_fire_date_utc: string;
  static_fire_date_unix: number;
  net: boolean;
  window: number;
  rocket: string;
  success: boolean;
  failures: Failure[];
  details: string;
  crew: string[];
  ships: string[];
  capsules: string[];
  payloads: string[];
  launchpad: string;
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: string;
  upcoming: boolean;
  cores: Core[];
  auto_update: boolean;
  tbd: boolean;
  launch_library_id: string | null;
  id: string;
}

export interface Rocket {
  id: string;
  name: string;
  description: string;
  flickr_images: string[];
  height: { meters: number; feet: number };
  diameter: { meters: number; feet: number };
  mass: { kg: number; lb: number };
  stages: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
  wikipedia: string;
  type: string;
  active: boolean;
  boosters: number;
  engines: { type: string; number: number; version: string; layout: string };
  landing_legs: { number: number; material: string | null };
  payload_weights: { id: string; name: string; kg: number; lb: number }[];
}

export interface CrewMember {
  id: string;
  name: string;
  agency: string;
  image: string;
  wikipedia: string;
  status: string;
  launches: string[];
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const fetchJSON = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }
  return response.json();
};

export const fetchLaunches = async (): Promise<Launch[]> => {
  try {
    return await fetchJSON<Launch[]>(`${API_URL}/launches`);
  } catch (error) {
    console.error("Error fetching launches:", error);
    throw error;
  }
};

export const fetchRockets = async (): Promise<Rocket[]> => {
  try {
    return await fetchJSON<Rocket[]>(`${API_URL}/rockets`);
  } catch (error) {
    console.error("Error fetching rockets:", error);
    throw error;
  }
};

export const fetchCrew = async (): Promise<CrewMember[]> => {
  try {
    return await fetchJSON<CrewMember[]>(`${API_URL}/crew`);
  } catch (error) {
    console.error("Error fetching crew members:", error);
    throw error;
  }
};
