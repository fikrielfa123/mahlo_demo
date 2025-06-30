
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Share2, Phone, Mail, MapPin, Calendar, Eye, Flag } from "lucide-react";
import { useParams } from "react-router-dom";

const ListingDetail = () => {
  const { id } = useParams();
  
  // Mock data - in a real app this would come from an API
  const listing = {
    id: id,
    title: "DACIA LOGAN 2018 - Excellent état",
    price: "55000 DH",
    category: "VOITURES",
    location: "Al Hoceima",
    publishDate: "Il y a 2 jours",
    views: 245,
    description: "Voiture en excellent état, bien entretenue. Révision récente effectuée. Climatisation, direction assistée, vitres électriques. Véhicule non accidenté. Possibilité de test sur rendez-vous.",
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop"
    ],
    seller: {
      name: "Ahmed Benali",
      phone: "+212 6 12 34 56 78",
      email: "ahmed.benali@email.com",
      memberSince: "Membre depuis 2020"
    },
    specifications: {
      "Année": "2018",
      "Kilométrage": "45 000 km",
      "Carburant": "Essence",
      "Boîte de vitesse": "Manuelle",
      "Nombre de portes": "4 portes"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <Card>
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={listing.images[0]} 
                    alt={listing.title}
                    className="w-full h-96 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-600 text-white">
                      {listing.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button size="sm" variant="secondary" className="bg-white/90">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/90">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Thumbnail images */}
                <div className="p-4 flex space-x-4">
                  {listing.images.slice(1).map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`${listing.title} ${index + 2}`}
                      className="w-20 h-20 object-cover rounded cursor-pointer hover:opacity-80"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Listing Details */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-3xl font-bold text-gray-800">{listing.title}</h1>
                  <Button variant="outline" size="sm">
                    <Flag className="w-4 h-4 mr-2" />
                    Signaler
                  </Button>
                </div>
                
                <div className="text-4xl font-bold text-red-600 mb-6">
                  {listing.price}
                </div>

                <div className="flex items-center space-x-6 text-sm text-gray-600 mb-6">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {listing.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {listing.publishDate}
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {listing.views} vues
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">Description</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {listing.description}
                </p>

                <h3 className="text-xl font-semibold mb-4">Caractéristiques</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(listing.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-600">{key}:</span>
                      <span className="text-gray-800">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Contacter le vendeur</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-800">{listing.seller.name}</p>
                    <p className="text-sm text-gray-600">{listing.seller.memberSince}</p>
                  </div>
                  
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Appeler {listing.seller.phone}
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Envoyer un message
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Safety Tips */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Conseils de sécurité</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Rencontrez le vendeur dans un lieu public</li>
                  <li>• Vérifiez l'article avant l'achat</li>
                  <li>• Ne payez jamais à l'avance</li>
                  <li>• Méfiez-vous des prix trop bas</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetail;
