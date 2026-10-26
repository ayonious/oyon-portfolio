import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import SkillGroup from "./SkillGroup";
import { skillGroups } from "../../config/skills";

const meta = {
  title: "Skills/SkillGroup",
  component: SkillGroup,
  tags: ["autodocs"],
  args: skillGroups.find(group => group.title === "Frameworks")!,
} satisfies Meta<typeof SkillGroup>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Frameworks: Story = {};
export const Languages: Story = { args: skillGroups.find(group => group.title === "Languages")! };
export const Cloud: Story = { args: skillGroups.find(group => group.title === "Cloud and infrastructure")! };

export const TestingAndTooling: Story = { args: skillGroups.find(group => group.title === "Testing and tooling")! };
