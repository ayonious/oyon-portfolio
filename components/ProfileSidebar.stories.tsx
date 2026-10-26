import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ProfileSidebar from "./ProfileSidebar";


const meta = {
  title: "Navigation/ProfileSidebar",
  component: ProfileSidebar,
  tags: ["autodocs"],
  decorators: [(Story) => <div className="lg:grid lg:grid-cols-[20rem_1fr]"><Story /></div>],
  parameters: { layout: "fullscreen" },
  args: {  },
} satisfies Meta<typeof ProfileSidebar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = { parameters: { nextjs: { navigation: { pathname: "/" } } } };
export const Work: Story = { parameters: { nextjs: { navigation: { pathname: "/work" } } } };
export const Mobile: Story = { globals: { viewport: { value: "mobile1", isRotated: false } } };
