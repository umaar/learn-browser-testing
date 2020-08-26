import puppeteer from 'puppeteer-extra';
import RecaptchaPlugin from 'puppeteer-extra-plugin-recaptcha';
import dotenv from 'dotenv';

dotenv.config();

function sleep(ms = 1000) {return new Promise((resolve) => setTimeout(resolve, ms))};

puppeteer.use(RecaptchaPlugin({
    provider: {
		id: '2captcha',
		token: process.env.CAPTCHA_TOKEN
    },
    visualFeedback: true
}));

const browser = await puppeteer.launch({ headless: false });
const page = await browser.newPage();

await page.goto('https://www.google.com/recaptcha/api2/demo');
await sleep(2000);

await page.solveRecaptchas();

await Promise.all([
	page.waitForNavigation(),
	page.click(`#recaptcha-demo-submit`)
]);

await page.screenshot({ path: 'response.png', fullPage: true });
await sleep(4000);
await browser.close()