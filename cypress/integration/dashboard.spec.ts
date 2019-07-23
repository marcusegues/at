describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('successfully submits a market order and saves to local storage', () => {
    // Select symbol ethbtc
    cy.get('[data-cy=currencyPairInput]').click();
    cy.get('[data-cy=currencyPair]')
      .contains('ethbtc')
      .click();

    // Add order quantity
    cy.get('[data-cy=quantityInput]').type('5');
    // Submit order
    cy.get('[data-cy=submitOrder]').click();

    // reload and check that localStorage is not empty
    cy.reload().should(() => {
      const orders = localStorage.getItem('orders');
      expect(orders).to.not.be.null;
      expect(orders).to.not.be.empty;
    });
  });

  it('successfully submits a limit order and saves to local storage', () => {
    // Select symbol ethbtc
    cy.get('[data-cy=currencyPairInput]').click();
    cy.get('[data-cy=currencyPair]')
      .contains('ethbtc')
      .click();

    // Select limit order
    cy.get('[data-cy=orderTypeInput]').click();
    cy.get('[data-cy=orderType]')
      .contains('Limit')
      .click();

    // Add order limit
    cy.get('[data-cy=limitInput]').type('10');

    // Add order quantity
    cy.get('[data-cy=quantityInput]').type('5');
    // Submit order
    cy.get('[data-cy=submitOrder]').click();

    // reload and check that localStorage is not empty
    cy.reload().should(() => {
      const orders = localStorage.getItem('orders');
      expect(localStorage.getItem('orders')).to.not.be.null;
      expect(orders).to.not.be.empty;
    });
  });
});
