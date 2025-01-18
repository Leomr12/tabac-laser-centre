import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CityHero } from "../components/city/CityHero";
import { CityHeroLarge } from "../components/city/CityHeroLarge";
import { CityDiscovery } from "../components/city/CityDiscovery";
import { CityMotivation } from "../components/city/CityMotivation";
import { CityFAQ } from "../components/city/CityFAQ";

const allowedRegions = [
  "guadeloupe",
  "ardennes",
  "meurthe-et-moselle",
  "moselle",
  "alsace",
  "lorraine"
];

const RegionLanding = () => {
  const { region } = useParams();
  
  if (!region || !allowedRegions.includes(region.toLowerCase())) {
    return <Navigate to="/" replace />;
  }

  const capitalizedRegion = region
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("-");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Centre Tabac Laser ${capitalizedRegion}`,
    "image": "/centre-tabac-logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": capitalizedRegion,
      "addressCountry": "FR"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "3984",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <>
      <Helmet>
        <title>{`Arrêter de fumer en ${capitalizedRegion} - Centre Tabac Laser`}</title>
        <meta
          name="description"
          content={`Avec votre Centre Tabac Laser, arrêtez de fumer en ${capitalizedRegion}. En seulement une séance !`}
        />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <section className="bg-primary text-white py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Arrêter de fumer en {capitalizedRegion}
              </h1>
              <p className="text-xl mb-8">
                Votre Centre Tabac Laser en {capitalizedRegion} pour dire Stop à la cigarette !
              </p>
            </div>
          </section>
          <CityHeroLarge city={capitalizedRegion} />
          <CityDiscovery city={capitalizedRegion} />
          <CityMotivation city={capitalizedRegion} />
          <CityFAQ city={capitalizedRegion} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default RegionLanding;
