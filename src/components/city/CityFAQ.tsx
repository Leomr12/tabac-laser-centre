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
              Une séance de sevrage tabagique près de {city} dure généralement environ 60 minutes. Cette durée a été pensée pour offrir une prise en charge à la fois personnalisée et efficace. Si vous souhaitez être accompagné(e) d'un proche, la séance peut s'étendre jusqu'à deux heures, permettant une expérience plus enrichissante et collective. Pour toute information supplémentaire, n'hésitez pas à contacter votre Centre.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="side-effects">
            <AccordionTrigger>
              Quels sont les effets secondaires ou indésirables possibles après une séance de sevrage tabagique ?
            </AccordionTrigger>
            <AccordionContent>
              Notre méthode de réflexologie laser est entièrement naturelle et ne présente aucune contre-indication. Chaque séance est élaborée pour garantir une sécurité totale, sans effets secondaires ni indésirables. Nous privilégions des techniques approuvées et respectueuses de votre bien-être, afin de vous proposer un traitement à la fois sûr et efficace.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="insurance">
            <AccordionTrigger>
              Les séances de réflexologie sont-elles remboursées par les mutuelles ?
            </AccordionTrigger>
            <AccordionContent>
              Selon les conditions de votre contrat d'assurance, certaines mutuelles peuvent rembourser les séances de réflexologie laser. Nous vous recommandons de consulter les détails de votre couverture et de contacter directement votre mutuelle pour confirmer votre éligibilité. Vous pourrez ainsi obtenir toutes les informations nécessaires sur les modalités de remboursement.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="follow-up">
            <AccordionTrigger>
              Un suivi est-il prévu après les séances de laser à {city} ?
            </AccordionTrigger>
            <AccordionContent>
              Oui, notre Centre Tabac Laser, situé près de {city}, garantit un suivi personnalisé après chaque séance. Notre spécialiste thérapeute reste disponible pour répondre à vos questions et vous fournir des conseils adaptés à votre situation. Ce suivi vous offre un accompagnement continu, permettant d'évaluer vos progrès et d'ajuster les recommandations selon vos besoins.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="appointment">
            <AccordionTrigger>
              Comment prendre rendez-vous dans un Centre Tabac à {city} ?
            </AccordionTrigger>
            <AccordionContent>
              Pour réserver une séance dans votre Centre Tabac près de {city}, cliquez sur le bouton Prendre rendez-vous et choisissez le Centre qui vous convient. La prise de rendez-vous en ligne est simple et ne prend que quelques minutes. Si vous avez des questions, vous pouvez également joindre le Centre par téléphone ou par e-mail.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};