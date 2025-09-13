import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Smile, Frown, Meh, Heart, Zap } from "lucide-react";

const moodOptions = [
  { id: 'happy', label: 'Happy', icon: Smile, color: 'wellness-happy', description: 'Feeling great!' },
  { id: 'calm', label: 'Calm', icon: Heart, color: 'wellness-calm', description: 'Peaceful & centered' },
  { id: 'neutral', label: 'Okay', icon: Meh, color: 'muted', description: 'Just getting by' },
  { id: 'anxious', label: 'Anxious', icon: Zap, color: 'wellness-anxious', description: 'Feeling worried' },
  { id: 'sad', label: 'Down', icon: Frown, color: 'destructive', description: 'Having a tough time' },
];

const MoodCheckIn = () => {
  const [selectedMood, setSelectedMood] = useState<string>('');
  const [notes, setNotes] = useState('');

  const handleSubmit = () => {
    if (selectedMood) {
      // Here you would save the mood data
      console.log('Mood check-in:', { mood: selectedMood, notes, timestamp: new Date() });
      setSelectedMood('');
      setNotes('');
    }
  };

  return (
    <Card className="bg-gradient-card shadow-wellness border-border/50">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-foreground">How are you feeling today?</CardTitle>
        <CardDescription className="text-muted-foreground">
          Take a moment to check in with yourself
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {moodOptions.map((mood) => {
            const Icon = mood.icon;
            const isSelected = selectedMood === mood.id;
            return (
              <button
                key={mood.id}
                onClick={() => setSelectedMood(mood.id)}
                className={`
                  p-4 rounded-2xl border-2 transition-all duration-300 hover:scale-105
                  ${isSelected 
                    ? `border-${mood.color} bg-${mood.color}/10 shadow-glow` 
                    : 'border-border bg-card hover:border-primary/30'
                  }
                `}
              >
                <div className="flex flex-col items-center gap-2">
                  <Icon className={`w-8 h-8 ${isSelected ? `text-${mood.color}` : 'text-muted-foreground'}`} />
                  <span className={`font-medium ${isSelected ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {mood.label}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {mood.description}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">
            Any thoughts you'd like to share? (optional)
          </label>
          <Textarea
            placeholder="How was your day? Any challenges or wins to note..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="min-h-[100px] resize-none border-border bg-background/50"
          />
        </div>

        <Button 
          onClick={handleSubmit}
          disabled={!selectedMood}
          className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-medium py-3 shadow-wellness"
        >
          Submit Check-in
        </Button>
      </CardContent>
    </Card>
  );
};

export default MoodCheckIn;