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
            <p>Contenu de la politique de confidentialité à venir...</p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PolitiqueConfidentialite;