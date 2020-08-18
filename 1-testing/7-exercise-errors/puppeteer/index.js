import puppeteer from 'puppeteer';
import assert from 'assert';

const browser = await puppeteer.launch();
const page = await browser.newPage();

await page.goto('https://example.com');

await page.waitForSelector('h2', {
	timeout: 1000 // tip: the problem isn't this timeout
});

const pageTitle = await page.title();

await browser.close();

assert.strictEqual(pageTitle, 'Example');