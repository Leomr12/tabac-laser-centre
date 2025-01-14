import { useState } from "react";
import { Eye, Zap, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";

const ADMIN_PASSWORD = "Taterapi57600!!";

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch French cities
  const { data: cities = [] } = useQuery({
    queryKey: ["french-cities"],
    queryFn: async () => {
      const response = await fetch("https://geo.api.gouv.fr/communes");
      const data = await response.json();
      return data.map((city: any) => ({
        name: city.nom,
        slug: city.nom.toLowerCase().replace(/\s+/g, "-"),
        indexed: false, // You would need to track this state
      }));
    },
  });

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPassword("");
    }
  };

  const handleOpenPage = (slug: string) => {
    window.open(`/centre-anti-tabac-laser/${slug}`, "_blank");
  };

  const handleIndex = async (slug: string) => {
    try {
      // Here you would implement the actual indexing logic
      console.log(`Indexing: /centre-anti-tabac-laser/${slug}`);
      // You would need to implement the actual API calls to Google Indexing API
    } catch (error) {
      console.error("Indexing error:", error);
    }
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
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Tableau de bord SEO</h1>
      
      <div className="mb-6">
        <Input
          type="search"
          placeholder="Rechercher une ville..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
      </div>

      <div className="bg-white rounded-lg shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ville</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCities.map((city) => (
              <TableRow key={city.slug}>
                <TableCell>{city.name}</TableCell>
                <TableCell>
                  {city.indexed ? "Indexé" : "Non indexé"}
                </TableCell>
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
    </div>
  );
};

export default AdminPage;