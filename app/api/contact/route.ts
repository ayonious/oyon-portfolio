import { headers } from "next/headers";

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

  // Quietly accept bots that complete the honeypot so they do not learn which check failed.
  if (typeof payload.website === "string" && payload.website.trim()) {
    return Response.json({ message: "Message received." });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  const turnstileToken =
    typeof payload.turnstileToken === "string" ? payload.turnstileToken : "";

  if (
    !name ||
    name.length > 100 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    email.length > 254 ||
    message.length < 10 ||
    message.length > 5000 ||
    !turnstileToken
  ) {
    return jsonError("Please complete all fields and verification.", 400);
  }

  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  const resendApiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!turnstileSecret || !resendApiKey || !contactEmail || !fromEmail) {
    return jsonError("Contact service is not configured.", 503);
  }

  const requestHeaders = await headers();
  const turnstileResponse = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: turnstileSecret,
        response: turnstileToken,
        remoteip: requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "",
      }),
    },
  );

  const turnstileResult = (await turnstileResponse.json()) as { success?: boolean };
  if (!turnstileResponse.ok || !turnstileResult.success) {
    return jsonError("Verification failed. Please try again.", 400);
  }

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
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  });

  if (!resendResponse.ok) {
    return jsonError("Message delivery failed. Please try again later.", 502);
  }

  return Response.json({ message: "Message sent." });
}
