import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import BookList from "./BookList";
import { programmingBooks, otherBooks } from "../../config/books";

const meta = {
  title: "Reading/BookList",
  component: BookList,
  tags: ["autodocs"],

  args: { books: programmingBooks },
} satisfies Meta<typeof BookList>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Programming: Story = {};
export const OtherBooks: Story = { args: { books: otherBooks } };
export const Empty: Story = { args: { books: [] } };
