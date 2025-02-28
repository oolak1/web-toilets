import React from "react";
import Link from "next/link";
import { MapPin, Star, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BusinessListing } from "@/lib/utils/businessData";

interface BusinessCardProps {
  business: BusinessListing;
}

const BusinessCard = ({ business }: BusinessCardProps) => {
  return (
    <Card className="overflow-hidden h-full">
      <div className="p-4 border-b border-gray-200 flex items-center">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 mr-4">
          <img
            src={business.images.profile}
            alt={business.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{business.name}</h3>
          <div className="flex items-center mt-1">
            <div className="flex items-center">
              <Star className="text-yellow-400 fill-yellow-400" size={16} />
              <span className="ml-1 text-sm font-medium">
                {business.rating}
              </span>
            </div>
            <span className="mx-2 text-gray-400 text-sm">•</span>
            <span className="text-sm text-gray-600">
              {business.reviewCount} reviews
            </span>
          </div>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2">{business.description}</p>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin size={16} className="mr-1" />
            <span>
              {business.city}, {business.state}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {business.specialty.slice(0, 3).map((item, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-4">
          <Button variant="outline" size="sm" className="gap-1">
            <Phone size={16} />
            Call
          </Button>
          <Link href={`/services/business/${business.slug}`}>
            <Button size="sm" className="gap-1">
              View Profile
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default BusinessCard;
