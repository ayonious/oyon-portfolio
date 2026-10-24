export const accentPalette = [
  { name: "Lavender", value: "lavender", color: "#8b5cf6" },
  { name: "Pink", value: "pink", color: "#db2777" },
  { name: "Amber", value: "amber", color: "#d97706" },
  { name: "Green", value: "green", color: "#059669" },
  { name: "Blue", value: "blue", color: "#2563eb" },
] as const;

export type Accent = (typeof accentPalette)[number]["value"];
