import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Clock, Wrench, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

import SearchBar, { SearchFilters } from "@/components/SearchBar";
import SearchResults from "@/components/SearchResults";
import { searchContent } from "@/lib/utils/searchUtils";

const howtoCategories = [
  {
    id: "install",
    name: "Installation Guides",
    description:
      "Step-by-step instructions for installing toilets and fixtures",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: 15,
  },
  {
    id: "maintain",
    name: "Maintenance Tips",
    description: "Regular maintenance to keep your toilet in top condition",
    image:
      "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: 22,
  },
  {
    id: "fix",
    name: "Troubleshooting",
    description: "Solutions for common toilet problems and issues",
    image:
      "https://images.unsplash.com/photo-1585058178215-33108215e3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: 28,
  },
  {
    id: "upgrade",
    name: "Upgrades & Modifications",
    description: "Enhance your toilet with useful upgrades and modifications",
    image:
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: 12,
  },
];

const popularHowtos = [
  {
    id: "1",
    title: "How to Fix a Running Toilet in 15 Minutes",
    description:
      "A quick guide to diagnosing and fixing a constantly running toilet to save water and reduce your utility bills.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Fix",
    readTime: "8 min",
    difficulty: "Beginner",
    slug: "fix-running-toilet",
  },
  {
    id: "2",
    title: "Installing a New Toilet: Complete Guide",
    description:
      "Step-by-step instructions for removing your old toilet and installing a new one correctly.",
    image:
      "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Install",
    readTime: "15 min",
    difficulty: "Intermediate",
    slug: "install-new-toilet",
  },
  {
    id: "3",
    title: "Monthly Toilet Maintenance Checklist",
    description:
      "Essential maintenance tasks to keep your toilet functioning properly and prevent common problems.",
    image:
      "https://images.unsplash.com/photo-1613214049841-028981a2eb71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Maintain",
    readTime: "5 min",
    difficulty: "Beginner",
    slug: "monthly-toilet-maintenance",
  },
  {
    id: "4",
    title: "How to Unclog Any Toilet Without Calling a Plumber",
    description:
      "Multiple methods to unclog stubborn toilet blockages using common household tools and products.",
    image:
      "https://images.unsplash.com/photo-1581876832484-c6a6a1aee7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Fix",
    readTime: "10 min",
    difficulty: "Beginner",
    slug: "unclog-toilet-without-plumber",
  },
  {
    id: "5",
    title: "Installing a Bidet Attachment: DIY Guide",
    description:
      "How to add a bidet attachment to your existing toilet for improved hygiene and comfort.",
    image:
      "https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Upgrade",
    readTime: "12 min",
    difficulty: "Beginner",
    slug: "install-bidet-attachment",
  },
  {
    id: "6",
    title: "Fixing a Leaky Toilet Base",
    description:
      "Identify and repair the cause of water leaking around the base of your toilet to prevent floor damage.",
    image:
      "https://images.unsplash.com/photo-1585058178215-33108215e3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Fix",
    readTime: "10 min",
    difficulty: "Intermediate",
    slug: "fix-leaky-toilet-base",
  },
];

const HowtoPage = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (query: string, filters: SearchFilters) => {
    if (query.trim() === "") {
      setIsSearching(false);
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    const results = searchContent(query, filters);
    setSearchResults(results);
  };

  const clearSearch = () => {
    setIsSearching(false);
    setSearchResults([]);
  };

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Google AdSense - Top Banner */}
        <div className="w-full h-24 bg-gray-100 flex items-center justify-center mb-8 rounded-md">
          <p className="text-gray-500">Advertisement</p>
        </div>

        <h1 className="text-4xl font-bold mb-2">Toilet How-to Guides</h1>
        <p className="text-lg text-gray-600 mb-8">
          Practical step-by-step instructions for installing, maintaining, and
          fixing your toilet
        </p>

        {/* Search Section */}
        <SearchBar
          onSearch={handleSearch}
          placeholder="Search how-to guides (e.g., fix running toilet, install bidet)"
        />

        {isSearching ? (
          <SearchResults results={searchResults} onClearSearch={clearSearch} />
        ) : (
          <>
            {/* Featured How-to */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">
                Featured How-to Guide
              </h2>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2">
                    <img
                      src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                      alt="How to Fix a Running Toilet"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:w-1/2 p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                        Fix
                      </span>
                      <span className="text-gray-600 text-sm flex items-center gap-1">
                        <Clock className="h-3 w-3" />8 min read
                      </span>
                      <span className="text-gray-600 text-sm flex items-center gap-1">
                        <Wrench className="h-3 w-3" />
                        Beginner
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      How to Fix a Running Toilet in 15 Minutes
                    </h3>
                    <p className="text-gray-600 mb-6">
                      A running toilet can waste up to 200 gallons of water per
                      day, leading to higher water bills and unnecessary
                      environmental impact. This guide will show you how to
                      quickly diagnose the cause and fix it yourself without
                      calling a plumber.
                    </p>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">What You'll Need:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {[
                          "Adjustable wrench",
                          "Replacement flapper (if needed)",
                          "Replacement fill valve (if needed)",
                          "Towel or sponge",
                          "Bucket",
                          "Pliers",
                        ].map((item) => (
                          <div key={item} className="flex items-center">
                            <Check className="h-4 w-4 text-green-500 mr-2" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Link to="/howto/fix/fix-running-toilet">
                      <Button className="flex items-center gap-2">
                        View Step-by-Step Guide
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Categories Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">
                Browse by Category
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {howtoCategories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/howto/${category.id}`}
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
                  </Link>
                ))}
              </div>
            </div>

            <Tabs defaultValue="popular" className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">How-to Guides</h2>
                <TabsList>
                  <TabsTrigger value="popular">Most Popular</TabsTrigger>
                  <TabsTrigger value="recent">Recently Added</TabsTrigger>
                  <TabsTrigger value="beginner">Beginner Friendly</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="popular" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {popularHowtos.map((howto) => (
                    <Card
                      key={howto.id}
                      className="overflow-hidden h-full hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={howto.image}
                          alt={howto.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                          {howto.category}
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4 text-xs text-gray-600 mb-2">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{howto.readTime}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Wrench className="h-3 w-3" />
                            <span>{howto.difficulty}</span>
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">
                          {howto.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {howto.description}
                        </p>
                        <Link
                          to={`/howto/${howto.category.toLowerCase()}/${howto.slug}`}
                        >
                          <Button size="sm" className="w-full">
                            View Guide
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="recent" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {popularHowtos
                    .slice()
                    .sort((a, b) => parseInt(a.id) - parseInt(b.id))
                    .map((howto) => (
                      <Card
                        key={howto.id}
                        className="overflow-hidden h-full hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={howto.image}
                            alt={howto.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                            {howto.category}
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-4 text-xs text-gray-600 mb-2">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{howto.readTime}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Wrench className="h-3 w-3" />
                              <span>{howto.difficulty}</span>
                            </div>
                          </div>
                          <h3 className="text-lg font-semibold mb-2">
                            {howto.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                            {howto.description}
                          </p>
                          <Link
                            to={`/howto/${howto.category.toLowerCase()}/${howto.slug}`}
                          >
                            <Button size="sm" className="w-full">
                              View Guide
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="beginner" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {popularHowtos
                    .filter((howto) => howto.difficulty === "Beginner")
                    .map((howto) => (
                      <Card
                        key={howto.id}
                        className="overflow-hidden h-full hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={howto.image}
                            alt={howto.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                            {howto.category}
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-4 text-xs text-gray-600 mb-2">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{howto.readTime}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Wrench className="h-3 w-3" />
                              <span>{howto.difficulty}</span>
                            </div>
                          </div>
                          <h3 className="text-lg font-semibold mb-2">
                            {howto.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                            {howto.description}
                          </p>
                          <Link
                            to={`/howto/${howto.category.toLowerCase()}/${howto.slug}`}
                          >
                            <Button size="sm" className="w-full">
                              View Guide
                            </Button>
                          </Link>
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

            {/* Common Questions */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">
                Common Toilet Questions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    question: "Why is my toilet running constantly?",
                    answer:
                      "A running toilet is usually caused by a faulty flapper, fill valve, or float. Check our guide on fixing a running toilet for step-by-step instructions.",
                    link: "/howto/fix/fix-running-toilet",
                  },
                  {
                    question: "How do I unclog a toilet without a plunger?",
                    answer:
                      "You can use hot water and dish soap, a toilet brush, or a mixture of baking soda and vinegar to unclog a toilet without a plunger.",
                    link: "/howto/fix/unclog-toilet-without-plunger",
                  },
                  {
                    question: "How often should I replace my toilet flapper?",
                    answer:
                      "Toilet flappers typically need replacement every 3-5 years. Signs you need a new one include constant running, incomplete flushes, or visible deterioration.",
                    link: "/howto/maintain/replace-toilet-flapper",
                  },
                  {
                    question: "What's the correct height for a toilet?",
                    answer:
                      "Standard toilets are about 15 inches from floor to seat, while comfort height toilets (ADA compliant) are 17-19 inches. Choose based on your household's needs.",
                    link: "/buying-guides/toilet-height-guide",
                  },
                ].map((item, index) => (
                  <Card key={index} className="h-full">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">
                        {item.question}
                      </h3>
                      <p className="text-gray-600 mb-4">{item.answer}</p>
                      <Link to={item.link}>
                        <Button variant="outline" size="sm" className="gap-1">
                          Learn More
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Google AdSense - Bottom Banner */}
        <div className="w-full h-24 bg-gray-100 flex items-center justify-center mt-8 rounded-md">
          <p className="text-gray-500">Advertisement</p>
        </div>
      </div>
    </div>
  );
};

export default HowtoPage;
