/** @jest-environment node */

import { afterAll, beforeEach, describe, expect, it, jest } from "@jest/globals";
import { POST } from "../app/api/contact/route";

const originalEnvironment = {
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
  CONTACT_EMAIL: process.env.CONTACT_EMAIL,
  TURNSTILE_SECRET_KEY: process.env.TURNSTILE_SECRET_KEY,
};

const validPayload = {
  name: "Visitor",
  email: "visitor@example.com",
  message: "Hello from the form",
  turnstileToken: "verified-token",
};

function requestWith(payload: Record<string, unknown>): Request {
  return {
    json: async () => payload,
  } as unknown as Request;
}

describe("contact API route", () => {
  beforeEach(() => {
    process.env.RESEND_API_KEY = "re_test";
    process.env.RESEND_FROM_EMAIL = "onboarding@resend.dev";
    process.env.CONTACT_EMAIL = "owner@example.com";
    process.env.TURNSTILE_SECRET_KEY = "turnstile-secret";
    jest.restoreAllMocks();
  });

  afterAll(() => {
    Object.assign(process.env, originalEnvironment);
  });

  it("rejects malformed JSON", async () => {
    const request = {
      headers: { get: () => null },
      json: async () => {
        throw new Error("Malformed JSON");
      },
    } as unknown as Request;

    const response = await POST(request);

    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toEqual({ message: "Invalid request." });
  });

  it("rejects fields that do not match the shared schema", async () => {
    const response = await POST(
      requestWith({ name: "", email: "not-an-email", message: "short" }),
    );

    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toEqual({
      message: "Please complete all fields.",
    });
  });

  it.each([
    "RESEND_API_KEY",
    "RESEND_FROM_EMAIL",
    "CONTACT_EMAIL",
    "TURNSTILE_SECRET_KEY",
  ] as const)("reports a missing %s configuration", async (variable) => {
    delete process.env[variable];

    const response = await POST(
      requestWith(validPayload),
    );

    expect(response.status).toBe(503);
  });

  it("returns an error when Resend rejects delivery", async () => {
    jest
      .spyOn(global, "fetch")
      .mockResolvedValueOnce(
        new Response(JSON.stringify({ success: true }), { status: 200 }),
      )
      .mockResolvedValueOnce({ ok: false } as Response);

    const response = await POST(requestWith(validPayload));

    expect(response.status).toBe(502);
    await expect(response.json()).resolves.toEqual({
      message: "Message delivery failed. Please try again later.",
    });
  });

  it("sends identifiable HTML and text emails with a reply address", async () => {
    const fetchMock = jest
      .spyOn(global, "fetch")
      .mockResolvedValueOnce(
        new Response(JSON.stringify({ success: true }), { status: 200 }),
      )
      .mockResolvedValueOnce({ ok: true } as Response);

    const response = await POST(
      requestWith(
        {
          name: `A&B <Admin> "quote" 'single'`,
          email: "visitor@example.com",
          message: "Hello <script>&\nThis came from the portfolio.",
          turnstileToken: "verified-token",
        },
      ),
    );

    expect(response.status).toBe(200);
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(fetchMock.mock.calls[0][0]).toBe(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    );
    expect(String(fetchMock.mock.calls[0][1]?.body)).toContain(
      "response=verified-token",
    );
    const [, options] = fetchMock.mock.calls[1];
    const body = JSON.parse(String(options?.body));

    expect(body).toMatchObject({
      from: "onboarding@resend.dev",
      to: ["owner@example.com"],
      reply_to: "visitor@example.com",
      subject: `New portfolio contact: A&B <Admin> "quote" 'single'`,
    });
    expect(body.text).toContain("New message from your portfolio website");
    expect(body.text).toContain("This came from the portfolio.");
    expect(body.html).toContain("A&amp;B &lt;Admin&gt; &quot;quote&quot; &#039;single&#039;");
    expect(body.html).toContain("Hello &lt;script&gt;&amp;<br />This came from the portfolio.");
  });

  it("rejects a token that Cloudflare marks as invalid", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue(
      new Response(JSON.stringify({ success: false }), { status: 200 }),
    );

    const response = await POST(requestWith(validPayload));

    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toEqual({
      message: "Verification failed. Please try again.",
    });
  });

  it("continues only when Cloudflare returns the boolean value true", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue(
      new Response(JSON.stringify({ success: "true" }), { status: 200 }),
    );

    const response = await POST(requestWith(validPayload));

    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toEqual({
      message: "Verification failed. Please try again.",
    });
  });

  it.each(["http-error", "network-error"])(
    "reports Turnstile as unavailable after a %s",
    async (failure) => {
      const fetchMock = jest.spyOn(global, "fetch");
      if (failure === "http-error") {
        fetchMock.mockResolvedValue({ ok: false } as Response);
      } else {
        fetchMock.mockRejectedValue(new Error("Network unavailable"));
      }

      const response = await POST(requestWith(validPayload));

      expect(response.status).toBe(502);
      await expect(response.json()).resolves.toEqual({
        message: "Verification service is unavailable. Please try again.",
      });
    },
  );

});
