beforeEach("Launch website page course", () => {
  cy.visit("http://localhost:3000/course/add");
});

it("Interacting with text fields", () => {
  cy.get('input[name="title"]')
    .type("Je suis un titre")
    .should("have.value", "Je suis un titre")

    .get('input[name="description"]')
    .type("Je suis un test, certe court mais un test quand même")
    .should(
      "have.value",
      "Je suis un test, certe court mais un test quand même"
    )

    .get('select[name="category"]')
    .eq(0)
    .select("Java")
    .should("have.value", 15)

    .get('input[name="place_available"]')
    .type(10)
    .should("have.value", 10)

    .get('input[name="date"]')
    .type("2024-05-05")
    .should("have.value", "2024-05-05")

    .get('input[name="time"]')
    .type("10:00")
    .should("have.value", "10:00")

    .get('input[name="duration"]')
    .type("195")
    .should("have.value", "195")

    .get('input[name="address address-search"]')
    .type("2 Rue De La Soif")
    .should("have.value", "2 Rue De La Soif")

    .get('input[name="city"]')
    .type("Châtellenot")
    .should("have.value", "Châtellenot")

    .get('input[name="state"]')
    .type("Côte-d'Or")
    .should("have.value", "Côte-d'Or")

    .get('input[name="country"]')
    .type("France")
    .should("have.value", "France")

    .get('input[name="postcode"]')
    .type(21320)
    .should("have.value", 21320);
});
