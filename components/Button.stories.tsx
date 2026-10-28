import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import Button from "./Button";
import { aboutContent } from "../config/siteContent";
import { storyContent } from "../config/storybook";

const meta = {
  title: "Shared/Button",
  component: Button,
  tags: ["autodocs"],
  args: { children: aboutContent.contactForm.submitLabel, onClick: fn() },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement, args }) => {
    const button = within(canvasElement).getByRole("button");
    await expect(button).toHaveAttribute("type", "button");
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
    button.focus();
    await userEvent.keyboard("{Enter}");
    await expect(args.onClick).toHaveBeenCalledTimes(2);
  },
};

export const Submit: Story = { args: { type: "submit" } };
export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvasElement, args }) => {
    const button = within(canvasElement).getByRole("button");
    await expect(button).toBeDisabled();
    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};
export const Sending: Story = {
  args: { disabled: true, children: aboutContent.contactForm.sendingLabel },
};
export const ExternalLink: Story = {
  args: {
    href: storyContent.packageProject.demoUrl!,
    children: storyContent.packageProject.demoLabel,
    target: "_blank",
    rel: "noreferrer",
  },
  play: async ({ canvasElement, args }) => {
    const link = within(canvasElement).getByRole("link");
    await expect(link).toHaveAttribute("href", args.href);
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", "noreferrer");
  },
};
export const Dark: Story = { globals: { theme: "dark" } };
