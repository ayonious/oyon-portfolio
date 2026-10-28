import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import TagList from "./TagList";
import { tagContent } from "../config/siteContent";
import { storyContent } from "../config/storybook";

const meta = {
  title: "Shared/TagList",
  component: TagList,
  tags: ["autodocs"],
  args: { items: storyContent.packageProject.technologies, label: tagContent.technologiesUsed },
} satisfies Meta<typeof TagList>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Soft: Story = {};
export const Outline: Story = { args: { variant: "outline" } };
export const Dark: Story = { globals: { theme: "dark" } };
