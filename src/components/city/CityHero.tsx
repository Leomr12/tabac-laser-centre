import { Button } from "../ui/button";

interface CityHeroProps {
  city: string;
}

export const CityHero = ({ city }: CityHeroProps) => {
  return (
    <section className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Centre Tabac Laser à {city}
        </h1>
        <p className="text-xl mb-8">
          Votre Centre Tabac Laser à proximité de {city}.
        </p>
        <Button
          className="bg-white text-primary hover:bg-gray-100"
          asChild
        >
          <a href="https://taterapilaser.fr/rdv/?ref=${city}">
            Prendre rendez-vous
          </a>
        </Button>
      </div>
    </section>
  );
};
