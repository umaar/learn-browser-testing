describe('my tests', () => {
  it('takes a screenshot', () => {
    cy.visit('https://example.com');
    cy.screenshot();
  })
})