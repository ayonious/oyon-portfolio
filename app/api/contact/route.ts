import { contactSchema } from "../../../config/contactSchema";
import { contactEmailContent } from "../../../config/contactEmail";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestCounts = new Map<string, { count: number; resetAt: number }>();

function getClientKey(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const current = requestCounts.get(key);

  if (!current || current.resetAt <= now) {
    requestCounts.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_MAX_REQUESTS;
}

function jsonError(message: string, status: number) {
  return Response.json({ message }, { status });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildEmailBody(name: string, email: string, message: string) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  return {
    text: `${contactEmailContent.heading}\n\n${contactEmailContent.introduction}\n\n${contactEmailContent.nameLabel}: ${name}\n${contactEmailContent.emailLabel}: ${email}\n\n${contactEmailContent.messageLabel}:\n${message}\n\n${contactEmailContent.replyHint}`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #253047; line-height: 1.6; max-width: 640px; margin: 0 auto;">
        <h1 style="font-size: 24px; margin-bottom: 12px;">${contactEmailContent.heading}</h1>
        <p style="color: #5f6878;">${contactEmailContent.introduction}</p>
        <div style="background: #f6f7f9; border-radius: 12px; padding: 20px; margin: 24px 0;">
          <p style="margin: 0 0 8px;"><strong>${contactEmailContent.nameLabel}:</strong> ${safeName}</p>
          <p style="margin: 0;"><strong>${contactEmailContent.emailLabel}:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
        </div>
        <h2 style="font-size: 18px; margin-bottom: 8px;">${contactEmailContent.messageLabel}</h2>
        <div style="border-left: 4px solid #253047; padding: 4px 0 4px 16px;">${safeMessage}</div>
        <p style="color: #5f6878; font-size: 14px; margin-top: 28px;">${contactEmailContent.replyHint}</p>
      </div>
    `,
  };
}

export async function POST(request: Request) {
  const clientKey = getClientKey(request);

  if (isRateLimited(clientKey)) {
    return jsonError("Too many messages. Please try again later.", 429);
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return jsonError("Invalid request.", 400);
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return jsonError("Please complete all fields.", 400);
  }
  const { name, email, message } = parsed.data;

  const resendApiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!resendApiKey || !contactEmail || !fromEmail) {
    return jsonError("Contact service is not configured.", 503);
  }

  const emailBody = buildEmailBody(name, email, message);

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [contactEmail],
      reply_to: email,
      subject: `${contactEmailContent.subjectPrefix}: ${name}`,
      text: emailBody.text,
      html: emailBody.html,
    }),
  });

  if (!resendResponse.ok) {
    return jsonError("Message delivery failed. Please try again later.", 502);
  }

  return Response.json({ message: "Message sent." });
}
