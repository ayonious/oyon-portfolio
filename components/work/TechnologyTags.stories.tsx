import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import TechnologyTags from "./TechnologyTags";
import { workProjects } from "../../config/workProjects";

const meta = {
  title: "Work/TechnologyTags",
  component: TechnologyTags,
  tags: ["autodocs"],
  args: { technologies: workProjects[0].technologies },
} satisfies Meta<typeof TechnologyTags>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const PaymentPlatforms: Story = {
  args: { technologies: workProjects[4].technologies },
};
export const Empty: Story = { args: { technologies: [] } };
