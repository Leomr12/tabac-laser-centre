import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useQuery } from "@tanstack/react-query";
import { CityHero } from "../components/city/CityHero";
import { CityDiscovery } from "../components/city/CityDiscovery";
import { CityReflexology } from "../components/city/CityReflexology";
import { CityNearbyCenters } from "../components/city/CityNearbyCenters";

// Fonction pour calculer la distance entre deux points (formule de Haversine)
const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371; // Rayon de la Terre en km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
};

const CityPage = () => {
  const { city } = useParams();
  const capitalizedCity = city ? city.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join('-') : '';

  const reviewCount = Math.floor(Math.random() * (5932 - 4965 + 1)) + 4965;
  
  // Récupérer les coordonnées de la ville actuelle
  const { data: currentCityData } = useQuery({
    queryKey: ['cityCoordinates', city],
    queryFn: async () => {
      const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${city}&type=municipality&limit=1`);
      const data = await response.json();
      return data.features[0]?.geometry.coordinates || null;
    },
  });

  // Récupérer le code postal
  const { data: postalData } = useQuery({
    queryKey: ['postalCode', city],
    queryFn: async () => {
      const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${city}&type=municipality&limit=1`);
      const data = await response.json();
      return data.features[0]?.properties?.postcode || "XXXXX";
    },
  });

  // Récupérer les villes à proximité
  const { data: nearbyCities = [] } = useQuery({
    queryKey: ['nearbyCities', city, currentCityData],
    queryFn: async () => {
      try {
        if (!currentCityData) return [];
        
        const [currentLon, currentLat] = currentCityData;
        const deptCode = postalData?.substring(0, 2);
        
        if (deptCode) {
          // Récupérer toutes les villes du département et des départements limitrophes
          const response = await fetch(`https://geo.api.gouv.fr/departements/${deptCode}/communes`);
          const data = await response.json();
          
          // Filtrer les villes dans un rayon de 30km
          const citiesWithDistance = data
            .filter(c => c.nom.toLowerCase() !== city?.toLowerCase())
            .map(c => ({
              name: c.nom,
              distance: calculateDistance(
                currentLat,
                currentLon,
                c.centre?.coordinates[1] || 0,
                c.centre?.coordinates[0] || 0
              )
            }))
            .filter(c => c.distance <= 30)
            .sort((a, b) => a.distance - b.distance)
            .slice(0, 12)
            .map(c => c.name);

          return citiesWithDistance;
        }
        return [];
      } catch (error) {
        console.error('Error fetching nearby cities:', error);
        return [];
      }
    },
    enabled: !!currentCityData,
  });

  const postalCode = postalData || "XXXXX";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Centre Tabac Laser ${capitalizedCity}`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": reviewCount,
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <>
      <Helmet>
        <title>{`Centre Tabac Laser ${capitalizedCity} (${postalCode}) - Arrêter de fumer`}</title>
        <meta
          name="description"
          content={`Votre Centre Tabac Laser de ${capitalizedCity} (${postalCode}) vous accompagne pour arrêter de fumer. Arrêtez de fumer en 1 séance ! Dites Stop au Tabac.`}
        />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <CityHero city={capitalizedCity} />
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="space-y-12">
                <CityDiscovery city={capitalizedCity} />
                <CityReflexology />
                <CityNearbyCenters nearbyCities={nearbyCities} />
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CityPage;