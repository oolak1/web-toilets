import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Printer,
  ThumbsUp,
  MessageSquare,
  User,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
} from "lucide-react";

const articles = {
  "future-smart-toilets-2024": {
    title: "The Future of Smart Toilets: 2024 Trends and Beyond",
    description:
      "Explore the latest innovations in smart toilet technology and how they're transforming bathroom experiences with AI, health monitoring, and sustainability features.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Technology",
    readTime: "8 min",
    date: "May 15, 2024",
    author: "Jennifer Chen",
    authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=jennifer",
    content: `
      <h2>The Evolution of Smart Toilets</h2>
      <p>Smart toilets have come a long way since their introduction to the market. What was once considered a luxury item with basic features like heated seats and automatic flushing has evolved into sophisticated health monitoring systems that can analyze waste, track vital health metrics, and even communicate with your smartphone.</p>
      
      <p>In 2024, we're seeing a convergence of technologies that are transforming the humble toilet into a central health hub in the modern home. From AI-powered analysis to sustainable water usage, let's explore the key trends shaping the future of smart toilets.</p>
      
      <h2>Health Monitoring: The Toilet as a Medical Device</h2>
      <p>Perhaps the most significant advancement in smart toilet technology is the integration of health monitoring capabilities. Leading manufacturers are now incorporating sensors that can analyze urine and stool samples to detect early signs of health issues such as:</p>
      
      <ul>
        <li>Diabetes and blood sugar irregularities</li>
        <li>Urinary tract infections</li>
        <li>Kidney function abnormalities</li>
        <li>Digestive disorders</li>
        <li>Nutritional deficiencies</li>
        <li>Hydration levels</li>
      </ul>
      
      <p>These toilets use a combination of spectroscopic analysis, chemical sensors, and image recognition to provide users with insights about their health without requiring any additional effort beyond normal bathroom use. The data is securely transmitted to a smartphone app, where users can track trends over time and share information with healthcare providers if desired.</p>
      
      <h2>AI and Personalization</h2>
      <p>Artificial intelligence is playing an increasingly important role in smart toilet functionality. AI algorithms can:</p>
      
      <ul>
        <li>Learn user preferences for seat temperature, water pressure, and ambient lighting</li>
        <li>Recognize individual users through sensors or smartphone proximity</li>
        <li>Adjust settings automatically based on time of day or user identity</li>
        <li>Analyze health data to identify patterns and potential concerns</li>
        <li>Provide personalized recommendations for hydration, nutrition, or medical follow-up</li>
      </ul>
      
      <p>Some premium models now feature voice assistants integrated directly into the toilet, allowing for hands-free control and the ability to ask questions about toilet functions or even health insights.</p>
      
      <h2>Sustainability Features</h2>
      <p>As water conservation becomes increasingly important, smart toilet manufacturers are implementing advanced features to reduce environmental impact:</p>
      
      <ul>
        <li>Dynamic flushing systems that adjust water usage based on actual need</li>
        <li>Greywater recycling that uses sink or shower water for flushing</li>
        <li>Leak detection and automatic shut-off to prevent water waste</li>
        <li>Energy-efficient heating and drying systems</li>
        <li>Biodegradable cleaning solutions dispensed automatically in precise amounts</li>
      </ul>
      
      <p>Some cutting-edge models are even incorporating solar panels or kinetic energy recovery systems to reduce electricity consumption, making them nearly self-sufficient in terms of energy usage.</p>
      
      <h2>Enhanced Comfort and Hygiene</h2>
      <p>Beyond health monitoring and sustainability, comfort and hygiene remain key focus areas for smart toilet innovation:</p>
      
      <ul>
        <li>UV sterilization systems that automatically disinfect surfaces</li>
        <li>Advanced bidet functions with precision water temperature and pressure control</li>
        <li>Warm air drying with adjustable temperature settings</li>
        <li>Automatic deodorization systems using activated carbon or catalytic converters</li>
        <li>Self-cleaning nozzles and bowls that use electrolyzed water for chemical-free sanitization</li>
        <li>Fog-resistant mirrors and ambient lighting for improved user experience</li>
      </ul>
      
      <p>Many new models also feature touchless operation through motion sensors, voice commands, or smartphone control, minimizing contact with surfaces and reducing the spread of germs.</p>
      
      <h2>Connectivity and Smart Home Integration</h2>
      <p>As part of the broader smart home ecosystem, toilets are becoming more connected than ever:</p>
      
      <ul>
        <li>Integration with smart home systems like Google Home, Amazon Alexa, and Apple HomeKit</li>
        <li>Synchronization with health apps and fitness trackers</li>
        <li>Remote diagnostics and maintenance alerts</li>
        <li>Over-the-air updates to add new features and improve performance</li>
        <li>Emergency alerts for potential health issues or water leaks</li>
      </ul>
      
      <p>This connectivity allows for seamless integration with other aspects of home automation and health monitoring, creating a more cohesive user experience.</p>
      
      <h2>Challenges and Considerations</h2>
      <p>Despite the exciting advancements in smart toilet technology, several challenges remain:</p>
      
      <ul>
        <li><strong>Privacy concerns:</strong> The collection of sensitive health data raises important questions about data security and privacy</li>
        <li><strong>Cost barriers:</strong> High-end smart toilets can cost several thousand dollars, limiting accessibility</li>
        <li><strong>Reliability:</strong> More complex systems mean more potential points of failure</li>
        <li><strong>Regulatory approval:</strong> Health monitoring features may require FDA or similar approvals in some regions</li>
        <li><strong>User adoption:</strong> Some consumers remain skeptical about the necessity of smart bathroom fixtures</li>
      </ul>
      
      <p>Manufacturers are addressing these challenges through improved security protocols, modular designs that allow for gradual upgrades, and more affordable entry-level options with basic smart features.</p>
      
      <h2>The Future Outlook</h2>
      <p>Looking beyond 2024, we can expect to see continued innovation in smart toilet technology:</p>
      
      <ul>
        <li>More sophisticated health monitoring capabilities, potentially including early cancer detection</li>
        <li>Integration with telehealth services for immediate consultation based on detected health issues</li>
        <li>Advanced materials that resist bacteria and staining without chemicals</li>
        <li>Further reductions in water usage while maintaining or improving performance</li>
        <li>Decreasing costs as technology becomes more mainstream</li>
      </ul>
      
      <p>As these technologies mature and become more affordable, smart toilets are likely to transition from luxury items to standard fixtures in new construction and renovations, much as smartphones evolved from luxury devices to everyday necessities.</p>
      
      <h2>Conclusion</h2>
      <p>The smart toilet revolution represents a fascinating intersection of health technology, sustainability, and comfort. While the idea of a toilet that monitors your health might have seemed far-fetched just a few years ago, it's quickly becoming reality.</p>
      
      <p>For consumers considering a bathroom upgrade, the growing range of options at various price points makes it easier than ever to find a smart toilet that matches both needs and budget. Whether you're primarily interested in health insights, water conservation, or simply enhanced comfort, the latest generation of smart toilets offers compelling benefits that extend far beyond novelty.</p>
      
      <p>As we move forward, the humble toilet—a fixture that has remained relatively unchanged for decades—is finally getting its technological due, transforming from a simple necessity into a sophisticated health and wellness device that could play a significant role in preventative healthcare and sustainable living.</p>
    `,
    relatedArticles: [
      "water-conservation-modern-toilets",
      "rise-bidet-toilets-north-america",
      "toilet-manufacturing-behind-scenes",
    ],
  },
  "water-conservation-modern-toilets": {
    title:
      "Water Conservation: How Modern Toilets Are Saving Billions of Gallons",
    description:
      "An in-depth look at how advancements in toilet efficiency have dramatically reduced water usage while maintaining or improving performance.",
    image:
      "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Sustainability",
    readTime: "10 min",
    date: "April 22, 2024",
    author: "Michael Rodriguez",
    authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    content: `<p>This article explores how modern toilet technology is dramatically reducing water consumption...</p>`,
    relatedArticles: [
      "future-smart-toilets-2024",
      "global-toilet-standards-comparison",
      "bathroom-design-trends-2024",
    ],
  },
};

const ArticleDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article =
    slug && articles[slug]
      ? articles[slug]
      : articles["future-smart-toilets-2024"];

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <Link to="/articles">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Articles
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="relative h-64 md:h-80 overflow-hidden rounded-xl mb-8">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end">
            <div className="p-6 md:p-8 w-full">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                  {article.category}
                </span>
                <span className="text-white/80 text-sm flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {article.readTime} read
                </span>
                <span className="text-white/80 text-sm flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {article.date}
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
                {article.title}
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
                  src={article.authorImage}
                  alt={article.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium">{article.author}</p>
                <p className="text-sm text-gray-500">
                  Published on {article.date}
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

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-8">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>

            {/* Tags */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Smart Toilets",
                  "Bathroom Technology",
                  "Health Monitoring",
                  "Water Conservation",
                  "Home Innovation",
                ].map((tag) => (
                  <Link
                    key={tag}
                    to={`/articles/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Share Section */}
            <div className="border-t border-b border-gray-200 py-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">Share This Article</h3>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Facebook className="h-5 w-5 text-blue-600" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Twitter className="h-5 w-5 text-blue-400" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5 text-blue-700" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Mail className="h-5 w-5 text-red-500" />
                </Button>
              </div>
            </div>

            {/* Author Bio */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="flex items-start">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  <img
                    src={article.authorImage}
                    alt={article.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    About the Author
                  </h3>
                  <h4 className="font-medium">{article.author}</h4>
                  <p className="text-gray-600 mt-2">
                    {article.author} is a bathroom technology specialist with
                    over 10 years of experience in the plumbing and fixture
                    industry. They have written extensively about emerging
                    trends in bathroom technology and water conservation.
                  </p>
                  <Button variant="outline" size="sm" className="mt-3 gap-1">
                    <User className="h-4 w-4" />
                    View Profile
                  </Button>
                </div>
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
                    Helpful (42)
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
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Related Articles */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Related Articles</h3>
              <div className="space-y-4">
                {article.relatedArticles.map((relatedSlug) => {
                  const relatedArticle = articles[relatedSlug];
                  if (!relatedArticle) return null;
                  return (
                    <Link key={relatedSlug} to={`/articles/${relatedSlug}`}>
                      <div className="flex group hover:bg-gray-50 p-2 rounded-lg transition-colors">
                        <div className="w-24 h-24 flex-shrink-0 rounded-md overflow-hidden">
                          <img
                            src={relatedArticle.image}
                            alt={relatedArticle.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                            {relatedArticle.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {relatedArticle.readTime}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {relatedArticle.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Google AdSense - Sidebar Ad */}
            <div className="w-full h-60 bg-gray-100 flex items-center justify-center mb-6 rounded-md">
              <p className="text-gray-500">Advertisement</p>
            </div>

            {/* Popular Categories */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Popular Categories</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Technology",
                  "Sustainability",
                  "Design Trends",
                  "Industry News",
                  "Water Conservation",
                  "Smart Homes",
                  "Bathroom Renovation",
                ].map((category) => (
                  <Link
                    key={category}
                    to={`/articles/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-sm text-gray-600 mb-4">
                Subscribe to our newsletter for the latest articles, guides, and
                industry insights.
              </p>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                <Button className="w-full">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
