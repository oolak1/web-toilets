"use client";

import React, { useState } from "react";
import { Search, MapPin, Phone, Star, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface ServiceProvider {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  specialty: string;
  distance: string;
  address: string;
  phone: string;
  image: string;
}

interface ServiceFinderProps {
  initialLocation?: string;
  providers?: ServiceProvider[];
}

const ServiceFinder = ({
  initialLocation = "",
  providers = [
    {
      id: "1",
      name: "Reliable Plumbing Co.",
      rating: 4.8,
      reviewCount: 124,
      specialty: "Toilet Installation & Repair",
      distance: "1.2 miles",
      address: "123 Main St, Anytown, USA",
      phone: "(555) 123-4567",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=plumbing1",
    },
    {
      id: "2",
      name: "Expert Bathroom Solutions",
      rating: 4.6,
      reviewCount: 98,
      specialty: "Full Bathroom Remodeling",
      distance: "2.5 miles",
      address: "456 Oak Ave, Anytown, USA",
      phone: "(555) 987-6543",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=bathroom2",
    },
    {
      id: "3",
      name: "Quick Fix Plumbers",
      rating: 4.5,
      reviewCount: 76,
      specialty: "Emergency Repairs",
      distance: "3.1 miles",
      address: "789 Pine Rd, Anytown, USA",
      phone: "(555) 456-7890",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=plumbing3",
    },
  ],
}: ServiceFinderProps) => {
  const [location, setLocation] = useState(initialLocation);
  const [activeTab, setActiveTab] = useState("map");

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight mb-2">
            Find Local Toilet Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with trusted plumbers and bathroom specialists in your area
            for installations, repairs, and maintenance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <MapPin
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <Input
                  type="text"
                  placeholder="Enter your location"
                  className="pl-10"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                <Search className="mr-2" size={18} />
                Find Services
              </Button>
            </div>
          </div>

          <Tabs
            defaultValue={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="px-6 pt-4">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="map">Map View</TabsTrigger>
                <TabsTrigger value="list">List View</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="map" className="p-6">
              <div className="bg-gray-200 rounded-lg h-[300px] flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto mb-2" size={32} />
                  <p className="text-gray-600">
                    Interactive map would display here with service providers in
                    the area
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="list" className="p-6">
              <div className="space-y-4">
                {providers.map((provider) => (
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
                              <span className="mx-2 text-gray-400 text-sm">
                                •
                              </span>
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
                            <Button
                              variant="outline"
                              size="sm"
                              className="mr-2"
                            >
                              <Phone size={16} className="mr-1" />
                              Call
                            </Button>
                            <Button size="sm">
                              View Profile
                              <ChevronRight size={16} className="ml-1" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ServiceFinder;
