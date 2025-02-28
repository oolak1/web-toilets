import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Filter, ArrowUpDown, Grid3X3, List } from "lucide-react";

const toiletCategories = [
  {
    id: "smart",
    name: "Smart Toilets",
    description:
      "Advanced toilets with electronic features and bidet functions",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: 24,
  },
  {
    id: "eco-friendly",
    name: "Eco-Friendly",
    description: "Water-saving toilets that help reduce environmental impact",
    image:
      "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: 18,
  },
  {
    id: "modern",
    name: "Modern Designs",
    description: "Contemporary toilets with sleek aesthetics and clean lines",
    image:
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: 32,
  },
  {
    id: "traditional",
    name: "Traditional",
    description: "Classic toilet designs with proven reliability",
    image:
      "https://images.unsplash.com/photo-1585058178215-33108215e3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: 15,
  },
  {
    id: "wall-hung",
    name: "Wall-Hung",
    description: "Space-saving toilets mounted to the wall for easy cleaning",
    image:
      "https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: 12,
  },
  {
    id: "compact",
    name: "Compact & Corner",
    description: "Space-efficient toilets for small bathrooms",
    image:
      "https://images.unsplash.com/photo-1613214049841-028981a2eb71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: 9,
  },
];

const toiletProducts = [
  {
    id: "1",
    name: "Smart Toilet Pro X1",
    description:
      "Advanced smart toilet with heated seat, bidet, and automatic flush",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 4.8,
    price: "$899.99",
    category: "smart",
  },
  {
    id: "2",
    name: "EcoFlush Water Saver",
    description: "Eco-friendly toilet that reduces water usage by up to 40%",
    image:
      "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 4.5,
    price: "$499.99",
    category: "eco-friendly",
  },
  {
    id: "3",
    name: "Compact Corner Toilet",
    description: "Space-saving design perfect for small bathrooms",
    image:
      "https://images.unsplash.com/photo-1585058178215-33108215e3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 4.3,
    price: "$349.99",
    category: "compact",
  },
  {
    id: "4",
    name: "Luxury Bidet Toilet Combo",
    description:
      "Premium toilet with integrated bidet and customizable settings",
    image:
      "https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 4.9,
    price: "$1,299.99",
    category: "smart",
  },
  {
    id: "5",
    name: "Wall-Hung Modern Toilet",
    description: "Sleek wall-mounted design for contemporary bathrooms",
    image:
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 4.6,
    price: "$749.99",
    category: "wall-hung",
  },
  {
    id: "6",
    name: "Classic Two-Piece Toilet",
    description: "Traditional design with modern flushing technology",
    image:
      "https://images.unsplash.com/photo-1581876832484-c6a6a1aee7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 4.2,
    price: "$299.99",
    category: "traditional",
  },
];

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

const ProductReviewsPage = () => {
  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Google AdSense - Top Banner */}
        <div className="w-full h-24 bg-gray-100 flex items-center justify-center mb-8 rounded-md">
          <p className="text-gray-500">Advertisement</p>
        </div>

        <h1 className="text-4xl font-bold mb-2">Toilet Product Reviews</h1>
        <p className="text-lg text-gray-600 mb-8">
          Browse our extensive collection of toilet products with detailed
          specifications and authentic user reviews
        </p>

        <Tabs defaultValue="products" className="mb-12">
          <TabsList className="w-full grid grid-cols-3">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="top-rated">Top Rated</TabsTrigger>
            <TabsTrigger value="comparisons">Comparisons</TabsTrigger>
          </TabsList>

          {/* Products Tab */}
          <TabsContent value="products" className="mt-6">
            {/* Categories Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">
                Browse by Category
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {toiletCategories.map((category) => (
                  <a
                    key={category.id}
                    href={`/product-reviews/${category.id}`}
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
                          {category.count} Products
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

            {/* Featured Products Section */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Featured Products</h2>
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
                  <div className="flex border rounded-md overflow-hidden">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="rounded-none border-r"
                    >
                      <Grid3X3 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="rounded-none">
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {toiletProducts.map((product) => (
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
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-600">
                          {product.rating.toFixed(1)}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mb-1">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-lg">
                          {product.price}
                        </span>
                        <Button size="sm">View Details</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button variant="outline" size="lg">
                  View All Products
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Top Rated Tab */}
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

export default ProductReviewsPage;
