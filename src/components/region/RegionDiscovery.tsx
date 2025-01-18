import { Button } from "../ui/button";
import { Card } from "../ui/card";

interface RegionDiscoveryProps {
  region: string;
}

export const RegionDiscovery = ({ region }: RegionDiscoveryProps) => {
  return (
    <Card className="overflow-hidden container mx-auto mt-16">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6">
            Découvrez le Centre Anti-Tabac en {region}
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-6">
              En {region}, notre Centre Anti-Tabac vous propose une solution innovante pour <b>dire adieu à la cigarette</b> grâce à la réflexologie laser. Cette méthode naturelle, indolore et non invasive cible des points réflexes spécifiques afin de réduire considérablement l'envie de fumer et d'atténuer les désagréments du sevrage.
            </p>
            <p className="mb-6">
              En <b>une seule séance</b> d'environ une heure, vous pouvez amorcer un changement durable et retrouver <b>une vie sans tabac</b>. Dans toute la {region}, notre centre offre un accompagnement personnalisé pour soutenir votre démarche et maximiser vos chances de succès.
            </p>
            <p className="mb-6">
              La <b>réflexologie laser</b> constitue une alternative performante aux substituts nicotiniques, <b>sans effets secondaires ni douleur</b>. Optez pour une méthode approuvée et efficace pour <b>arrêter définitivement le tabac</b>.
            </p>
            <Button className="mt-4 text-white" asChild>
              <a href={`https://taterapilaser.fr/rdv/?ref=${region}`}>
                Prendre rendez-vous
              </a>
            </Button>
          </div>
        </div>
        <div className="relative flex items-center h-full bg-gray-100">
          <img
            src="/arreter-de-fumer-tabac-laser.png"
            alt={`Centre anti-tabac en ${region}`}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
};