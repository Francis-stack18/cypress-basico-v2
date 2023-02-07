Cypress.Commands.add("fillMandatoryFieldsAndSubmit", function () {
  cy.get("#firstName").type("Francis");
  cy.get("#lastName").type("Wilmsen");
  cy.get("#email").type("francis13322@gmail.com");
  cy.get("#open-text-area").type("Teste");
  cy.contains("button", "Enviar").click();
});
