import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Eye, Zap, Search, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch French cities
  const { data: cities = [] } = useQuery({
    queryKey: ["cities"],
    queryFn: async () => {
      const response = await fetch("https://geo.api.gouv.fr/communes");
      const data = await response.json();
      return data.map((city: any) => ({
        name: city.nom,
        slug: city.nom.toLowerCase().replace(/\s+/g, "-"),
        population: city.population,
      }));
    },
  });

  const filteredCities = cities.filter((city: any) =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "Taterapi57600!!") {
      setIsAuthenticated(true);
    } else {
      alert("Mot de passe incorrect");
    }
  };

  const handleOpenPage = (slug: string) => {
    window.open(`/centre-anti-tabac-laser/${slug}`, "_blank");
  };

  const handleIndex = async (slug: string) => {
    console.log(`Indexing page for ${slug}`);
    // TODO: Implement Google Indexing API integration
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-lg shadow-md w-96"
        >
          <h1 className="text-2xl font-bold mb-6 text-center">
            Administration
          </h1>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
            className="mb-4"
          />
          <Button type="submit" className="w-full">
            Se connecter
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Tableau de bord SEO</h1>
      
      <Tabs defaultValue="cities">
        <TabsList>
          <TabsTrigger value="cities">Villes</TabsTrigger>
          <TabsTrigger value="auto">Référencement automatique</TabsTrigger>
          <TabsTrigger value="settings">Réglages</TabsTrigger>
        </TabsList>

        <TabsContent value="cities">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Rechercher une ville..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ville</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCities.slice(0, 50).map((city: any) => (
                  <TableRow key={city.slug}>
                    <TableCell>{city.name}</TableCell>
                    <TableCell className="space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleOpenPage(city.slug)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleIndex(city.slug)}
                      >
                        <Zap className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="auto">
          <div className="bg-white p-6 rounded-lg border">
            <h2 className="text-xl font-semibold mb-4">
              Référencement automatique
            </h2>
            <p className="text-gray-600 mb-4">
              Le système indexe automatiquement 200 pages par jour en utilisant
              différentes clés API pour optimiser le référencement.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="settings">
          <div className="bg-white p-6 rounded-lg border">
            <h2 className="text-xl font-semibold mb-4">
              Réglages des clés API
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Google Search Console API
                </h3>
                <p className="text-gray-600 mb-4">
                  Cette clé API est nécessaire pour indexer automatiquement les pages
                  dans Google Search Console. Vous pouvez obtenir votre clé API dans
                  la console Google Cloud Platform.
                </p>
                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    onClick={() => window.open('https://search.google.com/search-console/api-access', '_blank')}
                  >
                    Obtenir une clé API
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;