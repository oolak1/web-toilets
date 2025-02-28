"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Search, Menu, User, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeaderProps {
  isLoggedIn?: boolean;
}

const Header = ({ isLoggedIn = false }: HeaderProps) => {
  return (
    <header className="w-full h-20 bg-white border-b border-gray-200 shadow-sm fixed top-0 left-0 z-50">
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Toilets.org
          </Link>
        </div>

        {/* Main Navigation - Desktop */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Product Reviews</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px]">
                    <div className="grid grid-cols-2 gap-3">
                      <Link
                        href="/product-reviews/smart-toilets"
                        className="block p-3 space-y-1 rounded-md hover:bg-slate-100"
                      >
                        <div className="font-medium">Smart Toilets</div>
                        <div className="text-sm text-gray-500">
                          Modern toilets with advanced features
                        </div>
                      </Link>
                      <Link
                        href="/product-reviews/eco-friendly"
                        className="block p-3 space-y-1 rounded-md hover:bg-slate-100"
                      >
                        <div className="font-medium">Eco-Friendly</div>
                        <div className="text-sm text-gray-500">
                          Water-saving and sustainable options
                        </div>
                      </Link>
                      <Link
                        href="/product-reviews/traditional"
                        className="block p-3 space-y-1 rounded-md hover:bg-slate-100"
                      >
                        <div className="font-medium">Traditional</div>
                        <div className="text-sm text-gray-500">
                          Classic designs and reliable performance
                        </div>
                      </Link>
                      <Link
                        href="/product-reviews/accessories"
                        className="block p-3 space-y-1 rounded-md hover:bg-slate-100"
                      >
                        <div className="font-medium">Accessories</div>
                        <div className="text-sm text-gray-500">
                          Seats, bidets, and other add-ons
                        </div>
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-3 mt-3">
                      <Link
                        href="/product-reviews/top-rated"
                        className="block p-3 space-y-1 rounded-md hover:bg-slate-100"
                      >
                        <div className="font-medium">Top Rated Toilets</div>
                        <div className="text-sm text-gray-500">
                          Highest rated products based on user reviews
                        </div>
                      </Link>
                      <Link
                        href="/product-reviews/comparisons"
                        className="block p-3 space-y-1 rounded-md hover:bg-slate-100"
                      >
                        <div className="font-medium">Product Comparisons</div>
                        <div className="text-sm text-gray-500">
                          Side-by-side comparisons of popular toilet models
                        </div>
                      </Link>
                      <Link
                        href="/product-reviews/user-reviews"
                        className="block p-3 space-y-1 rounded-md hover:bg-slate-100"
                      >
                        <div className="font-medium">User Reviews</div>
                        <div className="text-sm text-gray-500">
                          Authentic reviews from real customers
                        </div>
                      </Link>
                    </div>
                    <div className="bg-slate-100 p-3 rounded-md mt-2">
                      <Link
                        href="/product-reviews"
                        className="text-sm text-primary font-medium"
                      >
                        View all product reviews →
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Buying Guides</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[300px]">
                    <div className="grid gap-3">
                      <Link
                        href="/buying-guides/toilet-types"
                        className="block p-2 rounded-md hover:bg-slate-100"
                      >
                        Toilet Types Guide
                      </Link>
                      <Link
                        href="/buying-guides/features"
                        className="block p-2 rounded-md hover:bg-slate-100"
                      >
                        Features to Consider
                      </Link>
                      <Link
                        href="/buying-guides/brands"
                        className="block p-2 rounded-md hover:bg-slate-100"
                      >
                        Brand Comparison
                      </Link>
                      <Link
                        href="/buying-guides/budget"
                        className="block p-2 rounded-md hover:bg-slate-100"
                      >
                        Budget Planning
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Howto Guides</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[300px]">
                    <div className="grid gap-3">
                      <Link
                        href="/howto/install"
                        className="block p-2 rounded-md hover:bg-slate-100"
                      >
                        Installation Guides
                      </Link>
                      <Link
                        href="/howto/maintain"
                        className="block p-2 rounded-md hover:bg-slate-100"
                      >
                        Maintenance Tips
                      </Link>
                      <Link
                        href="/howto/fix"
                        className="block p-2 rounded-md hover:bg-slate-100"
                      >
                        Troubleshooting
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/services" className="block py-2 px-4">
                  Services
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/diy-projects" className="block py-2 px-4">
                  DIY Projects
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          {/* Search button */}
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>

          {/* Shopping cart */}
          <Button variant="ghost" size="icon" aria-label="Shopping cart">
            <ShoppingCart className="h-5 w-5" />
          </Button>

          {/* User account */}
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="rounded-full" size="icon">
                  <Avatar>
                    <AvatarImage
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=toilet-user"
                      alt="User avatar"
                    />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="/account/profile" className="w-full">
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/account/orders" className="w-full">
                    Orders
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/account/saved" className="w-full">
                    Saved Items
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/logout" className="w-full">
                    Logout
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login">
              <Button variant="outline" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Login
              </Button>
            </Link>
          )}

          {/* Mobile menu button - only visible on mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
