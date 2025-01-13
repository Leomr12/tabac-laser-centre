import { Card } from "./ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marie L.",
      text: "Grâce à cette méthode, j'ai arrêté de fumer après 15 ans de tabagisme. Le suivi personnalisé a fait toute la différence.",
      date: "Mars 2024"
    },
    {
      name: "Pierre D.",
      text: "Une approche professionnelle et efficace. Je recommande vivement à tous ceux qui souhaitent arrêter de fumer.",
      date: "Février 2024"
    },
    {
      name: "Sophie M.",
      text: "J'étais sceptique au début, mais les résultats sont là. Plus de cigarette depuis 6 mois !",
      date: "Janvier 2024"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Ce que nos clients en disent</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <blockquote className="space-y-4">
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
                <footer>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </footer>
              </blockquote>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;