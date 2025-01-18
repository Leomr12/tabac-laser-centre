import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

interface RegionFAQProps {
  region: string;
}

export const RegionFAQ = ({ region }: RegionFAQProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-left">Questions fréquentes</h2>
        <Accordion type="single" collapsible className="max-w-none text-left">
          <AccordionItem value="duration">
            <AccordionTrigger>
              Quelle est la durée d'une séance de sevrage tabagique en {region} ?
            </AccordionTrigger>
            <AccordionContent>
              Une séance de sevrage tabagique en {region} dure généralement environ 60 minutes. Cette durée a été pensée pour offrir une prise en charge à la fois personnalisée et efficace. Si vous souhaitez être accompagné(e) d'un proche, la séance peut s'étendre jusqu'à deux heures, permettant une expérience plus enrichissante et collective.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="side-effects">
            <AccordionTrigger>
              Quels sont les effets secondaires ou indésirables possibles après une séance ?
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
              Un suivi est-il prévu après les séances de laser en {region} ?
            </AccordionTrigger>
            <AccordionContent>
              Oui, notre Centre Tabac Laser en {region} garantit un suivi personnalisé après chaque séance. Notre spécialiste thérapeute reste disponible pour répondre à vos questions et vous fournir des conseils adaptés à votre situation. Ce suivi vous offre un accompagnement continu, permettant d'évaluer vos progrès et d'ajuster les recommandations selon vos besoins.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="appointment">
            <AccordionTrigger>
              Comment prendre rendez-vous dans un Centre Tabac en {region} ?
            </AccordionTrigger>
            <AccordionContent>
              Pour réserver une séance dans votre Centre Tabac en {region}, cliquez sur le bouton Prendre rendez-vous. La prise de rendez-vous en ligne est simple et ne prend que quelques minutes. Si vous avez des questions, vous pouvez également nous joindre par téléphone ou par e-mail.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};