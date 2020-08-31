describe('Showcasing GitHub Actions', () => {
	beforeAll(async () => {
		await page.goto('about:blank');
	});

	it('Test 1', async () => {
		const result = await page.evaluate('1 + 1');
		expect(result).toBe(2);
	});

	it('Test 2', async () => {
		const result = await page.evaluate('1 + 1');
		expect(result).toBe(2);
	});

	it('Test 3', async () => {
		const result = await page.evaluate('1 + 1');
		expect(result).toBe(3);
	});

	it('Test 4', async () => {
		const result = await page.evaluate('1 + 1');
		expect(result).toBe(2);
	});
});