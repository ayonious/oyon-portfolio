import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ThemeToggle from "./ThemeToggle";


const meta = {
  title: "Shared/ThemeToggle",
  component: ThemeToggle,
  tags: ["autodocs"],
  decorators: [(Story) => <div className="min-h-96 px-16 py-8"><Story /></div>],
  args: {  },
} satisfies Meta<typeof ThemeToggle>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Dark: Story = { globals: { theme: "dark" } };
