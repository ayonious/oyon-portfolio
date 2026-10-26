import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import BrandText from "./BrandText";
import { workProjects } from "../config/workProjects";

const meta = {
  title: "Shared/BrandText",
  component: BrandText,
  tags: ["autodocs"],

  args: { text: workProjects[4].action },
} satisfies Meta<typeof BrandText>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Payments: Story = {};
export const Authentication: Story = { args: { text: workProjects[5].action } };
