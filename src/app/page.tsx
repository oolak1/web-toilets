import HeroSection from "@/components/home/HeroSection";
import CategoryGrid from "@/components/home/CategoryGrid";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import PopularGuides from "@/components/home/PopularGuides";
import ServiceFinder from "@/components/home/ServiceFinder";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CategoryGrid />
      <FeaturedProducts />
      <PopularGuides />
      <ServiceFinder />
    </div>
  );
}
