describe('Comparar Custo-benefício de Smartphones', () => {
  it('Deve exibir o resultado com o comparativo dos smartphones', () => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    // Visitar o site
    cy.visit('https://www.tudocelular.com/compare');

    // Digitar o nome dos smartphones nas caixas de seleção
    cy.get('[id="sb1_text"]').type('iPhone 15 Pro Max{enter}');
    cy.contains('iPhone 15 Pro Max').click();
    cy.get('[id="sb1_text"]').type('Samsung Galaxy S24 Ultra{enter}');
    cy.contains('Samsung Galaxy S24 Ultra').click();

    // Clicar no botão de comparar
    cy.get('[id="comparabtn"]').click();
    //Vai para aba de NOTAS
    cy.contains('Custo-benefício').should('be.visible');

    // Faz a Compração do primeiro número
    cy.get('#\\39 107 > :nth-child(5) > :nth-child(1) > b')
      .invoke('text')
      .then(text => {
        // Converta o texto para um número inteiro
        const numero1 = parseInt(text.trim(), 10);

        // Faz a Compração do Segundo número
        cy.get('#\\38 890 > :nth-child(5) > :nth-child(1) > b').should('be.visible')
          .invoke('text')
          .then(text => {
            // Converta o texto para um número inteiro
            const numero2 = parseInt(text.trim(), 10);

            //Compare os números
            if (numero1>numero2) {
              cy.log(`O primeiro numero (${numero1}) é maior que o segundo número(${numero2})`);
            } else if (numero1<numero2) {
              cy.log(`O segundo numero (${numero2}) é maior que o primeiro número(${numero1})`);
            } else {
              cy.log('Os números são iguais!');
            }
          });
      });
  });
});