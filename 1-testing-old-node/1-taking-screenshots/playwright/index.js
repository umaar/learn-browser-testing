const playwright = require('playwright');

function sleep(ms = 1000) {return new Promise((resolve) => setTimeout(resolve, ms))};

async function start() {
	for (const browserType of ['chromium', 'firefox', 'webkit']) {
		console.log(`Loading ${browserType}`);
		const browser = await playwright[browserType].launch({
			headless: false
		});
		const context = await browser.newContext();
		const page = await context.newPage();
		await page.goto('https://example.com');
		await page.screenshot({ path: `playwright-${browserType}-screenshot.png` });
		await sleep(2000);
		await browser.close();
	}
}

start();