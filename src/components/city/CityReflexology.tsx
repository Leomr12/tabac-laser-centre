import { Card } from "../ui/card";

export const CityReflexology = () => {
  return (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative h-[400px] bg-gray-100">
          <img
            src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
            alt="Séance de réflexologie laser"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6">
            Qu'est-ce que la Réflexologie Laser ?
          </h2>
          <p className="text-gray-700 mb-6">
            <b>La réflexologie laser est une méthode innovante et efficace pour arrêter de fumer</b>. Grâce à une technologie de pointe, cette technique cible des points spécifiques du corps à l'aide d'un laser doux et indolore. Ces points sont stimulés pour réduire l'envie de fumer, calmer les symptômes de sevrage et rééquilibrer votre énergie.
          </p>
        </div>
      </div>
    </Card>
  );
};