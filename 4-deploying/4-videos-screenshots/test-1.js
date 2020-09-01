const tests = {
	async 'Menu Navigation'(page) {
		await page.goto('https://umaar.com/');
		await page.click(`a[href$="/dev-tips/"]`);
		await page.click(`a[href$="/blog/"]`);
		await page.click(`a[href$="/videos/"]`);
		await page.click(`a[href$="/code/"]`);
	}
};

export default tests;