describe('my tests', () => {
	it('Has the correct title test 1', () => {
		cy.visit('https://example.com');
		cy.title().should('eq', 'Example Domain');
	});

	it('Has the correct title test 2', () => {
		cy.visit('https://example.com');
		cy.title().should('eq', 'Example Domain');
	});

	it('Has the correct title test 3', () => {
		cy.visit('https://example.com');
		cy.title().should('eq', 'Example.com');
	});
});
