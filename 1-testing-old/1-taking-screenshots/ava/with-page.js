const puppeteer = require('puppeteer');

async function withPage(t, run) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	try {
		await run(t, page);
	} finally {
		await page.close();
		await browser.close();
	}
}

module.exports = withPage;