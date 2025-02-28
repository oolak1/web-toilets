import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import SearchBar, { SearchFilters } from "@/components/SearchBar";
import SearchResults from "@/components/SearchResults";
import { searchContent } from "@/lib/utils/searchUtils";

const SearchResultsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    contentType: ["guide", "product", "service", "diy"],
    difficulty: [],
    readTime: "",
    sortBy: "relevance",
  });
  const [results, setResults] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Get search query and filters from sessionStorage
    const storedQuery = sessionStorage.getItem("searchQuery");
    const storedFilters = sessionStorage.getItem("searchFilters");

    if (storedQuery) {
      setSearchQuery(storedQuery);

      if (storedFilters) {
        try {
          const parsedFilters = JSON.parse(storedFilters);
          setSearchFilters(parsedFilters);
        } catch (error) {
          console.error("Error parsing stored filters:", error);
        }
      }
    } else {
      // If no search query is found, redirect to home
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    // Perform search when query or filters change
    if (searchQuery) {
      const searchResults = searchContent(searchQuery, searchFilters);
      setResults(searchResults);
    }
  }, [searchQuery, searchFilters]);

  const handleSearch = (query: string, filters: SearchFilters) => {
    setSearchQuery(query);
    setSearchFilters(filters);

    // Update sessionStorage
    sessionStorage.setItem("searchQuery", query);
    sessionStorage.setItem("searchFilters", JSON.stringify(filters));
  };

  const handleClearSearch = () => {
    // Clear search and redirect to home
    sessionStorage.removeItem("searchQuery");
    sessionStorage.removeItem("searchFilters");
    navigate("/");
  };

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-6">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </div>

        <h1 className="text-4xl font-bold mb-2">Search Results</h1>
        <p className="text-lg text-gray-600 mb-8">
          {results.length > 0
            ? `Found ${results.length} results for "${searchQuery}"`
            : `No results found for "${searchQuery}"`}
        </p>

        {/* Search Bar */}
        <SearchBar
          onSearch={handleSearch}
          placeholder="Refine your search..."
          showFilters={true}
        />

        {/* Search Results */}
        <SearchResults results={results} onClearSearch={handleClearSearch} />

        {/* Google AdSense - Bottom Banner */}
        <div className="w-full h-24 bg-gray-100 flex items-center justify-center mt-8 rounded-md">
          <p className="text-gray-500">Advertisement</p>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;
