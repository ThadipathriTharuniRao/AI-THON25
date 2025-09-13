import { Heart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const WellnessHeader = () => {
  return (
    <header className="bg-gradient-primary/10 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
            <Heart className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">MindfulSpace</h1>
            <p className="text-sm text-muted-foreground">Student Wellness Platform</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Dashboard
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Check-in
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Resources
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Profile
          </Button>
        </nav>

        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
};

export default WellnessHeader;