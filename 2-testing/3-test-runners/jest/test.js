describe('Example.com', () => {
	beforeAll(async () => {
		await page.goto('https://example.com');
	});

	it('Should have the correct title', async () => {
		await expect(page.title()).resolves.toMatch('Example Domain');
		await page.screenshot({path: 'jest-screenshot.png'});
	});
});
