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
export const Sailboat: Story = {};
export const Megaphone: Story = { render: args => <Icons.MegaphoneIcon {...args} /> };
export const Menu: Story = { render: args => <Icons.MenuIcon {...args} /> };
export const Close: Story = { render: args => <Icons.CloseIcon {...args} /> };
export const Mail: Story = { render: args => <Icons.MailIcon {...args} /> };
export const TheaterMask: Story = { render: args => <Icons.TheaterMaskIcon {...args} /> };
export const Wrench: Story = { render: args => <Icons.WrenchIcon {...args} /> };
export const Sun: Story = { render: args => <Icons.SunIcon {...args} /> };
export const Moon: Story = { render: args => <Icons.MoonIcon {...args} /> };
export const Briefcase: Story = { render: args => <Icons.BriefcaseIcon {...args} /> };
export const Lightning: Story = { render: args => <Icons.LightningIcon {...args} /> };
export const Books: Story = { render: args => <Icons.BooksIcon {...args} /> };
export const Diploma: Story = { render: args => <Icons.DiplomaIcon {...args} /> };
export const Robot: Story = { render: args => <Icons.RobotIcon {...args} /> };
export const Paw: Story = { render: args => <Icons.PawIcon {...args} /> };
