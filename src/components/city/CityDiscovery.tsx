import { Button } from "../ui/button";
import { Card } from "../ui/card";

interface CityDiscoveryProps {
  city: string;
}

export const CityDiscovery = ({ city }: CityDiscoveryProps) => {
  return (
    <Card className="overflow-hidden container mx-auto mt-16">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6">
            Découvrez le Centre Anti-Tabac à {city}
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-6">
              À proximité de {city}, notre Centre Anti-Tabac vous propose une solution innovante pour <b>dire adieu à la cigarette</b> grâce à la réflexologie laser. Cette méthode naturelle, indolore et non invasive cible des points réflexes spécifiques afin de réduire considérablement l’envie de fumer et d’atténuer les désagréments du sevrage.
</p>
            <p className="mb-6">
              En <b>une seule séance</b> d’environ une heure, vous pouvez amorcer un changement durable et retrouver <b>une vie sans tabac</b>. Situé <b>près de {city}</b>, notre centre offre un accompagnement personnalisé pour soutenir votre démarche et maximiser vos chances de succès.</p>
            <Button className="mt-4 text-white" asChild>
              <a href={`https://taterapilaser.fr/rdv/?ref=${city}`}>
                Prendre rendez-vous
              </a>
            </Button>
          </div>
        </div>
        <div className="relative flex items-center h-full bg-gray-100">
          <img
            src="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
            alt="Centre anti-tabac à {city}"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
};
