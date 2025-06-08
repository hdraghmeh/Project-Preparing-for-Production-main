describe('🧭 Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');
  });

  it('Navigates to "Card Sets" page', () => {
    cy.get('[data-cy=nav-card-sets]').click();
    cy.contains('Create Set').should('be.visible');
  });

  it('Navigates to "About" page', () => {
    cy.get('[data-cy=nav-about]').click();
    cy.contains('About Study Night').should('be.visible');
  });

  it('Navigates to "Home" page', () => {
    cy.get('[data-cy=nav-home]').click();
    cy.contains('Welcome to Study Night').should('be.visible');
  });
});
