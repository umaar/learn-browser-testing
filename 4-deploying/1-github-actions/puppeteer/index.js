import puppeteer from 'puppeteer';

import tests1 from './test-1.js';
import tests2 from './test-2.js';
import tests3 from './test-3.js';

const allTests = {...tests1, ...tests2, ...tests3};

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 720 });

for (const [testName, testFunction] of Object.entries(allTests)) {
    console.log(`\n> Running: ${testName}`);
    try {
        await testFunction(page);
        console.log(`\tPass`);
    } catch (error) {
        await browser.close();
        console.log('\tFail\n');
        console.log(error);
        process.exit(1);
    }
}

await browser.close();
console.log('\nAll tests passed! ✅️');
