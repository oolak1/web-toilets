import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Hammer,
  Clock,
  Wrench,
  ArrowLeft,
  Share2,
  Printer,
  ThumbsUp,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

const tutorials = {
  "fix-running-toilet": {
    title: "How to Fix a Running Toilet",
    description:
      "Learn the step-by-step process to diagnose and fix a constantly running toilet to save water and reduce your utility bills.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Repairs",
    time: "30 minutes",
    difficulty: "Beginner",
    cost: "$10-$30",
    author: "Mike Johnson",
    authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
    publishDate: "2023-09-15",
    tools: [
      "Adjustable wrench",
      "Replacement flapper (if needed)",
      "Replacement fill valve (if needed)",
      "Towel or sponge",
      "Bucket",
    ],
    materials: [
      "Replacement flapper ($5-$10)",
      "Replacement fill valve ($8-$15, if needed)",
      "Plumber's tape ($2)",
    ],
    steps: [
      {
        title: "Turn off the water supply",
        description:
          "Locate the shutoff valve behind the toilet and turn it clockwise to shut off the water supply.",
        image:
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Flush the toilet",
        description:
          "Flush the toilet to drain most of the water from the tank.",
        image:
          "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Remove the tank lid",
        description:
          "Carefully remove the tank lid and set it aside on a safe surface.",
        image:
          "https://images.unsplash.com/photo-1585058178215-33108215e3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Check the flapper",
        description:
          "Inspect the flapper for any signs of wear, warping, or mineral buildup. If it appears worn or damaged, unhook it from the chain and remove it from the flush valve.",
        image:
          "https://images.unsplash.com/photo-1581876832484-c6a6a1aee7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Replace the flapper if needed",
        description:
          "Install the new flapper by attaching it to the pegs on either side of the flush valve and reconnecting the chain.",
        image:
          "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Adjust the chain length",
        description:
          "Ensure there is about 1/2 inch of slack in the chain when the flapper is closed. If the chain is too long or too short, adjust it accordingly.",
        image:
          "https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Check and adjust the float",
        description:
          "The water level should be about 1 inch below the top of the overflow tube. Adjust the float as needed to achieve this level.",
        image:
          "https://images.unsplash.com/photo-1613214049841-028981a2eb71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Turn the water back on",
        description:
          "Turn the shutoff valve counterclockwise to restore the water supply to the toilet.",
        image:
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Test the repair",
        description:
          "Flush the toilet and observe how it refills. Listen for any continued running after the tank has filled.",
        image:
          "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
    ],
    tips: [
      "Replace the flapper every 3-5 years as part of regular maintenance.",
      "Clean mineral deposits from the flapper and valve seat occasionally.",
      "Avoid using chemical cleaners in the tank, as they can deteriorate rubber parts.",
      "Check the water level periodically to ensure it's not too high.",
    ],
    relatedTutorials: [
      "unclog-without-plunger",
      "replace-toilet-seat",
      "fix-leaky-toilet-base",
    ],
  },
  "unclog-without-plunger": {
    title: "Unclog a Toilet Without a Plunger",
    description:
      "Emergency solutions for unclogging your toilet when you don't have a plunger handy, using common household items.",
    image:
      "https://images.unsplash.com/photo-1581876832484-c6a6a1aee7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Repairs",
    time: "15 minutes",
    difficulty: "Beginner",
    cost: "$0-$5",
    author: "Jennifer Lopez",
    authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=jennifer",
    publishDate: "2023-10-05",
    tools: [],
    materials: ["Hot water", "Dish soap", "Baking soda", "Vinegar"],
    steps: [],
    tips: [],
    relatedTutorials: [
      "fix-running-toilet",
      "replace-toilet-seat",
      "fix-leaky-toilet-base",
    ],
  },
  "replace-toilet-seat": {
    title: "Replace a Toilet Seat",
    description:
      "A simple guide to removing your old toilet seat and installing a new one for improved comfort and appearance.",
    image:
      "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Installation",
    time: "15 minutes",
    difficulty: "Beginner",
    cost: "$20-$100",
    author: "Sarah Williams",
    authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    publishDate: "2023-08-22",
    tools: [],
    materials: [],
    steps: [],
    tips: [],
    relatedTutorials: [
      "fix-running-toilet",
      "unclog-without-plunger",
      "fix-leaky-toilet-base",
    ],
  },
  "fix-leaky-toilet-base": {
    title: "Fix a Leaky Toilet Base",
    description:
      "Step-by-step instructions to identify and repair a toilet that's leaking around the base to prevent water damage.",
    image:
      "https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Repairs",
    time: "1 hour",
    difficulty: "Intermediate",
    cost: "$10-$25",
    author: "Robert Smith",
    authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=robert",
    publishDate: "2023-07-15",
    tools: [],
    materials: [],
    steps: [],
    tips: [],
    relatedTutorials: [
      "fix-running-toilet",
      "unclog-without-plunger",
      "replace-toilet-seat",
    ],
  },
};

const DIYDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const tutorial =
    slug && tutorials[slug] ? tutorials[slug] : tutorials["fix-running-toilet"];

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to DIY Projects
          </Button>
        </div>

        {/* Hero Section */}
        <div className="relative h-64 md:h-80 overflow-hidden rounded-xl mb-8">
          <img
            src={tutorial.image}
            alt={tutorial.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end">
            <div className="p-6 md:p-8 w-full">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                  {tutorial.category}
                </span>
                <span className="text-white/80 text-sm flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {tutorial.time}
                </span>
                <span className="text-white/80 text-sm flex items-center gap-1">
                  <Wrench className="h-3 w-3" />
                  {tutorial.difficulty}
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
                {tutorial.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Author Info */}
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <img
                  src={tutorial.authorImage}
                  alt={tutorial.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium">{tutorial.author}</p>
                <p className="text-sm text-gray-500">
                  Published on{" "}
                  {new Date(tutorial.publishDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div className="ml-auto flex gap-2">
                <Button variant="ghost" size="sm" className="text-gray-600">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-600">
                  <Printer className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Google AdSense - Top Banner */}
            <div className="w-full h-24 bg-gray-100 flex items-center justify-center mb-8 rounded-md">
              <p className="text-gray-500">Advertisement</p>
            </div>

            {/* Project Overview */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
              <p className="text-gray-700 mb-6">{tutorial.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-sm text-gray-500 mb-1">
                      Difficulty
                    </h3>
                    <div className="flex items-center">
                      <Wrench className="h-5 w-5 text-primary mr-2" />
                      <span className="font-semibold">
                        {tutorial.difficulty}
                      </span>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-sm text-gray-500 mb-1">
                      Time Required
                    </h3>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-primary mr-2" />
                      <span className="font-semibold">{tutorial.time}</span>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-sm text-gray-500 mb-1">
                      Estimated Cost
                    </h3>
                    <div className="flex items-center">
                      <span className="font-semibold">{tutorial.cost}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Tools and Materials */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">What You'll Need</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Tools</h3>
                  <ul className="space-y-2">
                    {tutorial.tools.map((tool, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{tool}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3">Materials</h3>
                  <ul className="space-y-2">
                    {tutorial.materials.map((material, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{material}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Step by Step Instructions */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-6">
                Step-by-Step Instructions
              </h2>

              <div className="space-y-8">
                {tutorial.steps.map((step, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <div className="bg-gray-50 p-4 border-b border-gray-200">
                      <h3 className="text-lg font-semibold flex items-center">
                        <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          {index + 1}
                        </span>
                        {step.title}
                      </h3>
                    </div>
                    <div className="p-4 md:p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3">
                          <img
                            src={step.image}
                            alt={step.title}
                            className="w-full h-48 object-cover rounded-lg"
                          />
                        </div>
                        <div className="md:w-2/3">
                          <p className="text-gray-700">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Google AdSense - Middle Banner */}
            <div className="w-full h-24 bg-gray-100 flex items-center justify-center mb-8 rounded-md">
              <p className="text-gray-500">Advertisement</p>
            </div>

            {/* Pro Tips */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Pro Tips</h2>
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {tutorial.tips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Engagement Section */}
            <div className="border-t border-gray-200 pt-6 mb-8">
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <Button variant="outline" className="flex items-center gap-2">
                    <ThumbsUp className="h-4 w-4" />
                    Helpful (32)
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Comment (12)
                  </Button>
                </div>
                <Button variant="ghost" className="flex items-center gap-2">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>

            {/* Comments Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Comments (12)</h2>
              <div className="space-y-6">
                <p className="text-gray-600">
                  Comments would be displayed here.
                </p>
                {/* This would be populated with actual comments */}
              </div>
            </div>

            {/* Google AdSense - Bottom Banner */}
            <div className="w-full h-24 bg-gray-100 flex items-center justify-center mb-8 rounded-md">
              <p className="text-gray-500">Advertisement</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Table of Contents */}
            <Card className="mb-6 sticky top-24">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-3">Quick Navigation</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-primary hover:underline">
                      Project Overview
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-primary">
                      What You'll Need
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-primary">
                      Step-by-Step Instructions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-primary">
                      Pro Tips
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-primary">
                      Comments
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Google AdSense - Sidebar Ad */}
            <div className="w-full h-60 bg-gray-100 flex items-center justify-center mb-6 rounded-md">
              <p className="text-gray-500">Advertisement</p>
            </div>

            {/* Related Tutorials */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Related Projects</h3>
              <div className="space-y-4">
                {tutorial.relatedTutorials.map((relatedSlug) => {
                  const relatedTutorial = tutorials[relatedSlug];
                  if (!relatedTutorial) return null;
                  return (
                    <Card key={relatedSlug} className="overflow-hidden">
                      <div className="flex">
                        <div className="w-24 h-24 flex-shrink-0">
                          <img
                            src={relatedTutorial.image}
                            alt={relatedTutorial.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="p-3">
                          <h4 className="font-medium text-sm line-clamp-2">
                            {relatedTutorial.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {relatedTutorial.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <Wrench className="h-3 w-3" />
                              {relatedTutorial.difficulty}
                            </span>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Toilet Repair",
                  "DIY",
                  "Plumbing",
                  "Bathroom",
                  "Maintenance",
                  "Installation",
                  "Troubleshooting",
                  "Budget Friendly",
                ].map((tag) => (
                  <a
                    key={tag}
                    href={`/diy?tag=${tag.toLowerCase().replace(/\s+/g, "-")}`}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full transition-colors"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <Card>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">
                  Get More DIY Tips
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Subscribe to our newsletter for the latest tutorials and
                  projects.
                </p>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                  <Button className="w-full">Subscribe</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DIYDetailPage;
