import React from "react";
import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Check, ShoppingCart, Heart, Share2, Award, Truck, Shield, ArrowRight } from "lucide-react";

const products = {
  "1": {
    id: "1",
    name: "Smart Toilet Pro X1",
    description: "Advanced smart toilet with heated seat, bidet, and automatic flush",
    longDescription: "The Smart Toilet Pro X1 represents the pinnacle of bathroom technology, combining comfort, hygiene, and convenience in one sleek package. With its heated seat, integrated bidet with adjustable water temperature and pressure, automatic flush, and energy-saving night light, this toilet transforms your bathroom experience. The intuitive remote control allows you to customize settings to your preference, while the powerful yet efficient flushing system ensures thorough cleaning with minimal water usage.",
    images: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585058178215-33108215e3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    rating: 4.8,
    reviewCount: 124,
    price: "$899.99",
    salePrice: "$799.99",
    category: "smart",
    brand: "TOTO",
    features: [
      "Heated Seat with Temperature Control",
      "Integrated Bidet with Adjustable Settings",
      "Automatic Flush Sensor",
      "Air Dryer with Temperature Control",
      "Night Light with Motion Sensor",
      "Deodorizer",
      "Self-Cleaning Nozzle",
      "Remote Control Operation",
      "Energy Saving Mode",
      "Soft-Close Lid",
    ],
    specifications: {
      "Dimensions": "28.5" x 15.5" x 17.25"",
      "Weight": "95 lbs",
      "Water Consumption": "1.28 GPF",
      "Power": "120V, 60Hz",
      "Material": "Vitreous China",
      "Shape": "Elongated",
      "Installation": "Floor Mounted",
      "Warranty": "5 Years Limited",
    },
    relatedProducts: ["2", "4", "5"],
  },
  "2": {
    id: "2",
    name: "EcoFlush Water Saver",
    description: "Eco-friendly toilet that reduces water usage by up to 40%",
    longDescription: "The EcoFlush Water Saver is designed for environmentally conscious homeowners who don't want to compromise on performance. This innovative toilet uses a dual-flush system that allows you to choose between a light flush for liquid waste (0.8 gallons) and a full flush for solid waste (1.28 gallons), reducing water consumption by up to 40% compared to standard toilets. The EcoFlush features a sleek, modern design that complements any bathroom decor while its powerful flushing mechanism ensures a clean bowl with every use despite the reduced water volume.",
    images: [
      "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1613214049841-028981a2eb71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    rating: 4.5,
    reviewCount: 98,
    price: "$499.99",
    salePrice: null,
    category: "eco-friendly",
    brand: "Kohler",
    features: [
      "Dual-Flush System (0.8/1.28 GPF)",
      "WaterSense Certified",
      "High-Efficiency Tornado Flush",
      "CEFIONTECT Glaze for Easy Cleaning",
      "Universal Height for Comfort",
      "ADA Compliant",
      "Soft-Close Seat Included",
      "Quick-Release Seat for Easy Cleaning",
      "Large Trapway to Prevent Clogging",
      "Chrome Push Button Flush",
    ],
    specifications: {
      "Dimensions": "27.5" x 14.5" x 16.25"",
      "Weight": "85 lbs",
      "Water Consumption": "0.8/1.28 GPF",
      "Material": "Vitreous China",
      "Shape": "Elongated",
      "Installation": "Floor Mounted",
      "Warranty": "3 Years Limited",
    },
    relatedProducts: ["3", "5", "6"],
  },
};

const ProductDetailPage = () => {
  const { id, category } = useParams<{ id: string; category: string }>();
  const product = id && products[id] ? products[id] : products["1"];

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Images */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
              <div className="h-96 overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex p-4 gap-4">
                {product.images.map((image, index) => (
                  <div 
                    key={index} 
                    className={`w-24 h-24 rounded-md overflow-hidden border-2 ${index === 0 ? 'border-primary' : 'border-transparent'}`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <span className="text-sm text-gray-600 mr-2">{product.brand}</span>
                  <span className="text-sm text-gray-400">|</span>
                  <span className="text-sm text-gray-600 mx-2">SKU: {product.id}12345</span>
                  <div className="flex ml-auto">
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">
                        {product.rating.toFixed(1)} ({product.reviewCount} reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="mb-6">
                  {product.salePrice ? (
                    <div className="flex items-center">
                      <span className="text-3xl font-bold text-primary mr-2">{product.salePrice}</span>
                      <span className="text-xl text-gray-500 line-through">{product.price}</span>
                      <span className="ml-2 bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-medium">
                        Save {Math.round((1 - parseFloat(product.salePrice.replace('$', '')) / parseFloat(product.price.replace('$', ''))) * 100)}%
                      </span>
                    </div>
                  ) : (
                    <span className="text-3xl font-bold text-primary">{product.price}</span>
                  )}
                  <p className="text-sm text-gray-600 mt-1">Free shipping on orders over $50</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.slice(0, 5).map((feature) => (
                    <span key={feature} className="inline-flex items-center text-sm bg-gray-100 px-3 py-1 rounded-full">
                      <Check className="h-4 w-4 mr-1 text-green-500" />
                      {feature}
                    </span>
                  ))}
                  {product.features.length > 5 && (
                    <span className="inline-flex items-center text-sm bg-gray-100 px-3 py-1 rounded-full">
                      +{product.features.length - 5} more
                    </span>
                  )}
                </div>

                <div className="flex gap-4 mb-6">
                  <Button className="flex-1 gap-2" size="lg">
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="lg" className="px-4">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="px-4">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-primary mr-2" />
                    <span className="text-sm">Quality Guarantee</span>
                  </div>
                  <div className="flex items-center">
                    <Truck className="h-5 w-5 text-primary mr-2" />
                    <span className="text-sm">Free Shipping</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-primary mr-2" />
                    <span className="text-sm">5-Year Warranty</span>
                  </div>
                </div>

                {/* Google AdSense - In-content Ad */}
                <div className="w-full h-20 bg-gray-100 flex items-center justify-center my-4 rounded-md">
                  <p className="text-gray-500">Advertisement</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-8">
          <Tabs defaultValue="description">
            <TabsList className="w-full grid grid-cols-4">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>
            <div className="bg-white p-6 rounded-b-lg border border-gray-200 border-t-0">
              <TabsContent value="description" className="mt-0">
                <h2 className="text-2xl font-semibold mb-4">Product Description</h2>
                <p className="text-gray-700 mb-4">{product.longDescription}</p>
                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="specifications" className="mt-0">
                <h2 className="text-2xl font-semibold mb-4">Technical Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex border-b border-gray-200 py-3">
                      <span className="font-medium w-1/3">{key}</span>
                      <span className="text-gray-700 w-2/3">{value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="mt-0">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold">Customer Reviews</h2>
                  <Button>Write a Review</Button>
                </div>
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                  <div className="md:w-1/3">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="text-center">
                        <div className="text-5xl font-bold text-primary mb-2">{product.rating.toFixed(1)}</div>
                        <div className="flex justify-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-6 w-6 ${i < Math.floor(product.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-600">{product.reviewCount} reviews</p>
                      </div>
                      <div className="mt-6 space-y-2">
                        {[5, 4, 3, 2, 1].map((star) => {
                          const percentage = star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 7 : star === 2 ? 2 : 1;
                          return (
                            <div key={star} className="flex items-center">
                              <span className="w-8 text-sm text-gray-600">{star} star</span>
                              <div className="flex-grow mx-3 bg-gray-200 rounded-full h-2.5">
                                <div 
                                  className="bg-yellow-500 h-2.5 rounded-full" 
                                  style={{ width: `${percentage}%` }}
                                ></div>
                              </div>
                              <span className="w-8 text-sm text-gray-600 text-right">{percentage}%</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4">Reviews would be displayed here.</p>
                    {/* This would be populated with actual reviews */}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="faq" className="mt-0">
                <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">How difficult is installation?</h3>
                    <p className="text-gray-700">Installation is straightforward for most DIY enthusiasts with basic plumbing knowledge. However, we recommend professional installation to ensure proper setup and to maintain warranty coverage.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">What's included in the box?</h3>
                    <p className="text-gray-700">The package includes the toilet bowl, tank, seat, mounting hardware, installation manual, and remote control (for smart models). Water supply lines are sold separately.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">How long does the warranty last?</h3>
                    <p className="text-gray-700">This product comes with a 5-year limited warranty covering manufacturing defects. Electronic components have a 3-year warranty.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Is this toilet ADA compliant?</h3>
                    <p className="text-gray-700">Yes, this toilet meets ADA requirements for height and operation, making it accessible for people with disabilities.</p>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.relatedProducts.map((relatedId) => {
              const relatedProduct = products[relatedId];
              if (!relatedProduct) return null;
              return (
                <Card key={relatedId} className="overflow-hidden h-full hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(relatedProduct.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">
                        {relatedProduct.rating.toFixed(1)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{relatedProduct.name}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{relatedProduct.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">{relatedProduct.salePrice || relatedProduct.price}</span>
                      <Button size="sm" className="gap-1">
                        View
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Google AdSense - Bottom Banner */}
        <div className="w-full h-24 bg-gray-100 flex items-center justify-center mt-12 rounded-md">
          <p className="text-gray-500">Advertisement</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
