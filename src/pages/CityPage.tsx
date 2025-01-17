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
        const response = await fetch(`https://geo.api.gouv.fr/communes?nom=${city}&fields=nom,codesPostaux,population&boost=population&limit=12`);
        const data = await response.json();
        
        // Filter and sort cities by population
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
      } catch (error) {
        console.error('Error fetching nearby cities:', error);
        return [];
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