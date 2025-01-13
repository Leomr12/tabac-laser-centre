import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const DecouvrirMethode = () => {
  const mutuellesList = [
    { name: "Abela", advantage: "20€/séance, plafond 150€/an" },
    { name: "Adrea", advantage: "75€/an, plafond 4 séances/an" },
    { name: "Aesio", advantage: "75€/an, plafond 4 séances/an" },
    { name: "Ag2r-La Mondiale", advantage: "200€/an via le pack \"prévention bien-être\"" },
    { name: "AIO Santé", advantage: "150€/an, plafond 150€" },
    { name: "ALPTIS", advantage: "25€/séance, maximum 5 séances/an, option \"Renfort bien-être\"" },
    { name: "Amavie", advantage: "35€/séance, maximum 10 séances/an" },
    { name: "April", advantage: "Forfaits progressifs, jusqu'à 240€/an à partir de la 5e année" },
    { name: "ASAF", advantage: "Jusqu'à 450€/an selon les contrats" },
    { name: "Assurema", advantage: "Contrat Protect Santé" },
    { name: "Cegema", advantage: "30€/séance" },
    { name: "Choralis", advantage: "Plafond 3 séances/an" },
    { name: "CNM Santé", advantage: "60€/séance, plafond 300€/an" },
    { name: "Cocoon Génération", advantage: "30€/séance, plafond 5 séances/an ou 350€/an" },
    { name: "Gras Savoye", advantage: "Avantages selon les contrats (particulier ou entreprise)" },
    { name: "Harmonie Mutuelle", advantage: "Oui pour certains contrats entreprise" },
    { name: "HENNER", advantage: "Oui pour les contrats d'entreprise et TNS" },
    { name: "La Mutuelle Générale", advantage: "10€ à 30€/séance, plafond 3 fois/an selon contrat" },
    { name: "M comme Mutuelle", advantage: "Jusqu'à 40€/séance, 2 fois/an" },
    { name: "Matmut", advantage: "Médecines douces (réflexologie incluse) selon contrat" },
    { name: "MFIF", advantage: "Jusqu'à 450€/an selon garantie" },
    { name: "MGP", advantage: "Forfaits de 40€ à 120€/an selon le plan choisi" },
    { name: "MIE", advantage: "Forfait médecine douce, détails selon la réglementation" },
    { name: "Miltis", advantage: "30€/séance, plafond 3 séances/an" },
    { name: "MIP", advantage: "Avantages selon contrat" },
    { name: "Muta Santé", advantage: "40€/séance, plafond 2 séances/an" },
    { name: "Ociane", advantage: "Oui selon contrat" },
    { name: "Pavillon prévoyance", advantage: "30€/séance, plafond 10 séances/an" },
    { name: "Prévoir", advantage: "120€/an, avec 120€ supplémentaires après 4 ans" },
    { name: "ProBTP", advantage: "Avantages selon contrat négocié par l'entreprise" },
    { name: "Smatis", advantage: "25€ à 40€/séance, 2 à 4 séances/an" },
    { name: "SPVIE Santé", advantage: "50€/séance, plafond 70 à 250€/an" },
    { name: "Swiss Life", advantage: "55€/séance, plafond 5 séances/an" },
    { name: "Solimut", advantage: "25€/séance, plafond 3 séances/an selon contrat" },
    { name: "Veralis Assurance Santé", advantage: "40€ à 120€/an selon contrat" },
    { name: "VIVINTER", advantage: "Plafond 415€/an" },
  ];

  return (
    <>
      <Helmet>
        <title>La méthode du Laser - Centre Tabac Laser | Anti-Tabac</title>
        <meta
          name="description"
          content="Découvrez notre méthode de sevrage tabagique au laser. Une solution efficace et naturelle pour arrêter de fumer définitivement."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-primary text-white py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                La méthode du Laser
              </h1>
              <p className="text-xl">
                Grâce à notre méthode au laser anti tabac, vous pouvez arrêter de fumer.
              </p>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-6">
                    Une méthode douce et efficace
                  </h2>
                  <p className="text-gray-700 mb-8">
                    Notre méthode de sevrage tabagique au laser est basée sur la stimulation de points d'acupuncture spécifiques. Cette technique, totalement indolore, permet de réduire considérablement l'envie de fumer dès la première séance. Le laser agit sur les points réflexes liés à la dépendance, favorisant la production naturelle d'endorphines et diminuant ainsi le besoin de nicotine.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <img
                    src="/Sevrage-tabagique-Arret-Tabac.png"
                    alt="Méthode laser anti-tabac"
                    className="rounded-lg shadow-lg"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Ce que nos clients en disent
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-gray-700 mb-4">
                      "Après 15 ans de tabagisme, j'ai enfin réussi à arrêter grâce à cette méthode. Une seule séance a suffi !"
                    </p>
                    <p className="font-semibold">Marie D.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-gray-700 mb-4">
                      "Je recommande vivement. Aucune envie de fumer depuis ma séance il y a 6 mois."
                    </p>
                    <p className="font-semibold">Pierre L.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-gray-700 mb-4">
                      "Efficace et sans douleur. Le suivi est excellent et les résultats sont là !"
                    </p>
                    <p className="font-semibold">Sophie M.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Mutuelles Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Votre séance est prise en charge par les mutuelles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {mutuellesList.map((mutuelle, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-2">{mutuelle.name}</h3>
                      <p className="text-gray-700 text-sm">{mutuelle.advantage}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-xs text-gray-500 text-center mt-8 max-w-2xl mx-auto">
                Cette liste n'est pas exhaustive et ne doit pas être utilisée comme une référence absolue. Les programmes et avantages des mutuelles évoluent régulièrement, et les informations peuvent varier selon les contrats ou les régions. Nous vous recommandons vivement de contacter directement votre mutuelle pour obtenir des informations à jour et adaptées à votre situation personnelle.
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DecouvrirMethode;