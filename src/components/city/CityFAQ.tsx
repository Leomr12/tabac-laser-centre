import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

interface CityFAQProps {
  city: string;
}

export const CityFAQ = ({ city }: CityFAQProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-left">Questions fréquentes</h2>
        <Accordion type="single" collapsible className="max-w-none text-left">
          <AccordionItem value="duration">
            <AccordionTrigger>
              Quelle est la durée d'une séance de sevrage tabagique à {city} ?
            </AccordionTrigger>
            <AccordionContent>
              Une séance de sevrage tabagique dure environ 45 minutes à 1 heure. Ce temps comprend un entretien initial pour comprendre vos habitudes et le traitement par réflexologie laser.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="side-effects">
            <AccordionTrigger>
              Quels sont les effets secondaires ou indésirables possibles après une séance de sevrage tabagique ?
            </AccordionTrigger>
            <AccordionContent>
              La réflexologie laser est une méthode naturelle et non invasive qui ne présente aucun effet secondaire connu. Elle n'entraîne ni prise de poids ni autres désagréments couramment associés à l'arrêt du tabac.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="insurance">
            <AccordionTrigger>
              Les séances de réflexologie sont-elles remboursées par les mutuelles ?
            </AccordionTrigger>
            <AccordionContent>
              Les séances de réflexologie laser ne sont actuellement pas prises en charge par la Sécurité Sociale. Cependant, certaines mutuelles peuvent proposer un remboursement partiel. Nous vous conseillons de vous renseigner auprès de votre mutuelle.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="follow-up">
            <AccordionTrigger>
              Un suivi est-il prévu après les séances de laser à {city} ?
            </AccordionTrigger>
            <AccordionContent>
              Oui, nous assurons un suivi personnalisé après votre séance. En cas de besoin, vous bénéficiez d'une garantie de 12 mois qui vous permet de revenir pour une séance de renforcement.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="appointment">
            <AccordionTrigger>
              Comment prendre rendez-vous dans un Centre Tabac à {city} ?
            </AccordionTrigger>
            <AccordionContent>
              Vous pouvez facilement prendre rendez-vous en ligne via notre plateforme de réservation ou en nous contactant directement par téléphone. Nous nous efforçons de vous proposer un rendez-vous dans les meilleurs délais.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};