import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ColorPalette from "./ColorPalette";


const meta = {
  title: "Shared/ColorPalette",
  component: ColorPalette,
  tags: ["autodocs"],
  decorators: [(Story) => <div className="min-h-96 px-16 py-8"><Story /></div>],
  args: {  },
} satisfies Meta<typeof ColorPalette>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Dark: Story = { globals: { theme: "dark" } };
