import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { TrendingUp, Calendar, Target, Award } from "lucide-react";

// Mock data for demonstration
const moodData = [
  { date: '5 days ago', mood: 4, day: 'Mon' },
  { date: '4 days ago', mood: 3, day: 'Tue' },
  { date: '3 days ago', mood: 5, day: 'Wed' },
  { date: '2 days ago', mood: 2, day: 'Thu' },
  { date: 'Yesterday', mood: 4, day: 'Fri' },
  { date: 'Today', mood: 5, day: 'Sat' },
];

const weeklyStats = [
  { name: 'Happy', count: 3 },
  { name: 'Calm', count: 2 },
  { name: 'Okay', count: 1 },
  { name: 'Anxious', count: 1 },
  { name: 'Down', count: 0 },
];

const WellnessDashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {/* Stats Cards */}
      <Card className="bg-gradient-card shadow-wellness border-border/50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Check-in Streak</CardTitle>
          <Calendar className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">7 days</div>
          <p className="text-xs text-muted-foreground">+2 from last week</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-card shadow-wellness border-border/50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Wellness Score</CardTitle>
          <TrendingUp className="h-4 w-4 text-wellness-peaceful" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">8.2/10</div>
          <p className="text-xs text-muted-foreground">+1.2 from last week</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-card shadow-wellness border-border/50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Goals Completed</CardTitle>
          <Target className="h-4 w-4 text-wellness-energetic" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">4/5</div>
          <p className="text-xs text-muted-foreground">This week</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-card shadow-wellness border-border/50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Achievements</CardTitle>
          <Award className="h-4 w-4 text-wellness-happy" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">12</div>
          <p className="text-xs text-muted-foreground">Total earned</p>
        </CardContent>
      </Card>

      {/* Mood Trend Chart */}
      <Card className="md:col-span-2 lg:col-span-3 bg-gradient-card shadow-wellness border-border/50">
        <CardHeader>
          <CardTitle className="text-foreground">Mood Trends</CardTitle>
          <CardDescription className="text-muted-foreground">
            Your emotional journey over the past week
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={moodData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="day" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                domain={[1, 5]}
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                }}
              />
              <Line 
                type="monotone" 
                dataKey="mood" 
                stroke="hsl(var(--primary))" 
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, stroke: 'hsl(var(--primary-glow))' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Weekly Mood Distribution */}
      <Card className="bg-gradient-card shadow-wellness border-border/50">
        <CardHeader>
          <CardTitle className="text-foreground">This Week</CardTitle>
          <CardDescription className="text-muted-foreground">
            Mood distribution
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyStats} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis 
                dataKey="name" 
                type="category" 
                stroke="hsl(var(--muted-foreground))" 
                fontSize={12}
                width={60}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                }}
              />
              <Bar dataKey="count" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default WellnessDashboard;