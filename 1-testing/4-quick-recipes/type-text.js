import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({headless: true});
const page = await browser.newPage();

await page.goto('https://trix-editor.org/');
await page.focus('trix-editor');
await page.keyboard.type('Typing some text');
await page.screenshot({ path: 'assets/type-text.png' });

await browser.close();