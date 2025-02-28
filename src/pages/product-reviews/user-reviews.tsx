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
  {
    id: "4",
    productId: "2",
    productName: "EcoFlush Water Saver",
    productImage:
      "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    author: "Jennifer Lopez",
    authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=jennifer",
    date: "2023-09-28",
    rating: 5,
    title: "Great water savings!",
    content:
      "We installed this toilet during our bathroom renovation and have been very pleased with it. The dual flush feature works great and we've noticed a significant decrease in our water bill. The design is sleek and modern, and it's very easy to clean.",
    helpful: 12,
    comments: 0,
  },
  {
    id: "5",
    productId: "3",
    productName: "Compact Corner Toilet",
    productImage:
      "https://images.unsplash.com/photo-1585058178215-33108215e3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    author: "Robert Smith",
    authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=robert",
    date: "2023-09-20",
    rating: 4,
    title: "Great space-saver with minor issues",
    content:
      "This corner toilet was the perfect solution for our tiny powder room. It fits perfectly and looks great. The only issue is that the flush isn't quite as powerful as I'd like, sometimes requiring a second flush. Otherwise, it's a great product for small spaces.",
    helpful: 9,
    comments: 1,
  },
];

const UserReviewsPage = () => {
  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Google AdSense - Top Banner */}
        <div className="w-full h-24 bg-gray-100 flex items-center justify-center mb-8 rounded-md">
          <p className="text-gray-500">Advertisement</p>
        </div>

        <h1 className="text-4xl font-bold mb-2">User Reviews</h1>
        <p className="text-lg text-gray-600 mb-8">
          Read authentic reviews from real users to help you make informed
          purchasing decisions
        </p>

        <Tabs defaultValue="recent" className="mb-12">
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
                Sort by: Recent
              </Button>
            </div>
            <TabsList>
              <TabsTrigger value="recent">Recent Reviews</TabsTrigger>
              <TabsTrigger value="helpful">Most Helpful</TabsTrigger>
              <TabsTrigger value="highest">Highest Rated</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="recent" className="mt-0">
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

          <TabsContent value="helpful" className="mt-0">
            <div className="space-y-8">
              {recentReviews
                .sort((a, b) => b.helpful - a.helpful)
                .map((review) => (
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
          </TabsContent>

          <TabsContent value="highest" className="mt-0">
            <div className="space-y-8">
              {recentReviews
                .sort((a, b) => b.rating - a.rating)
                .map((review) => (
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
          </TabsContent>
        </Tabs>

        {/* Write a Review CTA */}
        <div className="bg-primary/10 rounded-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Share Your Experience
              </h2>
              <p className="text-gray-600">
                Help others make informed decisions by sharing your honest
                feedback about toilet products you've used.
              </p>
            </div>
            <Button size="lg">Write a Review</Button>
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

export default UserReviewsPage;
