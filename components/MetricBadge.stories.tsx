import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import MetricBadge from "./MetricBadge";
import { storyContent } from "../config/storybook";

const meta = {
  title: "Shared/MetricBadge",
  component: MetricBadge,
  tags: ["autodocs"],

  args: { ...storyContent.metric },
} satisfies Meta<typeof MetricBadge>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Downloads: Story = { args: { icon: storyContent.downloadStat.icon, label: storyContent.downloadStat.period, symbol: "↓", children: storyContent.downloadStat.label } };
