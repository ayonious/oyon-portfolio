import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import PageHeader from "./PageHeader";
import Button from "./Button";
import { pageContent } from "../config/siteContent";

const meta = {
  title: "Shared/PageHeader",
  component: PageHeader,
  tags: ["autodocs"],
  args: { title: pageContent.books.title, introduction: pageContent.books.introduction },
} satisfies Meta<typeof PageHeader>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const WithAction: Story = {
  args: { children: <Button href={pageContent.books.goodreadsUrl} className="mt-5">{pageContent.books.goodreadsLabel}</Button> },
};
export const Dark: Story = { globals: { theme: "dark" } };
