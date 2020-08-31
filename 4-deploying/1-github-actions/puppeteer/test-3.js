import assert from 'assert';

const tests = {
	async 'This is a test in the test-3 file'(page) {
		await page.goto('about:blank');  
		const result = await page.evaluate('1 + 1');
		assert.equal(result, '2', 'The result is 2');
	},

	async 'This is another test in the test-3 file'(page) {
		await page.goto('about:blank');  
		const result = await page.evaluate('1 + 1');
		assert.equal(result, '2', 'The result is 2');
	}
};

export default tests;