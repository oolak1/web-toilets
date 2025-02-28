import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Clock,
  Search,
  Filter,
  ArrowRight,
  ShoppingCart,
  Tag,
  Lightbulb,
} from "lucide-react";
import { Input } from "@/components/ui/input";

const guideCategories = [
  {
    id: "toilet-types",
    name: "Toilet Types Guide",
    description:
      "Learn about different toilet types and which is best for your bathroom",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: 8,
  },
  {
    id: "features",
    name: "Features to Consider",
    description: "Important features to look for when buying a new toilet",
    image:
      "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: 12,
  },
  {
    id: "brands",
    name: "Brand Comparison",
    description: "Compare top toilet brands and their product offerings",
    image:
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: 10,
  },
  {
    id: "budget",
    name: "Budget Planning",
    description: "How to choose the right toilet for your budget",
    image:
      "https://images.unsplash.com/photo-1585058178215-33108215e3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: 6,
  },
];

const popularGuides = [
  {
    id: "1",
    title: "Complete Guide to Toilet Types: One-Piece vs. Two-Piece",
    description:
      "Understand the differences between one-piece and two-piece toilets, including pros and cons of each design to help you make the right choice for your bathroom.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Toilet Types",
    readTime: "10 min",
    slug: "toilet-types-one-piece-vs-two-piece",
  },
  {
    id: "2",
    title: "Smart Toilets: Are They Worth the Investment?",
    description:
      "Explore the features, benefits, and costs of smart toilets to determine if the advanced technology justifies the higher price point for your bathroom upgrade.",
    image:
      "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Features",
    readTime: "12 min",
    slug: "smart-toilets-worth-investment",
  },
  {
    id: "3",
    title: "Water Efficiency Guide: Low-Flow vs. Dual-Flush Toilets",
    description:
      "Compare water-saving toilet technologies to find the most efficient option that still delivers powerful flushing performance for your home.",
    image:
      "https://images.unsplash.com/photo-1613214049841-028981a2eb71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Features",
    readTime: "8 min",
    slug: "water-efficiency-low-flow-dual-flush",
  },
  {
    id: "4",
    title: "Toilet Height Guide: Standard vs. Comfort Height",
    description:
      "Learn about different toilet heights and how to choose the most comfortable option for your household members and guests.",
    image:
      "https://images.unsplash.com/photo-1581876832484-c6a6a1aee7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Features",
    readTime: "7 min",
    slug: "toilet-height-standard-vs-comfort",
  },
  {
    id: "5",
    title:
      "Top 5 Toilet Brands Compared: TOTO vs. Kohler vs. American Standard",
    description:
      "An in-depth comparison of the leading toilet manufacturers, examining quality, features, price points, and warranty coverage.",
    image:
      "https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Brands",
    readTime: "15 min",
    slug: "top-toilet-brands-comparison",
  },
  {
    id: "6",
    title: "Toilet Buying on a Budget: Best Value Options for 2023",
    description:
      "Discover high-quality, affordable toilet options that offer the best balance of performance, durability, and price for budget-conscious shoppers.",
    image:
      "https://images.unsplash.com/photo-1585058178215-33108215e3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Budget",
    readTime: "9 min",
    slug: "budget-toilet-buying-guide",
  },
];

const BuyingGuidesPage = () => {
  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Google AdSense - Top Banner */}
        <div className="w-full h-24 bg-gray-100 flex items-center justify-center mb-8 rounded-md">
          <p className="text-gray-500">Advertisement</p>
        </div>

        <h1 className="text-4xl font-bold mb-2">Toilet Buying Guides</h1>
        <p className="text-lg text-gray-600 mb-8">
          Expert advice to help you choose the perfect toilet for your needs,
          budget, and bathroom style
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
                placeholder="Search buying guides (e.g., smart toilets, water efficiency)"
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
                href={`/buying-guides/${category.id}`}
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

        {/* Featured Buying Guide */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Featured Buying Guide</h2>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  alt="Complete Toilet Buying Guide"
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
                    20 min read
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  The Ultimate Toilet Buying Guide: Everything You Need to Know
                </h3>
                <p className="text-gray-600 mb-6">
                  This comprehensive guide covers all aspects of toilet
                  shopping, from understanding different types and features to
                  installation considerations and maintenance requirements.
                  Whether you're renovating your bathroom or simply replacing an
                  old toilet, this guide will help you make an informed
                  decision.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">What You'll Learn:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      "Toilet types and styles",
                      "Water efficiency ratings",
                      "Comfort features",
                      "Installation requirements",
                      "Price considerations",
                      "Brand comparisons",
                      "Maintenance needs",
                      "Smart toilet technology",
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

        <Tabs defaultValue="popular" className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Buying Guides</h2>
            <TabsList>
              <TabsTrigger value="popular">Most Popular</TabsTrigger>
              <TabsTrigger value="recent">Recently Added</TabsTrigger>
              <TabsTrigger value="beginner">For First-Time Buyers</TabsTrigger>
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
                        <BookOpen className="h-3 w-3" />
                        <span>Buying Guide</span>
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
              Recently added buying guides would be displayed here.
            </p>
          </TabsContent>

          <TabsContent value="beginner" className="mt-0">
            <p className="text-gray-600">
              Guides for first-time toilet buyers would be displayed here.
            </p>
          </TabsContent>
        </Tabs>

        {/* Google AdSense - Middle Banner */}
        <div className="w-full h-24 bg-gray-100 flex items-center justify-center mb-10 rounded-md">
          <p className="text-gray-500">Advertisement</p>
        </div>

        {/* Buying Tips Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Quick Buying Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Tag className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Know Your Budget</h3>
                <p className="text-gray-600 mb-4">
                  Toilets range from $100 to $1,000+. Determine your budget
                  before shopping and remember that higher price often means
                  better quality and more features.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Budget Planning Guide
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Measure Your Space
                </h3>
                <p className="text-gray-600 mb-4">
                  Before purchasing, measure your bathroom space, including the
                  rough-in distance (from wall to center of drain) which is
                  typically 12 inches.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Measurement Guide
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <ShoppingCart className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Check Reviews</h3>
                <p className="text-gray-600 mb-4">
                  Always read customer reviews and professional ratings before
                  making your final decision to ensure reliability and
                  satisfaction.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Top-Rated Toilets
                </Button>
              </CardContent>
            </Card>
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

export default BuyingGuidesPage;
