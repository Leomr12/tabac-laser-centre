import { Button } from "../ui/button";

interface RegionHeroLargeProps {
  region: string;
}

export const RegionHeroLarge = ({ region }: RegionHeroLargeProps) => {
  return (
    <section>
      <div className="relative h-[20px] mb-16">
        <img
          src="/centre-tabac-laser.png"
          alt={`Centre anti-tabac en ${region}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Sevrage Tabagique en {region}</h2>
        <div className="prose max-w-none mb-8 space-y-6">
          <p>
            Vous cherchez une solution efficace pour arrêter de fumer en {region} ? Découvrez des méthodes adaptées pour un <b>sevrage tabagique</b> réussi, dans un cadre calme et bienveillant.
          </p>
          <p>
            La {region} dispose de professionnels spécialisés dans le <b>sevrage tabagique</b>, prêts à vous accompagner à chaque étape de votre démarche.
          </p>
          <p>
            Notre <b>centre anti-tabac en {region}</b> propose une méthode pour <b>arrêter de fumer grâce à la réflexologie laser</b>. En une seule séance, il est possible de réduire significativement l'envie de fumer et d'apaiser les symptômes liés au sevrage. Cette technique naturelle et indolore stimule des points réflexes spécifiques pour agir directement sur la dépendance au tabac.
          </p>
          <p>
            Vous êtes prêt à <b>arrêter de fumer</b> ? Prenez rendez-vous dès aujourd'hui avec un <b>spécialiste du sevrage tabagique en {region}</b>. Ensemble, construisons une vie sans tabac et pleine de vitalité.
          </p>
        </div>
        <Button className="bg-primary text-white hover:bg-primary/90" asChild>
          <a href={`https://taterapilaser.fr/rdv/?ref=${region}`}>
            Prendre rendez-vous
          </a>
        </Button>
      </div>
    </section>
  );
};