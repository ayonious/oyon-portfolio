import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
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

export const Clickable: Story = {
  args: { url: openSourceProjectsConfig.profile.projects[0].url },
  play: async ({ canvasElement, args }) => {
    const link = within(canvasElement).getByRole("link");
    await expect(link).toHaveAttribute("href", args.url);
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", "noreferrer");
  },
};
