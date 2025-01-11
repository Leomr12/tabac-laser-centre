import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { useQuery } from "@tanstack/react-query";

const CityPage = () => {
  const { city } = useParams();
  const capitalizedCity = city ? city.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join('-') : '';

  // For demo purposes, using a random number for reviews between 4965 and 5932
  const reviewCount = Math.floor(Math.random() * (5932 - 4965 + 1)) + 4965;
  
  // Fetch postal code using an API
  const { data: postalData } = useQuery({
    queryKey: ['postalCode', city],
    queryFn: async () => {
      const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${city}&type=municipality&limit=1`);
      const data = await response.json();
      return data.features[0]?.properties?.postcode || "XXXXX";
    },
  });

  const postalCode = postalData || "XXXXX";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Centre Tabac Laser ${capitalizedCity}`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": reviewCount,
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <>
      <Helmet>
        <title>{`Centre Tabac Laser ${capitalizedCity} ${postalCode} - Arrêter de fumer`}</title>
        <meta
          name="description"
          content={`Votre Centre Tabac Laser de ${capitalizedCity} ${postalCode} vous accompagne pour arrêter de fumer. Arrêtez de fumer en 1 séance ! Dites Stop au Tabac.`}
        />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-primary text-white py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Centre Tabac Laser à {capitalizedCity}
              </h1>
              <p className="text-xl mb-8">
                Votre Centre Tabac Laser à proximité de {capitalizedCity}.
              </p>
              <Button
                className="bg-white text-primary hover:bg-gray-100"
                asChild
              >
                <a href={`https://taterapilaser.fr/rechercher-un-praticien/?type=356&search_location=${city}`}>
                  Prendre rendez-vous
                </a>
              </Button>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="space-y-12">
                {/* Discovery Section */}
                <Card className="overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-8">
                      <h2 className="text-3xl font-bold mb-6">
                        Découvrez le Centre Anti-Tabac à {capitalizedCity}
                      </h2>
                      <div className="prose max-w-none text-gray-700">
                        <p className="mb-6">
                          Le <b>centre anti-tabac de {capitalizedCity}</b> propose une méthode pour <b>arrêter de fumer grâce à la réflexologie laser</b>. En une seule séance, il est possible de réduire significativement l'envie de fumer et d'apaiser les symptômes liés au sevrage. <b>Cette technique naturelle et indolore</b> stimule des points réflexes spécifiques pour agir directement sur la dépendance au tabac.
                        </p>
                        <p className="mb-6">
                          <b>Situé à proximité de {capitalizedCity}</b>, ce centre accompagne les fumeurs dans leur démarche d'arrêt définitif. Grâce à une séance laser d'une durée d'environ une heure, les résultats sont rapides et durables. <b>La réflexologie laser est une alternative efficace</b> aux substituts nicotiniques, sans effets secondaires ni douleurs.
                        </p>
                        <Button className="mt-4" asChild>
                          <a href={`https://taterapilaser.fr/rechercher-un-praticien/?type=356&search_location=${city}`}>
                            Prendre rendez-vous
                          </a>
                        </Button>
                      </div>
                    </div>
                    <div className="relative h-[400px] bg-gray-100">
                      <img
                        src="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
                        alt="Centre anti-tabac moderne"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </Card>

                {/* Reflexology Section */}
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

                {/* Why Choose Us Section */}
                <Card className="overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-8">
                      <h2 className="text-3xl font-bold mb-6">
                        Pourquoi choisir notre Centre Anti-Tabac à {capitalizedCity} ?
                      </h2>
                      <p className="text-gray-700 mb-6">
                        Notre <b>centre anti-tabac laser de {capitalizedCity}</b> vous propose une solution rapide et durable pour votre <b>sevrage tabagique</b>. Avec <b>une seule séance laser</b>, vous pouvez entamer votre transition vers une vie sans cigarette. Nos experts certifiés en <b>réflexologie laser</b> vous accompagnent dans cette démarche pour maximiser vos chances de succès.
                      </p>
                    </div>
                    <div className="relative h-[400px] bg-gray-100">
                      <img
                        src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
                        alt="Intérieur du centre anti-tabac"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </Card>

                {/* One Session Section */}
                <Card className="overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative h-[400px] bg-gray-100">
                      <img
                        src="https://images.unsplash.com/photo-1496307653780-42ee777d4833"
                        alt="Centre moderne"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-8">
                      <h2 className="text-3xl font-bold mb-6">
                        Arrêter de fumer en une seule séance à {capitalizedCity} : est-ce possible ?
                      </h2>
                      <p className="text-gray-700 mb-6">
                        Oui, grâce à notre approche unique en réflexologie laser, de nombreux fumeurs ont réussi à <b>arrêter définitivement après une seule séance</b>. Le taux de réussite élevé de notre méthode repose sur l'expertise de nos praticiens et la précision de la technologie utilisée.
                      </p>
                    </div>
                  </div>
                </Card>

                {/* CTA Section */}
                <Card className="bg-primary text-white overflow-hidden">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-6">
                      Votre Centre Anti-Tabac Laser à {capitalizedCity} : Prenez Rendez-Vous !
                    </h2>
                    <p className="mb-6">
                      Prêt à dire au revoir au tabac ? N'attendez plus pour franchir le pas. <b>Contactez notre centre laser pour votre sevrage tabac à {capitalizedCity}</b> dès aujourd'hui et offrez-vous la liberté de respirer à pleins poumons.
                    </p>
                    <Button className="bg-white text-primary hover:bg-gray-100" asChild>
                      <a href={`https://taterapilaser.fr/rechercher-un-praticien/?type=356&search_location=${city}`}>
                        Prendre rendez-vous
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CityPage;