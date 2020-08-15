import test from 'ava';
import withPage from './with-page.js';

const url = 'example.com/';

test('Should have the correct page title', withPage, async (t, page) => {
	t.plan(2);
	await page.goto(url);
	await page.setViewport({ width: 1280, height: 720 });
	t.deepEqual(await page.title(), 'Example domain', 'page title is correct');
});