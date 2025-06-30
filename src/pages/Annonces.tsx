
import { Header } from "@/components/Header";
import { SearchHero } from "@/components/SearchHero";
import { FeaturedListings } from "@/components/FeaturedListings";
import { CategorySection } from "@/components/CategorySection";

const Annonces = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Toutes les annonces
          </h1>
          <p className="text-gray-600 mb-8">
            Découvrez toutes nos annonces classées par catégorie
          </p>
        </div>
      </div>
      <CategorySection />
      <FeaturedListings />
    </div>
  );
};

export default Annonces;
