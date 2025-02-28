export interface BusinessListing {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  specialty: string[];
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  website?: string;
  email?: string;
  description: string;
  services: string[];
  hours?: {
    monday?: string;
    tuesday?: string;
    wednesday?: string;
    thursday?: string;
    friday?: string;
    saturday?: string;
    sunday?: string;
  };
  images: {
    profile: string;
    gallery?: string[];
  };
  location: {
    lat: number;
    lng: number;
  };
  slug: string;
}

// This is a placeholder for the actual data that would be imported from a JSON file
// In a real application, this would be loaded from a JSON file generated from the CSV data
export const getBusinessListings = (): BusinessListing[] => {
  // This would be replaced with actual data loading
  return [
    {
      id: "1",
      name: "Reliable Plumbing Co.",
      category: "Plumber",
      rating: 4.8,
      reviewCount: 124,
      specialty: [
        "Toilet Installation",
        "Toilet Repair",
        "Bathroom Remodeling",
      ],
      address: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
      phone: "(555) 123-4567",
      website: "https://example.com",
      email: "info@reliableplumbing.com",
      description:
        "Professional plumbing services specializing in toilet installation and repair.",
      services: [
        "Toilet Installation",
        "Toilet Repair",
        "Leak Detection",
        "Pipe Replacement",
      ],
      hours: {
        monday: "8:00 AM - 5:00 PM",
        tuesday: "8:00 AM - 5:00 PM",
        wednesday: "8:00 AM - 5:00 PM",
        thursday: "8:00 AM - 5:00 PM",
        friday: "8:00 AM - 5:00 PM",
        saturday: "9:00 AM - 2:00 PM",
        sunday: "Closed",
      },
      images: {
        profile: "https://api.dicebear.com/7.x/avataaars/svg?seed=plumbing1",
        gallery: [
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        ],
      },
      location: {
        lat: 40.7128,
        lng: -74.006,
      },
      slug: "reliable-plumbing-co-new-york-ny",
    },
    {
      id: "2",
      name: "Expert Bathroom Solutions",
      category: "Contractor",
      rating: 4.6,
      reviewCount: 98,
      specialty: [
        "Bathroom Remodeling",
        "Toilet Installation",
        "Custom Bathrooms",
      ],
      address: "456 Oak Ave",
      city: "Los Angeles",
      state: "CA",
      zip: "90001",
      phone: "(555) 987-6543",
      website: "https://example.com",
      email: "contact@expertbathroom.com",
      description:
        "Full-service bathroom remodeling contractor with expertise in modern toilet installations.",
      services: [
        "Bathroom Remodeling",
        "Toilet Installation",
        "Tile Work",
        "Plumbing",
      ],
      hours: {
        monday: "7:00 AM - 6:00 PM",
        tuesday: "7:00 AM - 6:00 PM",
        wednesday: "7:00 AM - 6:00 PM",
        thursday: "7:00 AM - 6:00 PM",
        friday: "7:00 AM - 6:00 PM",
        saturday: "8:00 AM - 3:00 PM",
        sunday: "Closed",
      },
      images: {
        profile: "https://api.dicebear.com/7.x/avataaars/svg?seed=bathroom2",
        gallery: [
          "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        ],
      },
      location: {
        lat: 34.0522,
        lng: -118.2437,
      },
      slug: "expert-bathroom-solutions-los-angeles-ca",
    },
    {
      id: "3",
      name: "Quick Fix Plumbers",
      category: "Plumber",
      rating: 4.5,
      reviewCount: 76,
      specialty: ["Emergency Repairs", "Toilet Unclogging", "Leak Repair"],
      address: "789 Pine Rd",
      city: "Chicago",
      state: "IL",
      zip: "60007",
      phone: "(555) 456-7890",
      website: "https://example.com",
      email: "service@quickfixplumbers.com",
      description:
        "24/7 emergency plumbing services with fast response times for toilet and bathroom issues.",
      services: [
        "Emergency Repairs",
        "Toilet Unclogging",
        "Leak Repair",
        "Pipe Replacement",
      ],
      hours: {
        monday: "24 Hours",
        tuesday: "24 Hours",
        wednesday: "24 Hours",
        thursday: "24 Hours",
        friday: "24 Hours",
        saturday: "24 Hours",
        sunday: "24 Hours",
      },
      images: {
        profile: "https://api.dicebear.com/7.x/avataaars/svg?seed=plumbing3",
        gallery: [
          "https://images.unsplash.com/photo-1585058178215-33108215e3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1581876832484-c6a6a1aee7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        ],
      },
      location: {
        lat: 41.8781,
        lng: -87.6298,
      },
      slug: "quick-fix-plumbers-chicago-il",
    },
  ];
};

// Get all unique cities from the business listings
export const getAllCities = (): string[] => {
  const listings = getBusinessListings();
  const cities = listings.map((listing) =>
    listing.city.toLowerCase().replace(/\s+/g, "-"),
  );
  return [...new Set(cities)];
};

// Get all unique states from the business listings
export const getAllStates = (): string[] => {
  const listings = getBusinessListings();
  const states = listings.map((listing) => listing.state.toLowerCase());
  return [...new Set(states)];
};

// Get all businesses in a specific city
export const getBusinessesByCity = (city: string): BusinessListing[] => {
  const listings = getBusinessListings();
  return listings.filter(
    (listing) =>
      listing.city.toLowerCase().replace(/\s+/g, "-") === city.toLowerCase(),
  );
};

// Get all businesses in a specific state
export const getBusinessesByState = (state: string): BusinessListing[] => {
  const listings = getBusinessListings();
  return listings.filter(
    (listing) => listing.state.toLowerCase() === state.toLowerCase(),
  );
};

// Get a specific business by its slug
export const getBusinessBySlug = (
  slug: string,
): BusinessListing | undefined => {
  const listings = getBusinessListings();
  return listings.find((listing) => listing.slug === slug);
};
