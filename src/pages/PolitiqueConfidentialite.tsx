import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PolitiqueConfidentialite = () => {
  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité | Centre Anti-tabac Laser</title>
        <meta 
          name="description" 
          content="Politique de confidentialité du Centre Anti-tabac Laser - Protection de vos données personnelles."
        />
      </Helmet>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Politique de Confidentialité</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          <nav className="w-full md:w-64 flex-shrink-0">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/informations-legales"
                className="px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                Mentions Légales
              </Link>
              <Link 
                to="/politique-confidentialite"
                className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90"
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
            <p className="mb-8">La protection de vos données personnelles est une priorité pour Centre-Tabac. Cette Politique de Confidentialité décrit les pratiques relatives à la collecte, à l'utilisation, à la protection et au partage des données personnelles des utilisateurs du site www.centre-tabac.fr.</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Collecte de Données Personnelles</h2>
              <p>Dans le cadre de la réservation de séances via Centre-Tabac, nous collectons les données personnelles suivantes sur notre site internet Tatérapi Laser (www.taterapilaser.fr) :</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Nom</li>
                <li>Prénom</li>
                <li>Adresse e-mail</li>
                <li>Numéro de téléphone</li>
              </ul>
              <p>Ces informations sont indispensables pour créer votre compte utilisateur et permettre la réservation de vos séances.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Utilisation des Données Personnelles</h2>
              <p>Les données personnelles collectées sont utilisées pour les finalités suivantes :</p>
              <ul className="list-disc pl-6">
                <li>Créer et gérer votre compte utilisateur.</li>
                <li>Vous permettre de réserver des séances de thérapie laser.</li>
                <li>Vous envoyer des confirmations de rendez-vous.</li>
                <li>Vous contacter pour des besoins administratifs ou marketing liés à nos services.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Protection des Données Personnelles</h2>
              <p>Nous appliquons des mesures de sécurité techniques et organisationnelles adaptées pour protéger vos données personnelles contre :</p>
              <ul className="list-disc pl-6 mb-4">
                <li>L'accès non autorisé</li>
                <li>L'utilisation abusive</li>
                <li>La divulgation non autorisée</li>
                <li>L'altération ou la destruction</li>
              </ul>
              <p>Vos données sont stockées de manière sécurisée et ne sont accessibles qu'aux personnels autorisés.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Partage des Données Personnelles</h2>
              <p>Nous ne partageons pas vos données personnelles avec des tiers, sauf dans les cas suivants :</p>
              <ul className="list-disc pl-6">
                <li>Lorsque cela est nécessaire pour fournir les services de réservation (partenaires, praticiens).</li>
                <li>Pour respecter une obligation légale ou répondre à une demande des autorités compétentes.</li>
                <li>Pour protéger les droits, la propriété ou la sécurité de Centre-Tabac, de nos utilisateurs ou du public.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Conservation des Données Personnelles</h2>
              <p>Vos données personnelles sont conservées uniquement pendant la durée nécessaire à la fourniture de nos services et au respect de nos obligations légales.</p>
              <p>Si vous souhaitez que vos données soient supprimées, contactez-nous à l'adresse indiquée ci-dessous.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Droits des Utilisateurs</h2>
              <p>En tant qu'utilisateur, vous disposez des droits suivants :</p>
              <ul className="list-disc pl-6">
                <li><strong>Accès :</strong> Vous pouvez demander une copie de vos données personnelles.</li>
                <li><strong>Correction :</strong> Vous pouvez demander la modification de vos données si elles sont incorrectes ou incomplètes.</li>
                <li><strong>Suppression :</strong> Vous pouvez demander la suppression de vos données personnelles.</li>
                <li><strong>Opposition :</strong> Vous pouvez refuser le traitement de vos données à des fins marketing.</li>
              </ul>
              <p>Pour exercer vos droits, veuillez nous contacter à l'adresse ci-dessous.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Contact</h2>
              <p>Pour toute question relative à cette Politique de Confidentialité ou pour exercer vos droits concernant vos données personnelles, vous pouvez nous écrire à :</p>
              <p><strong>Adresse e-mail :</strong> contact@taterapilaser.fr</p>
              <p>Retrouvez notre politique de confidentialité parente sur : <a href="https://www.taterapilaser.fr/politique-de-confidentialite/" className="text-primary hover:underline">www.taterapilaser.fr/politique-de-confidentialite/</a></p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PolitiqueConfidentialite;