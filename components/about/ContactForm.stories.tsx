import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";
import { contactSchema } from "../../config/contactSchema";
import ContactForm from "./ContactForm";
import { aboutContent } from "../../config/siteContent";

const meta = {
  title: "About/ContactForm",
  component: ContactForm,
  tags: ["autodocs"],
  beforeEach: (context) => {
    const originalFetch = window.fetch;
    window.fetch = async (input, init) => {
      const url = typeof input === "string" ? input : input instanceof URL ? input.pathname : new URL(input.url).pathname;
      if (url === "/api/contact") {
        return new Response(null, { status: context.parameters.contactStatus ?? 200 });
      }
      return originalFetch(input, init);
    };
    return () => { window.fetch = originalFetch; };
  },
} satisfies Meta<typeof ContactForm>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const DeliveryError: Story = { parameters: { contactStatus: 500 } };
export const ValidationErrors: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: aboutContent.contactForm.submitLabel }));
    await expect(canvas.getByLabelText(aboutContent.contactForm.nameLabel)).toHaveValue("");
    await expect(canvas.getByText(contactSchema.shape.name.safeParse("").error!.issues[0].message)).toBeVisible();
  },
};
