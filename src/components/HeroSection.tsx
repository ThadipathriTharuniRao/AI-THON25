import { Button } from "@/components/ui/button";
import { Heart, TrendingUp, Users, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-wellness opacity-20" />
      
      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Content */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Your Mental Health{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Matters
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              A supportive platform designed for students to track wellness, 
              manage stress, and build healthy habits for academic success.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-medium px-8 py-4 shadow-wellness"
            >
              Start Your Journey
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-4"
            >
              Learn More
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Daily Check-ins</h3>
              <p className="text-sm text-muted-foreground">
                Track your mood and wellness with simple, meaningful check-ins
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-wellness-peaceful/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                <TrendingUp className="w-8 h-8 text-wellness-peaceful" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Progress Insights</h3>
              <p className="text-sm text-muted-foreground">
                Visualize your mental health journey with clear, actionable data
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-wellness-happy/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                <Users className="w-8 h-8 text-wellness-happy" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Peer Support</h3>
              <p className="text-sm text-muted-foreground">
                Connect with fellow students in a safe, supportive environment
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-wellness-anxious/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                <Shield className="w-8 h-8 text-wellness-anxious" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Privacy First</h3>
              <p className="text-sm text-muted-foreground">
                Your data is secure and completely confidential, always
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;