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
              Le <b>centre anti-tabac de {city}</b> propose une méthode pour <b>arrêter de fumer grâce à la réflexologie laser</b>. En une seule séance, il est possible de réduire significativement l'envie de fumer et d'apaiser les symptômes liés au sevrage. <b>Cette technique naturelle et indolore</b> stimule des points réflexes spécifiques pour agir directement sur la dépendance au tabac.
            </p>
            <p className="mb-6">
              <b>Situé à proximité de {city}</b>, ce centre accompagne les fumeurs dans leur démarche d'arrêt définitif. Grâce à une séance laser d'une durée d'environ une heure, les résultats sont rapides et durables. <b>La réflexologie laser est une alternative efficace</b> aux substituts nicotiniques, sans effets secondaires ni douleurs.
            </p>
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
            alt="Centre anti-tabac moderne"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
};