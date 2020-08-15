import 'chromedriver';
import webdriver from 'selenium-webdriver';
import {promises as fsPromise} from 'fs';

const {writeFile} = fsPromise;

const driver = await new webdriver.Builder().forBrowser('chrome').build();

try {
	await driver.get('https://example.com');
	const screenshot = await driver.takeScreenshot();
	await writeFile('./webdriver-screenshot.png', screenshot, 'base64');
} finally {
	await driver.quit();
}