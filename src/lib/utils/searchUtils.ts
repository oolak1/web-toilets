import { SearchFilters } from "@/components/SearchBar";

// Mock data for guides, products, services, and DIY tutorials
const mockData = {
  guides: [
    {
      id: "g1",
      title: "How to Fix a Running Toilet",
      description:
        "Learn the step-by-step process to diagnose and fix a constantly running toilet to save water and reduce your utility bills.",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Repairs",
      readTime: "8 min",
      difficulty: "Beginner",
      slug: "fix-running-toilet",
      type: "guide",
      date: "2023-09-15",
    },
    {
      id: "g2",
      title: "Choosing the Right Toilet for Your Bathroom",
      description:
        "A comprehensive guide to selecting the perfect toilet based on size, style, efficiency, and special features for your bathroom renovation.",
      image:
        "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Buying Guide",
      readTime: "12 min",
      difficulty: "Intermediate",
      slug: "choosing-right-toilet",
      type: "guide",
      date: "2023-08-22",
    },
    {
      id: "g3",
      title: "Water-Saving Toilet Modifications",
      description:
        "Discover simple modifications and upgrades that can transform your existing toilet into a water-efficient fixture without replacing it entirely.",
      image:
        "https://images.unsplash.com/photo-1613214049841-028981a2eb71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Eco-Friendly",
      readTime: "10 min",
      difficulty: "Intermediate",
      slug: "water-saving-modifications",
      type: "guide",
      date: "2023-07-15",
    },
    {
      id: "g4",
      title: "Smart Toilets: Are They Worth the Investment?",
      description:
        "Explore the features, benefits, and costs of smart toilets to determine if the advanced technology justifies the higher price point for your bathroom upgrade.",
      image:
        "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Features",
      readTime: "12 min",
      difficulty: "Intermediate",
      slug: "smart-toilets-worth-investment",
      type: "guide",
      date: "2023-08-22",
    },
  ],
  products: [
    {
      id: "p1",
      title: "Smart Toilet Pro X1",
      description:
        "Advanced smart toilet with heated seat, bidet, and automatic flush",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Smart Toilets",
      slug: "smart-toilet-pro-x1",
      type: "product",
      date: "2023-10-01",
    },
    {
      id: "p2",
      title: "EcoFlush Water Saver",
      description: "Eco-friendly toilet that reduces water usage by up to 40%",
      image:
        "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Eco-Friendly",
      slug: "ecoflush-water-saver",
      type: "product",
      date: "2023-09-15",
    },
  ],
  services: [
    {
      id: "s1",
      title: "Reliable Plumbing Co.",
      description:
        "Professional plumbing services specializing in toilet installation and repair.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=plumbing1",
      category: "Plumber",
      slug: "reliable-plumbing-co-new-york-ny",
      type: "service",
      date: "2023-08-10",
    },
    {
      id: "s2",
      title: "Expert Bathroom Solutions",
      description:
        "Full-service bathroom remodeling contractor with expertise in modern toilet installations.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=bathroom2",
      category: "Contractor",
      slug: "expert-bathroom-solutions-los-angeles-ca",
      type: "service",
      date: "2023-07-22",
    },
  ],
  diy: [
    {
      id: "d1",
      title: "How to Unclog a Toilet Without a Plunger",
      description:
        "Emergency solutions for unclogging your toilet when you don't have a plunger handy, using common household items.",
      image:
        "https://images.unsplash.com/photo-1581876832484-c6a6a1aee7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Emergency",
      readTime: "5 min",
      difficulty: "Beginner",
      slug: "unclog-without-plunger",
      type: "diy",
      date: "2023-10-05",
    },
    {
      id: "d2",
      title: "Replace a Toilet Seat",
      description:
        "A simple guide to removing your old toilet seat and installing a new one for improved comfort and appearance.",
      image:
        "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Installation",
      readTime: "15 min",
      difficulty: "Beginner",
      slug: "replace-toilet-seat",
      type: "diy",
      date: "2023-08-22",
    },
  ],
};

// Function to search across all content types
export const searchContent = (query: string, filters: SearchFilters) => {
  // Normalize the query
  const normalizedQuery = query.toLowerCase().trim();

  if (!normalizedQuery) return [];

  // Get all content based on selected content types
  let allContent: any[] = [];

  if (filters.contentType.includes("guide")) {
    allContent = [...allContent, ...mockData.guides];
  }

  if (filters.contentType.includes("product")) {
    allContent = [...allContent, ...mockData.products];
  }

  if (filters.contentType.includes("service")) {
    allContent = [...allContent, ...mockData.services];
  }

  if (filters.contentType.includes("diy")) {
    allContent = [...allContent, ...mockData.diy];
  }

  // Filter by search query
  let results = allContent.filter((item) => {
    return (
      item.title.toLowerCase().includes(normalizedQuery) ||
      item.description.toLowerCase().includes(normalizedQuery) ||
      item.category.toLowerCase().includes(normalizedQuery)
    );
  });

  // Apply difficulty filter if specified
  if (filters.difficulty && filters.difficulty.length > 0) {
    results = results.filter((item) => {
      // Only apply to items that have a difficulty property
      if (!item.difficulty) return false;
      return filters.difficulty.includes(item.difficulty.toLowerCase());
    });
  }

  // Apply read time filter if specified
  if (filters.readTime) {
    results = results.filter((item) => {
      // Only apply to items that have a readTime property
      if (!item.readTime) return false;

      const minutes = parseInt(item.readTime);
      if (isNaN(minutes)) return false;

      switch (filters.readTime) {
        case "short":
          return minutes < 5;
        case "medium":
          return minutes >= 5 && minutes <= 10;
        case "long":
          return minutes > 10;
        default:
          return true;
      }
    });
  }

  // Apply sorting
  if (filters.sortBy) {
    switch (filters.sortBy) {
      case "newest":
        results.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        );
        break;
      case "oldest":
        results.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
        );
        break;
      case "a-z":
        results.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "z-a":
        results.sort((a, b) => b.title.localeCompare(a.title));
        break;
      // For 'relevance', we keep the default order which prioritizes matches in title
      default:
        break;
    }
  }

  return results;
};
