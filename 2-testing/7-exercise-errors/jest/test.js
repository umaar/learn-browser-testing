describe('Example.com', () => {
	beforeAll(async () => {
		await page.goto('https://example.com');
	});

	it('Should have the correct title', async () => {
		await expect(page.title).resolves.toMatch('Example Domain'); // tip: should it be `.title` or `.title()`?
		await expect(page).toMatch('without prior co-ordination');
		await expect(page).toClick('a', { text: 'More information....' })
	});
});