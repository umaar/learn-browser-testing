import path from 'path';
import puppeteer from 'puppeteer';

const filePath = path.join(process.cwd(), 'assets', 'emulate-device.png');

const pixel2 = puppeteer.devices['Pixel 2']
const browser = await puppeteer.launch();
const page = await browser.newPage();

await page.emulate(pixel2);
await page.goto('https://www.whatismybrowser.com/');
await page.screenshot({ path: filePath });

await browser.close();