const puppeteer = require('puppeteer');

function sleep(ms = 1000) {return new Promise((resolve) => setTimeout(resolve, ms))};

async function start() {
	const browser = await puppeteer.launch({headless: false});
	const page = await browser.newPage();
	
	await page.goto('https://www.reddit.com/r/webdev/', {
		waitUntil: ['networkidle0']
	});
	
	const maxPages = 4;
	
	for (let currentPage = 0; currentPage < maxPages; currentPage++) {
		await sleep(4000);
		const tweets = await page.$$('[data-click-id="timestamp"]');
		console.log(`${tweets.length} posts. Scrolling the page...`);
		await page.evaluate(
			'window.scrollTo(0, document.body.scrollHeight)'
		);
	}
	
	await browser.close();
}

start();