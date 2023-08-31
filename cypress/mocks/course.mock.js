export const getCourse = (response, userInfo, type) => {
  let endpoint = "http://localhost:3000/course";
  console.log(response);
  cy.intercept("GET", `${endpoint}`, response).as("getCourse");
};
