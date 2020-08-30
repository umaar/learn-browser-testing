module.exports = {
	extends: 'lighthouse:default',
	
	passes: [{
		passName: 'defaultPass',
		gatherers: [
			'product-price-gatherer'
		]
	}],
	
	audits: [
		'amazon-audit'
	],
	
	categories: {
		mysite: {
			title: 'Amazon Site Metrics',
			description: 'Metrics for Amazon',
			auditRefs: [
				{id: 'amazon-audit', weight: 1}
			]
		},
	},
};
