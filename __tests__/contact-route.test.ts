/** @jest-environment node */

import { afterAll, beforeEach, describe, expect, it, jest } from "@jest/globals";
import { POST } from "../app/api/contact/route";

const originalEnvironment = {
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
  CONTACT_EMAIL: process.env.CONTACT_EMAIL,
};

function requestWith(
  payload: Record<string, unknown>,
  ipAddress?: string,
): Request {
  return {
    headers: {
      get: (name: string) =>
        name === "x-forwarded-for" ? (ipAddress ?? null) : null,
    },
    json: async () => payload,
  } as unknown as Request;
}

describe("contact API route", () => {
  beforeEach(() => {
    process.env.RESEND_API_KEY = "re_test";
    process.env.RESEND_FROM_EMAIL = "onboarding@resend.dev";
    process.env.CONTACT_EMAIL = "owner@example.com";
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
      requestWith({ name: "", email: "not-an-email", message: "short" }, "validation"),
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
  ] as const)("reports a missing %s configuration", async (variable) => {
    delete process.env[variable];

    const response = await POST(
      requestWith(
        { name: "Visitor", email: "visitor@example.com", message: "Hello from the form" },
        `missing-${variable}`,
      ),
    );

    expect(response.status).toBe(503);
  });

  it("returns an error when Resend rejects delivery", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({ ok: false } as Response);

    const response = await POST(
      requestWith(
        { name: "Visitor", email: "visitor@example.com", message: "Hello from the form" },
        "resend-error",
      ),
    );

    expect(response.status).toBe(502);
    await expect(response.json()).resolves.toEqual({
      message: "Message delivery failed. Please try again later.",
    });
  });

  it("sends identifiable HTML and text emails with a reply address", async () => {
    const fetchMock = jest
      .spyOn(global, "fetch")
      .mockResolvedValue({ ok: true } as Response);

    const response = await POST(
      requestWith(
        {
          name: `A&B <Admin> "quote" 'single'`,
          email: "visitor@example.com",
          message: "Hello <script>&\nThis came from the portfolio.",
        },
        "successful-delivery",
      ),
    );

    expect(response.status).toBe(200);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [, options] = fetchMock.mock.calls[0];
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

  it("limits repeated requests and accepts them after the window resets", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({ ok: true } as Response);
    const now = jest.spyOn(Date, "now").mockReturnValue(1_000);
    const request = () =>
      requestWith(
        { name: "Visitor", email: "visitor@example.com", message: "Hello from the form" },
        "rate-limited-client, proxy",
      );

    for (let attempt = 0; attempt < 5; attempt += 1) {
      expect((await POST(request())).status).toBe(200);
    }

    expect((await POST(request())).status).toBe(429);
    now.mockReturnValue(15 * 60 * 1_000 + 1_001);
    expect((await POST(request())).status).toBe(200);
  });
});
