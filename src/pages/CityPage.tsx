import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useQuery } from "@tanstack/react-query";
import { CityHero } from "../components/city/CityHero";
import { CityDiscovery } from "../components/city/CityDiscovery";
import { CityReflexology } from "../components/city/CityReflexology";
import { CityNearbyCenters } from "../components/city/CityNearbyCenters";

const CityPage = () => {
  const { city } = useParams();
  const capitalizedCity = city ? city.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join('-') : '';

  // For demo purposes, using a random number for reviews between 4965 and 5932
  const reviewCount = Math.floor(Math.random() * (5932 - 4965 + 1)) + 4965;
  
  // Fetch postal code using an API
  const { data: postalData } = useQuery({
    queryKey: ['postalCode', city],
    queryFn: async () => {
      const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${city}&type=municipality&limit=1`);
      const data = await response.json();
      return data.features[0]?.properties?.postcode || "XXXXX";
    },
  });

  // Fetch nearby cities
  const { data: nearbyCities = [] } = useQuery({
    queryKey: ['nearbyCities', city],
    queryFn: async () => {
      try {
        const deptCode = postalData?.substring(0, 2);
        if (deptCode) {
          const response = await fetch(`https://geo.api.gouv.fr/departements/${deptCode}/communes`);
          const data = await response.json();
          return data
            .filter(c => c.nom.toLowerCase() !== city?.toLowerCase())
            .sort((a, b) => (b.population || 0) - (a.population || 0))
            .slice(0, 12)
            .map(c => c.nom);
        }
        return [];
      } catch (error) {
        console.error('Error fetching nearby cities:', error);
        return [];
      }
    },
    enabled: !!postalData,
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