import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { DateRange } from "react-day-picker";
import { BetaAnalyticsDataClient } from '@google-analytics/data';
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

const analyticsDataClient = new BetaAnalyticsDataClient();

const AnalyticsStats = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    to: new Date(),
  });

  const { data: analyticsData, isLoading } = useQuery({
    queryKey: ["analytics", date?.from, date?.to],
    queryFn: async () => {
      try {
        const [response] = await analyticsDataClient.runReport({
          property: `properties/10159635087`,
          dateRanges: [
            {
              startDate: date?.from?.toISOString().split('T')[0] || '30daysAgo',
              endDate: date?.to?.toISOString().split('T')[0] || 'today',
            },
          ],
          dimensions: [
            {
              name: 'date',
            },
          ],
          metrics: [
            {
              name: 'screenPageViews',
            },
            {
              name: 'searchResultViews',
            },
          ],
        });

        const dailyData = response.rows?.map((row: any) => ({
          date: row.dimensionValues[0].value,
          views: parseInt(row.metricValues[0].value),
        })) || [];

        const totalPageViews = dailyData.reduce((sum, day) => sum + day.views, 0);
        const totalSearches = response.rows?.reduce(
          (sum, row) => sum + parseInt(row.metricValues[1].value),
          0
        ) || 0;

        return {
          pageViews: totalPageViews,
          searches: totalSearches,
          dailyData,
        };
      } catch (error) {
        console.error('Error fetching analytics data:', error);
        return {
          pageViews: 0,
          searches: 0,
          dailyData: [],
        };
      }
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