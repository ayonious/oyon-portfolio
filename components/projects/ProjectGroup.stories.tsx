import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ProjectGroup from "./ProjectGroup";
import { openSourceProjectsConfig } from "../../config/projects";

const meta = {
  title: "Projects/ProjectGroup",
  component: ProjectGroup,
  tags: ["autodocs"],

  args: { ...openSourceProjectsConfig.profile },
} satisfies Meta<typeof ProjectGroup>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Cards: Story = {};
export const List: Story = { args: { view: "list" } };
export const Limited: Story = { args: { limit: 1 } };
export const Empty: Story = { args: { projects: [] } };
