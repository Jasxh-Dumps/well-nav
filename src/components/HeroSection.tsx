import { Button } from "@/components/ui/button";
import AnimatedText from "./AnimatedText";
import { ArrowRight, Shield, Zap, Heart } from "lucide-react";

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  const animatedTexts = [
    "Medicine Safety",
    "Drug Interactions", 
    "Chemical Analysis",
    "Health Protection",
    "Risk Assessment"
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Floating icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Shield className="absolute top-1/4 left-1/4 h-8 w-8 text-primary/20 animate-float" style={{ animationDelay: '0s' }} />
          <Zap className="absolute top-1/3 right-1/4 h-6 w-6 text-accent/20 animate-float" style={{ animationDelay: '1s' }} />
          <Heart className="absolute bottom-1/3 left-1/3 h-10 w-10 text-primary/10 animate-float" style={{ animationDelay: '2s' }} />
        </div>

        {/* Main content */}
        <div className="relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              Analyze Your{" "}
              <br />
              <AnimatedText texts={animatedTexts} className="text-6xl md:text-8xl font-bold" />
            </h1>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Empower yourself with comprehensive medicine analysis. Understand chemical compositions, 
              identify potential risks, and make informed healthcare decisions with our AI-powered platform.
            </p>
          </div>

          <div className="animate-slide-up space-y-6" style={{ animationDelay: '0.6s' }}>
            <Button
              onClick={onGetStarted}
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-smooth text-lg px-8 py-6 rounded-2xl glow-primary group"
            >
              Start Analysis
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-primary" />
                <span>Safe & Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-accent" />
                <span>Instant Analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-destructive" />
                <span>Health First</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "50K+", label: "Medicines Analyzed" },
              { number: "99.9%", label: "Accuracy Rate" },
              { number: "24/7", label: "Available Support" }
            ].map((stat, index) => (
              <div key={index} className="glass rounded-2xl p-6 glow-card transition-smooth hover:scale-105">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;