import path from 'path';
import puppeteer from 'puppeteer';

const filePath = path.join(process.cwd(), 'assets', 'facebook.pdf');

const browser = await puppeteer.launch({headless: true});
const page = await browser.newPage();

await page.goto('https://facebook.com');
await page.pdf({ path: filePath, format: 'A4' });

await browser.close();