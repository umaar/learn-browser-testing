fixture `Getting Started`.page `https://example.com`;

test('My first test', async t => {
	await t.takeScreenshot({
		fullPage: true,
		path: './testcafe-screenshot.png'
	})
});