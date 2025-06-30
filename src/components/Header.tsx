
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="bg-red-600 text-white px-3 py-2 rounded-md font-bold">
              M
            </div>
            <span className="ml-2 text-xl font-bold text-gray-800">MAHALO.MA</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-gray-600 hover:text-gray-900">Accueil</a>
            <a href="/annonces" className="text-gray-600 hover:text-gray-900">Annonces</a>
            <a href="/login" className="text-gray-600 hover:text-gray-900">Se connecter</a>
          </nav>
          
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            Publier une annonce
          </Button>
        </div>
      </div>
    </header>
  );
}
