import React from "react";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductProps {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  price: string;
}

const defaultProducts: ProductProps[] = [
  {
    id: "1",
    name: "Smart Toilet Pro X1",
    description:
      "Advanced smart toilet with heated seat, bidet, and automatic flush",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 4.8,
    price: "$899.99",
  },
  {
    id: "2",
    name: "EcoFlush Water Saver",
    description: "Eco-friendly toilet that reduces water usage by up to 40%",
    image:
      "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 4.5,
    price: "$499.99",
  },
  {
    id: "3",
    name: "Compact Corner Toilet",
    description: "Space-saving design perfect for small bathrooms",
    image:
      "https://images.unsplash.com/photo-1585058178215-33108215e3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 4.3,
    price: "$349.99",
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
  },
  {
    id: "5",
    name: "Wall-Hung Modern Toilet",
    description: "Sleek wall-mounted design for contemporary bathrooms",
    image:
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 4.6,
    price: "$749.99",
  },
];

const ProductCard = ({ product }: { product: ProductProps }) => {
  return (
    <Card className="h-full bg-white">
      <div className="relative h-48 overflow-hidden rounded-t-xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{product.name}</CardTitle>
        <div className="flex items-center mt-1">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
              />
            ))}
          <span className="ml-2 text-sm text-gray-600">
            {product.rating.toFixed(1)}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-2 h-10">
          {product.description}
        </CardDescription>
        <p className="font-bold text-lg mt-2">{product.price}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  );
};

interface FeaturedProductsProps {
  products?: ProductProps[];
  title?: string;
  subtitle?: string;
}

const FeaturedProducts = ({
  products = defaultProducts,
  title = "Featured Toilet Products",
  subtitle = "Discover our selection of high-quality toilets for your bathroom",
}: FeaturedProductsProps) => {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          <p className="mt-2 text-lg text-gray-600">{subtitle}</p>
        </div>

        <div className="relative px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {products.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6" />
            <CarouselNext className="-right-6" />
          </Carousel>
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
