const puppeteer = require('puppeteer');

async function start() {
	const browser = await puppeteer.launch({headless: true});
	const page = await browser.newPage();
	
	await page.goto('https://twitter.com/umaar/status/1288781312816549888', {
		waitUntil: ['networkidle0']
	});
	
	const tweet = await page.$('[role="article"');
	await tweet.screenshot({ path: 'screenshot.png' });
	await browser.close();
}

start();
