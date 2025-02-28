import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  ShowerHead,
  Bath,
  Wrench,
  Book,
  Hammer,
  ArrowRight,
} from "lucide-react";

interface CategoryItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

interface CategoryGridProps {
  categories?: CategoryItem[];
}

const CategoryGrid = ({
  categories = defaultCategories,
}: CategoryGridProps) => {
  return (
    <section className="w-full py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-2">
            Explore Our Categories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find everything you need to know about toilets and bathrooms, from
            product reviews to DIY guides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  {category.icon}
                </div>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {category.description}
                </CardDescription>
                <a
                  href={category.href}
                  className="inline-flex items-center text-primary font-medium text-sm"
                >
                  Explore
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const defaultCategories: CategoryItem[] = [
  {
    title: "Product Reviews",
    description:
      "Browse our extensive collection of toilet products with detailed specifications and authentic user reviews.",
    icon: <ShowerHead className="h-6 w-6 text-primary" />,
    href: "/product-reviews",
  },
  {
    title: "Buying Guides",
    description:
      "Expert advice to help you choose the perfect toilet for your needs, budget, and bathroom.",
    icon: <Book className="h-6 w-6 text-primary" />,
    href: "/buying-guides",
  },
  {
    title: "Guides",
    description:
      "Comprehensive guides on toilet installation, maintenance, and troubleshooting.",
    icon: <Book className="h-6 w-6 text-primary" />,
    href: "/guides",
  },
  {
    title: "Services",
    description:
      "Find reliable local plumbers and contractors for your bathroom renovation needs.",
    icon: <Wrench className="h-6 w-6 text-primary" />,
    href: "/services",
  },
  {
    title: "DIY",
    description:
      "Step-by-step DIY tutorials for common toilet repairs and bathroom upgrades.",
    icon: <Hammer className="h-6 w-6 text-primary" />,
    href: "/diy",
  },
];

export default CategoryGrid;
