import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useQuery } from "@tanstack/react-query";
import { CityHero } from "../components/city/CityHero";
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
  
  // Fetch nearby cities with improved logic
  const { data: nearbyCities = [] } = useQuery({
    queryKey: ['nearbyCities', city],
    queryFn: async () => {
      try {
        // First, get the details of the current city to get its coordinates
        const cityResponse = await fetch(`https://geo.api.gouv.fr/communes?nom=${city}&fields=centre,population&boost=population&limit=1`);
        const cityData = await cityResponse.json();
        
        if (cityData.length === 0) {
          throw new Error('City not found');
        }

        const currentCity = cityData[0];
        
        // Then, get nearby cities using coordinates
        const nearbyResponse = await fetch(
          `https://geo.api.gouv.fr/communes?lat=${currentCity.centre.coordinates[1]}&lon=${currentCity.centre.coordinates[0]}&fields=nom,population&boost=population&limit=20`
        );
        const nearbyData = await nearbyResponse.json();
        
        // Filter out the current city and sort by population
        const majorCities = nearbyData
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

        // Combine and ensure we have exactly 12 cities
        const combinedCities = [...new Set([...majorCities, ...defaultCities])].slice(0, 12);
        return combinedCities;
      } catch (error) {
        console.error('Error fetching nearby cities:', error);
        // Fallback to default major cities if there's an error
        return [
          "Bordeaux", "Bergerac", "Périgueux", "Libourne",
          "Mérignac", "Pessac", "Agen", "Mont-de-Marsan",
          "Arcachon", "Biarritz", "Bayonne", "Pau"
        ];
      }
    },
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Centre Tabac Laser ${capitalizedCity}`,
    "image": "/centre-tabac-logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": capitalizedCity,
      "addressCountry": "FR"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1598",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <>
      <Helmet>
        <title>{`Centre Tabac Laser ${capitalizedCity} - Arrêter de fumer ${capitalizedCity}`}</title>
        <meta
          name="description"
          content={`Arrêtez de fumer à ${capitalizedCity} avec notre Centre Tabac Laser à ${capitalizedCity}. Pour un sevrage tabac laser réussi !`}
        />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <CityHero city={capitalizedCity} />
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