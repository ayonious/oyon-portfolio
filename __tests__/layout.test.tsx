import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "@jest/globals";
import RootLayout, { metadata } from "../app/layout";

describe("root layout", () => {
  it("sets the site metadata", () => {
    expect(metadata).toMatchObject({
      title: "Basic Next.js Site",
      description: "A simple site with Home, About, and Contact pages.",
    });
  });

  it("renders the shared navigation and page content", () => {
    const document = new DOMParser().parseFromString(
      renderToStaticMarkup(
        <RootLayout>
          <h1>Test page</h1>
        </RootLayout>,
      ),
      "text/html",
    );

    expect(document.documentElement.getAttribute("lang")).toBe("en");
    expect(document.querySelector("nav")?.getAttribute("aria-label")).toBe(
      "Main navigation",
    );
    expect(
      Array.from(document.querySelectorAll("nav a"), (link) => [
        link.textContent,
        link.getAttribute("href"),
      ]),
    ).toEqual([
      ["Home", "/"],
      ["About", "/about"],
      ["Contact", "/contact"],
    ]);
    expect(document.querySelector("main")?.textContent).toBe("Test page");
  });
});
