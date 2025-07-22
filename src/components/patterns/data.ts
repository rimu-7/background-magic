import type { BaseBackground } from "./types";

export const patterns: BaseBackground[] = [
  {
    id: "diagonal-lines",
    name: "Diagonal Lines",
    type: "pattern",
    color: "#f472b6",
    pattern: `repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(0, 0, 0, 0.1) 10px,
      rgba(0, 0, 0, 0.1) 20px
    )`,
  },
  {
    id: "dots",
    name: "Dots",
    type: "pattern",
    color: "#60a5fa",
    pattern: `radial-gradient(circle, rgba(0, 0, 0, 0.2) 1px, transparent 1px)`,
  },
  {
    id: "grid-lines",
    name: "Grid Lines",
    type: "pattern",
    color: "",
    pattern: `repeating-linear-gradient(
        0deg,
        transparent,
        transparent 19px,
        rgba(0, 0, 0, 0.05) 20px
      ),
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 19px,
        rgba(0, 0, 0, 0.05) 20px
      )`,
  },
];
