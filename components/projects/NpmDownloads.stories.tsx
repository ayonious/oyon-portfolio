import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import NpmDownloads from "./NpmDownloads";
import { storyContent } from "../../config/storybook";

const meta = {
  title: "Projects/NpmDownloads",
  component: NpmDownloads,
  tags: ["autodocs"],
  
  args: { stat: storyContent.downloadStat },
} satisfies Meta<typeof NpmDownloads>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Dark: Story = { globals: { theme: "dark" } };
