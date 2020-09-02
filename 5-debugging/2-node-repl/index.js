const puppeteer = require('puppeteer');
const browser = await puppeteer.launch({headless: false});
const page = await browser.newPage();
await page.setViewport({ width: 600, height: 600 });
await page.goto('https://example.com');