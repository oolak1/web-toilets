import React from "react";
import { notFound } from "next/navigation";
import {
  getBusinessBySlug,
  getAllCities,
  getBusinessListings,
} from "@/lib/utils/businessData";
import {
  Star,
  MapPin,
  Phone,
  Globe,
  Mail,
  Clock,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const business = getBusinessBySlug(params.slug);

  if (!business) {
    return {
      title: "Business Not Found",
      description: "The requested business could not be found.",
    };
  }

  return {
    title: `${business.name} - ${business.city}, ${business.state} | Toilets.org`,
    description: `${business.description} Contact ${business.name} at ${business.phone} for ${business.specialty.join(", ")} services in ${business.city}, ${business.state}.`,
  };
}

export default function BusinessPage({ params }: { params: { slug: string } }) {
  const business = getBusinessBySlug(params.slug);

  if (!business) {
    notFound();
  }

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Business Header */}
          <div className="p-6 md:p-8 border-b border-gray-200">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                <img
                  src={business.images.profile}
                  alt={business.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow">
                <h1 className="text-3xl font-bold mb-2">{business.name}</h1>
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <Star className="text-yellow-400 fill-yellow-400 h-5 w-5" />
                    <span className="ml-1 font-medium">{business.rating}</span>
                  </div>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-gray-600">
                    {business.reviewCount} reviews
                  </span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-gray-600">{business.category}</span>
                </div>
                <p className="text-gray-600">{business.description}</p>
              </div>
              <div className="flex flex-col gap-3 mt-4 md:mt-0">
                <Button className="w-full md:w-auto">
                  <Phone className="mr-2 h-4 w-4" />
                  Contact
                </Button>
                <Button variant="outline" className="w-full md:w-auto">
                  <MapPin className="mr-2 h-4 w-4" />
                  Get Directions
                </Button>
              </div>
            </div>
          </div>

          {/* Business Details */}
          <Tabs defaultValue="about" className="w-full">
            <div className="px-6 md:px-8 pt-4 border-b border-gray-200">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="services">Services</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="about" className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-semibold mb-4">
                    Contact Information
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-gray-500 mt-0.5 mr-3" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-gray-600">{business.address}</p>
                        <p className="text-gray-600">
                          {business.city}, {business.state} {business.zip}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-gray-500 mr-3" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-600">{business.phone}</p>
                      </div>
                    </div>
                    {business.email && (
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-gray-500 mr-3" />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-gray-600">{business.email}</p>
                        </div>
                      </div>
                    )}
                    {business.website && (
                      <div className="flex items-center">
                        <Globe className="h-5 w-5 text-gray-500 mr-3" />
                        <div>
                          <p className="font-medium">Website</p>
                          <p className="text-gray-600">
                            <a
                              href={business.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              {business.website.replace(/^https?:\/\//, "")}
                            </a>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">Business Hours</h2>
                  {business.hours ? (
                    <div className="space-y-2">
                      {Object.entries(business.hours).map(([day, hours]) => (
                        <div key={day} className="flex justify-between">
                          <span className="capitalize">{day}</span>
                          <span>{hours}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">Hours not available</p>
                  )}
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Specialties</h2>
                <div className="flex flex-wrap gap-2">
                  {business.specialty.map((item, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="services" className="p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">Services Offered</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {business.services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="gallery" className="p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">Photo Gallery</h2>
              {business.images.gallery && business.images.gallery.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {business.images.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="rounded-lg overflow-hidden h-48"
                    >
                      <img
                        src={image}
                        alt={`${business.name} - Gallery image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">No gallery images available</p>
              )}
            </TabsContent>

            <TabsContent value="reviews" className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Customer Reviews</h2>
                <Button>Write a Review</Button>
              </div>

              <div className="space-y-6">
                <p className="text-gray-600">
                  Reviews would be displayed here.
                </p>
                {/* This would be populated with actual reviews */}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

// This function would generate all the business pages at build time
export async function generateStaticParams() {
  const businesses = getBusinessListings();

  return businesses.map((business) => ({
    slug: business.slug,
  }));
}
