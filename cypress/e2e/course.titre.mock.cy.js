import * as courseMocks from "../mocks/course.mock";

describe("Course page empty course", () => {
  beforeEach(() => {
    cy.intercept("GET", "./src/services/courses/courses.service.ts");
    cy.fixture("../fixtures/course.mock.data.json").then((rc) => {
      courseMocks.getCourse(rc.getEmptyCourse, { author: 1 }, "pending");
    });
    cy.visit("http://localhost:3000/course");
    cy.wait("@getCourse");
  });

  it("Should show the empty course", () => {
    expect(cy.getCourse("empty course")).to.not.be.undefined;
    cy.getCourse("empty course").contains("Course is empty");
  });
});
