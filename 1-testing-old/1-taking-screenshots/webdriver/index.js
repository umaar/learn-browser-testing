require('chromedriver');
const webdriver = require('selenium-webdriver');
const fs = require('fs');

async function start() {
	const driver = await new webdriver.Builder().forBrowser('chrome').build();

	try {
		await driver.get('https://example.com');
		const screenshot = await driver.takeScreenshot();
		fs.writeFileSync('./webdriver-screenshot.png', screenshot, 'base64');
	} finally {
		await driver.quit();
	}
}

start();