import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { openSourceProjectsConfig } from "../../config/projects";
import ProjectCard from "./ProjectCard";

const meta = {
  title: "Pages/Open source/Project card",
  component: ProjectCard,
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithStars: Story = { args: { project: openSourceProjectsConfig.organization.projects[0] } };
export const WithDemo: Story = { args: { project: openSourceProjectsConfig.gamified.projects[0] } };
export const WithoutStars: Story = { args: { project: openSourceProjectsConfig.templates.projects[0] } };
