import { useTheme } from "@/components/ui/ThemeProvider";
import { useMemo } from "react";

export const useBackgroundTheme = () => {
  const { theme } = useTheme();

  const currentTheme = useMemo(() => {
    const systemTheme =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    return theme === "system" ? systemTheme : theme;
  }, [theme]);

  const getGradient = (endColor: string) => {
    const startColor = currentTheme === "dark" ? "#000000" : "#ffffff";
    return `radial-gradient(125% 125% at 50% 90%, ${startColor} 40%, ${endColor} 100%)`;
  };

  const getStartColor = () => (currentTheme === "dark" ? "#000000" : "#ffffff");

  return { getGradient, getStartColor, currentTheme };
};