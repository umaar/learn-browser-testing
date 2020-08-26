import {promisify} from 'util'
import puppeteer from 'puppeteer';

const sleep = promisify(setTimeout);

function random() {
    return Math.random().toString(36).substr(2, 9);
}

async function closeBrowser(browser) {
	await sleep(2000);
	await browser.close();
}

async function openModernDevTools() {
	const browser = await puppeteer.launch({
		headless: false,
		slowMo: 3,
		// https://github.com/GoogleChrome/puppeteer/issues/2548#issuecomment-390077713
		args: [
			'--disable-features=site-per-process',
			'--no-sandbox',
			'--window-size=1000,1000',
		]
	});
	
	const page = await browser.newPage();
	await page.setViewport({ width: 1000, height: 1000 });
	
	await page.goto('http://localhost:3000', {
		waitUntil: ['load', 'domcontentloaded', 'networkidle0']
	});

	return {page, browser};
}

async function navigateToPaymentPage(page) {
	await Promise.all([
		page.waitForNavigation({
			waitUntil: ['load', 'domcontentloaded', 'networkidle0']
		}),
		page.click('[href="/pay"]')
	]);
}

async function fillAndSubmitPaymentForm(page) {
	await page.waitForSelector(`[name="__privateStripeFrame5"]`);

	const frames = page.frames();
	
	const email = `test+${random()}@blackhole.postmarkapp.com`
	await page.type('#user-email', email);
	
	
	const cc = frames.find(frame => frame.name() === '__privateStripeFrame5');
	const exp = frames.find(frame => frame.name() === '__privateStripeFrame6');
	const cvc = frames.find(frame => frame.name() === '__privateStripeFrame7');
	
	await cc.type('[name="cardnumber"]', '4242 4242 4242 4242');
	await exp.type('[name="exp-date"]', '0125');
	await cvc.type('[name="cvc"]', '123');
	
	await Promise.all([
		page.waitForNavigation({
			waitUntil: ['load', 'domcontentloaded', 'networkidle0']
		}),
		page.click('.buy-button')
	]);
}

export {
	openModernDevTools,
	navigateToPaymentPage,
	fillAndSubmitPaymentForm,
	closeBrowser
};