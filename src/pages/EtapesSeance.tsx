import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import TestimonialsSection from "../components/TestimonialsSection";

const EtapesSeance = () => {
  const steps = [
    {
      title: "Consultation initiale",
      description: "Évaluation de votre profil fumeur et de vos habitudes tabagiques. Discussion sur vos motivations et objectifs."
    },
    {
      title: "Préparation",
      description: "Explication détaillée de la méthode et réponse à toutes vos questions. Installation confortable pour la séance."
    },
    {
      title: "Traitement laser",
      description: "Application du laser sur des points d'acupuncture spécifiques pour réduire l'envie de fumer et les symptômes de sevrage."
    },
    {
      title: "Conseils post-séance",
      description: "Recommandations personnalisées pour maintenir les résultats et gérer les situations à risque."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Étapes d'une séance Anti-Tabac Laser</title>
        <meta 
          name="description" 
          content="Les étapes d'une Séance Tabac Laser en Centre Anti-tabac pour un sevrage tabac réussi"
        />
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Les étapes d'une séance Anti-Tabac Laser</h1>

        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-lg text-gray-700">
            Découvrez le déroulement d'une séance de sevrage tabagique par laser, une méthode douce et naturelle pour vous libérer de la cigarette.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="p-6">
              <div className="text-primary text-4xl font-bold mb-4">{index + 1}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mb-16">
          <Button asChild className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg">
            <a href="/rendez-vous">Prendre rendez-vous</a>
          </Button>
        </div>

        <TestimonialsSection />
      </main>

      <Footer />
    </>
  );
};

export default EtapesSeance;