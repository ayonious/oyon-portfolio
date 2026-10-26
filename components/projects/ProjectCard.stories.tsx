import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ProjectCard from "./ProjectCard";
import { openSourceProjectsConfig } from "../../config/projects";
import { storyContent } from "../../config/storybook";

const meta = {
  title: "Projects/ProjectCard",
  component: ProjectCard,
  tags: ["autodocs"],

  args: { project: openSourceProjectsConfig.profile.projects[0] },
} satisfies Meta<typeof ProjectCard>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithDemo: Story = { args: { project: openSourceProjectsConfig.gamified.projects[0] } };
export const WithDownloads: Story = { args: { project: storyContent.packageProject } };
