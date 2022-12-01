/// <reference types="Cypress" />

describe("testing the DOM elements of the app", () => {
  it("Should get the title of the home page", () => {
    cy.visit("http://localhost:3000");

    cy.title().should("eq", "Login");
  });

  it("should fill form", () => {
    cy.visit("http://localhost:3000/userform");

    cy.get("#name").type("User's Name");
    cy.get("#email").type("usermailexample@example.com");
    cy.get("#password").type("123456");
    cy.get("#update").click();
  });
});
