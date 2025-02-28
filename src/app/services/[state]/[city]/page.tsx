import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBusinessesByCity, getAllCities } from "@/lib/utils/businessData";
import { MapPin, Star, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export async function generateMetadata({
  params,
}: {
  params: { state: string; city: string };
}) {
  const cityName = params.city
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const businesses = getBusinessesByCity(params.city);

  if (businesses.length === 0) {
    return {
      title: "City Not Found",
      description: "The requested city could not be found.",
    };
  }

  const stateName = businesses[0].state;

  return {
    title: `Toilet Services in ${cityName}, ${stateName} | Toilets.org`,
    description: `Find the best plumbers and bathroom specialists in ${cityName}, ${stateName}. Connect with trusted professionals for installations, repairs, and maintenance.`,
  };
}

export default function CityServicePage({
  params,
}: {
  params: { state: string; city: string };
}) {
  const cityName = params.city
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const businesses = getBusinessesByCity(params.city);

  if (businesses.length === 0) {
    notFound();
  }

  const stateName = businesses[0].state;

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Toilet Services in {cityName}, {stateName}
          </h1>
          <p className="text-lg text-gray-600">
            Find reliable plumbers and bathroom specialists in {cityName} for
            all your toilet and bathroom needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businesses.map((business) => (
            <Card key={business.id} className="overflow-hidden h-full">
              <div className="p-4 border-b border-gray-200 flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 mr-4">
                  <img
                    src={business.images.profile}
                    alt={business.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{business.name}</h3>
                  <div className="flex items-center mt-1">
                    <div className="flex items-center">
                      <Star
                        className="text-yellow-400 fill-yellow-400"
                        size={16}
                      />
                      <span className="ml-1 text-sm font-medium">
                        {business.rating}
                      </span>
                    </div>
                    <span className="mx-2 text-gray-400 text-sm">•</span>
                    <span className="text-sm text-gray-600">
                      {business.reviewCount} reviews
                    </span>
                  </div>
                </div>
              </div>

              <CardContent className="p-4">
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">
                    {business.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin size={16} className="mr-1" />
                    <span>{business.address}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {business.specialty.slice(0, 3).map((item, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-4">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Phone size={16} />
                    Call
                  </Button>
                  <Link href={`/services/business/${business.slug}`}>
                    <Button size="sm" className="gap-1">
                      View Profile
                      <ArrowRight size={16} />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

// This function would generate all the city pages at build time
export async function generateStaticParams() {
  const cities = getAllCities();

  return cities.map((city) => {
    // In a real app, you would get the state from your data
    // For this example, we're using a placeholder
    const state = "ny"; // This would be dynamically determined

    return {
      city,
      state,
    };
  });
}
