import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            Tous droits réservés - Copyright 2025
          </div>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link to="/mentions-legales" className="hover:text-primary transition-colors">
              Mentions Légales
            </Link>
            <Link to="/politique-confidentialite" className="hover:text-primary transition-colors">
              Politique de Confidentialité
            </Link>
            <Link to="/politique-cookies" className="hover:text-primary transition-colors">
              Politique de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;