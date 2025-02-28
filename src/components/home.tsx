import HeroSection from "./home/HeroSection";
import CategoryGrid from "./home/CategoryGrid";
import FeaturedProducts from "./home/FeaturedProducts";
import PopularGuides from "./home/PopularGuides";
import ServiceFinder from "./home/ServiceFinder";

function Home() {
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

export default Home;
