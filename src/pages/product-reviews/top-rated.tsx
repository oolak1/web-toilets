import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Filter, ArrowUpDown } from "lucide-react";

const topRatedProducts = [
  {
    id: "1",
    name: "Smart Toilet Pro X1",
    description: "Advanced smart toilet with heated seat, bidet, and automatic flush",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 4.8,
    reviewCount: 124,
    price: "$899.99",
    category: "smart",
  },
  {
    id: "4",
    name: "Luxury Bidet Toilet Combo",
    description: "Premium toilet with integrated bidet and customizable settings",
    image: "https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 4.9,
    reviewCount: 98,
    price: "$1,299.99",
    category: "smart",
  },
  {
    id: "5",
    name: "Wall-Hung Modern Toilet",
    description: "Sleek wall-mounted design for contemporary bathrooms",
    image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 4.7,
    reviewCount: 86,
    price: "$749.99",
    category: "wall-hung",
  },
  {
    id: "2",
    name: "EcoFlush Water Saver",
    description: "Eco-friendly toilet that reduces water usage by up to 40%",
    image: "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 4.5,
    reviewCount: 112,
    price: "$499.99",
    category: "eco-friendly",
  },
  {
    id: "6",
    name: "Comfort Height Traditional",
    description: "Classic design with comfortable height for easier sitting and standing",
    image: "https://images.unsplash.com/photo-1581876832484-c6a6a1aee7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 4.6,
    reviewCount: 78,
    price: "$399.99",
    category: "traditional",
  },
  {
    id: "7",
    name: "Space-Saving Corner Toilet",
    description: "Compact design perfect for small bathrooms and powder rooms",
    image: "https://images.unsplash.com/photo-1585058178215-33108215e3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 4.4,
    reviewCount: 65,
    price: "$349.99",
    category: "compact",
  },
];

const TopRatedPage = () => {
  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Google AdSense - Top Banner */}
        <div className="w-full h-24 bg-gray-100 flex items-center justify-center mb-8 rounded-md">
          <p className="text-gray-500">Advertisement</p>
        </div>

        <h1 className="text-4xl font-bold mb-2">Top Rated Toilets</h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover our highest-rated toilet products based on authentic customer reviews and expert ratings
        </p>

        <Tabs defaultValue="all" className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <ArrowUpDown className="h-4 w-4" />
                Sort by: Rating
              </Button>
            </div>
            <TabsList>
              <TabsTrigger value="all">All Categories</TabsTrigger>
              <TabsTrigger value="smart">Smart</TabsTrigger>
              <TabsTrigger value="eco">Eco-Friendly</TabsTrigger>
              <TabsTrigger value="traditional">Traditional</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {topRatedProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden h-full hover:shadow-md transition-shadow duration-300">
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
                    <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-bold text-lg">{product.price}</span>
                        <div className="text-sm text-gray-600">{product.reviewCount} reviews</div>
                      </div>
                      <Button size="sm">View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="smart" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {topRatedProducts
                .filter(product => product.category === "smart")
                .map((product) => (
                  <Card key={product.id} className="overflow-hidden h-full hover:shadow-md transition-shadow duration-300">
                    <div className="relative h-48 overflow-hidden">
