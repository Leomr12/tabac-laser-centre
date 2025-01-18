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
        <h2 className="text-3xl font-bold mb-8">Sevrage Tabagique en {region} pour dire Stop au Tabac</h2>
       <div className="prose max-w-none mb-8 space-y-6">
  <p>
    Vous êtes décidé à <b>arrêter de fumer en {region}</b> ? Découvrez des solutions innovantes et personnalisées pour un <b>sevrage tabagique</b> efficace, dans un environnement calme et rassurant.
  </p>
  <p>
    En {region}, des experts dédiés au <b>sevrage tabagique</b> sont à votre disposition pour vous accompagner à chaque étape. Leur objectif : maximiser vos chances de succès et vous aider à retrouver une vie sans tabac.
  </p>
  <p>
    Notre <b>centre anti-tabac en {region}</b> se distingue par l’utilisation de la <b>réflexologie laser</b>, une méthode moderne et naturelle. En une seule séance, cette technique indolore cible des points réflexes spécifiques pour diminuer l’envie de fumer et atténuer les effets du sevrage. Une approche douce, sans douleur, ni substituts chimiques.
  </p>
  <p>
    Prêt à relever le défi d’une vie sans tabac ? Prenez dès maintenant rendez-vous avec un <b>spécialiste du sevrage tabagique en {region}</b>. Ensemble, nous mettons toutes les chances de votre côté pour un avenir plus sain et libéré de la dépendance.
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
