import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import {
  PlusCircle,
  FileText,
  Image,
  BarChart,
  Users,
  Settings,
  Trash2,
  Edit,
  Eye,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("content");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContentType, setSelectedContentType] = useState("all");

  // Mock data for content items
  const contentItems = [
    {
      id: "1",
      title: "How to Fix a Running Toilet in 15 Minutes",
      type: "howto",
      category: "Fix",
      status: "published",
      author: "Admin",
      date: "2023-05-15",
      views: 1245,
    },
    {
      id: "2",
      title: "The Future of Smart Toilets: 2024 Trends and Beyond",
      type: "article",
      category: "Technology",
      status: "published",
      author: "Jennifer Chen",
      date: "2023-05-15",
      views: 2890,
    },
    {
      id: "3",
      title: "Complete Guide to Toilet Types: One-Piece vs. Two-Piece",
      type: "guide",
      category: "Buying Guide",
      status: "published",
      author: "Admin",
      date: "2023-04-22",
      views: 1567,
    },
    {
      id: "4",
      title: "Installing a Bidet Attachment: DIY Guide",
      type: "diy",
      category: "Upgrade",
      status: "draft",
      author: "Admin",
      date: "2023-06-01",
      views: 0,
    },
    {
      id: "5",
      title:
        "Water Conservation: How Modern Toilets Are Saving Billions of Gallons",
      type: "article",
      category: "Sustainability",
      status: "published",
      author: "Michael Rodriguez",
      date: "2023-04-22",
      views: 1876,
    },
  ];

  // Filter content based on search query and content type
  const filteredContent = contentItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType =
      selectedContentType === "all" || item.type === selectedContentType;

    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-sm h-screen fixed border-r border-gray-200">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-primary">Toilets.org</h2>
            <p className="text-sm text-gray-500">Content Management System</p>
          </div>
          <nav className="mt-6">
            <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase">
              Main
            </div>
            <a
              href="#"
              className="flex items-center px-6 py-3 text-gray-700 bg-gray-100 hover:bg-gray-100"
            >
              <BarChart className="w-5 h-5 mr-3" />
              Dashboard
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
            >
              <FileText className="w-5 h-5 mr-3" />
              Content
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
            >
              <Image className="w-5 h-5 mr-3" />
              Media
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
            >
              <Users className="w-5 h-5 mr-3" />
              Users
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
            >
              <Settings className="w-5 h-5 mr-3" />
              Settings
            </a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="ml-64 flex-1 p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-4 h-4 text-gray-400" />
                </div>
                <Input
                  type="search"
                  placeholder="Search content..."
                  className="pl-10 w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Link to="/admin/create">
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Create New
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Total Content
                    </p>
                    <p className="text-3xl font-bold">126</p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-full">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Total Views
                    </p>
                    <p className="text-3xl font-bold">45.2K</p>
                  </div>
                  <div className="p-3 bg-green-100 rounded-full">
                    <Eye className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Media Files
                    </p>
                    <p className="text-3xl font-bold">284</p>
                  </div>
                  <div className="p-3 bg-purple-100 rounded-full">
                    <Image className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Users</p>
                    <p className="text-3xl font-bold">12</p>
                  </div>
                  <div className="p-3 bg-amber-100 rounded-full">
                    <Users className="w-6 h-6 text-amber-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Content Management */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Content Management</CardTitle>
                <Select
                  value={selectedContentType}
                  onValueChange={setSelectedContentType}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All Content Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Content Types</SelectItem>
                    <SelectItem value="article">Articles</SelectItem>
                    <SelectItem value="howto">How-to Guides</SelectItem>
                    <SelectItem value="guide">Buying Guides</SelectItem>
                    <SelectItem value="diy">DIY Tutorials</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <CardDescription>
                Manage all your content in one place. Create, edit, and publish
                content to your website.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th className="px-6 py-3">Title</th>
                      <th className="px-6 py-3">Type</th>
                      <th className="px-6 py-3">Category</th>
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3">Author</th>
                      <th className="px-6 py-3">Date</th>
                      <th className="px-6 py-3">Views</th>
                      <th className="px-6 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredContent.map((item) => (
                      <tr
                        key={item.id}
                        className="bg-white border-b hover:bg-gray-50"
                      >
                        <td className="px-6 py-4 font-medium text-gray-900">
                          {item.title}
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 text-xs font-semibold rounded-full">
                            {item.type === "article" && (
                              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                Article
                              </span>
                            )}
                            {item.type === "howto" && (
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                How-to
                              </span>
                            )}
                            {item.type === "guide" && (
                              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                                Guide
                              </span>
                            )}
                            {item.type === "diy" && (
                              <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                                DIY
                              </span>
                            )}
                          </span>
                        </td>
                        <td className="px-6 py-4">{item.category}</td>
                        <td className="px-6 py-4">
                          {item.status === "published" ? (
                            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                              Published
                            </span>
                          ) : (
                            <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                              Draft
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4">{item.author}</td>
                        <td className="px-6 py-4">{item.date}</td>
                        <td className="px-6 py-4">
                          {item.views.toLocaleString()}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4 text-red-500" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <p className="text-sm text-gray-500">
                Showing {filteredContent.length} of {contentItems.length} items
              </p>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
