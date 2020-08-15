import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({
	headless: false
});
const page = await browser.newPage();
global.page = page;
await page.setViewport({ width: 1280, height: 720 });
await page.goto('https://example.com');

console.log('Ready to debug!');
debugger;

await browser.close();
