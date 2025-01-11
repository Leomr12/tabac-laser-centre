import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-custom">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-bold text-primary">
            Centre-Tabac.fr
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
              Accueil
            </Link>
            <Link to="/decouvrir-la-methode" className="text-gray-700 hover:text-primary transition-colors">
              Découvrir la méthode
            </Link>
            <Link to="/etapes-seance" className="text-gray-700 hover:text-primary transition-colors">
              Les étapes d'une séance
            </Link>
            <Link to="/garanties" className="text-gray-700 hover:text-primary transition-colors">
              Nos garanties
            </Link>
            <Link 
              to="/rendez-vous"
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors"
            >
              Prendre rendez-vous
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;