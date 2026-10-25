import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { workProjects } from "../../config/workProjects";
import WorkProjectCard from "./WorkProjectCard";

const meta = {
  title: "Pages/Work/Project card",
  component: WorkProjectCard,
  args: { scaleTitle: "Documented service scale" },
} satisfies Meta<typeof WorkProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PaymentProject: Story = { args: { project: workProjects[4] } };
export const AiProject: Story = { args: { project: workProjects[2] } };
