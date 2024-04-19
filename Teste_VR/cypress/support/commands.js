// cypress/support/commands.js

Cypress.Commands.add("removerTextoAposMarcadores", (string, marcadores) => {
    let resultado = string;
  
    marcadores.forEach((marcador) => {
      const index = resultado.indexOf(marcador);
      if (index !== -1) {
        resultado = resultado.substring(0, index).trim();
      }
    });
  
    return cy.wrap(resultado);
  });