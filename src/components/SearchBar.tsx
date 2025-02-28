import React, { useState, useEffect } from "react";
import { Search, Filter, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface SearchBarProps {
  onSearch: (query: string, filters: SearchFilters) => void;
  placeholder?: string;
  showFilters?: boolean;
}

export interface SearchFilters {
  contentType: string[];
  difficulty?: string[];
  readTime?: string;
  sortBy?: string;
}

const SearchBar = ({
  onSearch,
  placeholder = "Search...",
  showFilters = true,
}: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<SearchFilters>({
    contentType: ["guide", "product", "service", "diy"],
    difficulty: [],
    readTime: "",
    sortBy: "relevance",
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Handle search submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query, filters);
  };

  // Handle content type filter changes
  const handleContentTypeChange = (type: string) => {
    setFilters((prev) => {
      const newContentType = prev.contentType.includes(type)
        ? prev.contentType.filter((t) => t !== type)
        : [...prev.contentType, type];
      return { ...prev, contentType: newContentType };
    });
  };

  // Handle difficulty filter changes
  const handleDifficultyChange = (level: string) => {
    setFilters((prev) => {
      const newDifficulty = prev.difficulty?.includes(level)
        ? prev.difficulty.filter((d) => d !== level)
        : [...(prev.difficulty || []), level];
      return { ...prev, difficulty: newDifficulty };
    });
  };

  // Reset filters
  const resetFilters = () => {
    setFilters({
      contentType: ["guide", "product", "service", "diy"],
      difficulty: [],
      readTime: "",
      sortBy: "relevance",
    });
  };

  // Apply filters when they change
  useEffect(() => {
    if (query) {
      onSearch(query, filters);
    }
  }, [filters, onSearch]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <Input
              type="text"
              placeholder={placeholder}
              className="pl-10"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div className="flex gap-2">
            {showFilters && (
              <Popover open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    <Filter size={16} />
                    Filters
                    {(filters.contentType.length < 4 ||
                      (filters.difficulty && filters.difficulty.length > 0) ||
                      filters.readTime ||
                      filters.sortBy !== "relevance") && (
                      <span className="ml-1 w-2 h-2 bg-primary rounded-full"></span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-4">
                    <h3 className="font-medium">Filter Results</h3>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Content Type</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { id: "guide", label: "Guides" },
                          { id: "product", label: "Products" },
                          { id: "service", label: "Services" },
                          { id: "diy", label: "DIY Tutorials" },
                        ].map((type) => (
                          <div
                            key={type.id}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox
                              id={`content-${type.id}`}
                              checked={filters.contentType.includes(type.id)}
                              onCheckedChange={() =>
                                handleContentTypeChange(type.id)
                              }
                            />
                            <Label
                              htmlFor={`content-${type.id}`}
                              className="text-sm"
                            >
                              {type.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Difficulty</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { id: "beginner", label: "Beginner" },
                          { id: "intermediate", label: "Intermediate" },
                          { id: "advanced", label: "Advanced" },
                        ].map((level) => (
                          <div
                            key={level.id}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox
                              id={`difficulty-${level.id}`}
                              checked={filters.difficulty?.includes(level.id)}
                              onCheckedChange={() =>
                                handleDifficultyChange(level.id)
                              }
                            />
                            <Label
                              htmlFor={`difficulty-${level.id}`}
                              className="text-sm"
                            >
                              {level.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Read Time</h4>
                      <Select
                        value={filters.readTime}
                        onValueChange={(value) =>
                          setFilters({ ...filters, readTime: value })
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Any duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">Any duration</SelectItem>
                          <SelectItem value="short">Under 5 minutes</SelectItem>
                          <SelectItem value="medium">5-10 minutes</SelectItem>
                          <SelectItem value="long">Over 10 minutes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Sort By</h4>
                      <Select
                        value={filters.sortBy}
                        onValueChange={(value) =>
                          setFilters({ ...filters, sortBy: value })
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Relevance" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="relevance">Relevance</SelectItem>
                          <SelectItem value="newest">Newest First</SelectItem>
                          <SelectItem value="oldest">Oldest First</SelectItem>
                          <SelectItem value="a-z">A-Z</SelectItem>
                          <SelectItem value="z-a">Z-A</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex justify-between pt-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={resetFilters}
                      >
                        Reset Filters
                      </Button>
                      <Button
                        type="button"
                        size="sm"
                        onClick={() => setIsFilterOpen(false)}
                      >
                        Apply Filters
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            )}

            <Button type="submit">
              <Search className="mr-2" size={18} />
              Search
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
