import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import WorkHistoryCard from "./WorkHistoryCard";
import { workHistory } from "../../config/workHistory";

const meta = {
  title: "Work/WorkHistoryCard",
  component: WorkHistoryCard,
  tags: ["autodocs"],
  
  args: { job: workHistory[0] },
} satisfies Meta<typeof WorkHistoryCard>;
export default meta;
type Story = StoryObj<typeof meta>;

export const CurrentRole: Story = {};
export const Payments: Story = { args: { job: workHistory[1] } };
export const WithoutWebsite: Story = { args: { job: workHistory[2] } };
