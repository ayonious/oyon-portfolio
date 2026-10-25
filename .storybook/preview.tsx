import type { Preview } from "@storybook/nextjs-vite";
import "../app/globals.css";

const preview: Preview = {
  parameters: {
    a11y: { test: "todo" },
    controls: { expanded: true },
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-4xl text-slate-950 dark:text-slate-50">
        <Story />
      </div>
    ),
  ],
};

export default preview;
