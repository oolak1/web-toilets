import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Star, Filter, ArrowUpDown, Grid3X3, List, Check } from "lucide-react";

const categoryData = {
  smart: {
    name: "Smart Toilets",
    description:
      "Advanced toilets with electronic features and bidet functions",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  },
  "eco-friendly": {
    name: "Eco-Friendly Toilets",
    description: "Water-saving toilets that help reduce environmental impact",
    image:
      "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  },
  modern: {
    name: "Modern Design Toilets",
    description: "Contemporary toilets with sleek aesthetics and clean lines",
    image:
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  },
  traditional: {
    name: "Traditional Toilets",
    description: "Classic toilet designs with proven reliability",
    image:
      "https://images.unsplash.com/photo-1585058178215-33108215e3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  },
  "wall-hung": {
    name: "Wall-Hung Toilets",
    description: "Space-saving toilets mounted to the wall for easy cleaning",
    image:
      "https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  },
  compact: {
    name: "Compact & Corner Toilets",
    description: "Space-efficient toilets for small bathrooms",
    image:
      "https://images.unsplash.com/photo-1613214049841-028981a2eb71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  },
};

const products = [
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
    features: [
      "Heated Seat",
      "Bidet",
      "Auto Flush",
      "Air Dryer",
      "Night Light",
    ],
  },
  {
    id: "2",
    name: "Smart Toilet Elite S2",
    description:
      "Premium smart toilet with voice control and personalized settings",
    image:
      "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 4.9,
    price: "$1,199.99",
    category: "smart",
    features: [
      "Voice Control",
      "Heated Seat",
      "Bidet",
      "Auto Flush",
      "Air Dryer",
    ],
  },
  {
    id: "3",
    name: "Smart Comfort Basic",
    description: "Entry-level smart toilet with essential electronic features",
    image:
      "https://images.unsplash.com/photo-1585058178215-33108215e3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 4.3,
    price: "$599.99",
    category: "smart",
    features: ["Heated Seat", "Basic Bidet", "Night Light"],
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
    features: [
      "Premium Bidet",
      "Heated Seat",
      "Air Dryer",
      "Deodorizer",
      "Auto Flush",
    ],
  },
  {
    id: "5",
    name: "Smart Toilet Family Edition",
    description:
      "Family-friendly smart toilet with child settings and safety features",
    image:
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 4.7,
    price: "$849.99",
    category: "smart",
    features: [
      "Child Mode",
      "Heated Seat",
      "Bidet",
      "Night Light",
      "Slow Close Lid",
    ],
  },
  {
    id: "6",
    name: "Smart Toilet Compact",
    description: "Space-saving smart toilet for smaller bathrooms",
    image:
      "https://images.unsplash.com/photo-1581876832484-c6a6a1aee7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 4.5,
    price: "$749.99",
    category: "smart",
    features: ["Compact Design", "Heated Seat", "Bidet", "Night Light"],
  },
];

const ProductCategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const categoryInfo =
    category && categoryData[category]
      ? categoryData[category]
      : {
          name: "Products",
          description: "Browse our collection of high-quality toilets",
          image:
            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        };

  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={categoryInfo.image}
          alt={categoryInfo.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {categoryInfo.name}
            </h1>
            <p className="text-white/90 max-w-2xl">
              {categoryInfo.description}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        {/* Google AdSense - Top Banner */}
        <div className="w-full h-24 bg-gray-100 flex items-center justify-center mb-8 rounded-md">
          <p className="text-gray-500">Advertisement</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-lg border border-gray-200 sticky top-24">
              <h2 className="text-lg font-semibold mb-4">Filters</h2>

              <div className="mb-6">
                <h3 className="font-medium mb-3">Price Range</h3>
                <Slider defaultValue={[0, 1000]} max={2000} step={10} />
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>$0</span>
                  <span>$2,000+</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-medium mb-3">Features</h3>
                <div className="space-y-2">
                  {[
                    "Heated Seat",
                    "Bidet",
                    "Auto Flush",
                    "Air Dryer",
                    "Night Light",
                    "Voice Control",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <Checkbox id={`feature-${feature}`} />
                      <Label htmlFor={`feature-${feature}`}>{feature}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-medium mb-3">Brand</h3>
                <div className="space-y-2">
                  {[
                    "TOTO",
                    "Kohler",
                    "American Standard",
                    "Duravit",
                    "GROHE",
                  ].map((brand) => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Checkbox id={`brand-${brand}`} />
                      <Label htmlFor={`brand-${brand}`}>{brand}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-medium mb-3">Rating</h3>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center space-x-2">
                      <Checkbox id={`rating-${rating}`} />
                      <Label
                        htmlFor={`rating-${rating}`}
                        className="flex items-center"
                      >
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                          />
                        ))}
                        <span className="ml-1">{rating}+ stars</span>
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full">Apply Filters</Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                {filteredProducts.length} products found
              </p>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <ArrowUpDown className="h-4 w-4" />
                  Sort by: Featured
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

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
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

                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.features.slice(0, 3).map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center text-xs bg-gray-100 px-2 py-1 rounded-full"
                        >
                          <Check className="h-3 w-3 mr-1 text-green-500" />
                          {feature}
                        </span>
                      ))}
                      {product.features.length > 3 && (
                        <span className="inline-flex items-center text-xs bg-gray-100 px-2 py-1 rounded-full">
                          +{product.features.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">{product.price}</span>
                      <Button size="sm">View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Google AdSense - In-content Ad */}
            <div className="w-full h-24 bg-gray-100 flex items-center justify-center my-8 rounded-md">
              <p className="text-gray-500">Advertisement</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryPage;
