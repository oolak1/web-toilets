import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  Clock,
  Wrench,
  ArrowLeft,
  Share2,
  Printer,
  ThumbsUp,
  MessageSquare,
} from "lucide-react";

const guides = {
  "fix-running-toilet": {
    title: "How to Fix a Running Toilet",
    description:
      "Learn the step-by-step process to diagnose and fix a constantly running toilet to save water and reduce your utility bills.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Repairs",
    readTime: "8 min",
    difficulty: "Beginner",
    author: "Mike Johnson",
    authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
    publishDate: "2023-09-15",
    content: `
      <h2>Introduction</h2>
      <p>A running toilet is one of the most common household plumbing issues. Not only is the constant sound annoying, but it can waste hundreds of gallons of water per day, significantly increasing your water bill. The good news is that fixing a running toilet is usually a simple DIY project that requires minimal tools and plumbing knowledge.</p>
      
      <h2>Understanding Why Your Toilet Runs</h2>
      <p>Before you start fixing your toilet, it's helpful to understand why it's running continuously. Most running toilets are caused by one of these issues:</p>
      <ul>
        <li><strong>Faulty flapper</strong>: The rubber flapper that seals the flush valve may be worn out, warped, or not seating properly.</li>
        <li><strong>Improper chain length</strong>: If the chain connecting the flush lever to the flapper is too short or too long, it can prevent the flapper from sealing correctly.</li>
        <li><strong>Float issues</strong>: If the float is set too high, water will continuously flow into the overflow tube.</li>
        <li><strong>Fill valve problems</strong>: A malfunctioning fill valve may not shut off properly.</li>
      </ul>
      
      <h2>Tools and Materials You'll Need</h2>
      <ul>
        <li>Adjustable wrench</li>
        <li>Replacement flapper (if needed)</li>
        <li>Replacement fill valve (if needed)</li>
        <li>Towel or sponge</li>
        <li>Bucket</li>
      </ul>
      
      <h2>Step 1: Check the Flapper</h2>
      <p>The flapper is the rubber seal at the bottom of the tank that lifts when you flush, allowing water to flow into the bowl. Over time, flappers can deteriorate or become misaligned.</p>
      <ol>
        <li>Turn off the water supply to the toilet using the shutoff valve located behind or near the toilet.</li>
        <li>Flush the toilet to drain most of the water from the tank.</li>
        <li>Remove the tank lid and set it aside on a safe surface.</li>
        <li>Inspect the flapper for any signs of wear, warping, or mineral buildup.</li>
        <li>If the flapper appears worn or damaged, unhook it from the chain and remove it from the flush valve.</li>
        <li>Take the old flapper to a hardware store to find an exact replacement, or purchase a universal flapper.</li>
        <li>Install the new flapper by attaching it to the pegs on either side of the flush valve and reconnecting the chain.</li>
      </ol>
      
      <h2>Step 2: Adjust the Chain Length</h2>
      <p>If the chain connecting the flush lever to the flapper is too long, it can get caught under the flapper, preventing a proper seal. If it's too short, it won't allow the flapper to close completely.</p>
      <ol>
        <li>Check the chain length when the flapper is in the closed position.</li>
        <li>There should be a small amount of slack (about 1/2 inch) in the chain.</li>
        <li>If the chain is too long, remove excess links or reattach it to a different hole on the flush lever.</li>
        <li>If the chain is too short, attach it to a hole on the flush lever that's closer to the tank.</li>
      </ol>
      
      <h2>Step 3: Check and Adjust the Float</h2>
      <p>The float controls the water level in the tank. If it's set too high, water will continuously flow into the overflow tube.</p>
      <ol>
        <li>For cup-style floats, squeeze the clip on the adjustment rod and move the float down to lower the water level.</li>
        <li>For ball-style floats, turn the adjustment screw on top of the fill valve counterclockwise to lower the water level.</li>
        <li>The water level should be about 1 inch below the top of the overflow tube.</li>
      </ol>
      
      <h2>Step 4: Replace the Fill Valve (If Necessary)</h2>
      <p>If adjusting the flapper, chain, and float doesn't solve the problem, you may need to replace the fill valve.</p>
      <ol>
        <li>Turn off the water supply and flush the toilet.</li>
        <li>Use a sponge or towel to remove any remaining water in the tank.</li>
        <li>Disconnect the water supply line from the fill valve.</li>
        <li>Unscrew the locknut securing the fill valve to the bottom of the tank.</li>
        <li>Remove the old fill valve.</li>
        <li>Install the new fill valve according to the manufacturer's instructions.</li>
        <li>Reconnect the water supply line and turn the water back on.</li>
        <li>Adjust the water level as needed.</li>
      </ol>
      
      <h2>Step 5: Test Your Repair</h2>
      <p>After making the necessary repairs:</p>
      <ol>
        <li>Turn the water supply back on.</li>
        <li>Let the tank fill completely.</li>
        <li>Flush the toilet and observe how it refills.</li>
        <li>Listen for any continued running after the tank has filled.</li>
        <li>If the toilet still runs, you may need to repeat the steps above or consult a professional plumber.</li>
      </ol>
      
      <h2>Preventative Maintenance</h2>
      <p>To prevent future issues with a running toilet:</p>
      <ul>
        <li>Replace the flapper every 3-5 years as part of regular maintenance.</li>
        <li>Clean mineral deposits from the flapper and valve seat occasionally.</li>
        <li>Avoid using chemical cleaners in the tank, as they can deteriorate rubber parts.</li>
        <li>Check the water level periodically to ensure it's not too high.</li>
      </ul>
      
      <h2>When to Call a Professional</h2>
      <p>While most running toilet issues can be fixed with DIY methods, you should consider calling a professional plumber if:</p>
      <ul>
        <li>You've tried all the steps above and the toilet still runs.</li>
        <li>There are cracks in the tank or bowl.</li>
        <li>You notice water leaking from the base of the toilet.</li>
        <li>The toilet is very old and may need to be replaced entirely.</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Fixing a running toilet is a straightforward DIY project that can save you money on water bills and prevent potential water damage. By understanding the common causes and following these simple steps, you can resolve most running toilet issues in less than an hour with basic tools and inexpensive replacement parts.</p>
    `,
    relatedGuides: [
      "unclog-without-plunger",
      "toilet-flapper-replacement",
      "water-saving-modifications",
    ],
  },
  "choosing-right-toilet": {
    title: "Choosing the Right Toilet for Your Bathroom",
    description:
      "A comprehensive guide to selecting the perfect toilet based on size, style, efficiency, and special features for your bathroom renovation.",
    image:
      "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Buying Guide",
    readTime: "12 min",
    difficulty: "Intermediate",
    author: "Sarah Williams",
    authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    publishDate: "2023-08-22",
    content: `<p>This is a comprehensive guide to choosing the right toilet for your bathroom...</p>`,
    relatedGuides: [
      "water-saving-modifications",
      "smart-toilet-installation",
      "toilet-flapper-replacement",
    ],
  },
  "water-saving-modifications": {
    title: "Water-Saving Toilet Modifications",
    description:
      "Discover simple modifications and upgrades that can transform your existing toilet into a water-efficient fixture without replacing it entirely.",
    image:
      "https://images.unsplash.com/photo-1613214049841-028981a2eb71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Eco-Friendly",
    readTime: "10 min",
    difficulty: "Intermediate",
    author: "David Chen",
    authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
    publishDate: "2023-07-15",
    content: `<p>Learn how to modify your existing toilet to save water...</p>`,
    relatedGuides: [
      "choosing-right-toilet",
      "toilet-flapper-replacement",
      "fix-running-toilet",
    ],
  },
  "unclog-without-plunger": {
    title: "How to Unclog a Toilet Without a Plunger",
    description:
      "Emergency solutions for unclogging your toilet when you don't have a plunger handy, using common household items and techniques.",
    image:
      "https://images.unsplash.com/photo-1581876832484-c6a6a1aee7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Emergency",
    readTime: "5 min",
    difficulty: "Beginner",
    author: "Jennifer Lopez",
    authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=jennifer",
    publishDate: "2023-10-05",
    content: `<p>Learn emergency techniques to unclog your toilet without a plunger...</p>`,
    relatedGuides: [
      "fix-running-toilet",
      "toilet-flapper-replacement",
      "water-saving-modifications",
    ],
  },
  "smart-toilet-installation": {
    title: "Smart Toilet Installation Guide",
    description:
      "Complete instructions for installing a modern smart toilet, including electrical connections and programming the features.",
    image:
      "https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Installation",
    readTime: "15 min",
    difficulty: "Advanced",
    author: "Robert Smith",
    authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=robert",
    publishDate: "2023-06-18",
    content: `<p>A detailed guide to installing a smart toilet in your bathroom...</p>`,
    relatedGuides: [
      "choosing-right-toilet",
      "water-saving-modifications",
      "fix-running-toilet",
    ],
  },
  "toilet-flapper-replacement": {
    title: "Toilet Flapper Replacement",
    description:
      "A simple guide to replacing your toilet's flapper valve, one of the most common causes of toilet leaks and running water.",
    image:
      "https://images.unsplash.com/photo-1585058178215-33108215e3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Maintenance",
    readTime: "6 min",
    difficulty: "Beginner",
    author: "Mike Johnson",
    authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
    publishDate: "2023-09-30",
    content: `<p>Learn how to replace a toilet flapper valve to fix leaks and running water...</p>`,
    relatedGuides: [
      "fix-running-toilet",
      "water-saving-modifications",
      "unclog-without-plunger",
    ],
  },
};

const GuideDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const guide =
    slug && guides[slug] ? guides[slug] : guides["fix-running-toilet"];

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
            Back to Guides
          </Button>
        </div>

        {/* Hero Section */}
        <div className="relative h-64 md:h-80 overflow-hidden rounded-xl mb-8">
          <img
            src={guide.image}
            alt={guide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end">
            <div className="p-6 md:p-8 w-full">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                  {guide.category}
                </span>
                <span className="text-white/80 text-sm flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {guide.readTime} read
                </span>
                <span className="text-white/80 text-sm flex items-center gap-1">
                  <Wrench className="h-3 w-3" />
                  {guide.difficulty}
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
                {guide.title}
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
                  src={guide.authorImage}
                  alt={guide.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium">{guide.author}</p>
                <p className="text-sm text-gray-500">
                  Published on{" "}
                  {new Date(guide.publishDate).toLocaleDateString("en-US", {
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

            {/* Guide Content */}
            <div className="prose prose-lg max-w-none mb-8">
              <div dangerouslySetInnerHTML={{ __html: guide.content }} />
            </div>

            {/* Google AdSense - Bottom Banner */}
            <div className="w-full h-24 bg-gray-100 flex items-center justify-center mb-8 rounded-md">
              <p className="text-gray-500">Advertisement</p>
            </div>

            {/* Engagement Section */}
            <div className="border-t border-gray-200 pt-6 mb-8">
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <Button variant="outline" className="flex items-center gap-2">
                    <ThumbsUp className="h-4 w-4" />
                    Helpful (24)
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Comment (8)
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
              <h2 className="text-2xl font-semibold mb-4">Comments (8)</h2>
              <div className="space-y-6">
                <p className="text-gray-600">
                  Comments would be displayed here.
                </p>
                {/* This would be populated with actual comments */}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Table of Contents */}
            <Card className="mb-6">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-3">
                  Table of Contents
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-primary hover:underline">
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-primary">
                      Understanding Why Your Toilet Runs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-primary">
                      Tools and Materials You'll Need
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-primary">
                      Step 1: Check the Flapper
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-primary">
                      Step 2: Adjust the Chain Length
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-primary">
                      Step 3: Check and Adjust the Float
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-primary">
                      Step 4: Replace the Fill Valve
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-primary">
                      Step 5: Test Your Repair
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-primary">
                      Preventative Maintenance
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-primary">
                      When to Call a Professional
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-primary">
                      Conclusion
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Google AdSense - Sidebar Ad */}
            <div className="w-full h-60 bg-gray-100 flex items-center justify-center mb-6 rounded-md">
              <p className="text-gray-500">Advertisement</p>
            </div>

            {/* Related Guides */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Related Guides</h3>
              <div className="space-y-4">
                {guide.relatedGuides.map((relatedSlug) => {
                  const relatedGuide = guides[relatedSlug];
                  if (!relatedGuide) return null;
                  return (
                    <Card key={relatedSlug} className="overflow-hidden">
                      <div className="flex">
                        <div className="w-24 h-24 flex-shrink-0">
                          <img
                            src={relatedGuide.image}
                            alt={relatedGuide.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="p-3">
                          <h4 className="font-medium text-sm line-clamp-2">
                            {relatedGuide.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {relatedGuide.readTime}
                            </span>
                            <span className="flex items-center gap-1">
                              <Wrench className="h-3 w-3" />
                              {relatedGuide.difficulty}
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
                  "Water Saving",
                  "Plumbing",
                  "Bathroom",
                  "Maintenance",
                  "Installation",
                  "Troubleshooting",
                ].map((tag) => (
                  <a
                    key={tag}
                    href={`/guides?tag=${tag.toLowerCase().replace(/\s+/g, "-")}`}
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
                  Subscribe to our newsletter for the latest guides and
                  tutorials.
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

export default GuideDetailPage;
