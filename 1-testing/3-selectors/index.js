// Cheat sheet for CSS selectors https://umaar.com/dev-tips/229-css-attribute-selectors/

import puppeteer from 'puppeteer';
import assert from 'assert';

const browser = await puppeteer.launch({headless: true});
const page = await browser.newPage();

await page.goto('https://en.wikipedia.org/wiki/Space');  

const expectedText = 'universe';

// All these selectors are valid and will match against Wikipedia
// Which one do you think is best? And why?
// Are any of these brittle?
const selectors = [
	'a[href="/wiki/Universe"]',
	'a[href="/wiki/universe" i]',
	'a[title="Universe"]',	
	'[title="Universe"]',
	'#content [title="Universe"]',
	'html body #content .mw-body-content [title="Universe"]',
	// '#mw-content-text > div > p:nth-child(6) > a:nth-child(12)'
];

for (const selector of selectors) {
	const text = await page.$eval(selector, el => el.textContent);
	assert.equal(text, expectedText);
}

// Searching by text on the page
// https://pptr.dev/#?product=Puppeteer&version=v5.2.1&show=api-pageevaluatepagefunction-args
// ^ see the part that says "Passing arguments to pageFunction:"
const text = await page.evaluate((expectedText) => {
	return [...document.querySelectorAll('a')]
		.find(element => element.textContent === expectedText)
		.textContent
}, expectedText);

assert.equal(text, expectedText)

await browser.close();