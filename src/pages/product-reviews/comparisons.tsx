import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Filter, ArrowUpDown, Calendar, Eye } from "lucide-react";

const comparisons = [
  {
    id: "1",
    title: "Smart Toilets vs. Traditional Toilets",
    description:
      "A comprehensive comparison of features, benefits, and drawbacks",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "2023-10-01",
    views: 1245,
  },
  {
    id: "2",
    title: "Water-Saving Toilets: Dual Flush vs. Single Flush",
    description: "Which eco-friendly option is right for your home?",
    image:
      "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "2023-09-15",
    views: 987,
  },
  {
    id: "3",
    title: "Top 5 Luxury Toilets of 2023",
    description: "Comparing the most premium toilet options on the market",
    image:
      "https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "2023-08-22",
    views: 1532,
  },
  {
    id: "4",
    title: "One-Piece vs. Two-Piece Toilets",
    description:
      "Understanding the differences in design, installation, and maintenance",
    image:
      "https://images.unsplash.com/photo-1585058178215-33108215e3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "2023-07-18",
    views: 1876,
  },
  {
    id: "5",
    title: "Toilet Height Comparison: Standard vs. Comfort Height",
    description: "Finding the right height for your needs and preferences",
    image:
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "2023-06-30",
    views: 1432,
  },
  {
    id: "6",
    title: "Budget Toilets Under $300: Which Offers the Best Value?",
    description:
      "Comparing affordable options that don't compromise on quality",
    image:
      "https://images.unsplash.com/photo-1581876832484-c6a6a1aee7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "2023-05-12",
    views: 2145,
  },
  {
    id: "7",
    title: "TOTO vs. Kohler vs. American Standard: Brand Showdown",
    description:
      "Comparing the top toilet manufacturers across price, quality, and features",
    image:
      "https://images.unsplash.com/photo-1613214049841-028981a2eb71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "2023-04-25",
    views: 2678,
  },
  {
    id: "8",
    title: "Toilet Flushing Systems Compared",
    description: "Gravity-fed, pressure-assisted, dual-flush, and more",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "2023-03-18",
    views: 1987,
  },
  {
    id: "9",
    title: "Best Toilets for Small Bathrooms",
    description:
      "Comparing compact and corner models for space-constrained areas",
    image:
      "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "2023-02-09",
    views: 1654,
  },
];

const ComparisonsPage = () => {
  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Google AdSense - Top Banner */}
        <div className="w-full h-24 bg-gray-100 flex items-center justify-center mb-8 rounded-md">
          <p className="text-gray-500">Advertisement</p>
        </div>

        <h1 className="text-4xl font-bold mb-2">Toilet Product Comparisons</h1>
        <p className="text-lg text-gray-600 mb-8">
          Side-by-side comparisons of popular toilet models to help you make
          informed purchasing decisions
        </p>

        <Tabs defaultValue="all" className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
              >
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
              >
                <ArrowUpDown className="h-4 w-4" />
                Sort by: Most Viewed
              </Button>
            </div>
            <TabsList>
              <TabsTrigger value="all">All Comparisons</TabsTrigger>
              <TabsTrigger value="features">By Features</TabsTrigger>
              <TabsTrigger value="brands">By Brands</TabsTrigger>
              <TabsTrigger value="price">By Price</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {comparisons.map((comparison) => (
                <Card
                  key={comparison.id}
                  className="overflow-hidden h-full hover:shadow-md transition-shadow duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={comparison.image}
                      alt={comparison.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-2">
                      {comparison.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {comparison.description}
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>
                          {new Date(comparison.date).toLocaleDateString(
                            "en-US",
                            { year: "numeric", month: "short", day: "numeric" },
                          )}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        <span>{comparison.views.toLocaleString()} views</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4">Read Comparison</Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-primary text-white"
                >
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="features" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {comparisons
                .filter(
                  (comp) =>
                    comp.title.includes("vs.") ||
                    comp.title.includes("Compared") ||
                    comp.title.includes("Comparison"),
                )
                .map((comparison) => (
                  <Card
                    key={comparison.id}
                    className="overflow-hidden h-full hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={comparison.image}
                        alt={comparison.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold mb-2">
                        {comparison.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {comparison.description}
                      </p>
                      <div className="flex justify-between items-center text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>
                            {new Date(comparison.date).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              },
                            )}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          <span>{comparison.views.toLocaleString()} views</span>
                        </div>
                      </div>
                      <Button className="w-full mt-4">Read Comparison</Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="brands" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {comparisons
                .filter(
                  (comp) =>
                    comp.title.includes("Brand") ||
                    comp.title.includes("TOTO") ||
                    comp.title.includes("Kohler"),
                )
                .map((comparison) => (
                  <Card
                    key={comparison.id}
                    className="overflow-hidden h-full hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={comparison.image}
                        alt={comparison.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold mb-2">
                        {comparison.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {comparison.description}
                      </p>
                      <div className="flex justify-between items-center text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>
                            {new Date(comparison.date).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              },
                            )}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          <span>{comparison.views.toLocaleString()} views</span>
                        </div>
                      </div>
                      <Button className="w-full mt-4">Read Comparison</Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="price" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {comparisons
                .filter(
                  (comp) =>
                    comp.title.includes("Budget") ||
                    comp.title.includes("Value") ||
                    comp.title.includes("Luxury") ||
                    comp.title.includes("$"),
                )
                .map((comparison) => (
                  <Card
                    key={comparison.id}
                    className="overflow-hidden h-full hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={comparison.image}
                        alt={comparison.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold mb-2">
                        {comparison.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {comparison.description}
                      </p>
                      <div className="flex justify-between items-center text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>
                            {new Date(comparison.date).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              },
                            )}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          <span>{comparison.views.toLocaleString()} views</span>
                        </div>
                      </div>
                      <Button className="w-full mt-4">Read Comparison</Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Google AdSense - Bottom Banner */}
        <div className="w-full h-24 bg-gray-100 flex items-center justify-center mt-8 rounded-md">
          <p className="text-gray-500">Advertisement</p>
        </div>
      </div>
    </div>
  );
};

export default ComparisonsPage;
