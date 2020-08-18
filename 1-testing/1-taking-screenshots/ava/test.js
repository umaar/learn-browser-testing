import test from 'ava';
import withPage from './with-page.js';

const url = 'https://example.com/';

test('page title should be correct', withPage, async (t, page) => {
	await page.goto(url);
	await page.setViewport({width: 1280, height: 720});
	await page.screenshot({path: 'ava-screenshot.png'});

	t.true((await page.title()).includes('Example Domain'), 'Page title is correct');
});
