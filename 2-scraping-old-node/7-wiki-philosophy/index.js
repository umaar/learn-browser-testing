const puppeteer = require('puppeteer');
const clean = require('./clean.js');

async function start() {
	const browser = await puppeteer.launch({
		headless: false
	});
	
	const page = await browser.newPage();
	
	await page.setViewport({ width: 1280, height: 720 });
	
	await page.goto('http://en.wikipedia.org/wiki/Special:Random');
	// await page.goto('http://en.wikipedia.org/wiki/Aircraft');
	
	await page.exposeFunction('clean', clean);
	
	async function handleLink() {
		const firstLinkSelector = '.mw-parser-output > p > a[title]';
		const h1 = await page.$eval('h1', el => el.innerText);
	
		console.log('> ', h1);
		
		if (h1 === 'Philosophy') {
			return;
		}
	
		await page.evaluate(async () => {
			const para = document.querySelector('.mw-parser-output > p:not(.mw-empty-elt)');
			para.innerHTML = await clean(para.innerHTML);
		});
		
		await Promise.all([
			page.waitForNavigation({
				waitUntil: ['domcontentloaded']
			}),
			page.click(firstLinkSelector)
		]);
	
		return handleLink();
	}
	
	await handleLink();
	await browser.close();
}

start();