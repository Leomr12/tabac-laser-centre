import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const EtapesSeance = () => {
  const steps = [
    {
      number: 1,
      title: "Bilan initial",
      description: "Tout d'abord, votre praticien prendra le temps de discuter avec vous pour comprendre votre parcours, évaluer votre niveau d'addiction et votre motivation, et définir le protocole le plus approprié à vos besoins spécifiques. Nous vous offrons une écoute bienveillante, respectueuse de votre confidentialité, dans un cadre apaisant et sans aucun jugement."
    },
    {
      number: 2,
      title: "Détection des points à stimuler",
      description: "Une fois les points spécifiques de votre oreille identifiés à l'aide d'un palpeur électrique ou manuel, ceux-ci seront stimulés pour les préparer à l'application du laser."
    },
    {
      number: 3,
      title: "Application du laser",
      description: "Après la stimulation, vos récepteurs sont prêts pour l'application du laser. Celui-ci, dirigé sur des points spécifiques, agit en favorisant la rupture des connexions synaptiques liées à votre dépendance physique au tabac ou en contribuant à votre mieux-être."
    },
    {
      number: 4,
      title: "Conseils",
      description: "Votre praticien vous détaillera ensuite le fonctionnement de la garantie et vous fournira des recommandations à appliquer dans les jours suivants pour maximiser l'efficacité de votre sevrage et en assurer la pérennité."
    },
    {
      number: 5,
      title: "Suivi personnalisé",
      description: "La séance prend fin à ce moment, mais vous ne serez pas abandonné. Votre praticien assurera un suivi régulier, surtout en début de sevrage, pour vous soutenir dans cette étape déterminante de votre transformation. N'hésitez pas à le contacter à tout moment pour bénéficier de son"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Les étapes d'une séance - Centre Anti-Tabac</title>
        <meta
          name="description"
          content="Découvrez les étapes d'une séance de sevrage tabagique au laser, de votre bilan initial jusqu'au suivi personnalisé."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-primary text-white py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Etapes d'une séance au Laser
              </h1>
              <p className="text-xl">
                Découvrez le déroulement complet d'une séance de sevrage tabagique au laser
              </p>
            </div>
          </section>

          {/* Steps Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid gap-8 max-w-4xl mx-auto">
                {steps.map((step) => (
                  <Card key={step.number} className="transform hover:scale-[1.01] transition-transform">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-6">
                        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                          {step.number}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Info Cards Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Résultats</h3>
                    <p className="text-gray-600">
                      De nombreux témoignages et recherches mettent en avant des bienfaits notables, notamment pour atténuer les douleurs chroniques et réduire le stress. Toutefois, l'efficacité peut différer en fonction des personnes et des affections ciblées.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Mesures de sécurité</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Ce traitement est déconseillé aux femmes enceintes, car certains points peuvent provoquer des contractions.</li>
                      <li>• Les personnes atteintes de pathologies graves, comme des cancers, doivent obtenir l'avis préalable d'un médecin.</li>
                      <li>• Assurez-vous que le praticien dispose d'une formation spécialisée et d'une qualification en réflexologie auriculaire et en manipulation du laser.</li>
                    </ul>
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

export default EtapesSeance;