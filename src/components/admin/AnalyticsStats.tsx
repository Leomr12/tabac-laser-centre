import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface AnalyticsData {
  pageViews: number;
  searches: number;
  dailyData: {
    date: string;
    views: number;
  }[];
}

const AnalyticsStats = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    to: new Date(),
  });

  const { data: analyticsData, isLoading } = useQuery({
    queryKey: ["analytics", date?.from, date?.to],
    queryFn: async () => {
      // Simulation des données pour le moment
      // À remplacer par l'appel réel à l'API Google Analytics
      const mockData: AnalyticsData = {
        pageViews: Math.floor(Math.random() * 10000),
        searches: Math.floor(Math.random() * 1000),
        dailyData: Array.from({ length: 30 }, (_, i) => ({
          date: new Date(Date.now() - (30 - i) * 24 * 60 * 60 * 1000).toLocaleDateString(),
          views: Math.floor(Math.random() * 1000),
        })),
      };
      return mockData;
    },
  });

  if (isLoading) {
    return <div>Chargement des statistiques...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Statistiques Analytics</h2>
        <Calendar
          mode="range"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Pages vues</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{analyticsData?.pageViews}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recherches</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{analyticsData?.searches}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Évolution des vues</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={analyticsData?.dailyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="views"
                  stroke="#8884d8"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsStats;