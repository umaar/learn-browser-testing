const Differencify = require('differencify');

async function start() {
	const differencify = new Differencify();
	await differencify.launchBrowser();
	const target = differencify.init({
		testName: 'Cat mug', chain: false
	});
	
	const page = await target.newPage();
	await page.goto('https://automatebrowsers.com/amazon/cat-mug/', {
		waitUntil: ['networkidle0']
	});
	await page.setViewport({ width: 1600, height: 1200 });
	const priceBox = await page.$('.a-box-group');
	const image = await priceBox.screenshot();
	// const image = await page.screenshot();
	const identical = await target.toMatchSnapshot(image);
	await page.close();
	
	if (identical) {
		console.log('✅️  No change detected');
	} else {
		console.log('⚠️  A change has been detected');
	}
	
	await differencify.cleanup();	  
}

start();