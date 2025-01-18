import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy } from "react";
import ScrollToTop from "./components/ScrollToTop";
import CookieBanner from "./components/CookieBanner";

// Lazy load components
const Index = lazy(() => import("./pages/Index"));
const DecouvrirMethode = lazy(() => import("./pages/DecouvrirMethode"));
const EtapesSeance = lazy(() => import("./pages/EtapesSeance"));
const Garanties = lazy(() => import("./pages/Garanties"));
const RendezVous = lazy(() => import("./pages/RendezVous"));
const InformationsLegales = lazy(() => import("./pages/InformationsLegales"));
const PolitiqueConfidentialite = lazy(() => import("./pages/PolitiqueConfidentialite"));
const PolitiqueCookies = lazy(() => import("./pages/PolitiqueCookies"));
const CityPage = lazy(() => import("./pages/CityPage"));
const RegionLanding = lazy(() => import("./pages/RegionLanding"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ScrollToTop />
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/decouvrir-methode" element={<DecouvrirMethode />} />
            <Route path="/etapes-seance" element={<EtapesSeance />} />
            <Route path="/garanties" element={<Garanties />} />
            <Route path="/rendez-vous" element={<RendezVous />} />
            <Route path="/informations-legales" element={<InformationsLegales />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            <Route path="/politique-cookies" element={<PolitiqueCookies />} />
            <Route path="/centre-anti-tabac-laser/:city" element={<CityPage />} />
            <Route path="/:region/centre-tabac-laser" element={<RegionLanding />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <CookieBanner />
      </Router>
    </QueryClientProvider>
  );
}

export default App;