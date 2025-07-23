import type { Pattern } from "./types";

export const PATTERNS: Pattern[] = [
  {
    id: "dots",
    name: "Dotted",
    lightClasses:
      "bg-white bg-[radial-gradient(#00000033_1px,transparent_1px)] [background-size:16px_16px]",
    darkClasses:
      "bg-black bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]",
    lightStyle: `backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.2) 1px, transparent 0)',
backgroundSize: '16px 16px'`,
    darkStyle: `backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)',
backgroundSize: '16px 16px'`,
  },
  {
    id: "squares",
    name: "Squares",
    lightClasses:
      "bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:24px_24px]",
    darkClasses:
      "bg-black bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] [background-size:24px_24px]",
    lightStyle: `backgroundImage: 'linear-gradient(to_right, rgba(0,0,0,0.07) 1px, transparent 1px), linear-gradient(to_bottom, rgba(0,0,0,0.07) 1px, transparent 1px)',
backgroundSize: '24px 24px'`,
    darkStyle: `backgroundImage: 'linear-gradient(to_right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to_bottom, rgba(255,255,255,0.07) 1px, transparent 1px)',
backgroundSize: '24px 24px'`,
  },
  {
    id: "diagonal",
    name: "Diagonal",
    lightClasses:
      "bg-white bg-[linear-gradient(45deg,#efefef_25%,transparent_25%),linear-gradient(-45deg,#efefef_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#efefef_75%),linear-gradient(-45deg,transparent_75%,#efefef_75%)] [background-size:20px_20px]",
    darkClasses:
      "bg-black bg-[linear-gradient(45deg,#333333_25%,transparent_25%),linear-gradient(-45deg,#333333_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#333333_75%),linear-gradient(-45deg,transparent_75%,#333333_75%)] [background-size:20px_20px]",
    lightStyle: `backgroundImage: 'linear-gradient(45deg, #efefef 25%, transparent 25%), linear-gradient(-45deg, #efefef 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #efefef 75%), linear-gradient(-45deg, transparent 75%, #efefef 75%)',
backgroundSize: '20px 20px'`,
    darkStyle: `backgroundImage: 'linear-gradient(45deg, #333333 25%, transparent 25%), linear-gradient(-45deg, #333333 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #333333 75%), linear-gradient(-45deg, transparent 75%, #333333 75%)',
backgroundSize: '20px 20px'`,
  },
  {
    id: "triangles",
    name: "Triangles",
    lightClasses:
      "bg-white bg-[linear-gradient(315deg,#f0f0f0_50%,#ffffff_50%)] [background-size:20px_20px]",
    darkClasses:
      "bg-black bg-[linear-gradient(315deg,#222222_50%,#000000_50%)] [background-size:20px_20px]",
    lightStyle: `backgroundImage: 'linear-gradient(315deg, #f0f0f0 50%, #ffffff 50%)',
backgroundSize: '20px 20px'`,
    darkStyle: `backgroundImage: 'linear-gradient(315deg, #222222 50%, #000000 50%)',
backgroundSize: '20px 20px'`,
  },

  {
    id: "grid-faint",
    name: "Grid Faint",
    lightClasses:
      "bg-white bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]",
    darkClasses:
      "bg-black bg-[linear-gradient(to_right,#374151_1px,transparent_1px),linear-gradient(to_bottom,#374151_1px,transparent_1px)] [background-size:20px_20px]",
    lightStyle: `backgroundImage: 'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)', backgroundSize: '20px 20px'`,
    darkStyle: `backgroundImage: 'linear-gradient(to right, #374151 1px, transparent 1px), linear-gradient(to bottom, #374151 1px, transparent 1px)', backgroundSize: '20px 20px'`,
  },
  {
    id: "electric-diagonal",
    name: "Electric Diagonal",
    lightClasses:
      "bg-white bg-[repeating-linear-gradient(45deg,rgba(255,0,100,0.1)_0,rgba(255,0,100,0.1)_1px,transparent_1px,transparent_20px),repeating-linear-gradient(-45deg,rgba(255,0,100,0.1)_0,rgba(255,0,100,0.1)_1px,transparent_1px,transparent_20px)] [background-size:40px_40px]",
    darkClasses:
      "bg-black bg-[repeating-linear-gradient(45deg,rgba(255,0,100,0.2)_0,rgba(255,0,100,0.2)_1px,transparent_1px,transparent_20px),repeating-linear-gradient(-45deg,rgba(255,0,100,0.2)_0,rgba(255,0,100,0.2)_1px,transparent_1px,transparent_20px)] [background-size:40px_40px]",
    lightStyle: `backgroundImage: 'repeating-linear-gradient(45deg, rgba(255, 0, 100, 0.1) 0, rgba(255, 0, 100, 0.1) 1px, transparent 1px, transparent 20px), repeating-linear-gradient(-45deg, rgba(255, 0, 100, 0.1) 0, rgba(255, 0, 100, 0.1) 1px, transparent 1px, transparent 20px)', backgroundSize: '40px 40px'`,
    darkStyle: `backgroundImage: 'repeating-linear-gradient(45deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 20px), repeating-linear-gradient(-45deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 20px)', backgroundSize: '40px 40px'`,
  },
  {
    id: "checkerboard",
    name: "Checkerboard",
    lightClasses:
      "bg-white bg-[repeating-linear-gradient(45deg,#f3f4f6_0,#f3f4f6_25%,white_0,white_50%)] [background-size:40px_40px]",
    darkClasses:
      "bg-black bg-[repeating-linear-gradient(45deg,#1f2937_0,#1f2937_25%,black_0,black_50%)] [background-size:40px_40px]",
    lightStyle: `backgroundImage: 'repeating-linear-gradient(45deg, #f3f4f6 0, #f3f4f6 25%, white 0, white 50%)', backgroundSize: '40px 40px'`,
    darkStyle: `backgroundImage: 'repeating-linear-gradient(45deg, #1f2937 0, #1f2937 25%, black 0, black 50%)', backgroundSize: '40px 40px'`,
  },
  {
    id: "plus-grid",
    name: "Plus Grid",
    lightClasses:
      "bg-white bg-[radial-gradient(circle,rgba(0,0,0,0.25)_1px,transparent_0)] [background-size:24px_24px]",
    darkClasses:
      "bg-black bg-[radial-gradient(circle,rgba(255,255,255,0.25)_1px,transparent_0)] [background-size:24px_24px]",
    lightStyle: `backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.25) 1px, transparent 0)', backgroundSize: '24px 24px'`,
    darkStyle: `backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 0)', backgroundSize: '24px 24px'`,
  },
  {
    id: "stripes-vertical",
    name: "Stripes Vertical",
    lightClasses:
      "bg-white bg-[repeating-linear-gradient(to_right,#f3f4f6_0,#f3f4f6_2px,white_2px,white_8px)]",
    darkClasses:
      "bg-black bg-[repeating-linear-gradient(to_right,#1f2937_0,#1f2937_2px,black_2px,black_8px)]",
    lightStyle: `backgroundImage: 'repeating-linear-gradient(to right, #f3f4f6 0, #f3f4f6 2px, white 2px, white 8px)'`,
    darkStyle: `backgroundImage: 'repeating-linear-gradient(to right, #1f2937 0, #1f2937 2px, black 2px, black 8px)'`,
  },
  {
    id: "stripes-horizontal",
    name: "Stripes Horizontal",
    lightClasses:
      "bg-white bg-[repeating-linear-gradient(to_bottom,#f3f4f6_0,#f3f4f6_2px,white_2px,white_8px)]",
    darkClasses:
      "bg-black bg-[repeating-linear-gradient(to_bottom,#1f2937_0,#1f2937_2px,black_2px,black_8px)]",
    lightStyle: `backgroundImage: 'repeating-linear-gradient(to bottom, #f3f4f6 0, #f3f4f6 2px, white 2px, white 8px)'`,
    darkStyle: `backgroundImage: 'repeating-linear-gradient(to bottom, #1f2937 0, #1f2937 2px, black 2px, black 8px)'`,
  },
  {
    id: "dots-big",
    name: "Big Dots",
    lightClasses:
      "bg-white bg-[radial-gradient(#00000022_3px,transparent_4px)] [background-size:40px_40px]",
    darkClasses:
      "bg-black bg-[radial-gradient(#ffffff22_3px,transparent_4px)] [background-size:40px_40px]",
    lightStyle: `backgroundImage: 'radial-gradient(#00000022 3px, transparent 4px)', backgroundSize: '40px 40px'`,
    darkStyle: `backgroundImage: 'radial-gradient(#ffffff22 3px, transparent 4px)', backgroundSize: '40px 40px'`,
  },
  {
    id: "red-big-dots",
    name: "Custom Gradient Background",
    lightClasses:
      "bg-white bg-[linear-gradient(to_right,rgba(71,85,105,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(71,85,105,0.15)_1px,transparent_1px),radial-gradient(circle_at_50%_60%,rgba(236,72,153,0.15)_0%,rgba(168,85,247,0.05)_40%,transparent_70%)] [background-size:40px_40px]",
    darkClasses:
      "bg-black bg-[linear-gradient(to_right,rgba(71,85,105,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(71,85,105,0.15)_1px,transparent_1px),radial-gradient(circle_at_50%_60%,rgba(236,72,153,0.15)_0%,rgba(168,85,247,0.05)_40%,transparent_70%)] [background-size:40px_40px]",
    lightStyle:
      "backgroundImage: 'linear-gradient(to right, rgba(71, 85, 105, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(71, 85, 105, 0.15) 1px, transparent 1px), radial-gradient(circle at 50% 60%, rgba(236, 72, 153, 0.15) 0%, rgba(168, 85, 247, 0.05) 40%, transparent 70%)', backgroundSize: '40px 40px'",
    darkStyle:
      "backgroundImage: 'linear-gradient(to right, rgba(71, 85, 105, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(71, 85, 105, 0.15) 1px, transparent 1px), radial-gradient(circle at 50% 60%, rgba(236, 72, 153, 0.15) 0%, rgba(168, 85, 247, 0.05) 40%, transparent 70%)', backgroundSize: '40px 40px'",
  },
  {
    id: "waves-pattern",
    name: "Waves Pattern",
    lightClasses:
      "bg-white bg-[linear-gradient(to_bottom,rgba(0,123,255,0.1)_1px,transparent_1px)] [background-size:100%_20px]",
    darkClasses:
      "bg-black bg-[linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:100%_20px]",
    lightStyle:
      "backgroundImage: 'linear-gradient(to bottom, rgba(0, 123, 255, 0.1) 1px, transparent 1px)', backgroundSize: '100% 20px'",
    darkStyle:
      "backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '100% 20px'",
  },
  
  

  // Add more up to 50 total...
];
