// components/textures/TextureSelector.tsx
import React, { useEffect, useState } from "react";
import type { Texture } from "./types";
import { useTheme } from "../ui/ThemeProvider";
import { TextureCard } from "./TextureCard";
import DemoPage from "../DemoPage";
import { TEXTURES } from "./textures";

export const TextureSelector = () => {
  const { theme } = useTheme();
  const [selectedTexture, setSelectedTexture] = useState<Texture | null>(null);

  useEffect(() => {
    // Load from localStorage
    const savedTextureId = localStorage.getItem("selectedTexture");
    if (savedTextureId) {
      const texture = TEXTURES.find((t) => t.id === savedTextureId);
      if (texture) setSelectedTexture(texture);
    }
  }, []);

  useEffect(() => {
    // Save to localStorage
    if (selectedTexture) {
      localStorage.setItem("selectedTexture", selectedTexture.id);

      // Scroll up to #hero smoothly whenever a texture is selected
      const heroElement = document.getElementById("hero");
      if (heroElement) {
        heroElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [selectedTexture]);

  const handleTextureSelect = (textureId: string) => {
    const texture = TEXTURES.find((t) => t.id === textureId);
    if (texture) setSelectedTexture(texture);
  };

  const getSelectedTextureClasses = () => {
    if (!selectedTexture) {
      return theme === "dark" ? "bg-black" : "bg-white";
    }
    return theme === "dark"
      ? selectedTexture.darkClasses
      : selectedTexture.lightClasses;
  };

  return (
    <div className={`py-20 duration-300 ${getSelectedTextureClasses()}`}>
      <section id="hero" className="w-full mx-auto max-w-4xl min-h-screen">
        <DemoPage />
      </section>

      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Textures Gallery</h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Organic, tactile backgrounds that add depth and realism to your designs
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {TEXTURES.map((texture) => (
            <TextureCard
              key={texture.id}
              texture={texture}
              isSelected={selectedTexture?.id === texture.id}
              onSelect={handleTextureSelect}
              theme={theme || "light"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};