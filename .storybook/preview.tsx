import { MINIMAL_VIEWPORTS } from "storybook/viewport";
import { useEffect } from "react";
import type { Preview } from "@storybook/nextjs-vite";
import { accentPalette } from "../config/theme";
import "../app/globals.css";

const preview: Preview = {
  parameters: {
    viewport: { options: MINIMAL_VIEWPORTS },
    nextjs: { appDirectory: true },
    layout: "padded",
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
  },
  globalTypes: {
    theme: {
      description: "Portfolio color scheme",
      toolbar: { icon: "circlehollow", items: ["light", "dark"], dynamicTitle: true },
    },
    accent: {
      description: "Portfolio accent palette",
      toolbar: {
        icon: "paintbrush",
        items: accentPalette.map(({ name, value }) => ({ value, title: name })),
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { theme: "light", accent: "blue" },
  beforeEach: (context) => {
    const previousTheme = localStorage.getItem("theme");
    const previousAccent = localStorage.getItem("accent");
    localStorage.setItem("theme", context.globals.theme);
    localStorage.setItem("accent", context.globals.accent);
    return () => {
      if (previousTheme === null) localStorage.removeItem("theme");
      else localStorage.setItem("theme", previousTheme);
      if (previousAccent === null) localStorage.removeItem("accent");
      else localStorage.setItem("accent", previousAccent);
    };
  },
  decorators: [
    function PortfolioTheme(Story, context) {
      useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle("dark", context.globals.theme === "dark");
        root.dataset.accent = context.globals.accent;
      }, [context.globals.theme, context.globals.accent]);
      return <Story key={`${context.globals.theme}-${context.globals.accent}`} />;
    },
  ],
};

export default preview;
