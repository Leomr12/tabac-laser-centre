import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center py-16 px-4">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page introuvable</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/"
            className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-full transition-colors text-center"
          >
            Retour à la page d'accueil
          </Link>
          <Link
            to="/rendez-vous"
            className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full transition-colors text-center"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;