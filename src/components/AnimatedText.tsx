import { useState, useEffect } from "react";

interface AnimatedTextProps {
  texts: string[];
  className?: string;
}

const AnimatedText = ({ texts, className = "" }: AnimatedTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <span
      className={`inline-block transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
    >
      <span className="bg-gradient-to-r from-primary via-accent to-primary bg-300% animate-text-shimmer bg-clip-text text-transparent">
        {texts[currentIndex]}
      </span>
    </span>
  );
};

export default AnimatedText;