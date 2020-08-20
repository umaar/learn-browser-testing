const URL = require('URL');
const puppeteer = require('puppeteer');

function sleep(ms = 1000) {return new Promise((resolve) => setTimeout(resolve, ms))};

async function start() {
	const browser = await puppeteer.launch({
		headless: false
	});
	
	const page = await browser.newPage();
	
	await page.setRequestInterception(true)
	
	page.on('request', async request => {
		const pathname = URL.parse(request.url()).pathname || '';
		
		if (pathname.endsWith('.css') || pathname.endsWith('.js')) {
			await request.abort();
		} else {
			await request.continue();
		}
	});
	
	await page.goto('https://www.walmart.com/ip/Mainstays-1-7-Liter-Plastic-Electric-Kettle-White/471494848');
	
	await sleep(5000);
	
	await browser.close();
}

start();