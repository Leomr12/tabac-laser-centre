import { Check } from "lucide-react";

const features = [
  "Garantie 12 mois en cas de rechute",
  "Sans effets secondaires et prise de poids",
  "Sans douleurs et sans danger",
  "Méthode connue et reconnue",
  "Praticiens certifiés et qualifiés"
];

const ScrollingBanner = () => {
  return (
    <div className="bg-blue-50 overflow-hidden py-3">
      <div className="animate-scroll-x flex whitespace-nowrap">
        <div className="flex gap-12 items-center px-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-700">
              <Check className="h-5 w-5 text-primary" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-12 items-center px-4">
          {features.map((feature, index) => (
            <div key={`duplicate-${index}`} className="flex items-center gap-2 text-gray-700">
              <Check className="h-5 w-5 text-primary" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingBanner;