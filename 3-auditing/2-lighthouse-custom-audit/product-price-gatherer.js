const Gatherer = require('lighthouse').Gatherer;

class AmazonPrice extends Gatherer {
	afterPass({driver}) {
		const querySelector = `document.querySelector('#priceblock_ourprice').innerText`;
		return driver.evaluateAsync(querySelector)
	}
}

module.exports = AmazonPrice;
