import fs from 'fs';
import express from 'express';
import playwright from 'playwright';


async function startExpress() {
	const app = express();
	app.use(express.static('public'));

	return new Promise(resolve => {
		app.listen(3000, () => {
			console.log('App listening on 3000!');
			resolve();
		});
	})
}

await startExpress();

const settings = {
	url: 'http://localhost:3000',
	windowSize: 800,
	windowPositionOffset: 200
};

const pages = [];

for (const [index, browserType] of ['chromium', 'webkit'].entries()) {
	console.log(`${index}. Loading ${browserType}`);
	const browser = await playwright[browserType].launch({
		headless: false,
		args: [
			`--window-size=${settings.windowSize},${settings.windowSize}`,
			`--window-position=${settings.windowPositionOffset},${settings.windowPositionOffset * (index + 1)}`
		]
	});

	const context = await browser.newContext({
		viewport: {
			width: settings.windowSize,
			height: settings.windowSize
		}
	});

	const page = await context.newPage();
	await page.goto(settings.url);

	pages.push(page);
}

fs.watch('./public', async (_, filename) => {
	console.log(`${filename} changed, reloading`);
	for (const page of pages) {
		await page.reload();
	}
});