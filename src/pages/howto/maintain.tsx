import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Clock,
  Wrench,
  Search,
  Filter,
  ArrowRight,
  Check,
  Calendar,
} from "lucide-react";
import { Input } from "@/components/ui/input";

const maintenanceGuides = [
  {
    id: "1",
    title: "Monthly Toilet Maintenance Checklist",
    description:
      "Essential maintenance tasks to perform regularly to prevent common toilet problems and extend its lifespan.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Regular",
    readTime: "5 min",
    difficulty: "Beginner",
    slug: "monthly-maintenance-checklist",
  },
  {
    id: "2",
    title: "How to Replace a Toilet Flapper",
    description:
      "Step-by-step guide to replacing a worn-out toilet flapper to stop leaks and running water issues.",
    image:
      "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Parts",
    readTime: "8 min",
    difficulty: "Beginner",
    slug: "replace-toilet-flapper",
  },
  {
    id: "3",
    title: "Toilet Fill Valve Replacement Guide",
    description:
      "Complete instructions for replacing a faulty fill valve to restore proper water flow to your toilet tank.",
    image:
      "https://images.unsplash.com/photo-1613214049841-028981a2eb71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Parts",
    readTime: "12 min",
    difficulty: "Intermediate",
    slug: "fill-valve-replacement",
  },
  {
    id: "4",
    title: "Preventing Mineral Buildup in Toilets",
    description:
      "Effective methods to prevent and remove mineral deposits and hard water stains from your toilet.",
    image:
      "https://images.unsplash.com/photo-1581876832484-c6a6a1aee7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Cleaning",
    readTime: "7 min",
    difficulty: "Beginner",
    slug: "prevent-mineral-buildup",
  },
  {
    id: "5",
    title: "Seasonal Toilet Maintenance Guide",
    description:
      "Comprehensive maintenance schedule for each season to keep your toilet in optimal condition year-round.",
    image:
      "https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Regular",
    readTime: "10 min",
    difficulty: "Beginner",
    slug: "seasonal-maintenance",
  },
  {
    id: "6",
    title: "Smart Toilet Maintenance Tips",
    description:
      "Specialized maintenance advice for electronic toilets and bidets to ensure longevity of electronic components.",
    image:
      "https://images.unsplash.com/photo-1585058178215-33108215e3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Smart",
    readTime: "9 min",
    difficulty: "Intermediate",
    slug: "smart-toilet-maintenance",
  },
];

export const metadata = {
  title: "Toilet Maintenance Guides - Preventative Care & Upkeep | Toilets.org",
  description:
    "Expert toilet maintenance guides to prevent problems, extend lifespan, and keep your bathroom fixtures in optimal condition. Easy DIY maintenance tips.",
};

const MaintenanceGuidesPage = () => {
  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Google AdSense - Top Banner */}
        <div className="w-full h-24 bg-gray-100 flex items-center justify-center mb-8 rounded-md">
          <p className="text-gray-500">Advertisement</p>
        </div>

        <h1 className="text-4xl font-bold mb-2">Toilet Maintenance Guides</h1>
        <p className="text-lg text-gray-600 mb-8">
          Keep your toilet in perfect working condition with our expert
          maintenance tips and guides
        </p>

        {/* Search Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <Input
                type="text"
                placeholder="Search maintenance guides (e.g., flapper replacement, mineral buildup)"
                className="pl-10"
              />
            </div>
            <Button className="md:w-auto w-full">
              <Search className="mr-2" size={18} />
              Find Guides
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Maintenance Guides</h2>
            <TabsList>
              <TabsTrigger value="all">All Guides</TabsTrigger>
              <TabsTrigger value="regular">Regular Maintenance</TabsTrigger>
              <TabsTrigger value="parts">Parts Replacement</TabsTrigger>
              <TabsTrigger value="special">Specialty Toilets</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {maintenanceGuides.map((guide) => (
                <Card
                  key={guide.id}
                  className="overflow-hidden h-full hover:shadow-md transition-shadow duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                      {guide.category}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4 text-xs text-gray-600 mb-2">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{guide.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Wrench className="h-3 w-3" />
                        <span>{guide.difficulty}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {guide.description}
                    </p>
                    <Button size="sm" className="w-full">
                      View Guide
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="regular" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {maintenanceGuides
                .filter(
                  (guide) =>
                    guide.category === "Regular" ||
                    guide.category === "Cleaning",
                )
                .map((guide) => (
                  <Card
                    key={guide.id}
                    className="overflow-hidden h-full hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={guide.image}
                        alt={guide.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                        {guide.category}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4 text-xs text-gray-600 mb-2">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{guide.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Wrench className="h-3 w-3" />
                          <span>{guide.difficulty}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">
                        {guide.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {guide.description}
                      </p>
                      <Button size="sm" className="w-full">
                        View Guide
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="parts" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {maintenanceGuides
                .filter((guide) => guide.category === "Parts")
                .map((guide) => (
                  <Card
                    key={guide.id}
                    className="overflow-hidden h-full hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={guide.image}
                        alt={guide.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                        {guide.category}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4 text-xs text-gray-600 mb-2">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{guide.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Wrench className="h-3 w-3" />
                          <span>{guide.difficulty}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">
                        {guide.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {guide.description}
                      </p>
                      <Button size="sm" className="w-full">
                        View Guide
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="special" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {maintenanceGuides
                .filter((guide) => guide.category === "Smart")
                .map((guide) => (
                  <Card
                    key={guide.id}
                    className="overflow-hidden h-full hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={guide.image}
                        alt={guide.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                        {guide.category}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4 text-xs text-gray-600 mb-2">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{guide.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Wrench className="h-3 w-3" />
                          <span>{guide.difficulty}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">
                        {guide.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {guide.description}
                      </p>
                      <Button size="sm" className="w-full">
                        View Guide
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Google AdSense - Middle Banner */}
        <div className="w-full h-24 bg-gray-100 flex items-center justify-center mb-10 rounded-md">
          <p className="text-gray-500">Advertisement</p>
        </div>

        {/* Maintenance Schedule */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            Recommended Maintenance Schedule
          </h2>
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center mb-3">
                    <Calendar className="h-6 w-6 text-primary mr-2" />
                    <h3 className="text-lg font-medium">Weekly</h3>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Clean toilet bowl and exterior",
                      "Check for leaks around base",
                      "Verify flush performance",
                    ].map((task) => (
                      <li key={task} className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{task}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center mb-3">
                    <Calendar className="h-6 w-6 text-primary mr-2" />
                    <h3 className="text-lg font-medium">Monthly</h3>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Check flapper for wear",
                      "Clean under rim jets",
                      "Inspect fill valve operation",
                      "Check water level in tank",
                    ].map((task) => (
                      <li key={task} className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{task}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center mb-3">
                    <Calendar className="h-6 w-6 text-primary mr-2" />
                    <h3 className="text-lg font-medium">Quarterly</h3>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Deep clean with descaler",
                      "Check all connections",
                      "Inspect tank components",
                      "Test flush valve",
                    ].map((task) => (
                      <li key={task} className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{task}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center mb-3">
                    <Calendar className="h-6 w-6 text-primary mr-2" />
                    <h3 className="text-lg font-medium">Yearly</h3>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Replace flapper",
                      "Check water supply line",
                      "Inspect wax ring/seal",
                      "Tighten mounting bolts",
                      "Professional inspection",
                    ].map((task) => (
                      <li key={task} className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{task}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="mt-6 text-center">
              <Button className="gap-2">
                <ArrowRight className="h-4 w-4" />
                Download Printable Maintenance Checklist
              </Button>
            </div>
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

export default MaintenanceGuidesPage;
