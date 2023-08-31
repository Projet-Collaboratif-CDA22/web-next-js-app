beforeEach("Launch website page course", () => {
  cy.visit("http://localhost:3000/course/add");
});

it("Interacting with text fields", () => {
  cy.get('input[name="title"]')
    .click()

    .get('input[name="description"]')
    .type(
      "Je suis une description, mais seulement je suis beaucoup trop long. Et ce n'est pas prévu un titre aussi long."
    )
    .should(
      "have.value",
      "Je suis une description, mais seulement je suis beaucoup trop long. Et ce n'est pas prévu un titre aussi long."
    )

    .get('div[class="invalid-feedback"]')
    .contains("Ce champs est requis");
});
