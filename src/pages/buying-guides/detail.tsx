import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  Clock,
  ArrowLeft,
  Share2,
  Printer,
  ThumbsUp,
  MessageSquare,
  Check,
  ShoppingCart,
} from "lucide-react";

const guides = {
  "toilet-types-one-piece-vs-two-piece": {
    title: "Complete Guide to Toilet Types: One-Piece vs. Two-Piece",
    description:
      "Understand the differences between one-piece and two-piece toilets, including pros and cons of each design to help you make the right choice for your bathroom.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Toilet Types",
    readTime: "10 min",
    author: "Emily Johnson",
    authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
    publishDate: "2023-09-15",
    content: `
      <h2>Introduction to Toilet Types</h2>
      <p>When shopping for a new toilet, one of the first decisions you'll need to make is whether to choose a one-piece or two-piece design. While both types serve the same basic function, they differ in construction, appearance, price, and maintenance requirements. This guide will help you understand the key differences and determine which option is best for your bathroom renovation or upgrade.</p>
      
      <h2>One-Piece Toilets: Overview</h2>
      <p>A one-piece toilet features a seamless design where the tank and bowl are integrated into a single unit. This modern design has gained popularity in recent years for its sleek appearance and practical benefits.</p>
      
      <h3>Advantages of One-Piece Toilets</h3>
      <ul>
        <li><strong>Easier to Clean:</strong> With no seam between the tank and bowl, one-piece toilets eliminate the crevice that can collect dust and bacteria, making them significantly easier to clean and maintain.</li>
        <li><strong>Sleek, Modern Appearance:</strong> The seamless design offers a contemporary look that works well in modern bathroom designs.</li>
        <li><strong>More Durable:</strong> Since there's no separate tank that could potentially leak at the connection point, one-piece toilets tend to be more durable and less prone to leaks.</li>
        <li><strong>Space-Saving Design:</strong> Many one-piece models have a lower profile and can work better in smaller bathrooms.</li>
        <li><strong>Simpler Installation:</strong> Installation is generally more straightforward since you're dealing with a single unit rather than connecting separate pieces.</li>
      </ul>
      
      <h3>Disadvantages of One-Piece Toilets</h3>
      <ul>
        <li><strong>Higher Cost:</strong> One-piece toilets typically cost 20-40% more than comparable two-piece models.</li>
        <li><strong>Heavier and Bulkier:</strong> The integrated design makes one-piece toilets heavier and more difficult to maneuver during installation.</li>
        <li><strong>More Expensive to Replace:</strong> If any component breaks, you may need to replace the entire toilet rather than just a single part.</li>
        <li><strong>Fewer Options:</strong> There are generally fewer style and feature options available in one-piece designs.</li>
      </ul>
      
      <h2>Two-Piece Toilets: Overview</h2>
      <p>A two-piece toilet has a separate tank and bowl that are bolted together during installation. This traditional design has been the standard for decades and remains the most common type found in homes.</p>
      
      <h3>Advantages of Two-Piece Toilets</h3>
      <ul>
        <li><strong>More Affordable:</strong> Two-piece toilets are typically less expensive than their one-piece counterparts, making them a budget-friendly option.</li>
        <li><strong>Easier to Transport:</strong> Since the tank and bowl are separate, two-piece toilets are lighter and easier to transport and maneuver during installation.</li>
        <li><strong>Easier to Replace Parts:</strong> If the tank or bowl becomes damaged, you can replace just that component rather than the entire toilet.</li>
        <li><strong>More Options:</strong> Two-piece toilets come in a wider variety of styles, colors, and configurations.</li>
      </ul>
      
      <h3>Disadvantages of Two-Piece Toilets</h3>
      <ul>
        <li><strong>More Difficult to Clean:</strong> The seam between the tank and bowl can collect dirt, dust, and bacteria, making cleaning more challenging.</li>
        <li><strong>Potential for Leaks:</strong> The connection between the tank and bowl can develop leaks over time.</li>
        <li><strong>Less Modern Appearance:</strong> Two-piece toilets generally have a more traditional look that may not complement contemporary bathroom designs.</li>
        <li><strong>More Complex Installation:</strong> Installation requires connecting the tank to the bowl, adding an extra step to the process.</li>
      </ul>
      
      <h2>Side-by-Side Comparison</h2>
      <table class="w-full border-collapse border border-gray-300 my-4">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 p-2 text-left">Feature</th>
            <th class="border border-gray-300 p-2 text-left">One-Piece Toilet</th>
            <th class="border border-gray-300 p-2 text-left">Two-Piece Toilet</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 p-2">Average Price</td>
            <td class="border border-gray-300 p-2">$300-$800+</td>
            <td class="border border-gray-300 p-2">$150-$500</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2">Cleaning Ease</td>
            <td class="border border-gray-300 p-2">Easier (no seam)</td>
            <td class="border border-gray-300 p-2">More challenging (has seam)</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2">Installation</td>
            <td class="border border-gray-300 p-2">Simpler but heavier</td>
            <td class="border border-gray-300 p-2">More steps but lighter components</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2">Durability</td>
            <td class="border border-gray-300 p-2">Higher (fewer leak points)</td>
            <td class="border border-gray-300 p-2">Good, but potential tank-bowl leaks</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2">Appearance</td>
            <td class="border border-gray-300 p-2">Modern, sleek</td>
            <td class="border border-gray-300 p-2">Traditional, standard</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2">Repairs</td>
            <td class="border border-gray-300 p-2">May require full replacement</td>
            <td class="border border-gray-300 p-2">Can replace individual components</td>
          </tr>
        </tbody>
      </table>
      
      <h2>Which Type is Right for You?</h2>
      <p>Consider choosing a <strong>one-piece toilet</strong> if:</p>
      <ul>
        <li>You value easier cleaning and maintenance</li>
        <li>You prefer a modern, sleek aesthetic</li>
        <li>You have a higher budget for your bathroom</li>
        <li>You want a more durable option with fewer potential leak points</li>
        <li>You have a smaller bathroom where a lower-profile design works better</li>
      </ul>
      
      <p>Consider choosing a <strong>two-piece toilet</strong> if:</p>
      <ul>
        <li>You're working with a tighter budget</li>
        <li>You want more style and feature options</li>
        <li>You prefer the ability to replace individual components if needed</li>
        <li>You're installing the toilet yourself and want lighter components to work with</li>
        <li>You have a traditionally styled bathroom</li>
      </ul>
      
      <h2>Popular Models to Consider</h2>
      <h3>Top One-Piece Toilets</h3>
      <ul>
        <li><strong>TOTO Ultramax II:</strong> Excellent one-piece design with powerful flush and comfortable height</li>
        <li><strong>Kohler Santa Rosa:</strong> Compact one-piece with comfort height and powerful flushing system</li>
        <li><strong>American Standard Boulevard:</strong> Sleek design with EverClean surface to inhibit stain and odor-causing bacteria</li>
      </ul>
      
      <h3>Top Two-Piece Toilets</h3>
      <ul>
        <li><strong>TOTO Drake:</strong> Reliable two-piece with powerful flush and excellent value</li>
        <li><strong>Kohler Cimarron:</strong> Popular two-piece with comfort height and efficient flushing</li>
        <li><strong>American Standard Champion 4:</strong> High-performance two-piece with large trapway to prevent clogs</li>
      </ul>
      
      <h2>Installation Considerations</h2>
      <p>Regardless of which type you choose, keep these installation factors in mind:</p>
      <ul>
        <li><strong>Rough-in measurement:</strong> Measure the distance from the wall to the center of the drain pipe (typically 12 inches, but can be 10 or 14 inches)</li>
        <li><strong>Weight considerations:</strong> One-piece toilets can weigh 100+ pounds, so you may need help during installation</li>
        <li><strong>Professional vs. DIY installation:</strong> While both types can be installed DIY, consider professional installation for one-piece toilets due to their weight</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Both one-piece and two-piece toilets have their advantages and disadvantages. Your choice ultimately depends on your budget, bathroom design preferences, cleaning habits, and installation considerations. By understanding the differences between these two toilet types, you can make an informed decision that will serve your household well for years to come.</p>
      
      <p>Remember that beyond the one-piece vs. two-piece decision, you'll also want to consider other important factors like water efficiency, bowl shape (round or elongated), seat height, flush mechanism, and special features like bidets or heated seats.</p>
    `,
    relatedGuides: [
      "smart-toilets-worth-investment",
      "water-efficiency-low-flow-dual-flush",
      "toilet-height-standard-vs-comfort",
    ],
    recommendedProducts: [
      {
        name: "TOTO Ultramax II One-Piece Toilet",
        image:
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        price: "$599.99",
        rating: 4.8,
        type: "One-Piece",
      },
      {
        name: "Kohler Cimarron Two-Piece Toilet",
        image:
          "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        price: "$329.99",
        rating: 4.6,
        type: "Two-Piece",
      },
      {
        name: "American Standard Champion 4 Two-Piece",
        image:
          "https://images.unsplash.com/photo-1585058178215-33108215e3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        price: "$399.99",
        rating: 4.7,
        type: "Two-Piece",
      },
    ],
  },
  "smart-toilets-worth-investment": {
    title: "Smart Toilets: Are They Worth the Investment?",
    description:
      "Explore the features, benefits, and costs of smart toilets to determine if the advanced technology justifies the higher price point for your bathroom upgrade.",
    image:
      "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Features",
    readTime: "12 min",
    author: "Michael Chen",
    authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    publishDate: "2023-08-22",
    content: `<p>This guide explores whether smart toilets are worth the investment...</p>`,
    relatedGuides: [
      "toilet-types-one-piece-vs-two-piece",
      "water-efficiency-low-flow-dual-flush",
      "top-toilet-brands-comparison",
    ],
    recommendedProducts: [
      {
        name: "TOTO Neorest Smart Toilet",
        image:
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        price: "$1,999.99",
        rating: 4.9,
        type: "Smart Toilet",
      },
      {
        name: "Kohler Veil Intelligent Toilet",
        image:
          "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        price: "$1,599.99",
        rating: 4.7,
        type: "Smart Toilet",
      },
      {
        name: "Bio Bidet Smart Toilet Seat",
        image:
          "https://images.unsplash.com/photo-1585058178215-33108215e3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        price: "$499.99",
        rating: 4.5,
        type: "Smart Seat",
      },
    ],
  },
  "water-efficiency-low-flow-dual-flush": {
    title: "Water Efficiency Guide: Low-Flow vs. Dual-Flush Toilets",
    description:
      "Compare water-saving toilet technologies to find the most efficient option that still delivers powerful flushing performance for your home.",
    image:
      "https://images.unsplash.com/photo-1613214049841-028981a2eb71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Features",
    readTime: "8 min",
    author: "Sarah Williams",
    authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    publishDate: "2023-07-15",
    content: `<p>This guide compares low-flow and dual-flush toilet technologies...</p>`,
    relatedGuides: [
      "toilet-types-one-piece-vs-two-piece",
      "smart-toilets-worth-investment",
      "budget-toilet-buying-guide",
    ],
    recommendedProducts: [
      {
        name: "TOTO Drake II 1.28 GPF Toilet",
        image:
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        price: "$399.99",
        rating: 4.7,
        type: "Low-Flow",
      },
      {
        name: "Kohler Wellworth Dual-Flush Toilet",
        image:
          "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        price: "$329.99",
        rating: 4.5,
        type: "Dual-Flush",
      },
      {
        name: "American Standard H2Option Dual-Flush",
        image:
          "https://images.unsplash.com/photo-1585058178215-33108215e3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        price: "$349.99",
        rating: 4.6,
        type: "Dual-Flush",
      },
    ],
  },
};

const BuyingGuideDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const guide =
    slug && guides[slug]
      ? guides[slug]
      : guides["toilet-types-one-piece-vs-two-piece"];

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
            Back to Buying Guides
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
                  <BookOpen className="h-3 w-3" />
                  Buying Guide
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

            {/* Recommended Products */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Recommended Products
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {guide.recommendedProducts.map((product, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="h-40 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center mb-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${i < Math.floor(product.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <span className="ml-1 text-xs text-gray-600">
                          {product.rating}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold mb-1">
                        {product.name}
                      </h3>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm font-bold">
                          {product.price}
                        </span>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 text-xs gap-1"
                        >
                          <ShoppingCart className="h-3 w-3" />
                          View
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
                    Helpful (32)
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
                      Introduction to Toilet Types
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-primary">
                      One-Piece Toilets: Overview
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-primary">
                      Two-Piece Toilets: Overview
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-primary">
                      Side-by-Side Comparison
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-primary">
                      Which Type is Right for You?
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-primary">
                      Popular Models to Consider
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 hover:text-primary">
                      Installation Considerations
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

            {/* Buying Checklist */}
            <Card className="mb-6">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-3">Buying Checklist</h3>
                <ul className="space-y-2">
                  {[
                    "Measure your rough-in distance",
                    "Decide between one-piece or two-piece",
                    "Choose round or elongated bowl",
                    "Consider comfort height options",
                    "Check water efficiency ratings",
                    "Compare flush mechanisms",
                    "Review warranty coverage",
                    "Plan for installation",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Related Guides */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">
                Related Buying Guides
              </h3>
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
                              <BookOpen className="h-3 w-3" />
                              {relatedGuide.category}
                            </span>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Newsletter Signup */}
            <Card>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">
                  Get More Buying Tips
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Subscribe to our newsletter for the latest buying guides and
                  product recommendations.
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

export default BuyingGuideDetailPage;
