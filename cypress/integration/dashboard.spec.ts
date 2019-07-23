describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('successfully submits a market order', () => {
    // Select symbol ethbtc
    cy.get('[data-cy=currencyPairInput]').click();
    cy.get('[data-cy=currencyPair]')
      .contains('ethbtc')
      .click();

    // Add order quantity
    cy.get('[data-cy=quantityInput]').type(5);
    // Submit order
    cy.get('[data-cy=submitOrder]').click();
    cy.reload();
  });
});
