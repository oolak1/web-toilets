"use client";

import React, { useState } from "react";
import { Upload, FileText, Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function ImportPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setIsUploading(true);
    setUploadResult(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/import-businesses", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setUploadResult({
          success: true,
          message: data.message || "Businesses imported successfully",
        });
      } else {
        setUploadResult({
          success: false,
          message: data.error || "Failed to import businesses",
        });
      }
    } catch (error) {
      setUploadResult({
        success: false,
        message: "An error occurred during the import process",
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Import Business Listings</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Upload CSV File</CardTitle>
                <CardDescription>
                  Upload a CSV file containing business listings data. The file
                  should include columns for name, address, city, state, zip,
                  phone, etc.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 mb-4">
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <FileText className="h-8 w-8 text-gray-400" />
                      <div className="text-center">
                        <p className="text-sm text-gray-600">
                          {file
                            ? file.name
                            : "Drag and drop your CSV file here, or click to browse"}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {file
                            ? `${(file.size / 1024).toFixed(2)} KB`
                            : "CSV files only, max 10MB"}
                        </p>
                      </div>
                      <Input
                        id="file-upload"
                        type="file"
                        accept=".csv"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                      <label htmlFor="file-upload">
                        <Button type="button" variant="outline" size="sm">
                          <Upload className="h-4 w-4 mr-2" />
                          {file ? "Change File" : "Select File"}
                        </Button>
                      </label>
                    </div>
                  </div>

                  {uploadResult && (
                    <Alert
                      variant={uploadResult.success ? "default" : "destructive"}
                      className="mb-4"
                    >
                      {uploadResult.success ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <AlertCircle className="h-4 w-4" />
                      )}
                      <AlertTitle>
                        {uploadResult.success ? "Success" : "Error"}
                      </AlertTitle>
                      <AlertDescription>
                        {uploadResult.message}
                      </AlertDescription>
                    </Alert>
                  )}

                  <Button
                    type="submit"
                    disabled={!file || isUploading}
                    className="w-full"
                  >
                    {isUploading ? "Uploading..." : "Import Businesses"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>CSV Format</CardTitle>
                <CardDescription>
                  Your CSV file should include the following columns:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm space-y-2">
                  <p className="font-medium">Required Fields:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>name</li>
                    <li>address</li>
                    <li>city</li>
                    <li>state</li>
                    <li>zip</li>
                    <li>phone</li>
                  </ul>

                  <p className="font-medium mt-4">Optional Fields:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>category</li>
                    <li>rating</li>
                    <li>review_count</li>
                    <li>specialty (comma-separated)</li>
                    <li>website</li>
                    <li>email</li>
                    <li>description</li>
                    <li>services (comma-separated)</li>
                    <li>hours_monday, hours_tuesday, etc.</li>
                    <li>image_profile</li>
                    <li>image_gallery (comma-separated URLs)</li>
                    <li>lat</li>
                    <li>lng</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Download Sample CSV
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
