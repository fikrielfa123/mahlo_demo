
import { Header } from "@/components/Header";
import { SearchHero } from "@/components/SearchHero";
import { CategorySection } from "@/components/CategorySection";
import { CitySelector } from "@/components/CitySelector";
import { FeaturedListings } from "@/components/FeaturedListings";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <SearchHero />
      <CategorySection />
      <CitySelector />
      <FeaturedListings />
    </div>
  );
};

export default Index;
