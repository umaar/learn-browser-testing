import puppeteer from 'puppeteer';
import HAR from 'puppeteer-har';

import {mkdirSync} from 'fs';
import path from 'path';

const artifactsFolder = path.join(process.cwd(), `test-output`);
mkdirSync(artifactsFolder, {recursive: true});

const browser = await puppeteer.launch();

const page = await browser.newPage();

const har = new HAR(page);

await har.start({
	path: path.join(artifactsFolder, 'http-archive.har')
});

await page.tracing.start({
	path: path.join(artifactsFolder, 'devtools.json')
});

await page.goto('https://moderndevtools.com/', {
	waitUntil: ['networkidle0']
});

await page.tracing.stop();

await har.stop();

await browser.close();