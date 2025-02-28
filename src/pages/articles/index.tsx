import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Clock, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import SearchBar, { SearchFilters } from "@/components/SearchBar";
import SearchResults from "@/components/SearchResults";
import { searchContent } from "@/lib/utils/searchUtils";

const articleCategories = [
  {
    id: "news",
    name: "Industry News",
    description: "Latest updates and trends in bathroom fixtures and plumbing",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: 14,
  },
  {
    id: "trends",
    name: "Design Trends",
    description: "Current and upcoming bathroom design and toilet style trends",
    image:
      "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: 10,
  },
  {
    id: "technology",
    name: "Toilet Technology",
    description:
      "Innovations and advancements in toilet and bathroom technology",
    image:
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: 8,
  },
  {
    id: "sustainability",
    name: "Sustainability",
    description:
      "Eco-friendly practices and water conservation in bathroom fixtures",
    image:
      "https://images.unsplash.com/photo-1585058178215-33108215e3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: 12,
  },
];

const featuredArticles = [
  {
    id: "1",
    title: "The Future of Smart Toilets: 2024 Trends and Beyond",
    description:
      "Explore the latest innovations in smart toilet technology and how they're transforming bathroom experiences with AI, health monitoring, and sustainability features.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Technology",
    readTime: "8 min",
    date: "May 15, 2024",
    slug: "future-smart-toilets-2024",
  },
  {
    id: "2",
    title:
      "Water Conservation: How Modern Toilets Are Saving Billions of Gallons",
    description:
      "An in-depth look at how advancements in toilet efficiency have dramatically reduced water usage while maintaining or improving performance.",
    image:
      "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sustainability",
    readTime: "10 min",
    date: "April 22, 2024",
    slug: "water-conservation-modern-toilets",
  },
  {
    id: "3",
    title: "Bathroom Design Trends: Minimalism Meets Functionality in 2024",
    description:
      "Discover how the latest bathroom design trends are combining sleek minimalist aesthetics with practical features for the modern home.",
    image:
      "https://images.unsplash.com/photo-1613214049841-028981a2eb71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Design Trends",
    readTime: "7 min",
    date: "March 10, 2024",
    slug: "bathroom-design-trends-2024",
  },
  {
    id: "4",
    title: "The Rise of Bidet Toilets in North America",
    description:
      "How the pandemic changed American bathroom habits and accelerated the adoption of bidet toilets and attachments across the continent.",
    image:
      "https://images.unsplash.com/photo-1581876832484-c6a6a1aee7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Trends",
    readTime: "9 min",
    date: "February 28, 2024",
    slug: "rise-bidet-toilets-north-america",
  },
  {
    id: "5",
    title: "Global Toilet Standards: How Requirements Differ Around the World",
    description:
      "A fascinating comparison of toilet regulations, standards, and cultural preferences across different countries and regions.",
    image:
      "https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Industry News",
    readTime: "12 min",
    date: "January 15, 2024",
    slug: "global-toilet-standards-comparison",
  },
  {
    id: "6",
    title:
      "Toilet Manufacturing: Behind the Scenes of a Billion-Dollar Industry",
    description:
      "An exclusive look at how toilets are designed, manufactured, and tested before they make their way into homes around the world.",
    image:
      "https://images.unsplash.com/photo-1585058178215-33108215e3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Industry News",
    readTime: "15 min",
    date: "December 5, 2023",
    slug: "toilet-manufacturing-behind-scenes",
  },
];

const ArticlesPage = () => {
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

        <h1 className="text-4xl font-bold mb-2">Toilet & Bathroom Articles</h1>
        <p className="text-lg text-gray-600 mb-8">
          Stay informed with the latest news, trends, and insights about toilets
          and bathroom fixtures
        </p>

        {/* Search Section */}
        <SearchBar
          onSearch={handleSearch}
          placeholder="Search articles (e.g., smart toilets, water efficiency, design trends)"
        />

        {isSearching ? (
          <SearchResults results={searchResults} onClearSearch={clearSearch} />
        ) : (
          <>
            {/* Featured Article */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Featured Article</h2>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2">
                    <img
                      src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                      alt="The Future of Smart Toilets"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:w-1/2 p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                        Technology
                      </span>
                      <span className="text-gray-600 text-sm flex items-center gap-1">
                        <Clock className="h-3 w-3" />8 min read
                      </span>
                      <span className="text-gray-600 text-sm flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        May 15, 2024
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      The Future of Smart Toilets: 2024 Trends and Beyond
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Smart toilets are evolving rapidly, with new features like
                      health monitoring, personalized settings, and enhanced
                      water efficiency. This article explores the cutting-edge
                      innovations that are transforming the humble toilet into a
                      sophisticated wellness device and what we can expect in
                      the coming years.
                    </p>
                    <Button className="flex items-center gap-2">
                      Read Full Article
                      <ArrowRight className="h-4 w-4" />
                    </Button>
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
                {articleCategories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/articles/${category.id}`}
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
                          {category.count} Articles
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

            <Tabs defaultValue="latest" className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Articles</h2>
                <TabsList>
                  <TabsTrigger value="latest">Latest</TabsTrigger>
                  <TabsTrigger value="popular">Most Popular</TabsTrigger>
                  <TabsTrigger value="trending">Trending</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="latest" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredArticles.map((article) => (
                    <Card
                      key={article.id}
                      className="overflow-hidden h-full hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                          {article.category}
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4 text-xs text-gray-600 mb-2">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{article.readTime}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{article.date}</span>
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {article.description}
                        </p>
                        <Link to={`/articles/${article.slug}`}>
                          <Button size="sm" className="w-full">
                            Read Article
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="popular" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredArticles
                    .sort((a, b) => parseInt(b.id) - parseInt(a.id))
                    .map((article) => (
                      <Card
                        key={article.id}
                        className="overflow-hidden h-full hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                            {article.category}
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-4 text-xs text-gray-600 mb-2">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{article.readTime}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>{article.date}</span>
                            </div>
                          </div>
                          <h3 className="text-lg font-semibold mb-2">
                            {article.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                            {article.description}
                          </p>
                          <Link to={`/articles/${article.slug}`}>
                            <Button size="sm" className="w-full">
                              Read Article
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="trending" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredArticles
                    .slice()
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 3)
                    .map((article) => (
                      <Card
                        key={article.id}
                        className="overflow-hidden h-full hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                            {article.category}
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-4 text-xs text-gray-600 mb-2">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{article.readTime}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>{article.date}</span>
                            </div>
                          </div>
                          <h3 className="text-lg font-semibold mb-2">
                            {article.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                            {article.description}
                          </p>
                          <Link to={`/articles/${article.slug}`}>
                            <Button size="sm" className="w-full">
                              Read Article
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

export default ArticlesPage;
