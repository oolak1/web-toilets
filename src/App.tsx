import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import SearchResultsPage from "./pages/search-results";

// Define process for Next.js compatibility
window.process = { env: { NODE_ENV: "development" } };

// Lazy load pages
const ProductReviews = lazy(() => import("./pages/product-reviews"));
const ProductCategory = lazy(() => import("./pages/product-reviews/category"));
const ProductDetail = lazy(() => import("./pages/product-reviews/detail"));
const TopRated = lazy(() => import("./pages/product-reviews/top-rated"));
const Comparisons = lazy(() => import("./pages/product-reviews/comparisons"));
const UserReviews = lazy(() => import("./pages/product-reviews/user-reviews"));
const BuyingGuides = lazy(() => import("./pages/buying-guides"));
const BuyingGuideDetail = lazy(() => import("./pages/buying-guides/detail"));
const Guides = lazy(() => import("./pages/guides"));
const GuideDetail = lazy(() => import("./pages/guides/detail"));
const Services = lazy(() => import("./pages/services"));
const DIY = lazy(() => import("./pages/diy"));
const DIYDetail = lazy(() => import("./pages/diy/detail"));
const Articles = lazy(() => import("./pages/articles"));
const ArticleDetail = lazy(() => import("./pages/articles/[slug]"));
const Howto = lazy(() => import("./pages/howto"));
const HowtoFixRunningToilet = lazy(
  () => import("./pages/howto/fix/fix-running-toilet"),
);

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product-reviews" element={<ProductReviews />} />
            <Route path="/product-reviews/top-rated" element={<TopRated />} />
            <Route
              path="/product-reviews/comparisons"
              element={<Comparisons />}
            />
            <Route
              path="/product-reviews/user-reviews"
              element={<UserReviews />}
            />
            <Route
              path="/product-reviews/:category"
              element={<ProductCategory />}
            />
            <Route
              path="/product-reviews/:category/:id"
              element={<ProductDetail />}
            />
            <Route path="/buying-guides" element={<BuyingGuides />} />
            <Route
              path="/buying-guides/:slug"
              element={<BuyingGuideDetail />}
            />
            <Route path="/guides" element={<Guides />} />
            <Route path="/guides/:slug" element={<GuideDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/diy" element={<DIY />} />
            <Route path="/diy/:slug" element={<DIYDetail />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:slug" element={<ArticleDetail />} />
            <Route path="/howto" element={<Howto />} />
            <Route
              path="/howto/fix/fix-running-toilet"
              element={<HowtoFixRunningToilet />}
            />
            <Route path="/search-results" element={<SearchResultsPage />} />

            {/* Add tempobook route for Tempo */}
            {import.meta.env.VITE_TEMPO === "true" && (
              <Route path="/tempobook/*" />
            )}
          </Routes>
        </main>
        <Footer />
      </>
    </Suspense>
  );
}

export default App;
