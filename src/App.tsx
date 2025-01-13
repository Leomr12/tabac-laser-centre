import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DecouvrirMethode from "./pages/DecouvrirMethode";
import EtapesSeance from "./pages/EtapesSeance";
import Garanties from "./pages/Garanties";
import CityPage from "./pages/CityPage";
import RendezVous from "./pages/RendezVous";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/decouvrir-la-methode" element={<DecouvrirMethode />} />
        <Route path="/etapes-seance" element={<EtapesSeance />} />
        <Route path="/garanties" element={<Garanties />} />
        <Route path="/rendez-vous" element={<RendezVous />} />
        <Route path="/centre-anti-tabac-laser/:city" element={<CityPage />} />
      </Routes>
    </Router>
  );
}

export default App;