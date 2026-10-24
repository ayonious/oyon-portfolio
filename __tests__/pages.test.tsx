import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import HomePage from "../app/page";
import AboutPage from "../app/about/page";
import ContactPage from "../app/contact/page";
import AboutThisSitePage from "../app/about-this-site/page";
import AiPage from "../app/ai/page";
import BlogPage from "../app/blog/page";
import CertificationsPage from "../app/certifications/page";
import ProjectsPage from "../app/projects/page";
import ReadingPage from "../app/reading/page";
import SkillsPage from "../app/skills/page";
import WorkHistoryPage from "../app/work/page";

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

  it("documents the site dependencies and reuse guidance", () => {
    render(<AboutThisSitePage />);

    expect(screen.getByRole("heading", { name: "About this site" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Major technologies" })).toBeTruthy();
    expect(
      screen
        .getByRole("link", { name: "View and reuse this site on GitHub →" })
        .getAttribute("href"),
    ).toBe("https://github.com/ayonious/oyon-portfolio");
  });

  it("shows AI work, tools, and capabilities", () => {
    render(<AiPage />);

    expect(screen.getByRole("heading", { name: "AI" })).toBeTruthy();
    expect(screen.getByText("LLM travel guide")).toBeTruthy();
    expect(screen.getByText("Codex")).toBeTruthy();
    expect(screen.getByText("LLM product integration")).toBeTruthy();
  });

  it("shows the blog introduction", () => {
    render(<BlogPage />);

    expect(screen.getByRole("heading", { name: "Blog" })).toBeTruthy();
    expect(screen.getByText(/Notes about software engineering/i)).toBeTruthy();
    expect(
      screen.getByRole("link", { name: "Visit my blog ↗" }).className,
    ).toContain("!text-white");
  });

  it("shows certifications and completed courses without credential IDs", () => {
    render(<CertificationsPage />);

    expect(
      screen.getByRole("heading", { name: "telc Deutsch C1 Hochschule" }),
    ).toBeTruthy();
    expect(screen.getByText("Result: Befriedigend")).toBeTruthy();
    expect(
      screen.getByRole("heading", { name: "Introduction to Psychology" }),
    ).toBeTruthy();
    expect(screen.queryByText(/Credential ID/)).toBeNull();
    expect(screen.queryByRole("link", { name: "Show credential ↗" })).toBeNull();
    expect(screen.getAllByText("Completed")).toHaveLength(4);
  });

  it("shows pinned and organization open-source projects", () => {
    render(<ProjectsPage />);

    expect(
      screen.getByRole("heading", { name: "Pinned personal repositories" }),
    ).toBeTruthy();
    expect(screen.getByRole("link", { name: "oyon-portfolio" })).toBeTruthy();
    expect(screen.getByText("Gatsby")).toBeTruthy();
    expect(
      screen.getByRole("heading", { name: "Gamified projects" }),
    ).toBeTruthy();
    expect(
      screen
        .getByRole("link", { name: "Play Explorer Bug ↗" })
        .getAttribute("href"),
    ).toBe("https://exploringbug.netlify.app");
    expect(screen.getAllByText("React").length).toBeGreaterThanOrEqual(2);
    expect(screen.getByRole("heading", { name: "Templates" })).toBeTruthy();
    expect(screen.getByRole("link", { name: /nextjs-template/ })).toBeTruthy();
    expect(screen.getByText("Next.js")).toBeTruthy();
    expect(
      screen.getByText(/Reusable starter repositories to help bootstrap/),
    ).toBeTruthy();
    expect(
      screen.getByRole("heading", { name: "Console Table Printer organization" }),
    ).toBeTruthy();
    expect(
      screen.getAllByRole("heading", { level: 2 }).map((heading) => heading.textContent),
    ).toEqual([
      "Pinned personal repositories",
      "Console Table Printer organization",
      "Gamified projects",
      "Templates",
    ]);
  });

  it("shows programming and leadership books", () => {
    render(<ReadingPage />);

    expect(
      screen.getByRole("heading", {
        name: "Software Engineering and Computer Science related books",
      }),
    ).toBeTruthy();
    expect(screen.getByRole("link", { name: "Clean Code" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "Surrounded by Idiots" })).toBeTruthy();
  });

  it("shows grouped engineering skills", () => {
    render(<SkillsPage />);

    expect(screen.getByRole("heading", { name: "Skills" })).toBeTruthy();
    expect(screen.getByText("TypeScript")).toBeTruthy();
    expect(screen.getAllByText("React Native")).toHaveLength(2);
  });

  it("shows work history and STAR project details", () => {
    render(<WorkHistoryPage />);

    expect(screen.getByRole("heading", { name: "Work history" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Selected work projects" })).toBeTruthy();
    expect(screen.getAllByText("Documented service scale")).toHaveLength(7);
    expect(screen.getByText(/Built a centralized backend service/)).toBeTruthy();
  });
});
