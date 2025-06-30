
import { Button } from "@/components/ui/button";

const cities = [
  "Casablanca", "Marrakech", "Ouatja", "Nador", "Tangier", "Tétouan", 
  "Errachidia", "Rabat", "Meknès", "Fès", "Al Hoceima", "Salé", 
  "Taza", "El Jadida", "Ouarzazate", "Chefchaouen", "Ifrane", 
  "Kenitra", "Khouribga", "Larache"
];

export function CitySelector() {
  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Sélectionner votre ville
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {cities.map((city, index) => (
            <Button
              key={city}
              variant={index === 0 ? "default" : "outline"}
              className={index === 0 ? "bg-red-600 hover:bg-red-700" : "hover:bg-red-50 hover:border-red-300"}
            >
              {city}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
