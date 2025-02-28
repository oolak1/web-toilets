import React from "react";
import { notFound } from "next/navigation";
import ServiceFinder from "@/components/home/ServiceFinder";

// This would be replaced with actual data fetching from your JSON/database
const getLocationData = (location: string) => {
  // Placeholder - in a real app, you would fetch this from your data source
  const validLocations = [
    "new-york",
    "los-angeles",
    "chicago",
    "houston",
    "phoenix",
  ];

  if (!validLocations.includes(location)) {
    return null;
  }

  return {
    name: location
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    providers: [
      // These would be actual providers from your data
    ],
  };
};

export async function generateMetadata({
  params,
}: {
  params: { location: string };
}) {
  const locationData = getLocationData(params.location);

  if (!locationData) {
    return {
      title: "Location Not Found",
      description: "The requested service location could not be found.",
    };
  }

  return {
    title: `Toilet Services in ${locationData.name} | Toilets.org`,
    description: `Find the best plumbers and bathroom specialists in ${locationData.name}. Connect with trusted professionals for installations, repairs, and maintenance.`,
  };
}

export default function LocationServicePage({
  params,
}: {
  params: { location: string };
}) {
  const locationData = getLocationData(params.location);

  if (!locationData) {
    notFound();
  }

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4 pt-8">
        <h1 className="text-4xl font-bold mb-6">
          Toilet Services in {locationData.name}
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Connect with trusted plumbers and bathroom specialists in{" "}
          {locationData.name} for installations, repairs, and maintenance.
        </p>
      </div>
      <ServiceFinder initialLocation={locationData.name} />
    </div>
  );
}

// This function would generate all the location pages at build time
export async function generateStaticParams() {
  // In a real app, you would fetch this from your data source
  const locations = [
    "new-york",
    "los-angeles",
    "chicago",
    "houston",
    "phoenix",
  ];

  return locations.map((location) => ({
    location,
  }));
}
