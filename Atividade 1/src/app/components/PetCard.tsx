import { MapPin, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

interface PetCardProps {
  name: string;
  age: string;
  size: string;
  location: string;
  imageUrl: string;
}

export function PetCard({ name, age, size, location, imageUrl }: PetCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="relative aspect-square overflow-hidden group">
        <ImageWithFallback
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isFavorite ? "text-red-500 fill-red-500" : "text-gray-600"
            }`}
          />
        </button>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        <div className="space-y-1 mb-4">
          <p className="text-gray-600">
            <span className="font-medium">Idade:</span> {age}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Porte:</span> {size}
          </p>
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </div>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition-colors font-medium">
          Quero Adotar
        </button>
      </div>
    </div>
  );
}
