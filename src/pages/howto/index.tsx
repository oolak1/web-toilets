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
} from "lucide-react";
import { Input } from "@/components/ui/input";

const guideCategories = [
  {
    id: "install",
    name: "Installation Guides",
    description:
      "Step-by-step instructions for installing different types of toilets",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: 12,
  },
  {
    id: "maintain",
    name: "Maintenance Tips",
    description:
      "Regular maintenance advice to keep your toilet in top condition",
    image:
      "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: 18,
  },
  {
    id: "fix",
    name: "Troubleshooting",
    description: "Solutions for common toilet problems and issues",
    image:
      "https://images.unsplash.com/photo-1585058178215-33108215e3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: 24,
  },
  {
    id: "clean",
    name: "Cleaning Guides",
    description:
      "Effective cleaning methods for spotless toilets and bathrooms",
    image:
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: 15,
  },
];

const popularGuides = [
  {
    id: "1",
    title: "How to Fix a Running Toilet",
    description:
      "Learn the step-by-step process to diagnose and fix a constantly running toilet to save water and reduce your utility bills.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Repairs",
    readTime: "8 min",
    difficulty: "Beginner",
    slug: "fix-running-toilet",
  },
  {
    id: "2",
    title: "Toilet Installation Guide for Beginners",
    description:
      "A comprehensive guide to installing a new toilet, from removing the old one to connecting the water supply.",
    image:
      "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Installation",
    readTime: "15 min",
    difficulty: "Intermediate",
    slug: "toilet-installation-guide",
  },
  {
    id: "3",
    title: "Monthly Toilet Maintenance Checklist",
    description:
      "Essential maintenance tasks to perform regularly to prevent common toilet problems and extend its lifespan.",
    image:
      "https://images.unsplash.com/photo-1613214049841-028981a2eb71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Maintenance",
    readTime: "5 min",
    difficulty: "Beginner",
    slug: "toilet-maintenance-checklist",
  },
  {
    id: "4",
    title: "How to Unclog a Toilet Without a Plunger",
    description:
      "Emergency solutions for unclogging your toilet when you don't have a plunger handy, using common household items.",
    image:
      "https://images.unsplash.com/photo-1581876832484-c6a6a1aee7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Emergency",
    readTime: "5 min",
    difficulty: "Beginner",
    slug: "unclog-without-plunger",
  },
  {
    id: "5",
    title: "Deep Cleaning Your Toilet: Ultimate Guide",
    description:
      "Learn how to properly deep clean your toilet to remove stains, mineral deposits, and bacteria for a sparkling clean bathroom.",
    image:
      "https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Cleaning",
    readTime: "10 min",
    difficulty: "Beginner",
    slug: "deep-cleaning-toilet-guide",
  },
  {
    id: "6",
    title: "Toilet Flapper Replacement Guide",
    description:
      "A simple guide to replacing your toilet's flapper valve, one of the most common causes of toilet leaks and running water.",
    image:
      "https://images.unsplash.com/photo-1585058178215-33108215e3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Maintenance",
    readTime: "6 min",
    difficulty: "Beginner",
    slug: "toilet-flapper-replacement",
  },
];

export const metadata = {
  title:
    "Toilet Howto Guides - Installation, Maintenance & Troubleshooting | Toilets.org",
  description:
    "Comprehensive step-by-step guides for toilet installation, maintenance, troubleshooting, and cleaning. Expert advice for DIY bathroom projects.",
};

const HowtoGuidesPage = () => {
  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Google AdSense - Top Banner */}
        <div className="w-full h-24 bg-gray-100 flex items-center justify-center mb-8 rounded-md">
          <p className="text-gray-500">Advertisement</p>
        </div>

        <h1 className="text-4xl font-bold mb-2">Toilet Howto Guides</h1>
        <p className="text-lg text-gray-600 mb-8">
          Step-by-step instructions for installing, maintaining, and
          troubleshooting your toilet
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
                placeholder="Search guides (e.g., fix running toilet, install new toilet)"
                className="pl-10"
              />
            </div>
            <Button className="md:w-auto w-full">
              <Search className="mr-2" size={18} />
              Find Guides
            </Button>
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guideCategories.map((category) => (
              <a
                key={category.id}
                href={`/howto/${category.id}`}
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
                      {category.count} Guides
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
            <h2 className="text-2xl font-semibold">Featured Guides</h2>
            <TabsList>
              <TabsTrigger value="popular">Most Popular</TabsTrigger>
              <TabsTrigger value="recent">Recently Added</TabsTrigger>
              <TabsTrigger value="beginner">Beginner Friendly</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="popular" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularGuides.map((guide) => (
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
                      Read Guide
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recent" className="mt-0">
            <p className="text-gray-600">
              Recently added guides would be displayed here.
            </p>
          </TabsContent>

          <TabsContent value="beginner" className="mt-0">
            <p className="text-gray-600">
              Beginner-friendly guides would be displayed here.
            </p>
          </TabsContent>
        </Tabs>

        {/* Google AdSense - Middle Banner */}
        <div className="w-full h-24 bg-gray-100 flex items-center justify-center mb-10 rounded-md">
          <p className="text-gray-500">Advertisement</p>
        </div>

        {/* Featured Guide */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Featured Guide</h2>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  alt="Complete Toilet Maintenance Guide"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-6 md:p-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                    Comprehensive Guide
                  </span>
                  <span className="text-gray-600 text-sm flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    15 min read
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  The Ultimate Toilet Maintenance Guide
                </h3>
                <p className="text-gray-600 mb-6">
                  This comprehensive guide covers all aspects of toilet
                  maintenance, from routine cleaning to preventing common
                  issues. Learn how to extend the life of your toilet, improve
                  its efficiency, and avoid costly repairs with these expert
                  tips and techniques.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">What You'll Learn:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      "Proper cleaning techniques",
                      "Preventing clogs",
                      "Fixing leaks",
                      "Water conservation tips",
                      "When to call a professional",
                      "Recommended products",
                      "Seasonal maintenance",
                      "Troubleshooting common issues",
                    ].map((item) => (
                      <div key={item} className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Button className="flex items-center gap-2">
                  Read Full Guide
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
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

export default HowtoGuidesPage;
