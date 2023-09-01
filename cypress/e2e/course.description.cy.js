beforeEach("Launch website page course", () => {
  cy.visit("http://localhost:3000/course/add");
});

it("Interacting with text fields", () => {
  cy.get('input[name="description"]')
    .type("Je suis une description")
    .should("have.value", "Je suis une description")

    .get('input[name="title"]')
    .type(
      "Je suis un titre, mais seulement je suis beaucoup trop long. Et ce n'est pas prévu un titre aussi long."
    )
    .should(
      "have.value",
      "Je suis un titre, mais seulement je suis beaucoup trop long. Et ce n'est pas prévu un titre aussi long."
    )

    .get('div[class="invalid-feedback"]')
    .contains("Description trop courte");
});
