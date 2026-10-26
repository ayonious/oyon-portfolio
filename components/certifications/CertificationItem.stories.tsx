import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import CertificationItem from "./CertificationItem";
import { certifications } from "../../config/certifications";
import { pageContent } from "../../config/siteContent";

const meta = {
  title: "Certifications/CertificationItem",
  component: CertificationItem,
  tags: ["autodocs"],

  args: { certification: certifications[0], completedLabel: pageContent.certifications.sections[0].statusLabel, dateLabel: pageContent.certifications.sections[0].dateLabel },
} satisfies Meta<typeof CertificationItem>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Education: Story = {};
export const Course: Story = { args: { certification: certifications[2], completedLabel: pageContent.certifications.completedLabel, dateLabel: pageContent.certifications.sections[2].dateLabel } };
