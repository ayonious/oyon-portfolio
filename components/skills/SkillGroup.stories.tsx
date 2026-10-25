import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { skillGroups } from "../../config/skills";
import SkillGroup from "./SkillGroup";

const meta = {
  title: "Pages/Skills/Skill group",
  component: SkillGroup,
  decorators: [(Story) => <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900"><Story /></div>],
} satisfies Meta<typeof SkillGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Frameworks: Story = { args: skillGroups[0] };
export const ProductDomains: Story = { args: skillGroups[10] };
