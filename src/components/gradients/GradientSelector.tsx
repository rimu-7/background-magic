import { useState, useCallback } from "react";
import { GRADIENTS } from "./gradients";
import { GradientCard } from "./GradientCard";
import DemoPage from "../DemoPage";

const BG_STORAGE_KEY = "custom-gradient-id";

const GradientSelector2 = () => {
  const [selectedId, setSelectedId] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(BG_STORAGE_KEY) || GRADIENTS[0].id;
    }
    return GRADIENTS[0].id;
  });

  const selectedGradient =
    GRADIENTS.find((g) => g.id === selectedId) || GRADIENTS[0];

  const handleSelect = useCallback((id: string) => {
    setSelectedId(id);
    localStorage.setItem(BG_STORAGE_KEY, id);
    requestAnimationFrame(() => {
      const hero = document.getElementById("hero");
      hero?.scrollIntoView({ behavior: "smooth" });
    });
  }, []);

  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-8 space-y-8 ${selectedGradient.className}`}
    >
      <section id="hero" className="w-full max-w-4xl min-h-screen">
        <DemoPage />
      </section>

      <section id="gradients" className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-10 text-white drop-shadow">
          Select a Gradient Background
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {GRADIENTS.map((gradient) => (
            <GradientCard
              key={gradient.id}
              gradient={gradient}
              isSelected={selectedId === gradient.id}
              onSelect={handleSelect}
              theme=""
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default GradientSelector2;
