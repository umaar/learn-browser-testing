const puppeteer = require('puppeteer');
const assert = require('assert');
const {promisify} = require('util');

const sleep = promisify(setTimeout);

function random() {
    return Math.random().toString(36).substr(2, 9);
}

async function start() {
	const browser = await puppeteer.launch({
		headless: false,
		slowMo: 50,
		// https://github.com/GoogleChrome/puppeteer/issues/2548#issuecomment-390077713
		args: [
			'--disable-features=site-per-process',
			'--no-sandbox',
			'--window-size=1000,1000',
		]
	});
	
	const page = await browser.newPage();
	await page.setViewport({ width: 1000, height: 1000 });
	
	await page.goto('http://localhost:3000')  
	
	/*
		Order of operations
	
		1. Navigate to the payment page
			What does navigation involve exactly?
			When is the next page ready? - Anyone want to give this a shot?
		2. Fill in the payment fields
			What type of fields are they - iframe inputs?
		3. Submit the payment form
		4. Assert payment was successful
			Optional: Assert the email
	*/
	
	await Promise.all([
		page.waitForNavigation({
			waitUntil: ['load', 'domcontentloaded', 'networkidle0']
		}),
		page.click('[href="/pay"]')
	]);
	
	const title = await page.title();
	const expectedTitle = 'Purchase the Modern DevTools Course - Modern DevTools';
	
	assert.equal(title, expectedTitle, 'Page title is correct');
	const frames = page.frames();
	
	const email = `test+${random()}@blackhole.postmarkapp.com`
	await page.type('#user-email', email);
	
	const cc = frames.find(frame => frame.name() === '__privateStripeFrame5');
	const exp = frames.find(frame => frame.name() === '__privateStripeFrame6');
	const cvc = frames.find(frame => frame.name() === '__privateStripeFrame7');
	
	/*
		Tip: Don't forget these to work with iframes:
			--disable-features=site-per-process
			--no-sandbox
	*/
	
	await cc.type('[name="cardnumber"]', '4242 4242 4242 4242');
	
	await exp.type('[name="exp-date"]', '0125');
	
	await cvc.type('[name="cvc"]', '123');
	
	await Promise.all([
		page.waitForNavigation({
			waitUntil: ['load', 'domcontentloaded', 'networkidle0']
		}),
		page.click('.buy-button')
	]);
	
	assert.equal(await page.title(), 'Enter a new password - Modern DevTools', 'Page title is correct');
	
	
	await sleep(4000);
	await browser.close();
}

start();