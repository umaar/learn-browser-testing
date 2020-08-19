const puppeteer = require('puppeteer');
const assert = require('assert');

async function start() {
    const selector = `a[href='https://umaar.com/']`;

    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });
    await page.goto('https://duckduckgo.com/', { waitUntil: 'networkidle2' })  
    
    await page.type('#search_form_input_homepage', 'umar hansa', { delay: 100 })
    
    await page.click('input[type="submit"]');
    await page.waitForSelector(selector);
    
    await Promise.all([
        page.waitForNavigation(),
        await page.click(selector)
    ]);
    
    const pageTitle = await page.title();
    await browser.close();
    
    console.log('Title: ', pageTitle);
    assert.strictEqual(pageTitle, 'Umar Hansa', 'Title is correct');
}

start();