import path from 'path';
import puppeteer from 'puppeteer';

const screenshotPath = path.join(process.cwd(), 'assets', 'type-text.png');

const browser = await puppeteer.launch({headless: true});
const page = await browser.newPage();

await page.goto('https://trix-editor.org/');
await page.focus('trix-editor');
await page.keyboard.type('Typing some text');
await page.screenshot({ path: screenshotPath });

await browser.close();