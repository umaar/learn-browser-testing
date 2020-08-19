const qawolf = require("qawolf");
const assert = require("assert");
function sleep(ms = 1000) {return new Promise((resolve) => setTimeout(resolve, ms))};
let browser;
let page;

beforeAll(async () => {
  browser = await qawolf.launch();
  const context = await browser.newContext();
  await qawolf.register(context);
  page = await context.newPage();
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test("myWikipediaTest", async () => {
  await page.goto("https://www.wikipedia.org/");
  await page.click("#searchInput");
  await page.fill("#searchInput", "space");
  await page.press("#searchInput", "Enter");
  await page.fill("#searchInput", "web browser");
  await page.click('a[title="Web browser"]');
  assert.strictEqual(await page.title(), 'Web browser - Wikipedia');
});