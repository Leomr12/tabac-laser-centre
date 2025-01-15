import { Award, Shield, Smile, Heart } from "lucide-react";
import ArgumentCard from "../ArgumentCard";

interface CityMotivationProps {
  city: string;
}

export const CityMotivation = ({ city }: CityMotivationProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Vous avez la motivation ?</h2>
          <p className="text-xl">Nous avons la solution !</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <ArgumentCard icon={Award} title="Méthode connue et reconnue" />
          <ArgumentCard icon={Shield} title="Garantie de 12 mois en cas de rechute" />
          <ArgumentCard icon={Smile} title="Séances sans aucunes douleurs" />
          <ArgumentCard icon={Heart} title="Séances sans effets ni prise de poids" />
        </div>
      </div>
    </section>
  );
};