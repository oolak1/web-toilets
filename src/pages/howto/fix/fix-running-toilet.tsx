import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Clock,
  Wrench,
  CheckCircle,
  AlertCircle,
  Share2,
  Printer,
  ThumbsUp,
  MessageSquare,
} from "lucide-react";

const FixRunningToiletPage = () => {
  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <Link to="/howto/fix">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Toilet Repair Guides
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="relative h-64 md:h-80 overflow-hidden rounded-xl mb-8">
          <img
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
            alt="How to Fix a Running Toilet"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end">
            <div className="p-6 md:p-8 w-full">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                  Fix
                </span>
                <span className="text-white/80 text-sm flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  8 min read
                </span>
                <span className="text-white/80 text-sm flex items-center gap-1">
                  <Wrench className="h-3 w-3" />
                  Beginner
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
                How to Fix a Running Toilet in 15 Minutes
              </h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-8">
              <p>
                A running toilet is one of the most common bathroom problems and can waste hundreds of gallons of water per day if left unfixed. Fortunately, it's also one of the easiest plumbing issues to fix yourself, often requiring no special tools and just a few minutes of your time.
              </p>
              <p>
                This guide will walk you through the process of diagnosing and fixing a running toilet, saving you both water and money on your utility bills.
              </p>
            </div>

            {/* Materials Needed */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold mb-4">What You'll Need</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-2">Tools:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Adjustable wrench</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Sponge or towel</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Bucket (optional)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Pliers (optional)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Materials:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Replacement flapper (if needed)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Replacement fill valve (if needed)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Replacement float (if needed)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step by Step Instructions */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-6">Step-by-Step Instructions</h2>
              
              <div className="space-y-8">
                {/* Step 1 */}
                <div>
                  <h3 className="text-xl font-medium mb-3">Step 1: Identify the Problem</h3>
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                      alt="Toilet tank with lid removed" 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                      <p className="mb-4">
                        First, remove the toilet tank lid and set it aside carefully on a towel. Flush the toilet and observe what happens inside the tank. There are three common causes of a running toilet:
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Faulty flapper:</strong> The flapper doesn't seal properly, allowing water to leak from the tank into the bowl.</li>
                        <li><strong>Improper float height:</strong> If the float is set too high, water will continuously flow into the overflow tube.</li>
                        <li><strong>Defective fill valve:</strong> The fill valve doesn't shut off completely, causing water to continuously flow into the tank.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div>
                  <h3 className="text-xl font-medium mb-3">Step 2: Check and Replace the Flapper</h3>
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                      alt="Toilet flapper" 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                      <p className="mb-4">
                        The flapper is the rubber seal at the bottom of the tank that lifts when you flush and then closes to allow the tank to refill. If it's worn, warped, or doesn't create a proper seal, water will leak into the bowl.
                      </p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Turn off the water supply to the toilet using the shutoff valve located behind or near the toilet.</li>
                        <li>Flush the toilet to drain most of the water from the tank.</li>
                        <li>Disconnect the chain from the flush lever.</li>
                        <li>Remove the old flapper by sliding it off the pegs on either side of the overflow tube.</li>
                        <li>Install the new flapper by sliding it onto the same pegs.</li>
                        <li>Reattach the chain to the flush lever, leaving a small amount of slack.</li>
                        <li>Turn the water back on and test the flush.</li>
                      </ol>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div>
                  <h3 className="text-xl font-medium mb-3">Step 3: Adjust the Float</h3>
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1585058178215-33108215e3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                      alt="Toilet float adjustment" 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                      <p className="mb-4">
                        If the water level in your tank is too high, it will continuously flow into the overflow tube. You need to adjust the float to lower the water level.
                      </p>
                      <p className="mb-4"><strong>For a ball float:</strong></p>
                      <ol className="list-decimal pl-5 space-y-2 mb-4">
                        <li>Bend the float arm downward slightly to lower the water level.</li>
                        <li>If the arm is corroded or damaged, you may need to replace the entire assembly.</li>
                      </ol>
                      <p className="mb-4"><strong>For a cup float (on a column):</strong></p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Look for a adjustment clip or screw on the column.</li>
                        <li>Pinch the clip and slide the float down, or turn the screw to lower the float position.</li>
                        <li>The water level should be about 1 inch below the top of the overflow tube.</li>
                      </ol>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div>
                  <h3 className="text-xl font-medium mb-3">Step 4: Replace the Fill Valve (If Necessary)</h3>
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1581876832484-c6a6a1aee7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                      alt="Toilet fill valve replacement" 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                      <p className="mb-4">
                        If adjusting the flapper and float doesn't solve the problem, you may need to replace the fill valve.
                      </p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Turn off the water supply and flush the toilet to empty the tank.</li>
                        <li>Disconnect the water supply line from the fill valve.</li>
                        <li>Remove the locknut securing the fill valve to the bottom of the tank.</li>
                        <li>Remove the old fill valve.</li>
                        <li>Install the new fill valve according to the manufacturer's instructions.</li>
                        <li>Reconnect the water supply line and turn the water back on.</li>
                        <li>Adjust the water level as needed.</li>
                      </ol>
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                        <div className="flex">
                          <AlertCircle className="h-5 w-5 text-yellow-400 mr-2" />
                          <div>
                            <p className="font-medium text-yellow-700">Important Note</p>
                            <p className="text-yellow-600">Different fill valves may have slightly different installation procedures. Always follow the specific instructions that come with your replacement part.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div>
                  <h3 className="text-xl font-medium mb-3">Step 5: Test Your Repair</h3>
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <div className="p-4">
                      <p className="mb-4">
                        After completing the repairs, it's important to test your toilet to ensure the problem is fixed:
                      </p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Replace the tank lid.</li>
                        <li>Flush the toilet and observe if it fills and stops properly.</li>
                        <li>Wait 10-15 minutes and check if the toilet is still running.</li>
                        <li>Listen for any hissing sounds that might indicate a slow leak.</li>
                      </ol>
                      <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-4">
                        <div className="flex">
                          <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                          <div>
                            <p className="font-medium text-green-700">Success!</p>
                            <p className="text-green-600">If your toilet fills and stops without any continuous running or hissing sounds, congratulations! You've successfully fixed your running toilet.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Troubleshooting */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Troubleshooting</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-4">If your toilet is still running after following these steps, consider these additional issues:</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Cracked overflow tube</p>
                      <p className="text-gray-600">If the overflow tube is cracked, it may need to be replaced, which typically requires replacing the entire flush valve assembly.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Mineral deposits</p>
                      <p className="text-gray-600">Hard water can cause mineral buildup that prevents components from sealing properly. Try cleaning parts with vinegar to remove deposits.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Flush handle problems</p>
                      <p className="text-gray-600">A corroded or improperly adjusted flush handle can keep the flapper from sealing. Check that the chain has proper slack.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* When to Call a Professional */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">When to Call a Professional</h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <p className="mb-2">Consider calling a professional plumber if:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>You've tried all the above steps and the toilet still runs</li>
                  <li>You notice cracks in the toilet tank or bowl</li>
                  <li>There's water leaking from the base of the toilet</li>
                  <li>You're uncomfortable working with plumbing fixtures</li>
                </ul>
              </div>
            </div>

            {/* Conclusion */}
            <div className="prose prose-lg max-w-none mb-8">
              <h2>Conclusion</h2>
              <p>
                Fixing a running toilet is a simple DIY project that can save you significant amounts of water and money. In most cases, the repair can be completed in 15 minutes or less with basic tools and inexpensive replacement parts.
              </p>
              <p>
                Regular maintenance of your toilet's internal components can prevent future issues. Consider checking your toilet's flapper and other mechanisms once a year to ensure everything is in good working order.
              </p>
            </div>

            {/* Engagement Section */}
            <div className="border-t border-gray-200 pt-6 mb-8">
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <Button variant="outline" className="flex items-center gap-2">
                    <ThumbsUp className="h-4 w-4" />
                    Helpful (56)
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Comment (14)
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="text-gray-600">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-600">
                    <Printer className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Comments (14)</h2>
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
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-3">Table of Contents</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-primary hover:underline">Introduction</a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-primary">What You'll Need</a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-primary">Step-by-Step Instructions</a>
                  <ul className="pl-4 mt-1 space-y-1">
                    <li>
                      <a href="#" className="text-gray-600 hover:text-primary text-sm">Step 1: Identify the Problem</a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-primary text-sm">Step 2: Check and Replace the Flapper</a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-primary text-sm">Step 3: Adjust the Float</a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-primary text-sm">Step 4: Replace the Fill Valve</a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-primary text-sm">Step 5: Test Your Repair</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-primary">Troubleshooting</a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-primary">When to Call a Professional</a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-primary">Conclusion</a>
                </li>
              </ul>
            </div>

            {/* Related Guides */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Related Guides</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "How to Unclog a Toilet Without a Plunger",
                    image: "https://images.unsplash.com/photo-1581876832484-c6a6a1aee7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    category: "Fix",
                    readTime: "5 min",
                    slug: "/howto/fix/unclog-toilet-without-plunger",
                  },
                  {
                    title: "Fixing a Leaky Toilet Base",
                    image: "https://images.unsplash.com/photo-1585058178215-33108215e3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                    category: "Fix",
                    readTime: "10 min",
                    slug: "/howto/fix/fix-leaky-toilet-base",
                  },
                  {
                    title: "How to Replace a Toilet Flapper",
                    image: "https://images.unsplash.com/photo-1564540586988-aa4e