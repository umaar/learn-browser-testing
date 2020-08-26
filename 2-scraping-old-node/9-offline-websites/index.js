const puppeteer = require('puppeteer');

async function start() {
	const browser = await puppeteer.connect({
		browserURL: 'http://localhost:9222/',
		headless: false
	});
	
	const page = await browser.newPage();
	await page.setCacheEnabled(false);
	
	await page.goto('https://umaar.com/dev-tips/');
	
	/* Interact with the offline page below */
}

start();