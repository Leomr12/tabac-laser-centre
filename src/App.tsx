import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DecouvrirMethode from "./pages/DecouvrirMethode";
import EtapesSeance from "./pages/EtapesSeance";
import Garanties from "./pages/Garanties";
import CityPage from "./pages/CityPage";
import RendezVous from "./pages/RendezVous";
import InformationsLegales from "./pages/InformationsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import PolitiqueCookies from "./pages/PolitiqueCookies";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/decouvrir-la-methode" element={<DecouvrirMethode />} />
        <Route path="/etapes-seance" element={<EtapesSeance />} />
        <Route path="/garanties" element={<Garanties />} />
        <Route path="/rendez-vous" element={<RendezVous />} />
        <Route path="/centre-anti-tabac-laser/:city" element={<CityPage />} />
        <Route path="/informations-legales" element={<InformationsLegales />} />
        <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
        <Route path="/politique-cookies" element={<PolitiqueCookies />} />
      </Routes>
    </Router>
  );
}

export default App;