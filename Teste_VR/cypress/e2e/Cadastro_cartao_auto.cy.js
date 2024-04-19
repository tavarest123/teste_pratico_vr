describe('Teste de adição de produto ao carrinho', () => {
  it('Deve adicionar um produto ao carrinho com sucesso', () => {
    // Acessar a home do portal web
    cy.visit('https://www.vr.com.br/');

    // Capturar a URL atual
    cy.window().then((win) => {
      const currentUrl = win.location.href;

      // Clicar no botão "Compre online" para navegar até a loja
      cy.get('#buttonCompreOnline').click();

      // Esperar até que a URL atual seja diferente da anterior
      cy.window().should('have.property', 'location').and('not.equal', currentUrl);
    });

    // Validar que a nova página foi carregada corretamente
    cy.url().should('include', 'https://loja.vr.com.br/');

    // Fechar o pop-up
    cy.get('.close-button').click();

    // Consentir com os cookies no site
    cy.get('[data-testid="terms-consent"]').click();

    // Selecionar a opção "Cartões VR"
    cy.contains('#btn-selecionar-modalidade-avulso').click();

    // Adicionar uma quantidade aleatória de cartões do produto "Auto"
    const quantidade = Math.floor(Math.random() * 5) + 1; // Gerar um número aleatório de 1 a 5
    for (let i = 0; i < quantidade; i++) {
      cy.contains('produto-auto-quantidade').click();
    }

    // Digitar um valor de crédito aleatório para o produto "Auto"
    const valorCredito = Math.floor(Math.random() * 100) + 1; // Gerar um número aleatório de 1 a 100
    cy.get('produto-auto-valor').type(valorCredito);

    // Clicar no botão "Adicionar ao carrinho"
    cy.contains('btn-adicionar-carrinho-auto').click();

    // Validar frase de confirmação
    cy.contains('Produto adicionado!').should('be.visible');

    // Clicar no mini-cart e validar informações estão corretas
    cy.get('btn-meu-carrinho')
    .click()
    .within(() => {
      cy.get('img[alt="Cartão Auto"]').should('be.visible'); // Verifica se o nome do produto está presente
      cy.contains(quantidadeAleatoria.toString()).should('exist'); // Verifica se a quantidade está presente
      cy.contains(`R$ ${valorCreditoAleatorio},00`).should('exist'); // Verifica se o valor está presente
    });
  });
});
