import {
  BackgroundGrid,
  type BaseBackground,
} from "@/components/backgrounds/BackgroundGrid";
import { useBackgroundTheme } from "@/components/backgrounds/useBackgroundTheme";
import { useState, useCallback } from "react";
import DemoPage from "@/components/DemoPage";
import { backgrounds } from "./backgrounds";
import { toast } from "react-toastify";

const BG_STORAGE_KEY = "custom-bg-id";



export default function GradientSelector() {
  const [selectedId, setSelectedId] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(BG_STORAGE_KEY) || backgrounds[0].id;
    }
    return backgrounds[0].id;
  });

  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { getGradient } = useBackgroundTheme();

  const selectedBg =
    backgrounds.find((bg) => bg.id === selectedId) || backgrounds[0];

  const getBackgroundStyle = (bg: BaseBackground) => {
    if (bg.type === "color") {
      return `${getGradient(bg.color)} fixed`;
    } else {
      return `${getGradient(bg.color)} fixed, ${bg.pattern}`;
    }
  };

  const currentBackground = getBackgroundStyle(selectedBg);

  const handleSelect = useCallback((id: string) => {
    setSelectedId(id);
    localStorage.setItem(BG_STORAGE_KEY, id);
    requestAnimationFrame(() => {
      const hero = document.getElementById("hero");
      hero?.scrollIntoView({ behavior: "smooth" });
    });
  }, []);

  const handleCopy = useCallback(
    async (bg: BaseBackground) => {
      const code = `<div className="min-h-screen w-full bg-white dark:bg-black relative">
  {/* Concrete Texture */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: \`${
        bg.type === "color"
          ? `${getGradient(bg.color)} fixed`
          : `${getGradient(bg.color)} fixed, ${bg.pattern}`
      }\`,
      backgroundSize: "cover"
    }}
  />
  {/* Your Content/Components */}
</div>
`;
      try {
        await navigator.clipboard.writeText(code);
        setCopiedId(bg.id);
        setTimeout(() => setCopiedId(null), 1500);
        toast.success("Copied");
      } catch (e) {
        console.error("Copy failed", e);
      }
    },
    [getGradient]
  );

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-8 space-y-8"
      style={{
        background: currentBackground,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <section id="hero" className="w-full max-w-4xl min-h-screen">
        <DemoPage />
      </section>

      <section id="backgrounds" className="w-full max-w-6xl">
        <BackgroundGrid
          backgrounds={backgrounds}
          selectedId={selectedId}
          copiedId={copiedId}
          onSelect={handleSelect}
          onCopy={handleCopy}
        />
      </section>
    </div>
  );
}
