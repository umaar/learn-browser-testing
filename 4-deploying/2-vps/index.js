import puppeteer from 'puppeteer';

console.log('\nOpening puppeteer\n');

const browser = await puppeteer.launch({
	headless: true,
	args: ['--no-sandbox', '--disable-setuid-sandbox']
});
const page = await browser.newPage();
await page.goto('https://umaar.com');

console.log('Page title = ', await page.title());

await browser.close();
console.log('\nPuppeteer finished\n');
