import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, UserPlus, MoreHorizontal, Trash2, Edit, Mail, Shield, User } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const UsersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);

  // Mock user data
  const users = [
    {
      id: "1",
      name: "Admin User",
      email: "admin@toilets.org",
      role: "administrator",
      status: "active",
      lastLogin: "2023-05-15 10:30 AM",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=admin",
    },
    {
      id: "2",
      name: "Jennifer Chen",
      email: "jennifer@toilets.org",
      role: "editor",
      status: "active",
      lastLogin: "2023-05-14 3:45 PM",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jennifer",
    },
    {
      id: "3",
      name: "Michael Rodriguez",
      email: "michael@toilets.org",
      role: "author",
      status: "active",
      lastLogin: "2023-05-12 9:15 AM",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    },
    {
      id: "4",
      name: "Sarah Johnson",
      email: "sarah@toilets.org",
      role: "contributor",
      status: "inactive",
      lastLogin: "2023-04-30 11:20 AM",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
    {
      id: "5",
      name: "David Kim",
      email: "david@toilets.org",
      role: "editor",
      status: "active",
      lastLogin: "2023-05-10 2:10 PM",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
    },
  ];

  // Filter users based on search query
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase">Main</div>
            <a href="/admin" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
              Dashboard
            </a>
            <a href="/admin" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
              Content
            </a>
            <a href="/admin/media" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
              Media
            </a>
            <a href="/admin/users" className="flex items-center px-6 py-3 text-gray-700 bg-gray-100 hover:bg-gray-100">
              Users
            </a>
            <a href="#" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
              Settings
            </a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="ml-64 flex-1 p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">User Management</h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-4 h-4 text-gray-400" />
                </div>
                <Input 
                  type="search" 
                  placeholder="Search users..." 
                  className="pl-10 w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <UserPlus className="mr-2 h-4 w-4" />
                    Add User
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New User</DialogTitle>
                    <DialogDescription>
                      Create a new user account with specific permissions.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input id="name" placeholder="Full name" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="email" className="text-right">
                        Email
                      </Label>
                      <Input id="email" type="email" placeholder="email@example.com" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="password" className="text-right">
                        Password
                      </Label>
                      <Input id="password" type="password" placeholder="••••••••" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="role" className="text-right">
                        Role
                      </Label>
                      <Select defaultValue="contributor">
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="administrator">Administrator</SelectItem>
                          <SelectItem value="editor">Editor</SelectItem>
                          <SelectItem value="author">Author</SelectItem>
                          <SelectItem value="contributor">Contributor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <div className="text-right">
                        <Label>Status</Label>
                      </div>
                      <div className="flex items-center space-x-2 col-span-3">
                        <Checkbox id="active" defaultChecked />
                        <Label htmlFor="active">Active</Label>
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsAddUserOpen(false)}>Cancel</Button>
                    <Button onClick={() => setIsAddUserOpen(false)}>Add User</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Users</CardTitle>
              <CardDescription>
                Manage user accounts and permissions for your website.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th className="px-6 py-3">User</th>
                      <th className="px-6 py-3">Email</th>
                      <th className="px-6 py-3">Role</th>
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3">Last Login</th>
                      <th className="px-6 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((user) => (
                      <tr key={user.id} className="bg-white border-b hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                              <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                            </div>
                            <span className="font-medium">{user.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">{user.email}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            {user.role === "administrator" && (
                              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center">
                                <Shield className="h-3 w-3 mr-1" />
                                Administrator
                              </span>
                            )}
                            {user.role === "editor" && (
                              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                                Editor
                              </span>
                            )}
                            {user.role === "author" && (
                              <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                                Author
                              </span>
                            )}
                            {user.role === "contributor" && (
                              <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                                Contributor
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          {user.status === "active" ? (
                            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                              Active
                            </span>
                          ) : (
                            <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                              Inactive
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4">{user.lastLogin}</td>
                        <td className="px-6 py-4">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Mail className="h-4 w-4 mr-2" />
                                Email
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <p className="text-sm text-gray-500">Showing {filteredUsers.length} of {users.length} users</p>
              <div className="flex