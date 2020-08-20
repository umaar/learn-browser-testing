const puppeteer = require('puppeteer');

async function start() {
	const browser = await puppeteer.launch({headless: true});
	const page = await browser.newPage();
	
	await page.goto('https://en.wikipedia.org/wiki/Space');
	
	// await page.evaluate('document.title')
	const title = await page.title(); 
	
	const image = await page.$eval('meta[property="og:image" ]', el => el.content);
	
	const text = await page.$eval('h1', el => el.textContent);
	
	const links = await page.$$eval('#mw-content-text a', els => {
		return els.slice(0, 3).map(el => el.textContent)
	});
	
	console.log({
		title,
		image,
		text,
		links
	});
	
	await browser.close();
}

start();