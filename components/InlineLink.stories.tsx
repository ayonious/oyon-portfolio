import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import InlineLink from "./InlineLink";
import { sidebarContent } from "../config/siteContent";

const meta = {
  title: "Shared/InlineLink",
  component: InlineLink,
  tags: ["autodocs"],
  args: { href: "/about", children: sidebarContent.introduction.linkText },
} satisfies Meta<typeof InlineLink>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Dark: Story = { globals: { theme: "dark" } };
