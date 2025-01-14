import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Eye, Zap, Search, Settings, Plus, Trash2 } from "lucide-react";
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

interface City {
  name: string;
  slug: string;
  population: number;
  code: string;
}

interface ApiKey {
  id: string;
  key: string;
}

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
  const [newApiKey, setNewApiKey] = useState("");

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
        code: city.code,
      }));
    },
  });

  // Filter cities with deduplication based on code
  const filteredCities = Array.from(
    new Map(
      cities
        .filter((city: City) =>
          city.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((city: City) => [city.code, city])
    ).values()
  ).slice(0, 50);

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

  const handleAddApiKey = () => {
    if (newApiKey.trim()) {
      const newKey: ApiKey = {
        id: crypto.randomUUID(),
        key: newApiKey.trim(),
      };
      setApiKeys([...apiKeys, newKey]);
      setNewApiKey("");
    }
  };

  const handleRemoveApiKey = (id: string) => {
    setApiKeys(apiKeys.filter(key => key.id !== id));
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
                {filteredCities.map((city: City) => (
                  <TableRow key={city.code}>
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
              Gestion des clés API Google Search Console
            </h2>
            
            <div className="space-y-6">
              {/* Formulaire d'ajout de clé API */}
              <div className="flex gap-4">
                <Input
                  type="text"
                  value={newApiKey}
                  onChange={(e) => setNewApiKey(e.target.value)}
                  placeholder="Ajouter une nouvelle clé API"
                  className="flex-1"
                />
                <Button onClick={handleAddApiKey}>
                  <Plus className="h-4 w-4 mr-2" />
                  Ajouter
                </Button>
              </div>

              {/* Liste des clés API */}
              <div className="space-y-3">
                {apiKeys.map((apiKey) => (
                  <div
                    key={apiKey.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
                  >
                    <code className="text-sm">{apiKey.key}</code>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleRemoveApiKey(apiKey.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <Button
                  variant="outline"
                  onClick={() =>
                    window.open(
                      "https://search.google.com/search-console/api-access",
                      "_blank"
                    )
                  }
                >
                  Obtenir une clé API
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;