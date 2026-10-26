import { useEffect } from "react";
import type { Preview } from "@storybook/nextjs-vite";
import { accentPalette } from "../config/theme";
import "../app/globals.css";

const preview: Preview = {
  parameters: {
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
  decorators: [
    function PortfolioTheme(Story, context) {
      useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle("dark", context.globals.theme === "dark");
        root.dataset.accent = context.globals.accent;
      }, [context.globals.theme, context.globals.accent]);
      return <Story />;
    },
  ],
};

export default preview;
