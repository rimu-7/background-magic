import  { useEffect, useState } from "react";
import type { Pattern } from "./types";
import { useTheme } from "../ui/ThemeProvider";
import { PatternCard } from "./PatternCard";
import DemoPage from "../DemoPage";
import { PATTERNS } from "./patterns";

export const PatternSelector = () => {
  const { theme } = useTheme();
  const [selectedPattern, setSelectedPattern] = useState<Pattern | null>(null);

  useEffect(() => {
    // Load from localStorage
    const savedPatternId = localStorage.getItem("selectedPattern");
    if (savedPatternId) {
      const pattern = PATTERNS.find((p) => p.id === savedPatternId);
      if (pattern) setSelectedPattern(pattern);
    }
  }, []);

  useEffect(() => {
    // Save to localStorage
    if (selectedPattern) {
      localStorage.setItem("selectedPattern", selectedPattern.id);

      // Scroll up to #hero smoothly whenever a pattern is selected
      const heroElement = document.getElementById("hero");
      if (heroElement) {
        heroElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [selectedPattern]);

  const handlePatternSelect = (patternId: string) => {
    const pattern = PATTERNS.find((p) => p.id === patternId);
    if (pattern) setSelectedPattern(pattern);
  };

const getSelectedPatternClasses = () => {
  if (!selectedPattern) {
    return theme === "dark" ? "bg-black" : "bg-white";
  }
  return theme === "dark"
    ? selectedPattern.darkClasses
    : selectedPattern.lightClasses;
};

  return (
    <div className={`py-20 duration-300 ${getSelectedPatternClasses()}`}>
      <section id="hero" className="w-full mx-auto max-w-4xl min-h-screen">
        <DemoPage />
      </section>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8  px-4 ">
          {PATTERNS.map((pattern) => (
            <PatternCard
              key={pattern.id}
              pattern={pattern}
              isSelected={selectedPattern?.id === pattern.id}
              onSelect={handlePatternSelect}
              theme={theme || "light"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
