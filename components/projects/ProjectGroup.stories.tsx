import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { openSourceProjectsConfig } from "../../config/projects";
import ProjectGroup from "./ProjectGroup";

const meta = {
  title: "Pages/Open source/Project group",
  component: ProjectGroup,
} satisfies Meta<typeof ProjectGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Cards: Story = { args: openSourceProjectsConfig.organization };
export const List: Story = { args: openSourceProjectsConfig.templates };
