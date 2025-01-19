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

  const { data: nearbyCities = [] } = useQuery({
    queryKey: ['nearbyCities', city],
    queryFn: async () => {
      try {
        // First, get the postal code of the current city
        const cityResponse = await fetch(`https://geo.api.gouv.fr/communes?nom=${city}&fields=codesPostaux&limit=1`);
        const cityData = await cityResponse.json();
        
        if (cityData.length === 0 || !cityData[0].codesPostaux?.length) {
          throw new Error('City or postal code not found');
        }

        const postalCode = cityData[0].codesPostaux[0];
        
        // Then, get all cities with the same postal code
        const nearbyResponse = await fetch(
          `https://geo.api.gouv.fr/communes?codePostal=${postalCode}&fields=nom,population&boost=population`
        );
        const nearbyData = await nearbyResponse.json();
        
        // Filter out the current city and sort by population
        const citiesWithSamePostalCode = nearbyData
          .filter(c => c.nom.toLowerCase() !== city?.toLowerCase())
          .sort((a, b) => (b.population || 0) - (a.population || 0))
          .map(c => c.nom);

        // Default cities in case we don't have enough nearby cities
        const defaultCities = [
          "Bordeaux", "Bergerac", "Périgueux", "Libourne",
          "Mérignac", "Pessac", "Agen", "Mont-de-Marsan",
          "Arcachon", "Biarritz", "Bayonne", "Pau"
        ];

        // Combine and ensure we have exactly 12 cities
        const combinedCities = [...new Set([...citiesWithSamePostalCode, ...defaultCities])].slice(0, 12);
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

  const localBusinessSchema = {
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

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Arrêter de fumer",
    "description": "Sevrage tabagique en 1 séance",
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5,
        "bestRating": 5
      },
      "author": {
        "@type": "Person",
        "name": "Fred Benson"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.9,
      "reviewCount": 2627
    }
  };

  return (
    <>
      <Helmet>
        <title>{`Centre Tabac Laser ${capitalizedCity} - Arrêter de fumer à ${capitalizedCity}`}</title>
        <meta
          name="description"
          content={`Arrêtez de fumer à ${capitalizedCity} avec notre Centre Tabac Laser à ${capitalizedCity}. Pour un sevrage tabac laser réussi !`}
        />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
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
