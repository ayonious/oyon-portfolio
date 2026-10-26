import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Introduction from "./Introduction";


const meta = {
  title: "Home/Introduction",
  component: Introduction,
  tags: ["autodocs"],

  args: {  },
} satisfies Meta<typeof Introduction>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Mobile: Story = { globals: { viewport: { value: "mobile1", isRotated: false } } };
