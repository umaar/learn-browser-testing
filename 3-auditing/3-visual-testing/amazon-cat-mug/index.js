import percy from '@percy/puppeteer';
import puppeteer from 'puppeteer';

const {percySnapshot} = percy;

const browser = await puppeteer.launch({
	headless: false,
	args: [
		'--window-size=1000,1000'
	]
});

const page = await browser.newPage();
await page.setViewport({ width: 1000, height: 1000 });

await page.goto('https://automatebrowsers.com/amazon/cat-mug/', {
	waitUntil: ['networkidle0']
});

await percySnapshot(page, 'Cat Mug Page');

await browser.close();