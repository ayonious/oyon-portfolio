import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import SkillGroup from "../components/skills/SkillGroup";
import { skillGroups } from "../config/skills";

const meta = {
  title: "Skills/SkillGroup",
  component: SkillGroup,
  tags: ["autodocs"],
  args: skillGroups[0],
} satisfies Meta<typeof SkillGroup>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Frameworks: Story = {};
export const Languages: Story = { args: skillGroups[2] };
export const Cloud: Story = { args: skillGroups[7] };
