describe("Navigation", () => {
  it("should navigate to the course page id", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/course");

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="course/30"]').click();

    cy.get("button").contains("Se connecter");
  });
});
