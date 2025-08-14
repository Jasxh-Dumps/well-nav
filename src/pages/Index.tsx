import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MedicineAnalysis from "@/components/MedicineAnalysis";

const Index = () => {
  const [showAnalysis, setShowAnalysis] = useState(false);

  const handleGetStarted = () => {
    setShowAnalysis(true);
  };

  const handleBackToHome = () => {
    setShowAnalysis(false);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      {showAnalysis ? (
        <MedicineAnalysis onBack={handleBackToHome} />
      ) : (
        <HeroSection onGetStarted={handleGetStarted} />
      )}
    </div>
  );
};

export default Index;
