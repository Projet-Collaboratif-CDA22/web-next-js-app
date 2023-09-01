beforeEach("Launch website page about", () => {
  cy.visit("http://localhost:3000/about");
});

it("Interacting with text fields", () => {
  cy.get('a[class="office-form"]')
    .contains("Un bug, une idée ? Par ici !")
    .invoke("attr", "href")
    .should("contain", "https://forms.office.com/e/CYGan3hAK6")
    .then((href) => {
      cy.visit(href);
    });
});
