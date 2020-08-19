const path = require('path');
const puppeteer = require('puppeteer');

async function start() {
	const filePath = path.join(process.cwd(), 'assets', 'facebook.pdf');

	const browser = await puppeteer.launch({headless: true});
	const page = await browser.newPage();
	
	await page.goto('https://facebook.com');
	await page.pdf({ path: filePath, format: 'A4' });
	
	await browser.close();
}

start();