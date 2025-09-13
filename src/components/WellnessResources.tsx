import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Play, Users, Phone, MessageCircle, Heart } from "lucide-react";

const resources = [
  {
    id: 1,
    title: "5-Minute Breathing Exercise",
    description: "Quick mindfulness practice to reduce stress and anxiety",
    type: "Exercise",
    icon: Heart,
    color: "wellness-calm",
    action: "Start Now"
  },
  {
    id: 2,
    title: "Study Stress Management",
    description: "Effective techniques for managing academic pressure",
    type: "Article",
    icon: BookOpen,
    color: "wellness-peaceful",
    action: "Read More"
  },
  {
    id: 3,
    title: "Guided Sleep Meditation",
    description: "20-minute session to improve sleep quality",
    type: "Audio",
    icon: Play,
    color: "wellness-anxious",
    action: "Listen"
  },
  {
    id: 4,
    title: "Study Group Support",
    description: "Connect with peers for emotional support",
    type: "Community",
    icon: Users,
    color: "wellness-happy",
    action: "Join"
  },
  {
    id: 5,
    title: "Crisis Support Hotline",
    description: "24/7 mental health support for students",
    type: "Emergency",
    icon: Phone,
    color: "destructive",
    action: "Call Now"
  },
  {
    id: 6,
    title: "Daily Affirmations",
    description: "Positive messages to boost confidence",
    type: "Practice",
    icon: MessageCircle,
    color: "wellness-energetic",
    action: "View"
  }
];

const WellnessResources = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-2">Wellness Resources</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover tools and resources designed to support your mental health journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => {
          const Icon = resource.icon;
          return (
            <Card 
              key={resource.id} 
              className="bg-gradient-card shadow-wellness border-border/50 hover:shadow-glow transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-xl bg-${resource.color}/10 group-hover:bg-${resource.color}/20 transition-colors`}>
                    <Icon className={`w-6 h-6 text-${resource.color}`} />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                    {resource.type}
                  </span>
                </div>
                <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                  {resource.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {resource.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className={`w-full bg-${resource.color}/90 hover:bg-${resource.color} text-white font-medium transition-all`}
                >
                  {resource.action}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="bg-gradient-wellness/10 border-wellness-peaceful/30">
        <CardHeader className="text-center">
          <CardTitle className="text-xl text-foreground">Need Immediate Help?</CardTitle>
          <CardDescription className="text-muted-foreground">
            If you're experiencing a mental health crisis, don't hesitate to reach out
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" className="border-wellness-peaceful text-wellness-peaceful hover:bg-wellness-peaceful hover:text-white">
            Campus Counseling Center
          </Button>
          <Button className="bg-wellness-peaceful hover:bg-wellness-peaceful/90 text-white">
            Crisis Text Line: Text HOME to 741741
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default WellnessResources;