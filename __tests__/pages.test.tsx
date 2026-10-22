import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import HomePage from "../app/page";
import AboutPage from "../app/about/page";
import ContactPage from "../app/contact/page";

describe("site pages", () => {
  it("shows the home page and links to the about page", () => {
    render(<HomePage />);

    expect(screen.getByRole("heading", { name: "Home" })).toBeTruthy();
    expect(screen.getByText("Welcome to your basic Next.js site.")).toBeTruthy();
    expect(
      screen.getByRole("link", { name: /learn more about us/i }).getAttribute("href"),
    ).toBe("/about");
  });

  it("describes the project on the about page", () => {
    render(<AboutPage />);

    expect(screen.getByRole("heading", { name: "About" })).toBeTruthy();
    expect(screen.getByText(/built with Next.js and React/i)).toBeTruthy();
  });

  it("provides an email link on the contact page", () => {
    render(<ContactPage />);

    expect(screen.getByRole("heading", { name: "Contact" })).toBeTruthy();
    expect(
      screen.getByRole("link", { name: "hello@example.com" }).getAttribute("href"),
    ).toBe("mailto:hello@example.com");
  });
});
