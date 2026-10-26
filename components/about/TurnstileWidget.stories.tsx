import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import TurnstileWidget from "./TurnstileWidget";
import { storyContent } from "../../config/storybook";

const meta = {
  title: "About/TurnstileWidget",
  component: TurnstileWidget,
  tags: ["autodocs"],
  args: { siteKey: storyContent.verification.siteKey, resetSignal: 0, onTokenChange: fn() },
} satisfies Meta<typeof TurnstileWidget>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Verification: Story = {};
export const TokenFeedback: Story = {
  render: function TokenFeedback(args) {
    const [token, setToken] = useState("");
    return <><TurnstileWidget {...args} onTokenChange={value => { setToken(value); args.onTokenChange(value); }} /><output>{token}</output></>;
  },
};
