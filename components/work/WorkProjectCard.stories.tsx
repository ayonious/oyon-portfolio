import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import WorkProjectCard from "./WorkProjectCard";
import { workProjects } from "../../config/workProjects";
import { pageContent } from "../../config/siteContent";

const meta = {
  title: "Work/WorkProjectCard",
  component: WorkProjectCard,
  tags: ["autodocs"],
  args: { project: workProjects[0], scaleTitle: pageContent.work.scaleTitle },
} satisfies Meta<typeof WorkProjectCard>;
export default meta;
type Story = StoryObj<typeof meta>;

export const EmailService: Story = {};
export const Payments: Story = { args: { project: workProjects[4] } };
export const Authentication: Story = { args: { project: workProjects[5] } };
