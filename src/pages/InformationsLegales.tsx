import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const InformationsLegales = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Informations Légales | Centre Anti-tabac Laser</title>
        <meta 
          name="description" 
          content="Informations légales, mentions légales et politiques de confidentialité du Centre Anti-tabac Laser."
        />
      </Helmet>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Informations Légales</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          <nav className="w-full md:w-64 flex-shrink-0">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/informations-legales"
                className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90"
              >
                Mentions Légales
              </Link>
              <Link 
                to="/politique-confidentialite"
                className="px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                Politique de confidentialité
              </Link>
              <Link 
                to="/politique-cookies"
                className="px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                Politique de cookies
              </Link>
            </div>
          </nav>

          <div className="flex-1 prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Éditeur du site</h2>
              <p>SAS TATERAPI</p>
              <p><strong>Siège social :</strong><br />
              4 rue Jules Verne, 57600 Forbach, France</p>
              <p><strong>Numéro de TVA intracommunautaire :</strong> FR53931279004</p>
              <p><strong>Numéro d'immatriculation :</strong> 931 279 004 00010</p>
              <p><strong>Capital social :</strong> 1000 €</p>
              <p><strong>Directeur :</strong> Yannick Steuer</p>
              <p><strong>Directeur de la publication :</strong> Lucas Bouysset</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Nous contacter</h2>
              <p><strong>Adresse e-mail :</strong> contact@centre-tabac.fr</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Hébergement</h2>
              <p>Ce site est hébergé par :</p>
              <p>HOSTINGER INTERNATIONAL LTD</p>
              <p><strong>Adresse :</strong> 61 Lordou Vironos Street, 6023 Larnaca, Chypre</p>
              <p><strong>Contact :</strong> <a href="https://www.hostinger.fr/contact" className="text-primary hover:underline">https://www.hostinger.fr/contact</a></p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Présentation</h2>
              <p>Le site Centre-Tabac.fr est une plateforme éditée par la société SAS TATERAPI (ci-après, « Centre-Tabac »). Elle agit comme un annuaire permettant aux utilisateurs de retrouver rapidement des praticiens spécialisés en thérapie laser pour l'arrêt du tabac à proximité de leur localisation.</p>
              <p>La plateforme met en relation des clients souhaitant bénéficier d'une séance de thérapie laser avec des centres partenaires du réseau Centre-Tabac. Tous les praticiens référencés sur le site sont des partenaires expérimentés.</p>
              <p>Aucun compte client n'est nécessaire pour accéder ou naviguer sur notre site internet.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Garantie</h2>
              <p>Centre-Tabac propose une garantie de 12 mois en cas de rechute dans l'ensemble des centres partenaires participants.</p>
              <p>Pour bénéficier de cette garantie, référez-vous aux conditions spécifiques des centres partenaires.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Propriété Intellectuelle</h2>
              <p>Le contenu du site Centre-Tabac.fr (textes, images, logos, graphismes, vidéos, etc.) est protégé par les lois en vigueur sur la propriété intellectuelle et reste la propriété exclusive de Centre-Tabac ou de ses partenaires.</p>
              <p>Toute reproduction, représentation ou utilisation, partielle ou totale, du contenu du site sans autorisation préalable est strictement interdite et peut constituer une contrefaçon.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Loi Applicable</h2>
              <p>Les présentes mentions légales sont soumises au droit français. Tout litige relatif à l'utilisation du site sera soumis à la compétence exclusive des tribunaux français.</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default InformationsLegales;