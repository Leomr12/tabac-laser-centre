import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import TestimonialsSection from "../components/TestimonialsSection";

const Garanties = () => {
  const faqItems = [
    {
      question: "Quelle est la durée de la garantie ?",
      answer: "Notre garantie s'étend sur 12 mois à compter de votre première séance. Durant cette période, vous pouvez bénéficier d'une nouvelle séance gratuite en cas de rechute."
    },
    {
      question: "Comment fonctionne la garantie en cas de rechute ?",
      answer: "En cas de rechute dans les 12 mois suivant votre séance initiale, il vous suffit de contacter votre praticien. Une nouvelle séance vous sera proposée gratuitement."
    },
    {
      question: "Quel type d'accompagnement proposez-vous ?",
      answer: "Nous proposons un accompagnement personnalisé tout au long de votre parcours. Votre praticien reste disponible pour répondre à vos questions et vous soutenir dans votre démarche d'arrêt du tabac."
    },
    {
      question: "Y a-t-il des conditions particulières pour bénéficier de la garantie ?",
      answer: "La seule condition est d'avoir suivi la séance initiale dans l'un de nos centres. La garantie s'applique automatiquement et sans frais supplémentaires."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Nos Garanties | Centre Anti-tabac Laser</title>
        <meta 
          name="description" 
          content="Découvrez nos garanties exclusives : 12 mois de suivi en cas de rechute et un accompagnement personnalisé pour votre sevrage tabagique."
        />
      </Helmet>

      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Nos Garanties</h1>
        
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-lg text-gray-700">
            Nous nous engageons à vous accompagner dans votre démarche d'arrêt du tabac avec des garanties solides et un suivi personnalisé.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Première garantie */}
          <div className="bg-white rounded-lg shadow-custom overflow-hidden">
            <div className="h-48 bg-gray-200">
              <img 
                src="/garantie-12mois.png" 
                alt="Garantie de 12 mois" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Garantie de 12 mois en cas de rechute</h3>
              <p className="text-gray-700">
                Parce que des émotions fortes ou des moments difficiles peuvent survenir, nous garantissons notre méthode pendant 12 mois. En cas de rechute, vous pouvez contacter votre praticien à tout moment pour une nouvelle séance gratuite.
              </p>
            </div>
          </div>

          {/* Deuxième garantie */}
          <div className="bg-white rounded-lg shadow-custom overflow-hidden">
            <div className="h-48 bg-gray-200">
              <img 
                src="/garantie-accompagnement.png" 
                alt="Garantie d'accompagnement" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Garantie d'accompagnement</h3>
              <p className="text-gray-700">
                Nos praticiens s'engagent pleinement à vous accompagner tout au long de votre parcours. Ils mettent tout en œuvre pour vous offrir un suivi personnalisé et répondre à vos besoins, afin de vous aider à surmonter les défis rencontrés.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <Button asChild className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg">
            <a href="/rendez-vous">Prendre rendez-vous</a>
          </Button>
        </div>

        <TestimonialsSection />

        <div className="max-w-3xl mx-auto my-16">
          <h2 className="text-3xl font-bold text-center mb-8">Questions fréquentes</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Garanties;
