import React from "react";
import ServiceFinder from "@/components/home/ServiceFinder";

export const metadata = {
  title: "Local Toilet Services - Find Plumbers & Contractors | Toilets.org",
  description:
    "Connect with trusted plumbers and bathroom specialists in your area for installations, repairs, and maintenance.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4 pt-8">
        <h1 className="text-4xl font-bold mb-6">Local Toilet Services</h1>
        <p className="text-lg text-gray-600 mb-8">
          Find reliable plumbers and bathroom specialists in your area for all
          your toilet and bathroom needs.
        </p>
      </div>
      <ServiceFinder />
    </div>
  );
}
