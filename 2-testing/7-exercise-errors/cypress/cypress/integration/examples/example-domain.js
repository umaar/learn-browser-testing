describe('my tests', () => {
	it('example domain', () => {
		nonexistant.method(); // delete this line
		cy.visit('https://example.com');
		cy.contains('This domain is for illustrative examples');
		cy.url().should('include', 'examples');
		cy.get('h1').should('have.text', 'An Example Domain');
	});
});