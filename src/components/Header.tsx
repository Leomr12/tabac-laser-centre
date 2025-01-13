import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { to: "/", label: "Accueil" },
    { to: "/decouvrir-la-methode", label: "Découvrir la méthode" },
    { to: "/etapes-seance", label: "Les étapes d'une séance" },
    { to: "/garanties", label: "Nos garanties" },
  ];

  return (
    <header className="bg-white shadow-custom">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-bold text-primary">
            <img src="/centre-tabac-logo.png" className="w-[300px] md:w-[300px] max-w-[200px] md:max-w-none" alt="Centre Tabac Logo" />
          </Link>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link 
                key={item.to}
                to={item.to} 
                className="text-gray-700 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link 
              to="/rendez-vous"
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors"
            >
              Prendre rendez-vous
            </Link>
          </nav>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger className="md:hidden p-2">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="text-lg text-gray-700 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/rendez-vous"
                  className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors text-center mt-4"
                >
                  Prendre rendez-vous
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;