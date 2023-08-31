describe("Navigation", () => {
  it("should navigate to the course page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="course"]').click();

    // The new url should include "/course"
    cy.url().should("include", "/course");

    // The new page should contain an h1 with "Tous les cours"
    cy.get("h1").contains("Tous les cours");
  });
});
