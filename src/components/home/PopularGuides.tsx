import React from "react";
import { ArrowRight, BookOpen, Clock, Wrench } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

interface GuideProps {
  title: string;
  description: string;
  image: string;
  category: string;
  readTime: string;
  difficulty: string;
  slug: string;
}

interface PopularGuidesProps {
  guides?: GuideProps[];
  title?: string;
  description?: string;
}

const GuideCard = ({
  guide = {
    title: "How to Fix a Running Toilet",
    description:
      "Learn the step-by-step process to diagnose and fix a constantly running toilet to save water and reduce your utility bills.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Repairs",
    readTime: "8 min",
    difficulty: "Beginner",
    slug: "fix-running-toilet",
  },
}: {
  guide?: GuideProps;
}) => {
  return (
    <Card className="overflow-hidden flex flex-col h-full bg-white">
      <div className="relative h-48 overflow-hidden">
        <img
          src={guide.image}
          alt={guide.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
          {guide.category}
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold line-clamp-2">
          {guide.title}
        </CardTitle>
        <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{guide.readTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Wrench className="h-3 w-3" />
            <span>{guide.difficulty}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm line-clamp-3">
          {guide.description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-between group"
        >
          Read Guide
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const PopularGuides = ({
  guides = [
    {
      title: "How to Fix a Running Toilet",
      description:
        "Learn the step-by-step process to diagnose and fix a constantly running toilet to save water and reduce your utility bills.",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Repairs",
      readTime: "8 min",
      difficulty: "Beginner",
      slug: "fix-running-toilet",
    },
    {
      title: "Choosing the Right Toilet for Your Bathroom",
      description:
        "A comprehensive guide to selecting the perfect toilet based on size, style, efficiency, and special features for your bathroom renovation.",
      image:
        "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Buying Guide",
      readTime: "12 min",
      difficulty: "Intermediate",
      slug: "choosing-right-toilet",
    },
    {
      title: "Water-Saving Toilet Modifications",
      description:
        "Discover simple modifications and upgrades that can transform your existing toilet into a water-efficient fixture without replacing it entirely.",
      image:
        "https://images.unsplash.com/photo-1613214049841-028981a2eb71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Eco-Friendly",
      readTime: "10 min",
      difficulty: "Intermediate",
      slug: "water-saving-modifications",
    },
    {
      title: "How to Unclog a Toilet Without a Plunger",
      description:
        "Emergency solutions for unclogging your toilet when you don't have a plunger handy, using common household items and techniques.",
      image:
        "https://images.unsplash.com/photo-1581876832484-c6a6a1aee7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Emergency",
      readTime: "5 min",
      difficulty: "Beginner",
      slug: "unclog-without-plunger",
    },
  ],
  title = "Popular Guides & Tutorials",
  description = "Discover our most-read guides to solve common toilet problems and learn essential maintenance tips.",
}: PopularGuidesProps) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-3">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guides.map((guide, index) => (
            <GuideCard key={index} guide={guide} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="gap-2">
            <BookOpen className="h-4 w-4" />
            View All Guides
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularGuides;
