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
  AlertTriangle,
} from "lucide-react";
import { Input } from "@/components/ui/input";

const troubleshootingGuides = [
  {
    id: "1",
    title: "How to Fix a Running Toilet",
    description:
      "Learn the step-by-step process to diagnose and fix a constantly running toilet to save water and reduce your utility bills.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Common",
    readTime: "8 min",
    difficulty: "Beginner",
    slug: "fix-running-toilet",
  },
  {
    id: "2",
    title: "How to Unclog a Toilet Without a Plunger",
    description:
      "Emergency solutions for unclogging your toilet when you don't have a plunger handy, using common household items.",
    image:
      "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Emergency",
    readTime: "5 min",
    difficulty: "Beginner",
    slug: "unclog-without-plunger",
  },
  {
    id: "3",
    title: "Fix a Leaky Toilet Base",
    description:
      "Step-by-step instructions to identify and repair a toilet that's leaking around the base to prevent water damage.",
    image:
      "https://images.unsplash.com/photo-1613214049841-028981a2eb71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Leaks",
    readTime: "12 min",
    difficulty: "Intermediate",
    slug: "fix-leaky-toilet-base",
  },
  {
    id: "4",
    title: "Toilet Won't Flush Properly: Solutions",
    description:
      "Troubleshooting guide for toilets that won't flush completely or have weak flushing power.",
    image:
      "https://images.unsplash.com/photo-1581876832484-c6a6a1aee7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Common",
    readTime: "10 min",
    difficulty: "Beginner",
    slug: "toilet-wont-flush-properly",
  },
  {
    id: "5",
    title: "Fix a Toilet That Keeps Clogging",
    description:
      "Identify and solve the underlying issues causing frequent toilet clogs to prevent future problems.",
    image:
      "https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Common",
    readTime: "8 min",
    difficulty: "Beginner",
    slug: "fix-frequent-clogs",
  },
  {
    id: "6",
    title: "Troubleshooting Smart Toilet Issues",
    description:
      "Solutions for common electronic and mechanical problems with smart toilets and bidet seats.",
    image:
      "https://images.unsplash.com/photo-1585058178215-33108215e3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Smart",
    readTime: "15 min",
    difficulty: "Advanced",
    slug: "smart-toilet-troubleshooting",
  },
];

export const metadata = {
  title: "Toilet Troubleshooting & Repair Guides | Toilets.org",
  description:
    "Expert solutions for common toilet problems including running toilets, clogs, leaks, and flushing issues. Step-by-step DIY repair guides.",
};

const TroubleshootingGuidesPage = () => {
  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Google AdSense - Top Banner */}
        <div className="w-full h-24 bg-gray-100 flex items-center justify-center mb-8 rounded-md">
          <p className="text-gray-500">Advertisement</p>
        </div>

        <h1 className="text-4xl font-bold mb-2">
          Toilet Troubleshooting & Repair
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Expert solutions for common toilet problems and step-by-step repair
          guides
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
                placeholder="Describe your toilet problem (e.g., running toilet, clogged, leaking)"
                className="pl-10"
              />
            </div>
            <Button className="md:w-auto w-full">
              <Search className="mr-2" size={18} />
              Find Solutions
            </Button>
          </div>
        </div>

        {/* Common Problems Quick Links */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            Common Toilet Problems
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              {
                name: "Running Toilet",
                icon: <AlertTriangle className="h-5 w-5 text-amber-500" />,
                slug: "fix-running-toilet",
              },
              {
                name: "Clogged Toilet",
                icon: <AlertTriangle className="h-5 w-5 text-amber-500" />,
                slug: "unclog-without-plunger",
              },
              {
                name: "Leaking Base",
                icon: <AlertTriangle className="h-5 w-5 text-amber-500" />,
                slug: "fix-leaky-toilet-base",
              },
              {
                name: "Weak Flush",
                icon: <AlertTriangle className="h-5 w-5 text-amber-500" />,
                slug: "toilet-wont-flush-properly",
              },
              {
                name: "Frequent Clogs",
                icon: <AlertTriangle className="h-5 w-5 text-amber-500" />,
                slug: "fix-frequent-clogs",
              },
              {
                name: "Noisy Toilet",
                icon: <AlertTriangle className="h-5 w-5 text-amber-500" />,
                slug: "noisy-toilet",
              },
              {
                name: "Toilet Won't Fill",
                icon: <AlertTriangle className="h-5 w-5 text-amber-500" />,
                slug: "toilet-wont-fill",
              },
              {
                name: "Toilet Won't Stop Filling",
                icon: <AlertTriangle className="h-5 w-5 text-amber-500" />,
                slug: "toilet-wont-stop-filling",
              },
            ].map((problem) => (
              <a
                key={problem.name}
                href={`/howto/fix/${problem.slug}`}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 flex items-center gap-3"
              >
                {problem.icon}
                <span>{problem.name}</span>
              </a>
            ))}
          </div>
        </div>

        <Tabs defaultValue="all" className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Troubleshooting Guides</h2>
            <TabsList>
              <TabsTrigger value="all">All Problems</TabsTrigger>
              <TabsTrigger value="common">Common Issues</TabsTrigger>
              <TabsTrigger value="leaks">Leaks & Water</TabsTrigger>
              <TabsTrigger value="advanced">Advanced Repairs</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {troubleshootingGuides.map((guide) => (
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
                      View Solution
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="common" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {troubleshootingGuides
                .filter((guide) => guide.category === "Common")
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
                        View Solution
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="leaks" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {troubleshootingGuides
                .filter(
                  (guide) =>
                    guide.category === "Leaks" ||
                    guide.title.toLowerCase().includes("leak"),
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
                        View Solution
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {troubleshootingGuides
                .filter(
                  (guide) =>
                    guide.difficulty === "Advanced" ||
                    guide.difficulty === "Intermediate",
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
                        View Solution
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

        {/* When to Call a Professional */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            When to Call a Professional
          </h2>
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <p className="text-gray-700 mb-4">
              While many toilet issues can be fixed with DIY solutions, some
              problems require professional expertise. Consider calling a
              licensed plumber if you encounter any of these situations:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <ul className="space-y-2">
                {[
                  "Sewage backing up into multiple fixtures",
                  "Persistent clogs that don't respond to plunging",
                  "Cracked toilet tank or bowl",
                  "Major water leaks that can't be stopped",
                  "Sewer gas smell that persists after cleaning",
                ].map((situation) => (
                  <li key={situation} className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{situation}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {[
                  "Toilet that rocks or is unstable",
                  "Damaged floor around the toilet",
                  "Repeated issues with the same problem",
                  "Water supply line damage",
                  "Need for toilet relocation or bathroom remodel",
                ].map((situation) => (
                  <li key={situation} className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{situation}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <Button className="gap-2">
                <ArrowRight className="h-4 w-4" />
                Find Local Plumbers
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

export default TroubleshootingGuidesPage;
