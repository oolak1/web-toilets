import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Clock, Wrench, Search, Filter, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";

const guideCategories = [
  {
    id: "installation",
    name: "Installation Guides",
    description: "Step-by-step instructions for installing different types of toilets",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: 12,
  },
  {
    id: "maintenance",
    name: "Maintenance Tips",
    description: "Regular maintenance advice to keep your toilet in top condition",
    image: "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: 18,
  },
  {
    id: "troubleshooting",
    name: "Troubleshooting",
    description: "Solutions for common toilet problems and issues",
    image: "https://images.unsplash.com/photo-1585058178215-33108215e3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: 24,
  },
  {
    id: "buying",
    name: "Buying Guides",
    description: "How to choose the right toilet for your needs and budget",
    image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    count: 9,
  },
];

const popularGuides = [
  {
    id: "1",
    title: "How to Fix a Running Toilet",
    description: "Learn the step-by-step process to diagnose and fix a constantly running toilet to save water and reduce your utility bills.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Repairs",
    readTime: "8 min",
    difficulty: "Beginner",
    slug: "fix-running-toilet",
  },
  {
    id: "2",
    title: "Choosing the Right Toilet for Your Bathroom",
    description: "A comprehensive guide to selecting the perfect toilet based on size, style, efficiency, and special features for your bathroom renovation.",
    image: "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Buying Guide",
    readTime: "12 min",
    difficulty: "Intermediate",
    slug: "choosing-right-toilet",
  },
  {
    id: "3",
    title: "Water-Saving Toilet Modifications",
    description: "Discover simple modifications and upgrades that can transform your existing toilet into a water-efficient fixture without replacing it entirely.",
    image: "https://images.unsplash.com/photo-1613214049841-028981a2eb71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Eco-Friendly",
    readTime: "10 min",
    difficulty: "Intermediate",
    slug: "water-saving-modifications",
  },
  {
    id: "4",
    title: "How to Unclog a Toilet Without a Plunger",
    description: "Emergency solutions for unclogging your toilet when you don't have a plunger handy, using common household items and techniques.",
    image: "https://images.unsplash.com/photo-1581876832484-c6a6a1aee7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Emergency",
    readTime: "5 min",
    difficulty: "Beginner",
    slug: "unclog-without-plunger",
  },
  {
    id: "5",
    title: "Smart Toilet Installation Guide",
    description: "Complete instructions for installing a modern smart toilet, including electrical connections and programming the features.",
    image: "https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Installation",
    readTime: "15 min",
    difficulty: "Advanced",
    slug: "smart-toilet-installation",
  },
  {
    id: "6",
    title: "Toilet Flapper Replacement",
    description: "A simple guide to replacing your toilet's flapper valve, one of the most common causes of toilet leaks and running water.",
    image: "https://images.unsplash.com/photo-1585058178215-33108215e3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Maintenance",
    readTime: "6 min",
    difficulty: "Beg