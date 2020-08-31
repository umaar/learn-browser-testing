describe('Showcasing GitHub Actions', () => {
	beforeAll(async () => {
		await page.goto('about:blank');
	});

	it('Test 1', async () => {
		const result = await page.evaluate('1 + 1');
		expect(result).toBe(3);
	});
});