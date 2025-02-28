import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Wrench } from "lucide-react";

interface SearchResultProps {
  results: {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    readTime?: string;
    difficulty?: string;
    slug: string;
    type: "guide" | "product" | "service" | "diy";
  }[];
  onClearSearch: () => void;
}

const SearchResults = ({ results, onClearSearch }: SearchResultProps) => {
  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">No results found</h2>
        <p className="text-gray-600 mb-6">
          Try different keywords or browse our categories
        </p>
        <Button onClick={onClearSearch}>Clear Search</Button>
      </div>
    );
  }

  return (
    <div className="py-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">
          Search Results{" "}
          <span className="text-gray-500">({results.length} items)</span>
        </h2>
        <Button variant="outline" onClick={onClearSearch}>
          Clear Search
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((result) => (
          <Card
            key={result.id}
            className="overflow-hidden h-full hover:shadow-md transition-shadow duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={result.image}
                alt={result.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                {result.category}
              </div>
              {result.type && (
                <div className="absolute top-3 right-3 bg-gray-800 text-white text-xs font-medium px-2 py-1 rounded">
                  {result.type.toUpperCase()}
                </div>
              )}
            </div>
            <CardContent className="p-4">
              {(result.readTime || result.difficulty) && (
                <div className="flex items-center gap-4 text-xs text-gray-600 mb-2">
                  {result.readTime && (
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{result.readTime}</span>
                    </div>
                  )}
                  {result.difficulty && (
                    <div className="flex items-center gap-1">
                      <Wrench className="h-3 w-3" />
                      <span>{result.difficulty}</span>
                    </div>
                  )}
                  {result.type === "guide" && (
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-3 w-3" />
                      <span>Guide</span>
                    </div>
                  )}
                </div>
              )}
              <h3 className="text-lg font-semibold mb-2">{result.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {result.description}
              </p>
              <Button size="sm" className="w-full">
                {result.type === "guide" && "Read Guide"}
                {result.type === "product" && "View Product"}
                {result.type === "service" && "View Service"}
                {result.type === "diy" && "View Tutorial"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
