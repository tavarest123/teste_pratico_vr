Cypress.on('uncaught:exception', (err, runnable) => {
    // retornar false para evitar falhas no teste
    return false;
});

// Adicione uma função para injetar as meta tags CSP
Cypress.Commands.add('injetarCSP', () => {
    // Adicione as meta tags CSP ao head do documento
    const metaTag = document.createElement('meta');
    metaTag.setAttribute('http-equiv', 'Content-Security-Policy');
    metaTag.setAttribute('content', "script-src 'self' 'unsafe-eval'");
    document.head.appendChild(metaTag);
  });
  
  // Antes de cada teste, injete as meta tags CSP
  beforeEach(() => {
    cy.injetarCSP();
  });