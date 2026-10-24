import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(254),
  message: z.string().trim().min(10, "Please write at least 10 characters.").max(5000),
  turnstileToken: z.string().min(1, "Please complete the verification."),
});

export type ContactFormData = z.infer<typeof contactSchema>;
