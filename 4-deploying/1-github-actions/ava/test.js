const test = require('ava');
const withPage = require('./with-page.js');

test('This is test 1', withPage, async (t, page) => {
	await page.goto('about:blank');  
	const result = await page.evaluate('1 + 1');
	t.is(result, 2, 'Value is 2');
});

test('This is test 2', withPage, async (t, page) => {
	await page.goto('about:blank');  
	const result = await page.evaluate('1 + 1');
	t.is(result, 2, 'Value is 2');
});

test('This is test 3', withPage, async (t, page) => {
	await page.goto('about:blank');  
	const result = await page.evaluate('1 + 1');
	t.is(result, 3, 'Value is 2');
});

test('This is test 4', withPage, async (t, page) => {
	await page.goto('about:blank');  
	const result = await page.evaluate('1 + 1');
	t.is(result, 2, 'Value is 2');
});

