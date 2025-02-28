import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";
import { BusinessListing } from "@/lib/utils/businessData";

// This is a server-side only route handler
export async function POST(request: NextRequest) {
  try {
    // In a real application, you would handle file uploads here
    // For this example, we'll assume the CSV file is uploaded in the request
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Read the file
    const buffer = Buffer.from(await file.arrayBuffer());
    const csvString = buffer.toString();

    // Parse CSV
    const records = parse(csvString, {
      columns: true,
      skip_empty_lines: true,
    });

    // Transform CSV data to our BusinessListing format
    const businesses: BusinessListing[] = records.map(
      (record: any, index: number) => {
        // Generate a slug from the business name and location
        const slug = `${record.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${record.city.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${record.state.toLowerCase()}`;

        return {
          id: (index + 1).toString(),
          name: record.name,
          category: record.category || "Plumber",
          rating: parseFloat(record.rating) || 4.0,
          reviewCount: parseInt(record.review_count) || 0,
          specialty: record.specialty
            ? record.specialty.split(",").map((s: string) => s.trim())
            : ["Toilet Repair"],
          address: record.address,
          city: record.city,
          state: record.state,
          zip: record.zip,
          phone: record.phone,
          website: record.website,
          email: record.email,
          description:
            record.description ||
            `${record.name} provides professional plumbing services in ${record.city}, ${record.state}.`,
          services: record.services
            ? record.services.split(",").map((s: string) => s.trim())
            : ["Toilet Repair", "Toilet Installation"],
          hours: {
            monday: record.hours_monday || "9:00 AM - 5:00 PM",
            tuesday: record.hours_tuesday || "9:00 AM - 5:00 PM",
            wednesday: record.hours_wednesday || "9:00 AM - 5:00 PM",
            thursday: record.hours_thursday || "9:00 AM - 5:00 PM",
            friday: record.hours_friday || "9:00 AM - 5:00 PM",
            saturday: record.hours_saturday || "10:00 AM - 2:00 PM",
            sunday: record.hours_sunday || "Closed",
          },
          images: {
            profile:
              record.image_profile ||
              `https://api.dicebear.com/7.x/avataaars/svg?seed=${slug}`,
            gallery: record.image_gallery
              ? record.image_gallery.split(",").map((s: string) => s.trim())
              : [],
          },
          location: {
            lat: parseFloat(record.lat) || 0,
            lng: parseFloat(record.lng) || 0,
          },
          slug,
        };
      },
    );

    // In a real application, you would save this data to a database
    // For this example, we'll save it to a JSON file
    const dataDir = path.join(process.cwd(), "data");

    // Create the directory if it doesn't exist
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    fs.writeFileSync(
      path.join(dataDir, "businesses.json"),
      JSON.stringify(businesses, null, 2),
    );

    return NextResponse.json({
      success: true,
      message: `Successfully imported ${businesses.length} businesses`,
      businesses,
    });
  } catch (error) {
    console.error("Error importing businesses:", error);
    return NextResponse.json(
      { error: "Failed to import businesses" },
      { status: 500 },
    );
  }
}
