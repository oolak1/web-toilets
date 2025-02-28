import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Upload,
  Image as ImageIcon,
  Link as LinkIcon,
  Bold,
  Italic,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from "lucide-react";

const ContentEditPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [contentType, setContentType] = useState("article");
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "",
    tags: "",
    featuredImage: null,
    seoTitle: "",
    seoDescription: "",
    status: "draft",
  });

  // Mock function to fetch content data
  useEffect(() => {
    // In a real app, you would fetch the content from your API
    const fetchContent = async () => {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Mock data for demonstration
        const mockContent = {
          id: "1",
          title: "How to Fix a Running Toilet in 15 Minutes",
          slug: "how-to-fix-running-toilet-15-minutes",
          excerpt:
            "A quick guide to diagnosing and fixing a constantly running toilet to save water and reduce your utility bills.",
          content:
            "A running toilet is one of the most common bathroom problems and can waste hundreds of gallons of water per day if left unfixed. Fortunately, it's also one of the easiest plumbing issues to fix yourself, often requiring no special tools and just a few minutes of your time.\n\nThis guide will walk you through the process of diagnosing and fixing a running toilet, saving you both water and money on your utility bills.\n\n## What You'll Need\n\n- Adjustable wrench\n- Replacement flapper (if needed)\n- Replacement fill valve (if needed)\n- Towel or sponge\n- Bucket (optional)\n- Pliers (optional)\n\n## Step 1: Identify the Problem\n\nFirst, remove the toilet tank lid and set it aside carefully on a towel. Flush the toilet and observe what happens inside the tank. There are three common causes of a running toilet:\n\n- **Faulty flapper**: The flapper doesn't seal properly, allowing water to leak from the tank into the bowl.\n- **Improper float height**: If the float is set too high, water will continuously flow into the overflow tube.\n- **Defective fill valve**: The fill valve doesn't shut off completely, causing water to continuously flow into the tank.",
          category: "fix",
          tags: "toilet, running toilet, water leak, plumbing, DIY repair",
          featuredImage:
            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          seoTitle:
            "How to Fix a Running Toilet in 15 Minutes - Easy DIY Guide",
          seoDescription:
            "Learn how to quickly diagnose and fix a running toilet to save water and reduce your utility bills with this simple step-by-step guide.",
          status: "published",
          type: "howto",
          difficulty: "beginner",
          time: "15 minutes",
          tools:
            "Adjustable wrench, Replacement flapper, Towel or sponge, Bucket, Pliers",
          materials:
            "Replacement flapper (if needed), Replacement fill valve (if needed)",
        };

        setContentType(mockContent.type);
        setFormData({
          title: mockContent.title,
          slug: mockContent.slug,
          excerpt: mockContent.excerpt,
          content: mockContent.content,
          category: mockContent.category,
          tags: mockContent.tags,
          featuredImage: mockContent.featuredImage,
          seoTitle: mockContent.seoTitle,
          seoDescription: mockContent.seoDescription,
          status: mockContent.status,
        });
      } catch (error) {
        console.error("Error fetching content:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContent();
  }, [id]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    // Redirect to the content list page
    navigate("/admin");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
            onClick={() => navigate("/admin")}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Edit Content</h1>
          <div className="flex space-x-3">
            <Select value={contentType} onValueChange={setContentType} disabled>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Content Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="article">Article</SelectItem>
                <SelectItem value="howto">How-to Guide</SelectItem>
                <SelectItem value="guide">Buying Guide</SelectItem>
                <SelectItem value="diy">DIY Tutorial</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Content Details</CardTitle>
                  <CardDescription>
                    Edit the main information for your {contentType}.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      name="title"
                      placeholder={`Enter ${contentType} title`}
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="slug">Slug</Label>
                    <Input
                      id="slug"
                      name="slug"
                      placeholder="url-friendly-name"
                      value={formData.slug}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="excerpt">Excerpt/Summary</Label>
                    <Textarea
                      id="excerpt"
                      name="excerpt"
                      placeholder="Brief summary of the content"
                      value={formData.excerpt}
                      onChange={handleInputChange}
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="content">Content</Label>
                    <div className="border rounded-md">
                      <div className="flex items-center border-b p-2 gap-1">
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
                          <Bold className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
                          <Italic className="h-4 w-4" />
                        </Button>
                        <div className="h-4 w-px bg-gray-300 mx-1"></div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
                          <List className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
                          <ListOrdered className="h-4 w-4" />
                        </Button>
                        <div className="h-4 w-px bg-gray-300 mx-1"></div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
                          <AlignLeft className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
                          <AlignCenter className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
                          <AlignRight className="h-4 w-4" />
                        </Button>
                        <div className="h-4 w-px bg-gray-300 mx-1"></div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
                          <LinkIcon className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
                          <ImageIcon className="h-4 w-4" />
                        </Button>
                      </div>
                      <Textarea
                        id="content"
                        name="content"
                        placeholder={`Write your ${contentType} content here...`}
                        value={formData.content}
                        onChange={handleInputChange}
                        className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                        rows={15}
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>SEO Settings</CardTitle>
                  <CardDescription>
                    Optimize your content for search engines.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="seoTitle">SEO Title</Label>
                    <Input
                      id="seoTitle"
                      name="seoTitle"
                      placeholder="SEO optimized title (optional)"
                      value={formData.seoTitle}
                      onChange={handleInputChange}
                    />
                    <p className="text-xs text-gray-500">
                      If left empty, the content title will be used.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="seoDescription">Meta Description</Label>
                    <Textarea
                      id="seoDescription"
                      name="seoDescription"
                      placeholder="Brief description for search results"
                      value={formData.seoDescription}
                      onChange={handleInputChange}
                      rows={3}
                    />
                    <p className="text-xs text-gray-500">
                      Recommended length: 150-160 characters
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Column */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Publishing</CardTitle>
                  <CardDescription>
                    Configure publishing settings.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Select
                      value={formData.status}
                      onValueChange={(value) =>
                        handleSelectChange("status", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="published">Published</SelectItem>
                        <SelectItem value="scheduled">Scheduled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => navigate("/admin")}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    Update{" "}
                    {formData.status === "published"
                      ? "& Publish"
                      : formData.status === "scheduled"
                        ? "& Schedule"
                        : "as Draft"}
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Categories & Tags</CardTitle>
                  <CardDescription>Organize your content.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) =>
                        handleSelectChange("category", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {contentType === "article" && (
                          <>
                            <SelectItem value="technology">
                              Technology
                            </SelectItem>
                            <SelectItem value="sustainability">
                              Sustainability
                            </SelectItem>
                            <SelectItem value="design-trends">
                              Design Trends
                            </SelectItem>
                            <SelectItem value="industry-news">
                              Industry News
                            </SelectItem>
                          </>
                        )}
                        {contentType === "howto" && (
                          <>
                            <SelectItem value="fix">Fix</SelectItem>
                            <SelectItem value="install">Install</SelectItem>
                            <SelectItem value="maintain">Maintain</SelectItem>
                            <SelectItem value="upgrade">Upgrade</SelectItem>
                          </>
                        )}
                        {contentType === "guide" && (
                          <>
                            <SelectItem value="toilet-types">
                              Toilet Types
                            </SelectItem>
                            <SelectItem value="features">Features</SelectItem>
                            <SelectItem value="brands">Brands</SelectItem>
                            <SelectItem value="budget">Budget</SelectItem>
                          </>
                        )}
                        {contentType === "diy" && (
                          <>
                            <SelectItem value="repairs">Repairs</SelectItem>
                            <SelectItem value="installation">
                              Installation
                            </SelectItem>
                            <SelectItem value="upgrades">Upgrades</SelectItem>
                            <SelectItem value="maintenance">
                              Maintenance
                            </SelectItem>
                          </>
                        )}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tags">Tags</Label>
                    <Input
                      id="tags"
                      name="tags"
                      placeholder="Enter tags separated by commas"
                      value={formData.tags}
                      onChange={handleInputChange}
                    />
                    <p className="text-xs text-gray-500">
                      Example: toilet, bathroom, water-saving
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Featured Image</CardTitle>
                  <CardDescription>
                    Add a main image for your content.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {formData.featuredImage ? (
                    <div className="relative">
                      <img
                        src={formData.featuredImage as string}
                        alt="Featured image"
                        className="w-full h-40 object-cover rounded-md"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button variant="secondary" size="sm">
                          Change Image
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                      <ImageIcon className="h-8 w-8 text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600 mb-2">
                        Drag and drop an image here, or click to browse
                      </p>
                      <Button variant="outline" size="sm">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Image
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {contentType === "howto" && (
                <Card>
                  <CardHeader>
                    <CardTitle>How-to Specifics</CardTitle>
                    <CardDescription>
                      Additional details for how-to guides.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="difficulty">Difficulty Level</Label>
                      <Select defaultValue="beginner">
                        <SelectTrigger>
                          <SelectValue placeholder="Select difficulty" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner</SelectItem>
                          <SelectItem value="intermediate">
                            Intermediate
                          </SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time">Estimated Time</Label>
                      <div className="flex space-x-2">
                        <Input
                          type="number"
                          placeholder="15"
                          defaultValue="15"
                          className="w-20"
                        />
                        <Select defaultValue="minutes">
                          <SelectTrigger>
                            <SelectValue placeholder="Unit" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="minutes">Minutes</SelectItem>
                            <SelectItem value="hours">Hours</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Required Tools</Label>
                      <Textarea
                        placeholder="List tools needed for this guide"
                        rows={3}
                        defaultValue="Adjustable wrench, Replacement flapper, Towel or sponge, Bucket, Pliers"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Materials Needed</Label>
                      <Textarea
                        placeholder="List materials needed for this guide"
                        rows={3}
                        defaultValue="Replacement flapper (if needed), Replacement fill valve (if needed)"
                      />
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContentEditPage;
