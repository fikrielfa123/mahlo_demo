
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface ListingCardProps {
  id: string;
  title: string;
  price: string;
  image: string;
  location: string;
  time: string;
  category: string;
}

export function ListingCard({ id, title, price, image, location, time, category }: ListingCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
          <Heart className="w-4 h-4 text-gray-600" />
        </button>
        <div className="absolute top-3 left-3 bg-gray-600 text-white px-2 py-1 rounded text-xs uppercase">
          {category}
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2 text-gray-800">{title}</h3>
        
        <div className="text-2xl font-bold text-red-600 mb-3">
          {price}
        </div>
        
        <Link to={`/annonce/${id}`}>
          <Button className="w-full bg-red-600 hover:bg-red-700 text-white mb-3">
            Afficher l'annonce
          </Button>
        </Link>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {location}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {time}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
