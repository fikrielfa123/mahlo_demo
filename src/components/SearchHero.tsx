
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function SearchHero() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          BIENVENUE SUR MAHALO.MA
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          le site des annonces au Maroc
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              placeholder="Que recherchez-vous?"
              className="flex-1 h-12 text-base"
            />
            <div className="flex gap-4">
              <Input
                placeholder="Tout les catégories"
                className="flex-1 h-12 text-base"
              />
              <Input
                placeholder="Tout le Maroc"
                className="flex-1 h-12 text-base"
              />
              <Button className="bg-red-600 hover:bg-red-700 h-12 px-6">
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
