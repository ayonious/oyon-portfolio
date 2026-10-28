import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, waitFor, within } from "storybook/test";
import HeadingLink from "./HeadingLink";
import BrandIcon from "./BrandIcon";
import { workHistory } from "../config/workHistory";
import { programmingBooks } from "../config/books";
import { certifications } from "../config/certifications";
import { linkContent } from "../config/siteContent";

const company = workHistory[0];
const book = programmingBooks[0];
const course = certifications.find((item) => item.category === "course" && item.url)!;

const meta = {
  title: "Shared/HeadingLink",
  component: HeadingLink,
  tags: ["autodocs"],
  args: { href: company.url, children: company.company },
  decorators: [(Story) => <h2 className="pt-10 text-2xl font-bold"><Story /></h2>],
} satisfies Meta<typeof HeadingLink>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Company: Story = {
  play: async ({ canvasElement, args }) => {
    const link = within(canvasElement).getByRole("link");
    await expect(link).toHaveAccessibleName(company.company);
    await expect(link).toHaveAttribute("href", args.href);
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", "noopener noreferrer");
  },
};
export const WithBrandIcon: Story = {
  args: {
    className: "gap-2",
    children: <><BrandIcon name={company.company} />{company.company}</>,
  },
};
export const Book: Story = { args: { href: book.url, children: book.title } };
export const Course: Story = { args: { href: course.url, children: course.name } };
export const WithTooltip: Story = {
  args: { tooltip: linkContent.openWebsite },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole("link");
    await userEvent.tab();
    await expect(link).toHaveFocus();
    await expect(link).toHaveAttribute("title", linkContent.openWebsite);
    await waitFor(() => expect(canvas.getByText(linkContent.openWebsite)).toHaveStyle({ opacity: "1" }));
  },
};
export const Dark: Story = { globals: { theme: "dark" } };
