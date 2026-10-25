import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { workHistory } from "../../config/workHistory";
import WorkHistoryCard from "./WorkHistoryCard";

const meta = {
  title: "Pages/Work/History card",
  component: WorkHistoryCard,
} satisfies Meta<typeof WorkHistoryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CurrentRole: Story = { args: { job: workHistory[0] } };
export const RoleWithoutTechnologyTags: Story = { args: { job: workHistory[2] } };
