import React from "react";
import ServiceFinder from "@/components/home/ServiceFinder";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Phone, ArrowRight, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

const popularLocations = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
  "Austin",
  "Jacksonville",
  "Fort Worth",
  "Columbus",
  "San Francisco",
];

const featuredProviders = [
  {
    id: "1",
    name: "Reliable Plumbing Co.",
    rating: 4.8,
    reviewCount: 124,
    specialty: "Toilet Installation & Repair",
    distance: "1.2 miles",
    address: "123 Main St, New York, NY",
    phone: "(555) 123-4567",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=plumbing1",
    featured: true,
  },
  {
    id: "2",
    name: "Expert Bathroom Solutions",
    rating: 4.6,
    reviewCount: 98,
    specialty: "Full Bathroom Remodeling",
    distance: "2.5 miles",
    address: "456 Oak Ave, Los Angeles, CA",
    phone: "(555) 987-6543",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=bathroom2",
    featured: true,
  },
  {
    id: "3",
    name: "Quick Fix Plumbers",
    rating: 4.5,
    reviewCount: 76,
    specialty: "Emergency Repairs",
    distance: "3.1 miles",
    address: "789 Pine Rd, Chicago, IL",
    phone: "(555) 456-7890",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=plumbing3",
    featured: true,
  },
  {
    id: "4",
    name: "Modern Bathroom Pros",
    rating: 4.7,
    reviewCount: 112,
    specialty: "Toilet & Bathroom Upgrades",
    distance: "1.8 miles",
    address: "321 Elm St, Houston, TX",
    phone: "(555) 789-0123",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=bathroom4",
    featured: true,
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Google AdSense - Top Banner */}
        <div className="w-full h-24 bg-gray-100 flex items-center justify-center mb-8 rounded-md">
          <p className="text-gray-500">Advertisement</p>
        </div>

        <h1 className="text-4xl font-bold mb-2">Local Toilet Services</h1>
        <p className="text-lg text-gray-600 mb-8">
          Find reliable plumbers and bathroom specialists in your area for all
          your toilet and bathroom needs.
        </p>

        {/* Search Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <h2 className="text-xl font-semibold mb-4">Find Services Near You</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <MapPin
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <Input
                type="text"
                placeholder="Enter your location (city, state, or zip code)"
                className="pl-10"
              />
            </div>
            <div className="relative flex-grow">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <Input
                type="text"
                placeholder="Service type (e.g., toilet installation, repair)"
                className="pl-10"
              />
            </div>
            <Button className="md:w-auto w-full">
              <Search className="mr-2" size={18} />
              Find Services
            </Button>
          </div>
        </div>

        {/* Popular Locations */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Popular Locations</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {popularLocations.map((location) => (
              <a
                key={location}
                href={`/services/${location.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-white hover:bg-gray-50 border border-gray-200 rounded-md p-4 text-center transition-colors duration-200"
              >
                <MapPin className="h-5 w-5 mx-auto mb-2 text-primary" />
                <span>{location}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Featured Service Providers */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            Featured Service Providers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProviders.map((provider) => (
              <Card key={provider.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-24 h-24 bg-gray-100 flex items-center justify-center">
                    <img
                      src={provider.image}
                      alt={provider.name}
                      className="h-16 w-16 rounded-full"
                    />
                  </div>
                  <div className="flex-grow p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">
                          {provider.name}
                          {provider.featured && (
                            <span className="ml-2 bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded">
                              Featured
                            </span>
                          )}
                        </h3>
                        <div className="flex items-center mt-1">
                          <div className="flex items-center">
                            <Star
                              className="text-yellow-400 fill-yellow-400"
                              size={16}
                            />
                            <span className="ml-1 text-sm font-medium">
                              {provider.rating}
                            </span>
                          </div>
                          <span className="mx-2 text-gray-400 text-sm">•</span>
                          <span className="text-sm text-gray-600">
                            {provider.reviewCount} reviews
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          {provider.specialty}
                        </p>
                      </div>
                      <span className="text-sm text-gray-500">
                        {provider.distance}
                      </span>
                    </div>
                    <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin size={16} className="mr-1" />
                        <span>{provider.address}</span>
                      </div>
                      <div className="flex items-center mt-2 sm:mt-0">
                        <Button variant="outline" size="sm" className="mr-2">
                          <Phone size={16} className="mr-1" />
                          Call
                        </Button>
                        <Button size="sm">
                          View Profile
                          <ArrowRight size={16} className="ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button variant="outline" size="lg">
              View All Service Providers
            </Button>
          </div>
        </div>

        {/* Google AdSense - Middle Banner */}
        <div className="w-full h-24 bg-gray-100 flex items-center justify-center mb-10 rounded-md">
          <p className="text-gray-500">Advertisement</p>
        </div>

        {/* Service Finder Component */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Find Services by Map</h2>
          <ServiceFinder />
        </div>

        {/* Service Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            Browse by Service Type
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Toilet Installation", count: 156 },
              { name: "Toilet Repair", count: 243 },
              { name: "Bathroom Remodeling", count: 128 },
              { name: "Emergency Plumbing", count: 97 },
              { name: "Toilet Replacement", count: 112 },
              { name: "Leak Repair", count: 189 },
              { name: "Clogged Toilet", count: 201 },
              { name: "Water Efficiency", count: 84 },
            ].map((service) => (
              <a
                key={service.name}
                href={`/services?type=${service.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-white hover:bg-gray-50 border border-gray-200 rounded-md p-4 transition-colors duration-200"
              >
                <h3 className="font-medium mb-1">{service.name}</h3>
                <p className="text-sm text-gray-600">
                  {service.count} providers
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Google AdSense - Bottom Banner */}
        <div className="w-full h-24 bg-gray-100 flex items-center justify-center mt-8 rounded-md">
          <p className="text-gray-500">Advertisement</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
