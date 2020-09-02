import puppeteer from 'puppeteer';

console.log('Launching a new browser');

const browser = await puppeteer.launch({
	headless: false,
	args: [
		'--remote-debugging-port=9222'
	]
});