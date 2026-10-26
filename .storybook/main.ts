import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: ["../components/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-docs"],
  framework: "@storybook/nextjs-vite",
  staticDirs: ["../public"],
  viteFinal: async (viteConfig) => {
    const aliases = viteConfig.resolve?.alias ?? [];
    viteConfig.resolve = {
      ...viteConfig.resolve,
      alias: [
        { find: /^next\/script$/, replacement: fileURLToPath(new URL("./mocks/NextScript.tsx", import.meta.url)) },
        ...(Array.isArray(aliases) ? aliases : Object.entries(aliases).map(([find, replacement]) => ({ find, replacement }))),
      ],
    };
    viteConfig.define = {
      ...viteConfig.define,
      "process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY": JSON.stringify("storybook-preview"),
    };
    return viteConfig;
  },
  core: { disableTelemetry: true },
};

export default config;
