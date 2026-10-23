import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import HomePage from "../app/page";
import AboutPage from "../app/about/page";
import ContactPage from "../app/contact/page";

describe("site pages", () => {
  it("introduces Nahiyan and his work", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { name: "Hey, I'm Nahiyan!" }),
    ).toBeTruthy();
    expect(screen.getByText(/Senior Fullstack Software Engineer/i)).toBeTruthy();
    expect(screen.getByText(/I currently work at Omio/i)).toBeTruthy();
  });

  it("describes the project on the about page", () => {
    render(<AboutPage />);

    expect(screen.getByRole("heading", { name: "About me" })).toBeTruthy();
    expect(screen.getByText(/Senior Fullstack Software Engineer/i)).toBeTruthy();
  });

  it("provides an email link on the contact page", () => {
    render(<ContactPage />);

    expect(screen.getByRole("heading", { name: "Contact" })).toBeTruthy();
    expect(
      screen.getByRole("link", { name: "hello@example.com" }).getAttribute("href"),
    ).toBe("mailto:hello@example.com");
  });
});
