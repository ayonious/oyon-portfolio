import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { certifications } from "../../config/certifications";
import CertificationItem from "./CertificationItem";

const meta = {
  title: "Pages/Certifications/Certification item",
  component: CertificationItem,
  args: { completedLabel: "Completed" },
  decorators: [(Story) => <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900"><Story /></div>],
} satisfies Meta<typeof CertificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LanguageCertificate: Story = { args: { certification: certifications[0] } };
export const OnlineCourse: Story = { args: { certification: certifications[3] } };
