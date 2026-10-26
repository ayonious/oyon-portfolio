import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ProjectStars from "./ProjectStars";
import { openSourceProjectsConfig } from "../../config/projects";

const meta = {
  title: "Projects/ProjectStars",
  component: ProjectStars,
  tags: ["autodocs"],

  args: { stars: openSourceProjectsConfig.profile.projects[0].stars },
} satisfies Meta<typeof ProjectStars>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const HiddenWhenZero: Story = { args: { stars: 0 } };
