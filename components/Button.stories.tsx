import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, fn, userEvent, waitFor, within } from "storybook/test";
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
export const HoverTooltip: Story = {
  args: { tooltip: storyContent.buttonTooltip },
  decorators: [(Story) => <div className="px-20 pt-16"><Story /></div>],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    const tooltip = canvas.getByText(storyContent.buttonTooltip);
    await expect(button).toHaveAccessibleName(aboutContent.contactForm.submitLabel);
    await expect(tooltip).toHaveStyle({ opacity: "0" });
    await userEvent.hover(button);
    await waitFor(() => expect(tooltip).toHaveStyle({ opacity: "1" }));
    await userEvent.unhover(button);
    await waitFor(() => expect(tooltip).toHaveStyle({ opacity: "0" }));
    await userEvent.hover(button);
    await waitFor(() => expect(tooltip).toHaveStyle({ opacity: "1" }));
  },
};
export const HoverTooltipDark: Story = {
  ...HoverTooltip,
  globals: { theme: "dark" },
};
export const FocusTooltip: Story = {
  ...HoverTooltip,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.tab();
    await expect(canvas.getByRole("button")).toHaveFocus();
    await waitFor(() => expect(canvas.getByText(storyContent.buttonTooltip)).toHaveStyle({ opacity: "1" }));
  },
};
export const Dark: Story = { globals: { theme: "dark" } };
