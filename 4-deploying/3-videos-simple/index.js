import {chromium} from 'playwright';
import {mkdirSync} from 'fs';
import path from 'path';
import playwrightVideo from 'playwright-video';

const artifactsFolder = 'test-output'
const fullVideoPath = path.join(artifactsFolder, 'video.mp4');

mkdirSync(artifactsFolder, {recursive: true});

console.log('Launching Chrome');

const browser = await chromium.launch({
	slowMo: 100,
	args: ['--no-sandbox', '--disable-setuid-sandbox']
});

const context = await browser.newContext();
const page = await context.newPage();
page.setDefaultTimeout(5000);

const capture = await playwrightVideo.saveVideo(page, fullVideoPath);

try {
	await page.goto('https://umaar.com/');
	await page.click(`a[href$="/dev-tips/"]`);
	await page.click(`a[href$="/blog/"]`);
	await page.click(`a[href$="/videos/"]`);
	await page.click(`a[href$="/code/"]`);
} finally {
	await capture.stop();
	await browser.close();
	console.log('Closed browser');
}