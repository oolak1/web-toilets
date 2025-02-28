import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Star,
  ThumbsUp,
  MessageSquare,
  Filter,
  ArrowUpDown,
} from "lucide-react";

const topRatedProducts = [
  {
    id: "1",
    name: "Smart Toilet Pro X1",
    description:
      "Advanced smart toilet with heated seat, bidet, and automatic flush",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 4.8,
    reviewCount: 124,
    price: "$899.99",
    category: "smart",
  },
  {
    id: "4",
    name: "Luxury Bidet Toilet Combo",
    description:
      "Premium toilet with integrated bidet and customizable settings",
    image:
      "https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 4.9,
    reviewCount: 98,
    price: "$1,299.99",
    category: "smart",
  },
  {
    id: "5",
    name: "Wall-Hung Modern Toilet",
    description: "Sleek wall-mounted design for contemporary bathrooms",
    image:
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 4.7,
    reviewCount: 86,
    price: "$749.99",
    category: "wall-hung",
  },
];

const recentReviews = [
  {
    id: "1",
    productId: "1",
    productName: "Smart Toilet Pro X1",
    productImage:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    author: "Michael Johnson",
    authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    date: "2023-10-15",
    rating: 5,
    title: "Best toilet I've ever owned",
    content:
      "After researching various smart toilets, I decided on the Pro X1 and couldn't be happier. The heated seat is perfect for cold mornings, and the bidet functionality is life-changing. Installation was straightforward with the included instructions. Highly recommend to anyone looking to upgrade their bathroom experience.",
    helpful: 24,
    comments: 3,
  },
  {
    id: "2",
    productId: "4",
    productName: "Luxury Bidet Toilet Combo",
    productImage:
      "https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    author: "Sarah Williams",
    authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    date: "2023-10-10",
    rating: 4,
    title: "Excellent quality but pricey",
    content:
      "This toilet is definitely a luxury item and the quality shows. The bidet features are excellent with adjustable water temperature and pressure. The only downside is the price, but if you can afford it, it's worth the investment for the comfort and features it provides.",
    helpful: 18,
    comments: 2,
  },
  {
    id: "3",
    productId: "5",
    productName: "Wall-Hung Modern Toilet",
    productImage:
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    author: "David Chen",
    authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
    date: "2023-10-05",
    rating: 5,
    title: "Perfect for my small bathroom",
    content:
      "The wall-hung design is perfect for my small bathroom, creating more floor space and making cleaning much easier. Installation required a professional, but the result is worth it. The modern look completely transformed my bathroom's appearance.",
    helpful: 15,
    comments: 1,
  },
];

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
];

const ReviewsPage = () => {
  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Google AdSense - Top Banner */}
        <div className="w-full h-24 bg-gray-100 flex items-center justify-center mb-8 rounded-md">
          <p className="text-gray-500">Advertisement</p>
        </div>

        <h1 className="text-4xl font-bold mb-2">
          Toilet Reviews & Comparisons
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Read authentic reviews and detailed comparisons to help you make
          informed purchasing decisions
        </p>

        <Tabs defaultValue="top-rated" className="mb-12">
          <TabsList className="w-full grid grid-cols-3">
            <TabsTrigger value="top-rated">Top Rated Products</TabsTrigger>
            <TabsTrigger value="recent-reviews">Recent Reviews</TabsTrigger>
            <TabsTrigger value="comparisons">Comparisons</TabsTrigger>
          </TabsList>

          {/* Top Rated Products Tab */}
          <TabsContent value="top-rated" className="mt-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Highest Rated Toilets</h2>
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
                  Sort
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {topRatedProducts.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden h-full hover:shadow-md transition-shadow duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                      <Star className="h-3 w-3 fill-white mr-1" />
                      {product.rating}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-1">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        {product.reviewCount} reviews
                      </span>
                      <Button size="sm">Read Reviews</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" size="lg">
                View All Top Rated Products
              </Button>
            </div>
          </TabsContent>

          {/* Recent Reviews Tab */}
          <TabsContent value="recent-reviews" className="mt-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Latest User Reviews</h2>
              <Button>Write a Review</Button>
            </div>

            <div className="space-y-8">
              {recentReviews.map((review) => (
                <Card key={review.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/4">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                            <img
                              src={review.authorImage}
                              alt={review.author}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-medium">{review.author}</p>
                            <p className="text-sm text-gray-500">
                              {new Date(review.date).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                },
                              )}
                            </p>
                          </div>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-3 mb-4">
                          <div className="flex items-center mb-2">
                            <img
                              src={review.productImage}
                              alt={review.productName}
                              className="w-16 h-16 object-cover rounded-md mr-3"
                            />
                            <div>
                              <p className="text-sm font-medium">
                                {review.productName}
                              </p>
                              <div className="flex mt-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full text-xs"
                          >
                            View Product
                          </Button>
                        </div>
                      </div>

                      <div className="md:w-3/4">
                        <div className="flex items-center mb-3">
                          <div className="flex mr-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-5 w-5 ${i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                          <h3 className="text-xl font-semibold">
                            {review.title}
                          </h3>
                        </div>
                        <p className="text-gray-700 mb-4">{review.content}</p>
                        <div className="flex items-center text-sm text-gray-600">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="flex items-center gap-1"
                          >
                            <ThumbsUp className="h-4 w-4" />
                            Helpful ({review.helpful})
                          </Button>
                          <span className="mx-2">•</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="flex items-center gap-1"
                          >
                            <MessageSquare className="h-4 w-4" />
                            Comment ({review.comments})
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" size="lg">
                Load More Reviews
              </Button>
            </div>
          </TabsContent>

          {/* Comparisons Tab */}
          <TabsContent value="comparisons" className="mt-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Product Comparisons</h2>
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
                  Sort
                </Button>
              </div>
            </div>

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
                      <span>
                        {new Date(comparison.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span>{comparison.views.toLocaleString()} views</span>
                    </div>
                    <Button className="w-full mt-4">Read Comparison</Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" size="lg">
                View All Comparisons
              </Button>
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

export default ReviewsPage;
