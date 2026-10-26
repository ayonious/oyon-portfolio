import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import TopicTags from "./TopicTags";
import { programmingBooks } from "../config/books";

const meta = {
  title: "Shared/TopicTags",
  component: TopicTags,
  tags: ["autodocs"],
  
  args: { tags: programmingBooks[0].tags, title: programmingBooks[0].title },
} satisfies Meta<typeof TopicTags>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Empty: Story = { args: { tags: [] } };
