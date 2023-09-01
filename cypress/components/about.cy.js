// pages/about.cy.js
import Courses from "../../src/pages/courses";

describe("<AboutPage />", () => {
  it("should render and display expected content", () => {
    // Mount the React component for the Courses page
    cy.mount(<Courses />);

    // The new page should contain an h1 with "Courses page"
    cy.get("h1").contains("Courses Page");

    // Validate that a link with the expected URL is present
    // *Following* the link is better suited to an E2E test
    cy.get('a[href="/"]').should("be.visible");
  });
});
