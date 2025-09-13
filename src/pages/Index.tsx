import WellnessHeader from "@/components/WellnessHeader";
import HeroSection from "@/components/HeroSection";
import MoodCheckIn from "@/components/MoodCheckIn";
import WellnessDashboard from "@/components/WellnessDashboard";
import WellnessResources from "@/components/WellnessResources";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <WellnessHeader />
      
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Main Content */}
        <div className="container mx-auto px-4 py-12 space-y-16">
          {/* Daily Check-in */}
          <section>
            <MoodCheckIn />
          </section>
          
          {/* Wellness Dashboard */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">Your Wellness Journey</h2>
              <p className="text-muted-foreground">Track your progress and celebrate your growth</p>
            </div>
            <WellnessDashboard />
          </section>
          
          {/* Wellness Resources */}
          <section>
            <WellnessResources />
          </section>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border/50 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            MindfulSpace - Supporting student mental health and wellness
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
