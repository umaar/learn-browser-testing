const chromium = require('chrome-aws-lambda')
const puppeteer = require('puppeteer-core');
const { launch } = require('puppeteer-core');

async function launchBrowser() {
	const executablePath = await chromium.executablePath;
		
	return puppeteer.launch({
		args: chromium.args,
		executablePath: executablePath,
		headless: chromium.headless
	});
}

exports.handler = async ({queryStringParameters}) => {
	const {url = "https://umaar.com"} = queryStringParameters;
	let screenshot = null;
	let browser = null;

	try {
		console.log('Launching browser...');
		browser = await launchBrowser();
		const page = await browser.newPage()
		
		await page.goto(url, {
			waitUntil: ["domcontentloaded", "networkidle0"]
		});

		screenshot = await page.screenshot({
			encoding: 'base64'
		});
	} catch (error) {
		console.log(error);

		return {
			statusCode: 500,
			body: JSON.stringify({
				error
			})
		};
	} finally {
		if (browser !== null) {
			await browser.close();
		}
	}
	
	return {
		statusCode: 200,
		headers: {
			'Content-type': 'image/jpeg'
		},
		body: screenshot,
		isBase64Encoded: true
	}
}