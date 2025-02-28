import { MetadataRoute } from "next";
import {
  getBusinessListings,
  getAllCities,
  getAllStates,
} from "@/lib/utils/businessData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://toilets.org"; // Replace with your actual domain

  // Get all businesses, cities, and states
  const businesses = getBusinessListings();
  const cities = getAllCities();
  const states = getAllStates();

  // Base routes
  const routes = [
    "",
    "/products",
    "/reviews",
    "/guides",
    "/services",
    "/diy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Business detail pages
  const businessPages = businesses.map((business) => ({
    url: `${baseUrl}/services/business/${business.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // State pages
  const statePages = states.map((state) => ({
    url: `${baseUrl}/services/${state.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // City pages
  const cityPages = cities.map((city) => {
    // In a real app, you would get the state from your data
    // For this example, we're using a placeholder
    const state = "ny"; // This would be dynamically determined

    return {
      url: `${baseUrl}/services/${state}/${city}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    };
  });

  return [...routes, ...businessPages, ...statePages, ...cityPages];
}
