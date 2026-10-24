describe("portfolio pages", () => {
  const pages = [
    {
      label: "Work",
      path: "/work",
      heading: "Work history",
      content: "Selected work projects",
    },
    {
      label: "Open source",
      path: "/projects",
      heading: "Open-source projects",
      content: "Pinned personal repositories",
    },
    {
      label: "Skills",
      path: "/skills",
      heading: "Skills",
      content: "TypeScript",
    },
    {
      label: "AI",
      path: "/ai",
      heading: "AI",
      content: "Production work",
    },
    {
      label: "Books",
      path: "/reading",
      heading: "Books",
      content: "Programming-related books",
    },
    {
      label: "Certifications",
      path: "/certifications",
      heading: "Certifications",
      content: "telc Deutsch C1 Hochschule",
    },
    {
      label: "About me",
      path: "/about",
      heading: "About me",
      content: "Outside engineering",
    },
    {
      label: "About this site",
      path: "/about-this-site",
      heading: "About this site",
      content: "Major technologies",
    },
    {
      label: "Blog",
      path: "/blog",
      heading: "Blog",
      content: "Notes about software engineering",
    },
  ];

  beforeEach(() => {
    cy.visit("/");
  });

  it("shows the current homepage introduction", () => {
    cy.contains("h1", "Hey, I'm Nahiyan!").should("be.visible");
    cy.contains("Senior Fullstack Software Engineer").should("be.visible");
    cy.contains("Berlin, Germany").should("be.visible");
  });

  pages.forEach(({ label, path, heading, content }) => {
    it(`opens the ${label} tab and shows its content`, () => {
      cy.get('nav[aria-label="Main navigation"]')
        .contains("a", label)
        .should("be.visible")
        .click();

      cy.location("pathname").should("equal", path);
      cy.contains("h1", heading).should("be.visible");
      cy.contains(content).should("be.visible");
      cy.get(`nav[aria-label="Main navigation"] a[href="${path}"]`)
        .should("have.attr", "aria-current", "page")
        .and("be.visible");
    });
  });

  it("opens About me from the sidebar introduction", () => {
    cy.get('a[href="/about"]').contains("Nahiyan").click();
    cy.location("pathname").should("equal", "/about");
    cy.contains("h1", "About me").should("be.visible");
  });

  it("changes the theme and accent palette", () => {
    cy.get('button[aria-label^="Switch to"]').click();
    cy.window().its("localStorage.theme").should("match", /^(light|dark)$/);

    cy.get('button[aria-label="Choose accent color"]').click();
    cy.get('button[aria-label="Use Green accent"]').click();
    cy.get("html").should("have.attr", "data-accent", "green");
    cy.window().its("localStorage.accent").should("equal", "green");
  });

  it("links to the reusable portfolio repository", () => {
    cy.get('nav[aria-label="Main navigation"]')
      .contains("a", "About this site")
      .click();

    cy.contains("a", "View and reuse this site on GitHub")
      .should("be.visible")
      .and("have.attr", "href", "https://github.com/ayonious/oyon-portfolio");
  });
});
