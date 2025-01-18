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
  Vous cherchez une méthode efficace pour <b>arrêter de fumer en {region}</b> ? Découvrez notre Centre Anti-Tabac, spécialisé dans la <b>réflexologie laser</b>. Cette technique naturelle, indolore et non invasive, agit sur des points réflexes précis pour réduire l'envie de fumer et limiter les symptômes liés au sevrage tabagique.
</p>
<p className="mb-6">
  Grâce à une <b>séance unique</b> d'environ une heure, vous avez l'opportunité de <b>dire adieu à la cigarette</b> et de reprendre le contrôle de votre santé. Que vous soyez en {region} ou à proximité, notre centre vous accompagne avec des solutions personnalisées pour maximiser vos chances de succès.
</p>
<p className="mb-6">
  Optez pour la <b>réflexologie laser</b>, une alternative sûre et performante aux traitements classiques. Sans substituts chimiques ni effets secondaires, cette méthode est idéale pour <b>arrêter de fumer définitivement</b> et retrouver une vie saine, libre de toute dépendance.
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
