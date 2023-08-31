beforeEach("Launch website page course", () => {
  cy.visit("http://localhost:3000/course/add");
});

it("Interacting with text fields", () => {
  cy.get('input[name="description"]')
    .click()

    .get('input[name="title"]')
    .type("Je suis un titre.")
    .should("have.value", "Je suis un titre.")

    .get('div[class="invalid-feedback"]')
    .contains("Ce champs est requis");
});
