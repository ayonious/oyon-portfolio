import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { otherBooks, programmingBooks } from "../../config/books";
import BookList from "./BookList";

const meta = {
  title: "Pages/Books/Book list",
  component: BookList,
} satisfies Meta<typeof BookList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProgrammingBooks: Story = { args: { books: programmingBooks } };
export const OtherBooks: Story = { args: { books: otherBooks } };
export const Empty: Story = { args: { books: [] } };
