import assert from 'assert';

const tests = {
	async 'Single Dev Tips title'(page) {
		await page.goto('https://umaar.com/dev-tips/');
		await page.click(`a[href="/dev-tips/197-clear-site-data/"]`);
		const h1 = await page.$eval('h1', el => el.textContent);
		assert.equal(h1, 'Chrome DevTools: Quickly clear the data from a website');
	}
};

export default tests;