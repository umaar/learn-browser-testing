import puppeteer from 'puppeteer';

console.log('Opening puppeteer');

const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
});
const page = await browser.newPage();
await page.goto('https://example.com');

console.log('Page title = ', await page.title());

await browser.close();
console.log('Puppeteer finished');
