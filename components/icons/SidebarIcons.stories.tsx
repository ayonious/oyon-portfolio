import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as Icons from "./SidebarIcons";

const meta = {
  title: "Navigation/SidebarIcons",
  component: Icons.SailboatIcon,
  tags: ["autodocs"],
  args: { className: "h-8 w-8 text-[var(--accent)]" },
} satisfies Meta<typeof Icons.SailboatIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Gallery: Story = {
  render: args => <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">{Object.entries(Icons).map(([name, Icon]) => <span key={name} className="flex items-center gap-2"><Icon {...args} />{name}</span>)}</div>,
};
