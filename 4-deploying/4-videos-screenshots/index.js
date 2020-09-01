import {mkdirSync} from 'fs';
import path from 'path';
import {chromium} from 'playwright';
import playwrightVideo from 'playwright-video';

import tests1 from './test-1.js';
import tests2 from './test-2.js';
import tests3 from './test-3.js';

const artifactsFolder = path.join(process.cwd(), `test-output`);
mkdirSync(artifactsFolder, {recursive: true});

const fullVideoPath = path.join(artifactsFolder, 'video.mp4');

console.log('Launching Chrome');

const browser = await chromium.launch({
	slowMo: 50,
	args: ['--no-sandbox', '--disable-setuid-sandbox']
});

const context = await browser.newContext();
const page = await context.newPage();
page.setDefaultTimeout(5000);

const capture = await playwrightVideo.saveVideo(page, fullVideoPath);

async function takeScreenshot(page, testName) {
	const fileName = `${testName}.png`
	const fullScreenshotPath = path.join(artifactsFolder, fileName)

	await page.screenshot({
	  path: fullScreenshotPath
	});
}

const allTests = {...tests1, ...tests2, ...tests3};

for (const [testName, testFunction] of Object.entries(allTests)) {
	console.log(`\n> Running: ${testName}`);
    try {
        await testFunction(page);
		await takeScreenshot(page, `PASS - ${testName}`);
        console.log(`\tPass`);
    } catch (error) {
		await takeScreenshot(page, `FAIL - ${testName}`);
		await capture.stop();
        await browser.close();
        console.log('\tFail\n', error);
        process.exit(1);
    }
}

await capture.stop();
await browser.close();
console.log('\nAll tests passed! ✅️');