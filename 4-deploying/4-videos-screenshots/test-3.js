import assert from 'assert';

const tests = {
	async 'Single blog title'(page) {
		await page.goto('https://umaar.com/blog/');
		await page.click(`a[href="/blog/spreadsheet-to-compare-job-offers-in-tech/"]`);
		const h1 = await page.$eval('h1', el => el.textContent);
		assert.equal(h1, 'A spreadsheet to compare job offers');
	}
};

export default tests;