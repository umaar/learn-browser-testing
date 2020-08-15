describe('my tests', () => {
	it('takes a screenshot', () => {
		cy.visit('https://duckduckgo.com/');

		cy.get('#search_form_input_homepage')
			.type('umar hansa')

		cy.get('input[type="submit"]')
			.click();

		// Cypress doesn't allow cross origins https://on.cypress.io/cross-origin-violation
		// cy.get(`a[href='https://umaar.com/']`).first().click();
		
		cy.title().should('eq', 'umar hansa at DuckDuckGo');
	});
})