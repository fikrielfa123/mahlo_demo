
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/3bcc8be4-2643-4d7d-a8c1-ee68ad2977c6.png" 
              alt="MAHALO.MA" 
              className="h-10 w-auto"
            />
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
