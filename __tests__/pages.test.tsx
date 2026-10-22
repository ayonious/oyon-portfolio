import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import HomePage from "../app/page";
import AboutPage from "../app/about/page";
import ContactPage from "../app/contact/page";

describe("site pages", () => {
  it("introduces Nahiyan and links to his profiles", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { name: "Hey, I'm Nahiyan!" }),
    ).toBeTruthy();
    expect(screen.getByText(/Senior Fullstack Software Engineer/i)).toBeTruthy();
    expect(
      screen.getByRole("link", { name: /GitHub/i }).getAttribute("href"),
    ).toBe("https://github.com/ayonious");
    expect(
      screen.getByRole("link", { name: /LinkedIn/i }).getAttribute("href"),
    ).toBe("https://www.linkedin.com/in/nahiyan-kamal-0782743a");
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
