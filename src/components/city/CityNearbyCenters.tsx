interface CityNearbyCentersProps {
  nearbyCities: string[];
}

export const CityNearbyCenters = ({ nearbyCities }: CityNearbyCentersProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Les autres Centres Tabac Laser à proximité de chez-vous
        </h2>
        {nearbyCities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, colIndex) => (
              <div key={colIndex} className="space-y-4">
                {nearbyCities
                  .slice(colIndex * 4, (colIndex + 1) * 4)
                  .map((nearbyCity, index) => (
                    <a
                      key={index}
                      href={`/centre-anti-tabac-laser/${nearbyCity.toLowerCase().replace(/ /g, '-')}`}
                      className="block text-gray-700 hover:underline"
                    >
                      Centre Tabac Laser à {nearbyCity}
                    </a>
                  ))}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">
            Chargement des centres à proximité...
          </p>
        )}
      </div>
    </section>
  );
};