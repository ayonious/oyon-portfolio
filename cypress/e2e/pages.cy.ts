describe("site pages", () => {
  it("loads the home page and follows the About link", () => {
    cy.visit("/");

    cy.contains("h1", "Home").should("be.visible");
    cy.contains("a", "Learn more about us →").click();
    cy.location("pathname").should("equal", "/about");
    cy.contains("h1", "About").should("be.visible");
  });

  it("navigates to every page from the main navigation", () => {
    cy.visit("/");

    cy.get('nav[aria-label="Main navigation"]')
      .contains("a", "Contact")
      .click();
    cy.location("pathname").should("equal", "/contact");
    cy.contains("h1", "Contact").should("be.visible");
    cy.contains("a", "hello@example.com").should(
      "have.attr",
      "href",
      "mailto:hello@example.com",
    );

    cy.get('nav[aria-label="Main navigation"]')
      .contains("a", "Home")
      .click();
    cy.location("pathname").should("equal", "/");
  });
});
