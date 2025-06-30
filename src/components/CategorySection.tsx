
import { Card, CardContent } from "@/components/ui/card";
import { 
  Monitor, 
  Car, 
  Home, 
  Briefcase 
} from "lucide-react";

const categories = [
  {
    name: "INFORMATIQUE ET MULTIMEDIA",
    icon: Monitor,
    color: "text-red-500"
  },
  {
    name: "VEHICULES",
    icon: Car,
    color: "text-blue-500"
  },
  {
    name: "IMMOBILIER",
    icon: Home,
    color: "text-green-500"
  },
  {
    name: "MAISON ET JARDIN",
    icon: Home,
    color: "text-purple-500"
  },
  {
    name: "MATERIEL PROFESSIONNEL",
    icon: Briefcase,
    color: "text-yellow-500"
  },
  {
    name: "EMPLOI ET SERVICES",
    icon: Briefcase,
    color: "text-teal-500"
  }
];

export function CategorySection() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Choisissez une catégorie
          </h2>
          <p className="text-gray-600">Les catégories populaires</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.name} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <IconComponent className={`w-12 h-12 mx-auto mb-3 ${category.color}`} />
                  <h3 className="text-sm font-medium text-gray-800 leading-tight">
                    {category.name}
                  </h3>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
