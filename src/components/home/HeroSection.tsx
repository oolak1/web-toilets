"use client";

import React, { useState } from "react";
import { Search, MapPin, Droplets, Wrench } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { SearchFilters } from "@/components/SearchBar";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

const HeroSection = ({
  title = "The Ultimate Bathroom & Toilet Resource",
  subtitle = "Find everything you need to know about toilets, from product reviews to maintenance guides and local services.",
  backgroundImage = "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1512&q=80",
}: HeroSectionProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Create default filters
      const defaultFilters: SearchFilters = {
        contentType: ["guide", "product", "service", "diy"],
        difficulty: [],
        readTime: "",
        sortBy: "relevance",
      };

      // Store search query and filters in sessionStorage
      sessionStorage.setItem("searchQuery", searchQuery);
      sessionStorage.setItem("searchFilters", JSON.stringify(defaultFilters));

      // Navigate to search results page
      navigate("/search-results");
    }
  };

  return (
    <div className="relative w-full h-[500px] bg-gray-100 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-lg text-white/90 max-w-2xl mb-8">{subtitle}</p>

        {/* Search Component */}
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden">
          <Tabs defaultValue="location" className="w-full">
            <TabsList className="w-full grid grid-cols-3 bg-gray-50">
              <TabsTrigger value="location" className="py-3">
                <MapPin className="mr-2 h-4 w-4" />
                By Location
              </TabsTrigger>
              <TabsTrigger value="type" className="py-3">
                <Droplets className="mr-2 h-4 w-4" />
                By Toilet Type
              </TabsTrigger>
              <TabsTrigger value="problem" className="py-3">
                <Wrench className="mr-2 h-4 w-4" />
                By Problem
              </TabsTrigger>
            </TabsList>

            <div className="p-4">
              <TabsContent value="location" className="mt-0">
                <form onSubmit={handleSearch} className="flex">
                  <Input
                    placeholder="Enter your city or zip code..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="rounded-r-none"
                  />
                  <Button type="submit" className="rounded-l-none">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="type" className="mt-0">
                <form onSubmit={handleSearch} className="flex">
                  <Input
                    placeholder="Search for toilet types (e.g., smart, eco-friendly)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="rounded-r-none"
                  />
                  <Button type="submit" className="rounded-l-none">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="problem" className="mt-0">
                <form onSubmit={handleSearch} className="flex">
                  <Input
                    placeholder="Describe your toilet problem..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="rounded-r-none"
                  />
                  <Button type="submit" className="rounded-l-none">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </form>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
