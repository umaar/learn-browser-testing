import puppeteer from 'puppeteer';

let browser = await puppeteer.connect({
	browserURL: 'http://localhost:9222/',
	headless: false
});

console.log('Connected to existing browser');

const [page] = await browser.pages();
await page.goto('https://example.com')