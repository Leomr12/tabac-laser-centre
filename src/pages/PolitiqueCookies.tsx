import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PolitiqueCookies = () => {
  return (
    <>
      <Helmet>
        <title>Politique de Cookies | Centre Anti-tabac Laser</title>
        <meta 
          name="description" 
          content="Politique de cookies du Centre Anti-tabac Laser - Gestion et utilisation des cookies."
        />
      </Helmet>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Politique de Cookies</h1>
        
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
                className="px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                Politique de confidentialité
              </Link>
              <Link 
                to="/politique-cookies"
                className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90"
              >
                Politique de cookies
              </Link>
            </div>
          </nav>

          <div className="flex-1 prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Qu'est-ce qu'un cookie ?</h2>
              <p>Un cookie est un petit fichier texte placé sur votre appareil lorsque vous visitez un site web. Les cookies permettent au site web de reconnaître votre appareil et de mémoriser des informations sur vos préférences ou votre activité de navigation.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Types de cookies utilisés</h2>
              <p>Nous utilisons les types de cookies suivants sur notre site :</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Cookies de session :</strong> ces cookies sont temporaires et sont effacés lorsque vous fermez votre navigateur. Ils sont utilisés pour stocker des informations temporaires, telles que le contenu de votre panier d'achat.</li>
                <li><strong>Cookies persistants :</strong> ces cookies restent sur votre appareil même après la fermeture de votre navigateur. Ils sont utilisés pour mémoriser vos préférences et améliorer votre expérience utilisateur lors de vos prochaines visites sur notre site.</li>
                <li><strong>Cookies tiers :</strong> ces cookies sont définis par des tiers, tels que des partenaires publicitaires ou des fournisseurs de services d'analyse, pour collecter des informations sur votre activité de navigation sur différents sites web.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Utilisation des cookies</h2>
              <p>Nous utilisons des cookies sur notre site pour les finalités suivantes :</p>
              <ul className="list-disc pl-6">
                <li>Améliorer la fonctionnalité et la performance de notre site.</li>
                <li>Personnaliser votre expérience utilisateur en mémorisant vos préférences.</li>
                <li>Analyser l'utilisation de notre site et mesurer l'efficacité de nos campagnes marketing.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Contrôle des cookies</h2>
              <p>Vous pouvez contrôler et gérer l'utilisation des cookies sur navigateur. La plupart des navigateurs vous permettent de bloquer ou de supprimer les cookies, ou de vous alerter lorsque des cookies sont envoyés sur votre appareil. Veuillez noter que la désactivation des cookies peut affecter certaines fonctionnalités de notre site et limiter votre expérience utilisateur.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Consentement</h2>
              <p>En utilisant notre site www.centre-tabac.fr, vous consentez à l'utilisation des cookies conformément à cette Politique de Cookies. Si vous ne consentez pas à l'utilisation des cookies, veuillez désactiver les cookies dans les paramètres de votre navigateur.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Contact</h2>
              <p>Si vous avez des questions concernant notre Politique de Cookies, veuillez nous contacter à l'adresse suivante : contact@centre-tabac.fr</p>
              <p>Cette Politique de Cookies peut être mise à jour périodiquement pour refléter les changements dans notre utilisation des cookies. Veuillez consulter régulièrement cette page pour être informé des changements éventuels.</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PolitiqueCookies;