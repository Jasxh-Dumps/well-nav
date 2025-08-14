import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, ArrowRight, Search, AlertTriangle, CheckCircle, Info } from "lucide-react";

interface MedicineAnalysisProps {
  onBack: () => void;
}

const MedicineAnalysis = ({ onBack }: MedicineAnalysisProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    medicine: ""
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else if (step === 3) {
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
        setShowResults(true);
      }, 3000);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      onBack();
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1: return formData.age !== "";
      case 2: return formData.gender !== "";
      case 3: return formData.medicine !== "";
      default: return false;
    }
  };

  const mockResults = {
    medicine: formData.medicine || "Ibuprofen",
    composition: [
      { name: "Ibuprofen", percentage: "200mg", type: "Active ingredient" },
      { name: "Microcrystalline cellulose", percentage: "45%", type: "Excipient" },
      { name: "Sodium starch glycolate", percentage: "8%", type: "Disintegrant" },
      { name: "Magnesium stearate", percentage: "2%", type: "Lubricant" }
    ],
    riskLevel: "Low",
    warnings: [
      "May cause stomach irritation if taken on empty stomach",
      "Avoid alcohol consumption while taking this medication"
    ],
    interactions: [
      "Warfarin - Increased bleeding risk",
      "ACE inhibitors - Reduced effectiveness"
    ],
    suitability: "Suitable for your age group and profile"
  };

  if (showResults) {
    return (
      <div className="min-h-screen pt-24 px-4">
        <div className="max-w-4xl mx-auto">
          <Button 
            onClick={onBack}
            variant="ghost" 
            className="mb-6 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>

          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Analysis Results for{" "}
              <span className="text-primary">{mockResults.medicine}</span>
            </h2>

            <div className="grid gap-6">
              {/* Risk Level Card */}
              <Card className="glass glow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span>Risk Assessment</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                      mockResults.riskLevel === 'Low' 
                        ? 'bg-accent/20 text-accent' 
                        : 'bg-destructive/20 text-destructive'
                    }`}>
                      {mockResults.riskLevel} Risk
                    </div>
                    <span className="text-muted-foreground">{mockResults.suitability}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Composition Card */}
              <Card className="glass glow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Info className="h-5 w-5 text-primary" />
                    <span>Chemical Composition</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockResults.composition.map((component, index) => (
                      <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-muted/20">
                        <div>
                          <div className="font-medium">{component.name}</div>
                          <div className="text-sm text-muted-foreground">{component.type}</div>
                        </div>
                        <div className="text-primary font-medium">{component.percentage}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Warnings Card */}
              <Card className="glass glow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                    <span>Warnings & Precautions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {mockResults.warnings.map((warning, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-destructive/10">
                        <AlertTriangle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{warning}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Drug Interactions Card */}
              <Card className="glass glow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                    <span>Potential Drug Interactions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {mockResults.interactions.map((interaction, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-destructive/10">
                        <AlertTriangle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{interaction}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-2xl mx-auto">
        <Button 
          onClick={handleBack}
          variant="ghost" 
          className="mb-6 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {step === 1 ? "Back to Home" : "Previous"}
        </Button>

        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Medicine Analysis</h2>
          <div className="flex items-center justify-center space-x-2 mb-6">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-smooth ${
                  stepNumber <= step 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-12 h-0.5 mx-2 transition-smooth ${
                    stepNumber < step ? 'bg-primary' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <Card className="glass glow-card animate-scale-in">
          <CardContent className="p-8">
            {isAnalyzing ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent mx-auto mb-6"></div>
                <h3 className="text-2xl font-bold mb-4">Analyzing Medicine</h3>
                <p className="text-muted-foreground">
                  Please wait while we analyze the chemical composition and safety profile...
                </p>
              </div>
            ) : (
              <>
                {step === 1 && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-2">What's your age?</h3>
                      <p className="text-muted-foreground mb-6">
                        This helps us provide age-appropriate safety recommendations
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input
                        id="age"
                        type="number"
                        placeholder="Enter your age"
                        value={formData.age}
                        onChange={(e) => setFormData({...formData, age: e.target.value})}
                        className="text-lg p-4 rounded-xl"
                      />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-2">What's your gender?</h3>
                      <p className="text-muted-foreground mb-6">
                        Gender can affect how medications are processed in the body
                      </p>
                    </div>
                    <RadioGroup 
                      value={formData.gender} 
                      onValueChange={(value) => setFormData({...formData, gender: value})}
                      className="space-y-4"
                    >
                      {["Male", "Female", "Other", "Prefer not to say"].map((option) => (
                        <div key={option} className="flex items-center space-x-3 p-4 rounded-xl hover:bg-muted/20 transition-smooth">
                          <RadioGroupItem value={option} id={option} />
                          <Label htmlFor={option} className="text-lg cursor-pointer">{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-2">Medicine to Analyze</h3>
                      <p className="text-muted-foreground mb-6">
                        Enter the name of the medicine you want to analyze
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="medicine">Medicine Name</Label>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                          id="medicine"
                          placeholder="e.g., Ibuprofen, Aspirin, Paracetamol"
                          value={formData.medicine}
                          onChange={(e) => setFormData({...formData, medicine: e.target.value})}
                          className="text-lg p-4 pl-12 rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8 flex justify-end">
                  <Button
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-smooth rounded-xl px-8"
                  >
                    {step === 3 ? "Analyze Medicine" : "Continue"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MedicineAnalysis;