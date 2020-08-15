import assert from 'assert';

import 'chromedriver';
import webdriver from 'selenium-webdriver';

const {Builder, By, until} = webdriver;

let driver = await new Builder().forBrowser('chrome').build();

try {
	await driver.get('https://duckduckgo.com/');
	await driver.findElement(By.css('#search_form_input_homepage')).sendKeys('umar hansa');
	await driver.findElement(By.css('input[type="submit"]')).click();
	await driver.findElement(By.css(`a[href='https://umaar.com/']`)).click();
	await driver.wait(until.titleIs('Umar Hansa'));

	const pageTitle = await driver.getTitle();
	
	console.log('Title: ', pageTitle);
	assert.strictEqual(pageTitle, 'Umar Hansa', 'Title is correct');
} finally {
	await driver.quit();
}