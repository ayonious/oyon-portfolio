import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import BrandIcon from "./BrandIcon";
import { brandNames } from "./BrandIcon";

const meta = {
  title: "Shared/BrandIcon",
  component: BrandIcon,
  tags: ["autodocs"],
  render: (args) => <span className="inline-flex items-center gap-2"><BrandIcon {...args} />{args.name}</span>,
  args: { name: "React" },
} satisfies Meta<typeof BrandIcon>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Payment: Story = { args: { name: "Apple Pay" } };
export const EmailLogin: Story = { args: { name: "email login" } };
export const Gallery: Story = {
  render: () => <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">{brandNames.map(name => <span key={name} className="flex items-center gap-2"><BrandIcon name={name} />{name}</span>)}</div>,
};
