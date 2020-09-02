import puppeteer from 'puppeteer';

const browser = await puppeteer.launch();

const page = await browser.newPage();

page.on('console', msg => {
	console.log('\t\tLog: ', msg.text(), msg.location().url);
});

await page.goto('https://reddit.com', {
	waitUntil: ['networkidle0']
});

await browser.close();
