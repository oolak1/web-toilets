import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Hammer,
  Clock,
  Wrench,
  Search,
  Filter,
  ArrowRight,
} from "lucide-react";
import { Input } from "@/components/ui/input";

const diyCategories = [
  {
    id: "repairs",
    name: "Toilet Repairs",
    description: "Fix common toilet problems with these step-by-step guides",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: 15,
  },
  {
    id: "installation",
    name: "DIY Installation",
    description: "Install or replace toilets and bathroom fixtures yourself",
    image:
      "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: 8,
  },
  {
    id: "upgrades",
    name: "Bathroom Upgrades",
    description:
      "Simple upgrades to improve your bathroom's functionality and appearance",
    image:
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: 12,
  },
  {
    id: "maintenance",
    name: "Maintenance Tips",
    description: "Regular maintenance to keep your toilet in top condition",
    image:
      "https://images.unsplash.com/photo-1585058178215-33108215e3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: 10,
  },
];

const popularTutorials = [
  {
    id: "1",
    title: "How to Fix a Running Toilet",
    description:
      "Learn the step-by-step process to diagnose and fix a constantly running toilet to save water and reduce your utility bills.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Repairs",
    time: "30 minutes",
    difficulty: "Beginner",
    tools: ["Adjustable wrench", "Replacement flapper", "Towel"],
    slug: "fix-running-toilet",
  },
  {
    id: "2",
    title: "Replace a Toilet Seat",
    description:
      "A simple guide to removing your old toilet seat and installing a new one for improved comfort and appearance.",
    image:
      "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Installation",
    time: "15 minutes",
    difficulty: "Beginner",
    tools: ["Adjustable wrench", "Screwdriver"],
    slug: "replace-toilet-seat",
  },
  {
    id: "3",
    title: "Install a Low-Flow Toilet",
    description:
      "Complete guide to removing your old toilet and installing a new water-efficient model to reduce water consumption.",
    image:
      "https://images.unsplash.com/photo-1613214049841-028981a2eb71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Installation",
    time: "2 hours",
    difficulty: "Intermediate",
    tools: ["Adjustable wrench", "Putty knife", "Wax ring", "Caulk gun"],
    slug: "install-low-flow-toilet",
  },
  {
    id: "4",
    title: "Unclog a Toilet Without a Plunger",
    description:
      "Emergency solutions for unclogging your toilet when you don't have a plunger handy, using common household items.",
    image:
      "https://images.unsplash.com/photo-1581876832484-c6a6a1aee7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Repairs",
    time: "15 minutes",
    difficulty: "Beginner",
    tools: ["Hot water", "Dish soap", "Baking soda", "Vinegar"],
    slug: "unclog-without-plunger",
  },
  {
    id: "5",
    title: "Fix a Leaky Toilet Base",
    description:
      "Step-by-step instructions to identify and repair a toilet that's leaking around the base to prevent water damage.",
    image:
      "https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Repairs",
    time: "1 hour",
    difficulty: "Intermediate",
    tools: ["Adjustable wrench", "Wax ring", "Caulk gun", "Towels"],
    slug: "fix-leaky-toilet-base",
  },
  {
    id: "6",
    title: "Install a Bidet Attachment",
    description:
      "Easy installation guide for adding a bidet attachment to your existing toilet for improved hygiene and comfort.",
    image:
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Upgrades",
    time: "30 minutes",
    difficulty: "Beginner",
    tools: ["Adjustable wrench", "Teflon tape"],
    slug: "install-bidet-attachment",
  },
];

const DIYPage = () => {
  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Google AdSense - Top Banner */}
        <div className="w-full h-24 bg-gray-100 flex items-center justify-center mb-8 rounded-md">
          <p className="text-gray-500">Advertisement</p>
        </div>

        <h1 className="text-4xl font-bold mb-2">
          DIY Toilet & Bathroom Projects
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Step-by-step tutorials and guides for repairing, upgrading, and
          maintaining your toilet and bathroom
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
                placeholder="Search for DIY projects (e.g., fix running toilet, install bidet)"
                className="pl-10"
              />
            </div>
            <Button className="md:w-auto w-full">
              <Search className="mr-2" size={18} />
              Find Projects
            </Button>
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diyCategories.map((category) => (
              <a
                key={category.id}
                href={`/diy/${category.id}`}
                className="group block"
              >
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-3 right-3 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                      {category.count} Projects
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>

        <Tabs defaultValue="popular" className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">DIY Tutorials</h2>
            <TabsList>
              <TabsTrigger value="popular">Most Popular</TabsTrigger>
              <TabsTrigger value="recent">Recently Added</TabsTrigger>
              <TabsTrigger value="beginner">Beginner Friendly</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="popular" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularTutorials.map((tutorial) => (
                <Card
                  key={tutorial.id}
                  className="overflow-hidden h-full hover:shadow-md transition-shadow duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={tutorial.image}
                      alt={tutorial.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                      {tutorial.category}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4 text-xs text-gray-600 mb-2">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{tutorial.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Wrench className="h-3 w-3" />
                        <span>{tutorial.difficulty}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Hammer className="h-3 w-3" />
                        <span>{tutorial.tools.length} tools</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {tutorial.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {tutorial.description}
                    </p>
                    <Button size="sm" className="w-full">
                      View Tutorial
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recent" className="mt-0">
            <p className="text-gray-600">
              Recently added tutorials would be displayed here.
            </p>
          </TabsContent>

          <TabsContent value="beginner" className="mt-0">
            <p className="text-gray-600">
              Beginner-friendly tutorials would be displayed here.
            </p>
          </TabsContent>
        </Tabs>

        {/* Google AdSense - Middle Banner */}
        <div className="w-full h-24 bg-gray-100 flex items-center justify-center mb-10 rounded-md">
          <p className="text-gray-500">Advertisement</p>
        </div>

        {/* Featured Project */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Featured Project</h2>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  alt="Complete Bathroom Renovation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-6 md:p-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                    Advanced
                  </span>
                  <span className="text-gray-600 text-sm flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    Weekend Project
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Complete Bathroom Renovation
                </h3>
                <p className="text-gray-600 mb-6">
                  Transform your outdated bathroom into a modern oasis with this
                  comprehensive DIY renovation guide. Learn how to replace
                  fixtures, update lighting, install new flooring, and more.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">What You'll Need:</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Basic tools",
                      "Plumbing supplies",
                      "Tile",
                      "Grout",
                      "Caulk",
                      "Paint",
                      "New fixtures",
                    ].map((item) => (
                      <span
                        key={item}
                        className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <Button className="flex items-center gap-2">
                  View Full Tutorial
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Tools & Materials Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            Essential Tools & Materials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Adjustable Wrench",
                image:
                  "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                count: 24,
              },
              {
                name: "Plunger",
                image:
                  "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                count: 18,
              },
              {
                name: "Toilet Repair Kit",
                image:
                  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                count: 15,
              },
              {
                name: "Caulk Gun",
                image:
                  "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                count: 12,
              },
            ].map((tool) => (
              <Card
                key={tool.name}
                className="overflow-hidden h-full hover:shadow-md transition-shadow duration-300"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-1">{tool.name}</h3>
                  <p className="text-sm text-gray-600">
                    Used in {tool.count} projects
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button variant="outline">View All Tools & Materials</Button>
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

export default DIYPage;
