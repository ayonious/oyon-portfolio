import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ScrollReveal from "./ScrollReveal";
import WorkProjectCard from "./work/WorkProjectCard";
import { workProjects } from "../config/workProjects";
import { pageContent } from "../config/siteContent";
import { storyContent } from "../config/storybook";

const meta = {
  title: "Shared/ScrollReveal",
  component: ScrollReveal,
  tags: ["autodocs"],
  
  args: { children: <WorkProjectCard project={workProjects[0]} scaleTitle={pageContent.work.scaleTitle} /> },
} satisfies Meta<typeof ScrollReveal>;
export default meta;
type Story = StoryObj<typeof meta>;

export const InView: Story = {};
export const BelowFold: Story = {
  render: args => <><p className="h-screen">{storyContent.scrollPrompt}</p><ScrollReveal {...args} /></>,
};
export const ListItem: Story = { args: { as: "li" }, decorators: [(Story) => <ul><Story /></ul>] };
