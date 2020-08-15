import puppeteer from 'puppeteer';

const browser = await puppeteer.launch();
const page = await browser.newPage();

await page.setViewport({ width: 1280, height: 720 });
await page.goto('https://example.com');

await page.screenshot({ path: 'screenshot.png' });

await browser.close();
