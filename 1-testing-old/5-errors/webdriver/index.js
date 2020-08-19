require('chromedriver');
const webdriver = require('selenium-webdriver');
const assert = require('assert');

const {By, until} = webdriver;

async function start() {
	const driver = await new webdriver.Builder().forBrowser('chrome').build();

	try {
		await driver.get('https://example.com');
		await driver.findElement(By.css(`body > div > p:nth-child(3)`));
	
		/*
			If you want to exlpore what methods are on the `until` object
			Try this: console.log(until);
		*/
		await driver.wait(until.title('Example Domain'));
		const script = `return document.queryselector('h1').innerText`;
		const h1 = await driver.executeScript(script);
		assert.strictEqual(h1, 'Example Domain');
	} finally {
		await driver.quit();
	}
}

start();