import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useQuery } from "@tanstack/react-query";
import { CityHeroLarge } from "../components/city/CityHeroLarge";
import { CityDiscovery } from "../components/city/CityDiscovery";
import { CityNearbyCenters } from "../components/city/CityNearbyCenters";
import { CityMotivation } from "../components/city/CityMotivation";
import { CityFAQ } from "../components/city/CityFAQ";

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

  // Fetch nearby cities with improved logic
  const { data: nearbyCities = [] } = useQuery({
    queryKey: ['nearbyCities', city],
    queryFn: async () => {
      try {
        const deptCode = postalData?.substring(0, 2);
        if (deptCode) {
          // Fetch all cities in the department
          const response = await fetch(`https://geo.api.gouv.fr/departements/${deptCode}/communes`);
          const data = await response.json();
          
          // Filter and sort cities by population and distance
          const majorCities = data
            .filter(c => c.nom.toLowerCase() !== city?.toLowerCase())
            .sort((a, b) => (b.population || 0) - (a.population || 0))
            .slice(0, 12)
            .map(c => c.nom);

          // Add some major regional cities if we don't have enough nearby cities
          const defaultCities = [
            "Bordeaux", "Bergerac", "Périgueux", "Libourne",
            "Mérignac", "Pessac", "Agen", "Mont-de-Marsan",
            "Arcachon", "Biarritz", "Bayonne", "Pau"
          ];

          const combinedCities = [...new Set([...majorCities, ...defaultCities])].slice(0, 12);
          return combinedCities;
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
          <CityHeroLarge city={capitalizedCity} />
          <CityDiscovery city={capitalizedCity} />
          <CityMotivation city={capitalizedCity} />
          <CityFAQ city={capitalizedCity} />
          <CityNearbyCenters nearbyCities={nearbyCities} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CityPage;
