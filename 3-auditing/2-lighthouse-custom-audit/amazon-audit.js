const Audit = require('lighthouse').Audit;

class AmazonAudit extends Audit {
	static get meta() {
		return {
			id: 'amazon-audit',
			title: 'Price is reasonable',
			failureTitle: 'Price is too high',
			description: 'Used to ensure the price of an amazon product is not too high',
			requiredArtifacts: ['AmazonPrice'],
		};
	}
	
	static audit(artifacts) {
		const rawPrice = artifacts.AmazonPrice;
		
		const price = Math.round(rawPrice.substr(1));
		const passed = price < 150;
		
		return {
			displayValue: `Price of ${rawPrice} is ${passed ? 'ok' : 'too high!'}`,
			score: passed ? 1 : 0,
		};
	}
}

module.exports = AmazonAudit;
