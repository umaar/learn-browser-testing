import playwright from 'playwright';
import util from 'util';
import installMouseHelper from './install-mouse-helper.js';

const sleep = util.promisify(setTimeout);

const settings = {
	url: 'https://www.wikipedia.org/',
	sleepDelay: 1000,
	windowSize: 600,
	mouseMovementStepDelay: 10,
	searchInputSelector: '#searchInput',
	windowPositionOffset: 200
};

async function startSequence(settings) {
	const browser = await playwright['chromium'].launch({
		headless: false,
		slowMo: 10,
		args: [
			`--window-size=${settings.windowSize},${settings.windowSize}`,
			`--window-position=${settings.windowPositionOffset},${settings.windowPositionOffset}`
		]
	});
	
	const context = await browser.newContext({
		viewport: {
			width: settings.windowSize,
			height: settings.windowSize
		}
	});
	
	const page = await context.newPage();
	
	await installMouseHelper(page);
	
	await page.goto(settings.url, {
		waitUntil: 'networkidle'
	});
	
	await sleep(settings.sleepDelay);
	
	await page.mouse.move(0, 0);
	
	async function getElementCoords(page, selector) {
		const result = await page.evaluate((selector) => {
			const el = document.querySelector(selector)
			const { top, left, width, height } = el.getBoundingClientRect();
		
			return {
				x: (width / 2) + left,
				y: top + (height / 2)
			}
		}, selector);
	
		return result;
	}
	
	const searchInputCoords = await getElementCoords(page, settings.searchInputSelector);
	
	await page.mouse.move(searchInputCoords.x, searchInputCoords.y, {steps: settings.mouseMovementStepDelay});
	await page.mouse.down();
	await page.mouse.up();
	
	await sleep(settings.sleepDelay);
	
	await page.type(settings.searchInputSelector, 'web browser', {delay: 60});
	
	await sleep(settings.sleepDelay);
	
	const hyperlinkCoords = await getElementCoords(page, 'a[href$="Web_browser"]');
	
	await page.mouse.move(hyperlinkCoords.x, hyperlinkCoords.y, {steps: settings.mouseMovementStepDelay});
	await sleep(settings.sleepDelay);
	
	await Promise.all([
		page.mouse.down(),
		page.mouse.up(),
		page.waitForNavigation()
	]);
	
	await sleep(3000);
	
	page.evaluate(() => {
		document.querySelector("#footer").scrollIntoView({
			behavior: 'smooth'
		});
	});
	
	await sleep(2000);
	
	await browser.close();
}

async function delayedStart(delay = 0, windowPositionOffset) {
	await sleep(delay);

	return startSequence({
		...settings,
		windowPositionOffset: windowPositionOffset
	});
}

await Promise.all([
	startSequence(settings),
	delayedStart(1000, settings.windowPositionOffset + 100),
	delayedStart(2000, settings.windowPositionOffset + 200)
]);