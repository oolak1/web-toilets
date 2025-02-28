import React, { useState } from "react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
  Upload,
  Image,
  Search,
  Grid,
  List,
  Filter,
  X,
  MoreHorizontal,
  Trash2,
  Edit,
  Eye,
  Download,
  Link as LinkIcon,
} from "lucide-react";

const MediaLibraryPage = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMedia, setSelectedMedia] = useState<any | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  // Mock media items
  const mediaItems = [
    {
      id: "1",
      title: "Running Toilet",
      type: "image",
      url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      size: "1.2 MB",
      dimensions: "1920 x 1080",
      uploadedBy: "Admin",
      uploadDate: "2023-05-15",
      alt: "Close-up of a toilet tank with the lid removed",
      fileType: "image/jpeg",
    },
    {
      id: "2",
      title: "Modern Bathroom",
      type: "image",
      url: "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      size: "0.9 MB",
      dimensions: "1600 x 1200",
      uploadedBy: "Admin",
      uploadDate: "2023-04-22",
      alt: "Modern bathroom with white fixtures",
      fileType: "image/jpeg",
    },
    {
      id: "3",
      title: "Toilet Installation",
      type: "image",
      url: "https://images.unsplash.com/photo-1613214049841-028981a2eb71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      size: "1.5 MB",
      dimensions: "2000 x 1333",
      uploadedBy: "Admin",
      uploadDate: "2023-03-10",
      alt: "Plumber installing a new toilet",
      fileType: "image/jpeg",
    },
    {
      id: "4",
      title: "Toilet Unclogging",
      type: "image",
      url: "https://images.unsplash.com/photo-1581876832484-c6a6a1aee7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      size: "0.8 MB",
      dimensions: "1800 x 1200",
      uploadedBy: "Admin",
      uploadDate: "2023-02-28",
      alt: "Plunger next to a toilet",
      fileType: "image/jpeg",
    },
    {
      id: "5",
      title: "Smart Toilet",
      type: "image",
      url: "https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      size: "1.1 MB",
      dimensions: "1920 x 1080",
      uploadedBy: "Admin",
      uploadDate: "2023-01-15",
      alt: "Modern smart toilet with control panel",
      fileType: "image/jpeg",
    },
    {
      id: "6",
      title: "Toilet Maintenance",
      type: "image",
      url: "https://images.unsplash.com/photo-1585058178215-33108215e3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      size: "1.3 MB",
      dimensions: "2000 x 1333",
      uploadedBy: "Admin",
      uploadDate: "2022-12-05",
      alt: "Person cleaning a toilet",
      fileType: "image/jpeg",
    },
  ];

  // Filter media based on search query
  const filteredMedia = mediaItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const toggleItemSelection = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const clearSelection = () => {
    setSelectedItems([]);
  };

  const handleMediaClick = (media: any) => {
    setSelectedMedia(media);
    setIsDetailsOpen(true);
  };

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
              href="/admin"
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
            >
              Dashboard
            </a>
            <a
              href="/admin"
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
            >
              Content
            </a>
            <a
              href="/admin/media"
              className="flex items-center px-6 py-3 text-gray-700 bg-gray-100 hover:bg-gray-100"
            >
              Media
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
            >
              Users
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
            >
              Settings
            </a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="ml-64 flex-1 p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Media Library</h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-4 h-4 text-gray-400" />
                </div>
                <Input
                  type="search"
                  placeholder="Search media..."
                  className="pl-10 w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Upload className="mr-2 h-4 w-4" />
                    Upload
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Upload Media</DialogTitle>
                    <DialogDescription>
                      Upload images to your media library.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 flex flex-col items-center justify-center">
                    <Image className="h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-sm text-gray-600 mb-4 text-center">
                      Drag and drop files here, or click to browse
                    </p>
                    <Button variant="outline">
                      <Upload className="mr-2 h-4 w-4" />
                      Select Files
                    </Button>
                    <p className="text-xs text-gray-500 mt-4">
                      Supported formats: JPEG, PNG, GIF, WebP
                    </p>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button disabled>Upload</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <CardTitle>Media Files</CardTitle>
                  <span className="text-sm text-gray-500">
                    {filteredMedia.length} items
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  {selectedItems.length > 0 && (
                    <div className="flex items-center mr-4">
                      <span className="text-sm text-gray-500 mr-2">
                        {selectedItems.length} selected
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearSelection}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                  <div className="border rounded-md flex">
                    <Button
                      variant={viewMode === "grid" ? "subtle" : "ghost"}
                      size="sm"
                      className="rounded-r-none"
                      onClick={() => setViewMode("grid")}
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "subtle" : "ghost"}
                      size="sm"
                      className="rounded-l-none"
                      onClick={() => setViewMode("list")}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[130px]">
                      <SelectValue placeholder="Filter by type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All media</SelectItem>
                      <SelectItem value="image">Images</SelectItem>
                      <SelectItem value="document">Documents</SelectItem>
                      <SelectItem value="video">Videos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {viewMode === "grid" ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                  {filteredMedia.map((item) => (
                    <div
                      key={item.id}
                      className={`relative group cursor-pointer rounded-md overflow-hidden border ${selectedItems.includes(item.id) ? "ring-2 ring-primary" : ""}`}
                      onClick={() => handleMediaClick(item)}
                    >
                      <div className="aspect-square relative">
                        <img
                          src={item.url}
                          alt={item.alt}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-white"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="absolute top-2 left-2">
                          <Checkbox
                            checked={selectedItems.includes(item.id)}
                            onCheckedChange={() => toggleItemSelection(item.id)}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white/80"
                          />
                        </div>
                      </div>
                      <div className="p-2 bg-white">
                        <p className="text-sm font-medium truncate">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-500">
                          {item.dimensions}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 w-8">
                          <Checkbox
                            checked={
                              selectedItems.length === filteredMedia.length &&
                              filteredMedia.length > 0
                            }
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedItems(
                                  filteredMedia.map((item) => item.id),
                                );
                              } else {
                                setSelectedItems([]);
                              }
                            }}
                          />
                        </th>
                        <th className="px-4 py-3">File</th>
                        <th className="px-4 py-3">Title</th>
                        <th className="px-4 py-3">Dimensions</th>
                        <th className="px-4 py-3">Size</th>
                        <th className="px-4 py-3">Uploaded</th>
                        <th className="px-4 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredMedia.map((item) => (
                        <tr
                          key={item.id}
                          className="bg-white border-b hover:bg-gray-50"
                        >
                          <td className="px-4 py-3 w-8">
                            <Checkbox
                              checked={selectedItems.includes(item.id)}
                              onCheckedChange={() =>
                                toggleItemSelection(item.id)
                              }
                            />
                          </td>
                          <td className="px-4 py-3">
                            <div className="w-12 h-12 rounded overflow-hidden">
                              <img
                                src={item.url}
                                alt={item.alt}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </td>
                          <td className="px-4 py-3 font-medium">
                            {item.title}
                          </td>
                          <td className="px-4 py-3">{item.dimensions}</td>
                          <td className="px-4 py-3">{item.size}</td>
                          <td className="px-4 py-3">{item.uploadDate}</td>
                          <td className="px-4 py-3">
                            <div className="flex space-x-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleMediaClick(item)}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Edit className="h-4 w-4" />
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
              )}
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-6">
              <p className="text-sm text-gray-500">
                Showing {filteredMedia.length} of {mediaItems.length} items
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

          {/* Media Details Dialog */}
          <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>Media Details</DialogTitle>
              </DialogHeader>
              {selectedMedia && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
                    <img
                      src={selectedMedia.url}
                      alt={selectedMedia.alt}
                      className="max-w-full max-h-[400px] object-contain"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm text-gray-500">Title</Label>
                      <Input value={selectedMedia.title} className="mt-1" />
                    </div>
                    <div>
                      <Label className="text-sm text-gray-500">Alt Text</Label>
                      <Input value={selectedMedia.alt} className="mt-1" />
                    </div>
                    <div>
                      <Label className="text-sm text-gray-500">File URL</Label>
                      <div className="flex mt-1">
                        <Input
                          value={selectedMedia.url}
                          readOnly
                          className="rounded-r-none"
                        />
                        <Button variant="outline" className="rounded-l-none">
                          <LinkIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm text-gray-500">
                          Dimensions
                        </Label>
                        <p className="mt-1">{selectedMedia.dimensions}</p>
                      </div>
                      <div>
                        <Label className="text-sm text-gray-500">
                          File Size
                        </Label>
                        <p className="mt-1">{selectedMedia.size}</p>
                      </div>
                      <div>
                        <Label className="text-sm text-gray-500">
                          File Type
                        </Label>
                        <p className="mt-1">{selectedMedia.fileType}</p>
                      </div>
                      <div>
                        <Label className="text-sm text-gray-500">
                          Uploaded On
                        </Label>
                        <p className="mt-1">{selectedMedia.uploadDate}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <DialogFooter className="flex justify-between">
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </Button>
                </div>
                <Button onClick={() => setIsDetailsOpen(false)}>Close</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default MediaLibraryPage;
