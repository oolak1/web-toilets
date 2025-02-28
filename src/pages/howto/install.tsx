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
} from "lucide-react";
import { Input } from "@/components/ui/input";

const installationGuides = [
  {
    id: "1",
    title: "Standard Toilet Installation Guide",
    description:
      "Complete step-by-step instructions for installing a standard two-piece toilet in your bathroom.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Standard",
    readTime: "15 min",
    difficulty: "Intermediate",
    slug: "standard-toilet-installation",
  },
  {
    id: "2",
    title: "Wall-Hung Toilet Installation",
    description:
      "Learn how to install a modern wall-hung toilet with concealed tank for a sleek, space-saving bathroom design.",
    image:
      "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Wall-Hung",
    readTime: "25 min",
    difficulty: "Advanced",
    slug: "wall-hung-toilet-installation",
  },
  {
    id: "3",
    title: "Smart Toilet Installation Guide",
    description:
      "Detailed instructions for installing a modern smart toilet with electronic features and proper electrical connections.",
    image:
      "https://images.unsplash.com/photo-1613214049841-028981a2eb71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Smart",
    readTime: "20 min",
    difficulty: "Advanced",
    slug: "smart-toilet-installation",
  },
  {
    id: "4",
    title: "Corner Toilet Installation",
    description:
      "How to properly install a space-saving corner toilet in a small bathroom or powder room.",
    image:
      "https://images.unsplash.com/photo-1581876832484-c6a6a1aee7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Corner",
    readTime: "15 min",
    difficulty: "Intermediate",
    slug: "corner-toilet-installation",
  },
  {
    id: "5",
    title: "Toilet Replacement: Old to New",
    description:
      "Complete guide to removing an old toilet and installing a new one, including proper disposal methods.",
    image:
      "https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Replacement",
    readTime: "18 min",
    difficulty: "Intermediate",
    slug: "toilet-replacement-guide",
  },
  {
    id: "6",
    title: "Bidet Toilet Seat Installation",
    description:
      "Step-by-step guide to installing a bidet toilet seat attachment to your existing toilet.",
    image:
      "https://images.unsplash.com/photo-1585058178215-33108215e3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Accessories",
    readTime: "10 min",
    difficulty: "Beginner",
    slug: "bidet-seat-installation",
  },
];

export const metadata = {
  title: "Toilet Installation Guides - Step-by-Step Instructions | Toilets.org",
  description:
    "Comprehensive toilet installation guides for standard, wall-hung, smart, and corner toilets. DIY instructions with tools lists and expert tips.",
};

const InstallationGuidesPage = () => {
  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Google AdSense - Top Banner */}
        <div className="w-full h-24 bg-gray-100 flex items-center justify-center mb-8 rounded-md">
          <p className="text-gray-500">Advertisement</p>
        </div>

        <h1 className="text-4xl font-bold mb-2">Toilet Installation Guides</h1>
        <p className="text-lg text-gray-600 mb-8">
          Step-by-step instructions for installing all types of toilets in your
          bathroom
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
                placeholder="Search installation guides (e.g., wall-hung, smart toilet)"
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
            <h2 className="text-2xl font-semibold">Installation Guides</h2>
            <TabsList>
              <TabsTrigger value="all">All Types</TabsTrigger>
              <TabsTrigger value="standard">Standard</TabsTrigger>
              <TabsTrigger value="special">Specialty</TabsTrigger>
              <TabsTrigger value="beginner">Beginner Friendly</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {installationGuides.map((guide) => (
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

          <TabsContent value="standard" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {installationGuides
                .filter(
                  (guide) =>
                    guide.category === "Standard" ||
                    guide.category === "Replacement",
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

          <TabsContent value="special" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {installationGuides
                .filter((guide) =>
                  ["Wall-Hung", "Smart", "Corner"].includes(guide.category),
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

          <TabsContent value="beginner" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {installationGuides
                .filter((guide) => guide.difficulty === "Beginner")
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

        {/* Tools & Materials Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            Essential Tools & Materials for Installation
          </h2>
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Tools You'll Need</h3>
                <ul className="space-y-2">
                  {[
                    "Adjustable wrench",
                    "Screwdriver set",
                    "Pliers",
                    "Putty knife",
                    "Hacksaw (for cutting bolts)",
                    "Tape measure",
                    "Level",
                    "Bucket and sponge",
                    "Plumber's tape",
                    "Safety gloves",
                  ].map((tool) => (
                    <li key={tool} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">Materials Required</h3>
                <ul className="space-y-2">
                  {[
                    "New toilet (if replacing)",
                    "Wax ring or waxless seal",
                    "Toilet mounting bolts",
                    "Water supply line",
                    "Toilet seat (if not included)",
                    "Silicone caulk",
                    "Shims (for leveling)",
                    "Bolt caps",
                    "Cleaning supplies",
                  ].map((material) => (
                    <li key={material} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{material}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Button className="gap-2">
                <ArrowRight className="h-4 w-4" />
                Shop Installation Supplies
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

export default InstallationGuidesPage;
