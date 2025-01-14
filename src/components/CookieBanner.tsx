import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    const expiryDate = new Date();
    expiryDate.setMonth(expiryDate.getMonth() + 6);
    localStorage.setItem("cookieConsent", expiryDate.toISOString());
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg z-50 border-t">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-700 text-center md:text-left">
            Ce site utilise des cookies afin d'assurer son bon fonctionnement et d'améliorer votre navigation ou de réaliser des statistiques de visite pour améliorer nos services. Si vous continuez à naviguer sur ce site ou que vous cliquez sur "Accepter et Fermer" vous acceptez l'utilisation des Cookies.
          </p>
          <Button 
            onClick={handleAccept}
            className="bg-primary hover:bg-primary/90 text-white whitespace-nowrap w-full md:w-auto"
          >
            Accepter et Fermer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;