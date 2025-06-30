
import { ListingCard } from "./ListingCard";

const featuredListings = [
  {
    id: "1",
    title: "DACIA LOGAN 2018",
    price: "55000 DH",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
    location: "Al Hoceima",
    time: "15:30",
    category: "VOITURES"
  },
  {
    id: "2",
    title: "DACIA LOGAN 2018",
    price: "55000 DH",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
    location: "Al Hoceima",
    time: "15:00",
    category: "VOITURES"
  },
  {
    id: "3",
    title: "DACIA LOGAN 2018",
    price: "55000 DH",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
    location: "Al Hoceima",
    time: "15:00",
    category: "VOITURES"
  }
];

export function FeaturedListings() {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Annonces les plus populaires
          </h2>
          <p className="text-gray-600">annonces recommandées</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredListings.map((listing) => (
            <ListingCard key={listing.id} {...listing} />
          ))}
        </div>
      </div>
    </div>
  );
}
