import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({headless: true});
const page = await browser.newPage();

await page.goto('https://facebook.com');
await page.pdf({ path: 'assets/facebook.pdf', format: 'A4' });
await browser.close();