
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <div className="bg-red-600 text-white px-3 py-2 rounded-md font-bold">
              M
            </div>
            <span className="ml-2 text-xl font-bold text-gray-800">MAHALO.MA</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Accueil</Link>
            <Link to="/annonces" className="text-gray-600 hover:text-gray-900">Annonces</Link>
            <Link to="/login" className="text-gray-600 hover:text-gray-900">Se connecter</Link>
          </nav>
          
          <Link to="/publier">
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Publier une annonce
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
